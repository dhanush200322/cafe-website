import { ArrowRight, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SectionHeader from '../components/common/SectionHeader';
import { useScrollReveal } from '../utils/useScrollReveal';

function RevealSection({ children, className = '' }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Warm and inviting cafe interior" 
            className="w-full h-full object-cover object-center opacity-70 animate-zoom-in"
            loading="eager"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up mt-8">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-surface mb-6 tracking-tight drop-shadow-lg">
            Awaken Your Senses
          </h1>
          <p className="text-xl md:text-3xl text-surface/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Experience artisanal coffee crafted with passion, precision, and the world's finest beans.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/menu">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-5 animate-pulse-glow">
                Explore Menu
                <ArrowRight className="ml-3" size={22} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="w-full sm:w-auto text-lg px-10 py-5">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce-slow">
          <span className="text-surface/80 text-sm tracking-widest uppercase font-medium mb-2">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-surface/80 to-transparent"></div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader 
              title="Signature Offerings" 
              subtitle="Discover our most beloved creations, carefully perfected by our master baristas."
            />
          </RevealSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            <RevealSection className="delay-100">
              <Card>
                <div className="h-72 overflow-hidden bg-primary/5">
                  <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Signature Latte with intricate foam art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-primary">Velvet Vanilla Latte</h3>
                    <span className="text-secondary font-semibold text-xl">$5.50</span>
                  </div>
                  <p className="text-textMuted text-base leading-relaxed mb-6">Our signature espresso blended with steamed milk and our house-made Madagascar vanilla bean syrup.</p>
                </div>
              </Card>
            </RevealSection>

            <RevealSection className="delay-200">
              <Card>
                <div className="h-72 overflow-hidden bg-primary/5">
                  <img 
                    src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80" 
                    alt="Single Origin Pour Over coffee dripping" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-primary">Single Origin Pour Over</h3>
                    <span className="text-secondary font-semibold text-xl">$6.00</span>
                  </div>
                  <p className="text-textMuted text-base leading-relaxed mb-6">A delicate, clean cup highlighting the unique tasting notes of our rotating single-origin beans.</p>
                </div>
              </Card>
            </RevealSection>

            <RevealSection className="delay-300">
              <Card>
                <div className="h-72 overflow-hidden bg-primary/5">
                  <img src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Flaky Butter Croissant on a plate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-primary">Artisan Croissant</h3>
                    <span className="text-secondary font-semibold text-xl">$4.50</span>
                  </div>
                  <p className="text-textMuted text-base leading-relaxed mb-6">Baked fresh daily in-house. Flaky, buttery perfection that pairs wonderfully with any coffee.</p>
                </div>
              </Card>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-primary text-surface relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealSection>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tight">The Pursuit of Perfection</h2>
              <p className="text-surface/80 text-lg md:text-xl leading-relaxed mb-6 font-light">
                Founded in 2018, Lumière was born from a simple belief: that coffee is more than just a morning routine—it's an experience, a craft, and a moment of connection.
              </p>
              <p className="text-surface/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
                We ethically source the highest quality beans from sustainable farms worldwide, and roast them locally to bring out their intrinsic flavors. Every cup we serve is a testament to our dedication to the art of coffee.
              </p>
              <Link to="/about">
                <Button variant="outline" className="text-surface border-surface hover:bg-surface hover:text-primary">
                  Read Our Full Story
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </RevealSection>
            
            <RevealSection className="delay-200">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Barista carefully pouring latte art" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  )
}
