import { Link } from 'react-router-dom';
import { Camera, Users, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../utils/useScrollReveal';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <footer className="bg-primary text-background py-12">
      <div 
        ref={ref} 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Lumière</h2>
            <p className="text-surface/80 text-sm leading-relaxed mb-6">
              An artisanal coffee experience crafted with passion, precision, and the finest beans. Join us for a moment of perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface/80 hover:text-secondary transition-transform hover:scale-110">
                <Camera size={20} />
              </a>
              <a href="#" className="text-surface/80 hover:text-secondary transition-transform hover:scale-110">
                <Users size={20} />
              </a>
              <a href="#" className="text-surface/80 hover:text-secondary transition-transform hover:scale-110">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-surface/80 hover:text-secondary hover:translate-x-1 inline-block transition-transform">Home</Link></li>
              <li><Link to="/menu" className="text-surface/80 hover:text-secondary hover:translate-x-1 inline-block transition-transform">Menu</Link></li>
              <li><Link to="/about" className="text-surface/80 hover:text-secondary hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
              <li><Link to="/gallery" className="text-surface/80 hover:text-secondary hover:translate-x-1 inline-block transition-transform">Gallery</Link></li>
              <li><Link to="/contact" className="text-surface/80 hover:text-secondary hover:translate-x-1 inline-block transition-transform">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-secondary">Visit Us</h3>
            <address className="not-italic text-surface/80 text-sm space-y-2">
              <p>123 Coffee Lane</p>
              <p>Espresso District, CA 90210</p>
              <p className="pt-2">Mon - Fri: 7am - 6pm</p>
              <p>Sat - Sun: 8am - 7pm</p>
              <p className="pt-2 hover:text-secondary transition-colors"><a href="mailto:hello@lumierecafe.com">hello@lumierecafe.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-surface/20 mt-10 pt-6 text-center text-xs text-surface/60">
          <p>&copy; {new Date().getFullYear()} Lumière Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
