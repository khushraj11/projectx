"use client";

import { useState } from "react";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  const certs = [
    {
      title: "Web Development",
      org: "IIT Delhi",
      year: "2026",
      image: "/certificates/vue-cert.jpg",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Certifications 📜
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {certs.map((cert, i) => (
            <div
              key={i}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-5"
            >

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-1">
                {cert.title}
              </h3>

              {/* SUBTEXT */}
              <p className="text-sm text-gray-400 mb-3">
                {cert.org} • {cert.year}
              </p>

              {/* VIEW BUTTON */}
              <button
                onClick={() => setSelected(cert.image)}
                className="text-sm px-4 py-2 border border-white/30 rounded-lg hover:bg-white hover:text-black transition"
              >
                View
              </button>

            </div>
          ))}

        </div>

        {/* MODAL */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <img
              src={selected}
              alt="certificate"
              className="max-w-[90%] max-h-[90%] rounded-lg"
            />
          </div>
        )}

      </div>
    </section>
  );
}