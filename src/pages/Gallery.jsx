import { useState, useEffect } from 'react';
import { galleryData } from '../data/galleryData';
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

// Custom Image component with skeleton loading
function GalleryImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full bg-secondary/10 overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-secondary/20"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          setIsLoaded(true);
          e.target.src = 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80';
        }}
        className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0 scale-105'}`}
      />
    </div>
  );
}

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImages(galleryData);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="py-24 bg-primary text-surface text-center mb-20">
        <div className="container mx-auto px-4 animate-fade-in-up mt-8">
          <SectionHeader 
            title="Gallery" 
            subtitle="A curated glimpse into the Lumière experience." 
            className="!mb-0"
          />
        </div>
      </section>

      {/* Featured CSS Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
               <div key={i} className={`bg-secondary/10 rounded-2xl animate-pulse ${i === 1 ? 'col-span-2 row-span-2' : i === 4 ? 'col-span-2' : ''}`}></div>
             ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-primary mb-4">No images available</h3>
          </div>
        ) : (
          <RevealSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
              {images.map((image, idx) => {
                // Make the 1st item span 2x2, and the 4th item span 2 columns
                let spanClass = "";
                if (idx === 0) spanClass = "col-span-2 row-span-2";
                else if (idx === 3) spanClass = "col-span-2";
                
                return (
                  <div 
                    key={image.id} 
                    className={`relative overflow-hidden rounded-2xl shadow-sm group bg-surface ${spanClass}`}
                  >
                    <GalleryImage src={image.url} alt={image.title} />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4 text-center backdrop-blur-[2px]">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <span className="text-surface font-serif text-2xl md:text-3xl tracking-wide font-bold drop-shadow-lg">
                          {image.title}
                        </span>
                        <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealSection>
        )}
      </div>
    </div>
  )
}
