import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInterface } from "./InterfaceContext"; // Ajuste o caminho
import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

export function NotificationModal() {
  const { isNotifyOpen, setIsNotifyOpen } = useInterface();

  // Bloqueia o scroll
  useEffect(() => {
    if (isNotifyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNotifyOpen]);

  return (
    <AnimatePresence mode="wait">
      {isNotifyOpen && (
        <div className="fixed top-0 left-0 z-[999] flex h-[110dvh] w-full items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNotifyOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Div Centralizada */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full max-w-md glass-card p-6 rounded-[6px] shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setIsNotifyOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-black text-foreground mb-6 italic">
              Notificações
            </h2>
            <div className="flex flex-col gap-3">
              {/* <Link to="/avaliacoes" className="text-gray-100 text-sm  ">
                <div className="p-4 bg-indigo-500 rounded-lg ">
                  Ultima avaliação adicionada:{" "}
                  <span className="font-bold text-amber-700">Artes</span>
                </div>
              </Link> */}
              <div className="p-4 bg-gradient-to-r from-indigo-700 to-indigo-500  rounded-[6px] ">
                <span className=" text-white">Interface atualizada!</span>
              </div>
              <Link to="/avaliacoes" className="text-gray-100 text-sm">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-700 to-indigo-500  rounded-[6px] ">
                  <div className="flex flex-col gap-1">
                    <span className=" text-white">Proxima avaliação:</span>
                    <strong className="text-secondary">
                      Terça-feira (24) | Filosofia
                    </strong>
                  </div>
                  <ChevronRight className="w-6 h-6 mr-3" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
