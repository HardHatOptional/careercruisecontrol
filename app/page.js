export default function Home() {
  return (
    <main className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Career Cruise Control</h1>
          <p className="text-xl">Navigate Your Career Journey with Confidence</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border rounded-lg" style={{ borderColor: 'var(--foreground)' }}>
            <h2 className="text-2xl font-semibold mb-4">Career Guidance</h2>
            <p>Get personalized career advice and navigate your professional journey with our AI-powered assistant.</p>
          </div>
          
          <div className="p-6 border rounded-lg" style={{ borderColor: 'var(--foreground)' }}>
            <h2 className="text-2xl font-semibold mb-4">Skill Development</h2>
            <p>Identify and develop the skills you need to advance in your chosen career path.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Take Control?</h2>
          <p>Use our chat assistant to start your career journey today!</p>
        </section>
      </div>
    </main>
  );
}