import { Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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
  1: ["Geografia", "Geografia", "Ed. Física", "Biologia", "Biologia"],
  2: ["Sociologia", "Sociologia", "Física", "Redação", "Redação"],
  3: [
    "Res. Problemas",
    "Ed. Física",
    "Ed. Física",
    "Português",
    "Português",
    //Contraturno (sempre igual)
    "Matemática",
    "Matemática",
    "Química",
    "Química",
  ],
  4: ["Biologia", "Biologia", "Res. Problemas", "Artes", "Artes"],
  5: ["Geografia", "Filosofia", "Matemática", "Matemática", "Matemática"],
};

const morningHours = ["07:30", "08:20", "09:10", "10:30", "11:00"];
const eveningHours = ["13:30", "14:15", "15:20", "16:15"];

const DailySchedule = () => {
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();

  let todayIndex = currentDay;

  if (currentHour >= 12) {
    todayIndex++;
  }
  if (todayIndex === 6 || todayIndex === 7 || todayIndex === 0) {
    todayIndex = 1;
  }

  const materiasDoDia = fullWeek[todayIndex] || [];

  const labelsHorarios =
    todayIndex === 3 ? [...morningHours, ...eveningHours] : morningHours;

  const scheduleItems = labelsHorarios.map((time, index) => ({
    time,
    subject: materiasDoDia[index] || "Janela/Livre",
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mx-4 mt-4 rounded-2xl gradient-card-dark p-5 text-primary-foreground overflow-hidden relative"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-secondary" />
        <h3 className="text-lg font-bold tracking-tight">
          Horários de{" "}
          {todayIndex === 3 ? "Quarta (Contraturno)" : days[todayIndex]}
        </h3>
      </div>
      <div className="space-y-2">
        {scheduleItems.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.05 }}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
          >
            <span className="text-sm font-bold text-secondary min-w-[45px]">
              {item.time}
            </span>
            <span className="text-sm font-medium text-primary-foreground/90">
              {item.subject}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DailySchedule;
