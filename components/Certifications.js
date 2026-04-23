"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  const certs = [
    {
      title: "Web Development",
      org: "IIT Delhi",
      year: "2026",
      image: "/certificates/vue-cert.jpg",
      color: "var(--cyan)"
    },
  ];

  return (
    <section id="certifications" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <span className="section-tag">Certifications</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
            letterSpacing: '-1.5px', lineHeight: 1.1
          }}>
            What I've <span style={{ color: 'var(--violet)' }}>earned</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 600 }}>
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glow-card"
              style={{ padding: '28px 24px' }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(0,245,212,0.1)',
                border: '1px solid rgba(0,245,212,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, marginBottom: 16
              }}>📜</div>

              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{cert.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
                {cert.org} &nbsp;·&nbsp; {cert.year}
              </p>

              <button
                onClick={() => setSelected(cert.image)}
                className="btn-outline"
                style={{ fontSize: 13, padding: '8px 18px' }}
              >
                View Certificate →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out'
            }}
          >
            <motion.img
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              src={selected}
              alt="Certificate"
              style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: 12, boxShadow: '0 0 80px rgba(0,245,212,0.2)' }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}