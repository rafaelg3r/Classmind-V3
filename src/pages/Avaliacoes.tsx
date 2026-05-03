import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  Calendar,
  Trophy,
  GraduationCap,
  Check,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTotalPending, subjectsData } from "../data/subjects";
export default function Avaliacoes() {
  const navigate = useNavigate();
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const totalPending = getTotalPending();

  return (
    <div className="min-h-screen bg-background max-w-[1200px] mx-auto pb-8">
      {/* Header */}
      <div className="gradient-card-dark p-6 pb-8 rounded-b-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/")}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <h1 className="text-lg font-bold text-white">Avaliações</h1>
            <div className="w-10" />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">
                {totalPending}
              </p>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                Avaliações Pendentes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject List */}
      <div className="px-4 mt-6 space-y-3">
        <h2 className="text-xl font-extrabold text-gradient mb-2">Matérias</h2>

        {subjectsData.map((subject) => {
          const isExpanded = expandedSubject === subject.name;
          const assessmentCount = subject.assessments1.length;
          const pendingAssessmentsCount = subject.assessments1.filter(
            (assessment) => assessment.status !== "done",
          ).length;

          return (
            <motion.div
              key={subject.name}
              layout
              className="rounded-[6px] overflow-hidden glass-card"
            >
              <motion.button
                layout="position"
                onClick={() =>
                  setExpandedSubject(isExpanded ? null : subject.name)
                }
                className={`w-full flex items-center gap-3 p-4 text-left `}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-white shrink-0 shadow-lg`}
                >
                  {subject.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm uppercase tracking-wide truncate">
                    {subject.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {subject.professor}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {assessmentCount > 0 && (
                    <span
                      className={`text-xs font-bold  px-2.5 py-1 rounded-full ${pendingAssessmentsCount > 0 ? "bg-rose-500/20 text-rose-500" : "bg-emerald-500/20  text-emerald-500"}`}
                    >
                      {assessmentCount}
                    </span>
                  )}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence initial={false} mode="wait">
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2.5">
                      {assessmentCount === 0 ? (
                        <div className="text-center py-6 text-muted-foreground text-sm">
                          <p className="font-medium">
                            Nenhuma avaliação pendente
                          </p>
                          <p className="text-xs mt-1">Tudo em dia! 🎉</p>
                        </div>
                      ) : (
                        subject.assessments1
                          .slice()
                          .sort((a, b) => {
                            const priority: Record<string, number> = {
                              prova: 0,
                              teste: 1,
                              trabalho: 2,
                            };

                            const statusOrder = (status: string) =>
                              status === "done" ? 1 : 0;

                            // Primeiro ordena por status
                            const statusDiff =
                              statusOrder(a.status) - statusOrder(b.status);
                            if (statusDiff !== 0) return statusDiff;

                            // Depois ordena por tipo
                            return (
                              (priority[a.type] ?? 99) -
                              (priority[b.type] ?? 99)
                            );
                          })
                          .map((assessment, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              style={{}}
                              className={`rounded-[8px]  p-4 text-primary-foreground  ${
                                assessment.status === "done"
                                  ? "bg-emerald-900/80 "
                                  : assessment.type === "prova"
                                    ? "bg-[#3b090a] "
                                    : assessment.type === "teste"
                                      ? "bg-[#775c10]"
                                      : "card-dark"
                              } `}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 min-w-0 ">
                                  <p
                                    className={`font-bold text-sm ${assessment.type === "prova" ? "text-[#eb424d]" : assessment.type === "teste" ? "text-[#ffcf0e]" : "text-white"}`}
                                  >
                                    {assessment.title}
                                  </p>
                                  <p className="text-xs text-primary-foreground/60 mt-0.5">
                                    {assessment.description}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={`flex items-center justify-between mt-3 `}
                              >
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5 text-primary-foreground/50" />
                                  <span className="text-xs text-primary-foreground/70 font-medium">
                                    {assessment.date}
                                  </span>
                                </div>
                                <div
                                  className={`flex items-center gap-1 shrink-0 ml-3 rounded-lg px-2.5 py-1.5 ${assessment.status === "done" ? "bg-emerald-900/90" : "bg-white/10 "} `}
                                >
                                  <Trophy
                                    className={`w-3.5 h-3.5 text-secondary ${assessment.status === "done" ? "text-emerald-300" : "text-secondary"}`}
                                  />
                                  <span className="text-sm font-extrabold ">
                                    {assessment.points} pts
                                  </span>
                                </div>
                              </div>
                              <div className="mt-3">
                                {assessment.status === "done" && (
                                  <div className="rounded-full py-1.5 px-2.5 bg-emerald-900/90 flex items-center justify-center gap-4 ">
                                    <p className="text-xs font-medium text-emerald-200">
                                      Finalizado
                                    </p>
                                    <Check className="w-5 h-5 text-emerald-300" />
                                  </div>
                                )}
                                {assessment.status === "pending" && (
                                  <div className="rounded-full py-1.5 px-2.5 bg-gray-100/10 flex items-center justify-center gap-4">
                                    <p className="text-xs font-medium">
                                      Pendente
                                    </p>
                                    <Clock className="w-5 h-5 text-secondary" />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <footer className="text-center py-6 text-xs font-medium text-muted-foreground">
        © 2025 – Todos os direitos reservados
      </footer>
    </div>
  );
}
