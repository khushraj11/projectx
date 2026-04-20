"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Connect With Me 🤝
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-8"
        >

          {/* GitHub */}
          <a
            href="https://github.com/khushraj11"
            target="_blank"
            className="p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition text-3xl"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/khushraj"
            target="_blank"
            className="p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition text-3xl"
          >
            <FaLinkedin />
          </a>

        </motion.div>

      </div>
    </section>
  );
}