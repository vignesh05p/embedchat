import { Zap, Brain, Palette } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-12 w-12 text-blue-500" />,
    title: 'Fast Setup',
    description: 'Embed your chatbot in minutes',
  },
  {
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    title: 'AI-Powered Responses',
    description: 'Smart answers for customers',
  },
  {
    icon: <Palette className="h-12 w-12 text-green-500" />,
    title: 'Customizable Chatbot',
    description: 'Match your brand easily',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}