"use client";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "4+", label: "Projects Built" },
    { value: "2+", label: "Languages" },
    { value: "1", label: "Certification" },
    { value: "∞", label: "Curiosity" },
  ];

  return (
    <section id="about" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
            letterSpacing: '-1.5px', marginBottom: 24, lineHeight: 1.1
          }}>
            Building the <span style={{ color: 'var(--cyan)' }}>future</span>,<br />
            one line at a time.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginTop: 40 }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: 16, marginBottom: 20 }}>
              I'm Khushraj, a B.Tech CSE student with a deep passion for building modern, intelligent web applications. I love the intersection of design and technology.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: 16 }}>
              From voice-controlled AI to autonomous robots, I enjoy tackling real-world problems with code. Currently sharpening my full-stack skills and exploring machine learning.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="glow-card"
                style={{ padding: '24px 20px', textAlign: 'center' }}
              >
                <div className="font-display" style={{
                  fontSize: 40, fontWeight: 800, color: 'var(--cyan)',
                  lineHeight: 1, marginBottom: 8
                }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.5px' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}