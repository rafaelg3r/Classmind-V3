import { Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { subjectsData } from "../data/subjects";
import { Link } from "react-router-dom";
interface DailyScheduleProps {
  selectedDay: number;
  selectedDate: Date;
}

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const fullWeek: Record<number, string[]> = {
  1: ["Redação", "Redação", "Redação", "Ed. Física", "Ed. Física"],
  2: ["Literatura", "Filosofia", "Filosofia", "Redação", "Redação"],
  3: [
    "Física",
    "Física",
    "História",
    "Geografia",
    "Geografia",
    //Contraturno (sempre igual)
    "Matemática",
    "Matemática",
    "Química",
    "Química",
  ],
  4: ["Biologia", "Redação", "Redação", "Inglês", "Inglês"],
  5: ["Geografia", "Português", "Português", "Matematica", "Matematica"],
};
let semanaSeguinte = true;
const morningHours = ["07:30", "08:20", "09:10", "10:30", "11:00"];
const eveningHours = ["13:30", "14:15", "15:20", "16:15"];

const getAssessments1ForSubjectOnDate = (subjectName: string, date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const subject = subjectsData.find((s) => s.name === subjectName);
  if (!subject) return [];

  return subject.assessments1.filter((a) => {
    const parts = a.date.trim().split("/");
    const aDay = parseInt(parts[0], 10);
    const aMonth = parseInt(parts[1], 10);
    return aDay === day && aMonth === month;
  });
};

const DailySchedule = ({ selectedDay, selectedDate }: DailyScheduleProps) => {
  const displayDay = selectedDay === 0 || selectedDay === 6 ? 1 : selectedDay;

  const materiasDoDia = fullWeek[displayDay] || [];
  const labelsHorarios =
    displayDay === 3 ? [...morningHours, ...eveningHours] : morningHours;

  const scheduleItems = labelsHorarios.map((time, index) => ({
    time,
    subject: materiasDoDia[index] || "Indefinido",
  }));

  return (
    <motion.div
      key={displayDay}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mx-4 mt-4 rounded-[6px] card-dark p-5 text-primary-foreground overflow-hidden relative"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-secondary" />
        <h3 className="text-lg font-bold tracking-tight">
          Horários de{" "}
          {displayDay === 3 ? "Quarta (Contraturno)" : days[displayDay]}
        </h3>
      </div>
      {selectedDay === 0 || selectedDay === 6 ? (
        <div className="text-sm text-secondary mb-3 italic">
          Exibindo horários de segunda-feira. Bom final de semana!
        </div>
      ) : null}
      <div className="space-y-2">
        {scheduleItems.map((item, i) => {
          const assessments = getAssessments1ForSubjectOnDate(
            item.subject,
            selectedDate,
          );
          const pendingAssessments = assessments.find(
            (a) => a.status === "pending",
          );

          const getPendingStyles = (type) => {
            switch (type) {
              case "prova":
                return "bg-red-400/20 border border-red-400/40 text-red-400";
              case "teste":
                return "bg-yellow-500/30  border border-yellow-300/40 text-orange-400";
              case "trabalho":
                return "bg-blue-400/20 border border-blue-400/40 text-blue-400";
              default:
                return "bg-primary-foreground/10";
            }
          };
          return (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className={`flex items-center gap-3 px-3 py-2 rounded-[6px] backdrop-blur-sm transition-colors ${
                pendingAssessments
                  ? getPendingStyles(pendingAssessments.type)
                  : "bg-primary-foreground/10"
              }`}
            >
              <span className="text-sm font-bold text-secondary min-w-[45px]">
                {item.time}
              </span>
              <span className="text-sm font-medium text-primary-foreground/90 flex-1 truncate min-w-0">
                {(selectedDay === 0 && !semanaSeguinte) ||
                (selectedDay === 6 && !semanaSeguinte)
                  ? "indefinido"
                  : item.subject}
              </span>
              <div className="flex gap-1">
                {assessments.map((a, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      a.type === "prova"
                        ? "bg-rose-500/30 text-rose-300"
                        : a.type === "teste"
                          ? "bg-yellow-500/30 text-yellow-300"
                          : "bg-blue-500/30 text-blue-300"
                    }`}
                  >
                    {a.type}
                  </span>
                ))}
              </div>
              {pendingAssessments && (
                <Link
                  to="/avaliacoes"
                  className="flex p-0.5 rounded-sm border border-yellow-400/40"
                >
                  <ChevronRight className="w-5 h-5 text-primary-foreground" />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DailySchedule;
