import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="text-4xl font-bold tracking-tight">
          <span className="text-muted-foreground">&lt;</span>
          <span className="gradient-text">RM</span>
          <span className="text-muted-foreground"> /&gt;</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        className="mt-4 h-0.5 rounded-full bg-accent/60"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-3 text-sm text-muted-foreground"
      >
        QA Automation Engineer
      </motion.p>
    </motion.div>
  );
}