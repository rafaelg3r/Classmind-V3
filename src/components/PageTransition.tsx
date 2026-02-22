import { motion } from "framer-motion";
import { ReactNode } from "react";
const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  style={{ willChange: "opacity, transform" }}
  >
    {children}
  </motion.div>
);
export default PageTransition;