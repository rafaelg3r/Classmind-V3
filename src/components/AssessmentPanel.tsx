import { Home, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


const AssessmentPanel = () => {
  const avalNum = 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mx-4 mt-6"
    >
      <h2 className="text-xl font-extrabold text-gradient mb-4">
        Painel de Avaliações
      </h2>
      <div className="rounded-2xl gradient-card-accent p-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-4 right-4 text-[80px] font-extrabold leading-none text-primary-foreground/10">
          {avalNum}
        </div>
        <div className="relative z-10">
          <p className="text-3xl font-extrabold mb-1">{avalNum}</p>
          <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
            Avaliações Pendentes
          </p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-4 rounded-2xl bg-foreground text-background font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
      >
        Acessar Avaliações
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default AssessmentPanel;
