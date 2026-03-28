import { motion } from "framer-motion";

interface WeekCalendarProps {
  selectedDay: number;
  onSelectDay: (dayIndex: number) => void;
}

const WeekCalendar = ({ selectedDay, onSelectDay }: WeekCalendarProps) => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const getWeekDates = () => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    return weekDays.map((day, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        day,
        date: date.getDate(),
        isToday: i === dayOfWeek,
        dayIndex: i,
      };
    });
  };

  const month = today.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  const week = getWeekDates();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-[6px] px-1 py-2 sm:p-5 mx-4 -mt-4 relative z-10 select-none"
    >
      <h3 className="text-sm text-center ml-2 sm:ml-0 font-semibold text-foreground capitalize mb-4">
        {month}
      </h3>
      <div className="flex justify-between gap-1 sm:gap-3">
        {week.map(({ day, date, isToday, dayIndex }) => {
          const isSelected = selectedDay === dayIndex;

          return (
            <div
              key={day}
              onClick={() => onSelectDay(dayIndex)}
              className={`flex flex-col items-center gap-1 w-full px-2 py-2 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : isToday
                    ? "bg-primary/10 text-primary border border-primary/30" // Highlight sutil para o dia atual real
                    : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <span className="text-[10px] font-semibold uppercase">{day}</span>
              <span
                className={`text-sm font-bold ${
                  isSelected || isToday ? "" : "text-foreground"
                }`}
              >
                {date}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WeekCalendar;
