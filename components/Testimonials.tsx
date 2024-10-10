import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Owner',
    content: 'Embedchat transformed our customer service. Our response time improved by 80%!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Tech Startup Founder',
    content: 'The AI responses are incredibly accurate. It's like having a 24/7 support team.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'Easy to set up and customize. Embedchat seamlessly integrated with our brand.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 text-center mb-4">{testimonial.role}</p>
                <p className="text-gray-700 text-center italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}