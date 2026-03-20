import { Bell, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import ClassmindLogo from "/classmindLogo.svg";

import gifMonday from "../assets/MondayBanner.gif";
import gifTuesday from "../assets/TuesdayBanner.gif";
import gifWednesday from "../assets/WednesdayBanner.gif";
import gifThursday from "../assets/ThursdayBanner.gif";
import gifFriday from "../assets/FridayBanner.gif";
import gifSaturday from "../assets/SaturdayBanner.gif";
import gifSunday from "../assets/SundayBanner.gif";

import { useInterface } from "./InterfaceContext";

const bannerGifs = [
  gifMonday,
  gifTuesday,
  gifWednesday,
  gifThursday,
  gifFriday,
  gifSaturday,
  gifSunday,
];

export function DashboardHeader() {
  const { toggleNotify } = useInterface();

  const now = new Date();
  const hours = now.getHours();
  const dayOfWeek = now.getDay();

  const greeting =
    hours < 12 ? "Bom dia" : hours < 18 ? "Boa tarde" : "Boa noite";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-b-3xl bg-black px-5 pt-5 pb-8"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${bannerGifs[dayOfWeek]})`,
          filter: "brightness(0.6) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 gradient-hero opacity-50 "></div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm flex items-center justify-center">
            <img src={ClassmindLogo} alt="" />
          </div>
          <span className="text-lg font-bold text-primary-foreground tracking-tight">
            ClassMind
          </span>
        </div>
        <button
          onClick={toggleNotify}
          className="w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm flex items-center justify-center relative"
        >
          <Bell className="w-5 h-5 text-primary-foreground" />
          {/* notificaçoão bolinha */}
          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-primary-foreground/30" />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="relative text-2xl font-extrabold text-primary-foreground mb-1">
          {greeting}, estudante!
        </h1>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/20 backdrop-blur-sm">
          <span className="text-xs font-medium text-blue-200">
            Última atualização: 20/03 às 13:10
          </span>
        </div>
      </motion.div>
    </motion.header>
  );
}
