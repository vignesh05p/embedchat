import { Upload, Cpu, Code } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-blue-500" />,
    title: 'Upload website URL/data',
    description: 'Provide your website information',
  },
  {
    icon: <Cpu className="h-12 w-12 text-purple-500" />,
    title: 'Generate personalized chatbot',
    description: 'AI creates a custom chatbot for you',
  },
  {
    icon: <Code className="h-12 w-12 text-green-500" />,
    title: 'Copy/paste embed code',
    description: 'Add the chatbot to your site easily',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-white rounded-full p-4 mb-4 shadow-lg">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}