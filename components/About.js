"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl hover:scale-[1.02] transition"
        >
          <h2 className="text-4xl font-bold mb-6">About Me 👨‍💻</h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm Khushraj, a passionate developer pursuing B.Tech CSE.
            I build modern web apps and love solving real-world problems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}