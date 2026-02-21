import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function PercentageStatus() {
  const totalSchoolDays = 210;
  const startDay = 49;

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const currentDayOfYear = Math.floor(diff / oneDay);

  const rawDaysPassed = currentDayOfYear - startDay;
  const daysPassed = Math.max(0, Math.min(rawDaysPassed, totalSchoolDays));

  const percentage = Math.round((daysPassed / totalSchoolDays) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="mx-4 mt-4 p-5 rounded-2xl glass-card relative overflow-hidden"
    >
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Progresso do Ano
            </span>
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            {daysPassed}{" "}
            <span className="text-sm text-muted-foreground font-medium">
              / {totalSchoolDays} dias
            </span>
          </h3>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-primary italic">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>

      <p className="mt-3 text-[10px] text-muted-foreground text-center">
        {daysPassed >= totalSchoolDays
          ? "Ano letivo concluído!"
          : `Faltam ${totalSchoolDays - daysPassed} dias de aula para o fim.`}
      </p>
    </motion.div>
  );
}
