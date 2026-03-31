import { Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { subjectsData } from "../data/subjects";
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
  1: ["Sociologia", "Geografia", "Português", "Biologia", "Biologia"],
  2: ["Redação", "Inglês", "Sociologia", "Res. Problemas", "Res. Problemas"],
  3: [
    "Física",
    "Física",
    "Física",
    "Ed. Física",
    "Ed. Física",
    //Contraturno (sempre igual)
    "Matemática",
    "Matemática",
    "Química",
    "Química",
  ],
  4: ["Português", "Biologia", "Biologia", "Artes", "Artes"],
  5: ["Feriado", "Feriado", "Feriado", "Feriado", "Feriado"],
};
let semanaSeguinte = false;
const morningHours = ["07:30", "08:20", "09:10", "10:30", "11:00"];
const eveningHours = ["13:30", "14:15", "15:20", "16:15"];

const assessments = subjectsData.flatMap((subject) => subject.assessments);
const getAssessmentsForSubjectOnDate = (subjectName: string, date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const subject = subjectsData.find((s) => s.name === subjectName);
  if (!subject) return [];

  return subject.assessments.filter((a) => {
    const parts = a.date.trim().split("/");
    const aDay = parseInt(parts[0], 10);
    const aMonth = parseInt(parts[1], 10);
    return aDay === day && aMonth === month;
  });
};

const DailySchedule = ({ selectedDay }: DailyScheduleProps) => {
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
        {scheduleItems.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.05 }}
            className="flex items-center gap-3 px-3 py-2 rounded-[6px] bg-primary-foreground/10 backdrop-blur-sm"
          >
            <span className="text-sm font-bold text-secondary min-w-[45px]">
              {item.time}
            </span>
            <span className="text-sm font-medium text-primary-foreground/90">
              {(selectedDay === 0 && !semanaSeguinte) ||
              (selectedDay === 6 && !semanaSeguinte)
                ? "indefinido"
                : item.subject}
            </span>
             {/* {assessments.map((a, idx) => (
                <span
                  key={idx}
                  title={a.title}
                  className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 text-[10px] font-bold text-yellow-900 shadow-sm shadow-yellow-300 shrink-0"
                >
                  {a.points === "?" ? "?" : a.points}
                </span>
              ))} */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DailySchedule;
