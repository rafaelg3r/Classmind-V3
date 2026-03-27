import { useState } from "react";
import WeekCalendar from "./WeekCalendar";
import DailySchedule from "./DailySchedule";
import { X } from "lucide-react";

const currentDay = new Date().getDay();
const currentHour = new Date().getHours();

let initialDay = currentDay;

const Dashboard = () => {
  const getInitialDay = () => {
    if (currentHour >= 12) {
      initialDay++;
    }
    // Se cair no fds, joga pra segunda
    if (initialDay === 6 || initialDay === 7 || initialDay === 0) {
      initialDay = 1;
    }
    return initialDay > 6 ? 0 : initialDay; // Garante que não passa de 6
  };
  // Lógica para definir o dia inicial (pula para amanhã se for >= 12h)

  const [selectedDay, setSelectedDay] = useState<number>(getInitialDay());

  const [isTutorialOpen, setIsTutorialOpen] = useState(true);
  return (
    <div className="flex flex-col ">
      <WeekCalendar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      {selectedDay === initialDay && isTutorialOpen === true && (
        <button
          className="flex items-center justify-center rounded-[6px] px-1 py-2 sm:p-5 mx-4 mt-2 -mb-2 border border-indigo-400 bg-violet-200/70"
          onClick={() => {
            setIsTutorialOpen(false);
          }}
        >
          <h3 className="flex items-center justify-around w-full">
            Clique no dia para ver seu hórario
            <X className="w-5 h-5 text-indigo-500 cursor-pointer" />
          </h3>
        </button>
      )}
      <DailySchedule selectedDay={selectedDay} />
    </div>
  );
};

export default Dashboard;
