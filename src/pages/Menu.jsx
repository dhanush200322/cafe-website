import { useState, useEffect } from 'react';
import { menuData } from '../data/menuData';
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

export default function Menu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate network request to show loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(menuData);
      setLoading(false);
    }, 800); // 800ms mock delay
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="py-24 bg-primary text-surface text-center mb-20">
        <div className="container mx-auto px-4 animate-fade-in-up mt-8">
          <SectionHeader 
            title="Our Menu" 
            subtitle="Thoughtfully crafted beverages and fresh, artisanal pastries." 
            className="!mb-0"
          />
        </div>
      </section>

      {/* Menu Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {loading ? (
          <div className="space-y-16 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i}>
                <div className="h-10 w-48 bg-secondary/20 rounded mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[1, 2, 3, 4].map(j => (
                    <div key={j}>
                      <div className="flex justify-between mb-2">
                        <div className="h-6 w-32 bg-secondary/10 rounded"></div>
                        <div className="h-6 w-12 bg-secondary/10 rounded"></div>
                      </div>
                      <div className="h-4 w-full bg-secondary/5 rounded mt-2"></div>
                      <div className="h-4 w-2/3 bg-secondary/5 rounded mt-2"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-primary mb-4">Menu temporarily unavailable</h3>
            <p className="text-textMuted">Please check back later or contact us directly.</p>
          </div>
        ) : (
          data.map((category, index) => (
            <RevealSection key={index} className="mb-32 last:mb-0">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-16 pb-8 border-b-2 border-secondary/20 flex items-center justify-between tracking-tighter">
                {category.category}
                <span className="text-secondary/20 font-light text-6xl">
                  0{index + 1}
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
                {category.items.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer hover:bg-surface/40 rounded-2xl p-6 -m-6 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary group-hover:text-secondary transition-colors relative flex items-center">
                        {item.name}
                        {idx === 0 && (
                          <span className="ml-4 inline-block bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] align-middle border border-secondary/20">
                            Signature
                          </span>
                        )}
                      </h3>
                      <div className="flex-grow border-b-[3px] border-dotted border-textMuted/20 mx-6 transition-colors group-hover:border-secondary/30"></div>
                      <span className="text-2xl font-serif font-semibold text-primary bg-background/80 group-hover:bg-transparent px-2 transition-colors">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-textMuted text-lg font-light leading-relaxed pr-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </RevealSection>
          ))
        )}
      </div>
    </div>
  )
}
