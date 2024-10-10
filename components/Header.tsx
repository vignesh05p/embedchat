'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">Embedchat</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
          <Link href="#blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold">
          Get Started
        </Button>
      </div>
    </header>
  );
}