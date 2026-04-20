export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        <h1 className="text-xl font-bold">Khushraj</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}