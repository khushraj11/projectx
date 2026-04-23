import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khushraj — Developer & AI Enthusiast",
  description: "Portfolio of Khushraj — Full Stack Developer, AI Enthusiast, Problem Solver.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Ambient background orbs */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'var(--bg)', overflow: 'hidden', pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute', width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(0,245,212,0.06) 0%, transparent 70%)',
            top: '-100px', left: '-100px', borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute', width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(191,90,242,0.07) 0%, transparent 70%)',
            bottom: '-100px', right: '-100px', borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite reverse'
          }} />
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        {children}
      </body>
    </html>
  );
}