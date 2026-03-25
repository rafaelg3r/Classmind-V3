import { useState } from "react";
import WeekCalendar from "./WeekCalendar";
import DailySchedule from "./DailySchedule";

const Dashboard = () => {
  // Lógica para definir o dia inicial (pula para amanhã se for >= 12h)
  const getInitialDay = () => {
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();

    let initialDay = currentDay;
    if (currentHour >= 12) {
      initialDay++;
    }
    // Se cair no fds, joga pra segunda
    if (initialDay === 6 || initialDay === 7 || initialDay === 0) {
      initialDay = 1;
    }
    return initialDay > 6 ? 0 : initialDay; // Garante que não passa de 6
  };

  const [selectedDay, setSelectedDay] = useState<number>(getInitialDay());

  return (
    <div className="flex flex-col ">
      <WeekCalendar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      <DailySchedule selectedDay={selectedDay} />
    </div>
  );
};

export default Dashboard;
