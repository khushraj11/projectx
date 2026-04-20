"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      title: "Web Development",
      org: "IIT Delhi",
      year: "2026",
      link: "/certificates/web-dev.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Certifications 🎓
        </h2>

        <div className="flex justify-center">

          {certs.map((cert, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 w-72 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl"
            >

              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {cert.org}
              </p>

              <p className="text-gray-400 text-sm">
                {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                className="inline-block mt-4 border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                View Certificate
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}