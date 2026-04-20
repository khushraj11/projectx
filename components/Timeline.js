"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const data = [
    { title: "Joined College", year: "Aug 2025" },
    { title: "Started Programming", year: "2025" },
    { title: "Web Development", year: "2026" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          My Journey 🚀
        </h2>

        <div className="relative">

          {/* 🔥 Vertical Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-white/20"></div>

          <div className="space-y-12">

            {data.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-12"
              >

                {/* 🔥 Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>

                {/* 🔥 Card */}
                <div className="p-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl hover:scale-[1.02] transition">

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.year}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}