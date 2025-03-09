export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Career Cruise Control
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Navigate Your Career Journey with Confidence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Career Guidance
            </h2>
            <p className="text-gray-600">
              Get personalized career advice and navigate your professional journey with our AI-powered assistant.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Skill Development
            </h2>
            <p className="text-gray-600">
              Identify and develop the skills you need to advance in your chosen career path.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Use our chat assistant to start your career journey today!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}