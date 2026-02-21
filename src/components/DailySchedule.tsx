import { Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fullWeek: Record<number, string[]> = {
  1: ["Matemática", "Português", "História", "Geografia", "Física"],
  2: ["Biologia", "Química", "Inglês", "Artes", "Ed. Física"],
  3: [
    "Filosofia",
    "Sociologia",
    "Matemática",
    "Português",
    "História",
    "Lab. Química",
    "Lab. Física",
    "Projeto",
    "Eletiva",
  ],
  4: ["Geografia", "História", "Matemática", "Português", "Inglês"],
  5: ["Física", "Química", "Biologia", "Ed. Física", "Sociologia"],
};

const morningHours = ["07:30", "08:20", "09:10", "10:30", "11:10"];
const eveningHours = ["13:30", "14:20", "15:10", "16:00"];

const DailySchedule = () => {
  const currentDay = new Date().getDay();
  const todayIndex = currentDay === 0 || currentDay === 6 ? 1 : currentDay;

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
          Horários de {todayIndex === 3 ? "Quarta (Contraturno)" : "Hoje"}
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
