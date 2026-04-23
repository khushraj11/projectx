"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Nimbus AI",
      desc: "Voice-controlled AI assistant built with Python. Uses natural language processing to understand and respond to commands.",
      tags: ["Python", "AI", "NLP"],
      icon: "🤖",
      color: "var(--cyan)",
    },
    {
      title: "Arduino Radar",
      desc: "Ultrasonic radar system with servo motor and LCD display. Real-time obstacle detection and visualization.",
      tags: ["Arduino", "C++", "Hardware"],
      icon: "📡",
      color: "var(--violet)",
    },
    {
      title: "Line Following Robot",
      desc: "Autonomous robot using IR sensors and Arduino that follows a black line path with precision.",
      tags: ["Arduino", "Robotics", "IR Sensors"],
      icon: "⚙️",
      color: "var(--cyan)",
    },
    {
      title: "Portfolio Website",
      desc: "This very portfolio — built with Next.js 16, Tailwind CSS v4, and Framer Motion for smooth animations.",
      tags: ["Next.js", "Tailwind", "React"],
      icon: "🌐",
      color: "var(--violet)",
    },
  ];

  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <span className="section-tag">Projects</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
            letterSpacing: '-1.5px', lineHeight: 1.1
          }}>
            Things I've <span style={{ color: 'var(--cyan)' }}>built</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glow-card"
              style={{ padding: '28px 24px', cursor: 'default' }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: p.color }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.5px',
                    padding: '4px 10px', borderRadius: 20,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--muted)'
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}