import { AnimatePresence, motion } from "framer-motion";
import { useInterface } from "./InterfaceContext"; // Ajuste o caminho
import { X } from "lucide-react";

export function NotificationModal() {
  const { isNotifyOpen, setIsNotifyOpen } = useInterface();

  return (
    <AnimatePresence mode="wait">
      {isNotifyOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNotifyOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Div Centralizada */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md glass-card p-8 rounded-3xl shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setIsNotifyOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-black text-foreground mb-4 italic">
              Notificações
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Nenhuma nova notificação por enquanto.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
