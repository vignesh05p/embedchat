import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Embedchat</h3>
            <p className="text-gray-400">Simplify customer engagement with AI-powered chatbots.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 text-white" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2023 Embedchat. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}