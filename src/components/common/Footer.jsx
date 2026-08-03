import { Link } from 'react-router-dom';
import { Camera, Users, MessageCircle, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../utils/useScrollReveal';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <footer className="bg-primary text-background pt-24 pb-12 overflow-hidden">
      <div 
        ref={ref} 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter (Spans 5 cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tighter">Lumière.</h2>
            <p className="text-surface/70 text-lg leading-relaxed mb-10 max-w-md font-light">
              An artisanal coffee experience crafted with passion, precision, and the finest beans. Join our inner circle.
            </p>
            
            <form className="relative max-w-md group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-surface/30 py-4 pr-12 text-surface focus:outline-none focus:border-secondary transition-colors font-light placeholder:text-surface/40"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-surface/50 hover:text-secondary transition-colors"
              >
                <ArrowRight size={24} />
              </button>
            </form>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] mb-8 text-surface/50 font-semibold">Explore</h3>
            <ul className="space-y-4 text-base font-light">
              <li><Link to="/" className="text-surface/80 hover:text-secondary hover:translate-x-2 inline-block transition-transform duration-300">Home</Link></li>
              <li><Link to="/menu" className="text-surface/80 hover:text-secondary hover:translate-x-2 inline-block transition-transform duration-300">Menu</Link></li>
              <li><Link to="/about" className="text-surface/80 hover:text-secondary hover:translate-x-2 inline-block transition-transform duration-300">Our Story</Link></li>
              <li><Link to="/gallery" className="text-surface/80 hover:text-secondary hover:translate-x-2 inline-block transition-transform duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="text-surface/80 hover:text-secondary hover:translate-x-2 inline-block transition-transform duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] mb-8 text-surface/50 font-semibold">Visit Us</h3>
            <address className="not-italic text-surface/80 text-base space-y-4 font-light">
              <p>123 Coffee Lane<br/>Espresso District, CA 90210</p>
              <div className="pt-2 text-sm text-surface/60">
                <p>Mon - Fri: 7am - 6pm</p>
                <p>Sat - Sun: 8am - 7pm</p>
              </div>
              <p className="pt-4 text-lg hover:text-secondary transition-colors">
                <a href="mailto:hello@lumierecafe.com">hello@lumiere.com</a>
              </p>
            </address>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-surface/10 pt-8">
          <p className="text-sm text-surface/40 font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lumière Cafe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-surface/40 hover:text-secondary transition-colors">
              <Camera size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-surface/40 hover:text-secondary transition-colors">
              <Users size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-surface/40 hover:text-secondary transition-colors">
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
