"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Nimbus AI",
      desc: "Voice controlled AI assistant using Python",
    },
    {
      title: "Arduino Radar",
      desc: "Ultrasonic radar system with servo & LCD display",
    },
    {
      title: "Line Following Robot 🤖",
      desc: "Autonomous robot that follows a path using IR sensors and Arduino",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio built using Next.js & Tailwind CSS",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects 🚀
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}