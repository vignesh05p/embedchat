import { Button } from '@/components/ui/button';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to enhance your website with AI-driven customer engagement?
        </h2>
        <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4">
          Get Started for Free
        </Button>
      </div>
    </section>
  );
}