export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Career Cruise Control</h1>
      <p className="text-xl mb-8">Your AI-Powered Career Guide</p>
      <div className="max-w-md text-center">
        <p className="mb-8">Welcome to your personalized career guidance platform. Our AI assistant is ready to help you navigate your career journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">Career Guidance</h2>
            <p>Get personalized advice for your career path</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">Skill Development</h2>
            <p>Identify and develop key professional skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}