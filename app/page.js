export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
      {/* Video Welcome Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover opacity-70"
        >
          <source src="/media/welcome.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent">
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="px-4">
              <h1 className="text-6xl font-bold text-white mb-6 tracking-wider">
                Career Cruise Control
              </h1>
              <p className="text-2xl text-blue-200 mb-12">
                Navigate Your Future
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Glassmorphism */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Feature Cards with Glassmorphism */}
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-blue-200 mb-4">
              Career Guidance
            </h2>
            <p className="text-blue-100">
              Get personalized advice for your career path
            </p>
          </div>
          
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-blue-200 mb-4">
              Skill Development
            </h2>
            <p className="text-blue-100">
              Identify and develop key professional skills
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center backdrop-blur-lg bg-white/5 p-12 rounded-3xl shadow-xl border border-white/10 mb-20">
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">
            AI Assistant Coming Soon
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our advanced AI career guidance system is under development. Stay tuned!
          </p>
          <button className="bg-blue-500/80 hover:bg-blue-600/80 text-white px-8 py-3 rounded-lg text-lg font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105">
            Notify Me
          </button>
        </div>
      </div>

      {/* Atmospheric Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
      </div>
    </div>
  );
}