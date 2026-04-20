export default function Hero() {
  return (
    <section  className="py-16 flex items-center justify-center px-6">

      <div className="max-w-3xl mx-auto text-center">

        {/* IMAGE */}
      <img
  src="/images/khush.jpeg"
  alt="Khushraj"
  className="mx-auto mb-6 w-28 h-28 md:w-32 md:h-32 object-cover object-top rounded-full border border-white/20"
/>
        {/* NAME */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Khushraj 🚀
        </h1>

        {/* TAGLINE */}
        <p className="text-gray-300 mb-5 text-sm">
          Full Stack Developer | AI Enthusiast | Problem Solver
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3">

          <a
            href="#projects"
            className="px-4 py-2 bg-white text-black rounded-lg text-sm"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-4 py-2 border border-white/30 rounded-lg text-sm hover:bg-white hover:text-black"
          >
            Contact
          </a>

        </div>

      </div>

    </section>
  );
}