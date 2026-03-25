import { DashboardHeader } from "@/components/DashboardHeader";
import WeekCalendar from "@/components/WeekCalendar";
import DailySchedule from "@/components/DailySchedule";
import AssessmentPanel from "@/components/AssessmentPanel";
import TrimesterStatus from "@/components/TrimesterStatus";
import PercentageStatus from "@/components/PercentageStatus";
import { InterfaceProvider } from "@/components/InterfaceContext";
import { NotificationModal } from "@/components/NotifyModal";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-background max-w-[1200px] mx-auto"
      id="inicio"
    >
      <InterfaceProvider>
        <NotificationModal />
        <DashboardHeader />
        <Dashboard />
        <AssessmentPanel />
        <TrimesterStatus />
        <PercentageStatus />
        <footer className="text-center py-6 text-xs font-medium text-muted-foreground">
          © 2025 – Todos os direitos reservados
        </footer>
      </InterfaceProvider>
    </div>
  );
};

export default Index;
