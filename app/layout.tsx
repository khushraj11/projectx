import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative text-white overflow-x-hidden">

        {/* 🔥 Animated Gradient BG */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-900 to-black"></div>

        {/* 🔥 Moving Light Effect */}
        <div className="fixed inset-0 -z-10 opacity-30">
          <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[200px] rounded-full animate-pulse top-10 left-10"></div>
          <div className="absolute w-[500px] h-[500px] bg-blue-500 blur-[200px] rounded-full animate-pulse bottom-10 right-10"></div>
        </div>

        {children}

      </body>
    </html>
  );
}