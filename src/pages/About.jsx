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

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-24 bg-primary text-surface text-center">
        <div className="container mx-auto px-4 animate-fade-in-up mt-8">
          <SectionHeader 
            title="Our Story" 
            subtitle="A journey of passion, precision, and the perfect pour." 
            className="!mb-0"
          />
        </div>
      </section>

      <section className="py-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Oversized Hero Quote */}
        <RevealSection className="mb-40 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] tracking-tighter mb-10">
            "We believe that coffee is more than a beverage; it is an experience, a ritual, and a moment of pure connection."
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </RevealSection>

        {/* Asymmetrical Overlapping Layout 1 */}
        <div className="relative mb-40 lg:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <RevealSection className="lg:col-span-7 relative z-10">
              <div className="bg-surface p-12 lg:p-16 shadow-[0_30px_60px_rgb(0,0,0,0.05)] rounded-2xl lg:-mr-32 relative">
                <h3 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-6">Our Philosophy</h3>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tighter">The Pursuit of the Perfect Pour</h2>
                <p className="text-textMuted text-lg leading-relaxed mb-6 font-light">
                  At Lumière, we believe that great coffee starts long before it reaches your cup. It begins with the soil, the climate, and the hands that cultivate the beans. 
                </p>
                <p className="text-textMuted text-lg leading-relaxed font-light">
                  We travel the globe to build direct relationships with farmers, ensuring they receive fair compensation for their labor. Our roasting process is a delicate balance of science and art, carefully calibrated to highlight the unique terroir of each bean.
                </p>
              </div>
            </RevealSection>
            <RevealSection className="lg:col-span-5 hidden lg:block delay-200">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" 
                alt="Artisanal coffee roasting process" 
                className="w-full h-[700px] object-cover shadow-2xl"
                loading="lazy"
              />
            </RevealSection>
          </div>
        </div>

        {/* Asymmetrical Overlapping Layout 2 */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <RevealSection className="lg:col-span-5 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" 
                alt="People enjoying coffee in a cozy cafe community space" 
                className="w-full h-[700px] object-cover shadow-2xl"
                loading="lazy"
              />
            </RevealSection>
            <RevealSection className="lg:col-span-7 relative z-10 delay-200">
              <div className="bg-primary text-surface p-12 lg:p-16 shadow-[0_30px_60px_rgb(0,0,0,0.15)] rounded-2xl lg:-ml-32 relative">
                <h3 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-6">Our Sanctuary</h3>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tighter">A Space for Community</h2>
                <p className="text-surface/80 text-lg leading-relaxed mb-6 font-light">
                  We designed Lumière to be more than just a place to grab a quick caffeine fix. It is a sanctuary from the bustling city—a space where ideas are born, friendships are forged, and moments of quiet reflection are savored.
                </p>
                <p className="text-surface/80 text-lg leading-relaxed font-light">
                  From our comfortable seating to our carefully curated playlists, every detail of our cafe is designed to create an atmosphere of warmth and inspiration.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>

      </section>
    </div>
  )
}
