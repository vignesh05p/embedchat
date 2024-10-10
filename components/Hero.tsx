import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Simplify Customer Engagement with AI Chatbots
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Embed a dynamic chatbot on your website in one step
        </p>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-lg px-8 py-4">
          Get Started for Free
        </Button>
        <div className="mt-12 relative">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="AI Chatbot Interface"
            className="rounded-lg shadow-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}