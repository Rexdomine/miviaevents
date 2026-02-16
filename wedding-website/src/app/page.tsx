'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        Hello World
      </motion.h1>
    </div>
  );
}
