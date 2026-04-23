export default function Footer() {
  return (
    <footer style={{
      padding: '32px 24px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: 'var(--cyan)' }}>K.</span>
        <p style={{ color: 'var(--muted)', fontSize: 13 }}>© 2026 Khushraj. Built with Next.js & passion.</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>Designed to stand out.</p>
      </div>
    </footer>
  );
}