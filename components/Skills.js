"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">Skills ⚡</h2>

        <div className="flex justify-center gap-6 flex-wrap">

          {skills.map((skill, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.15, rotate: 2 }}
              className="px-6 py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl cursor-pointer"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}