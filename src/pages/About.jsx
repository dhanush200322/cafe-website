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

      <section className="py-32 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <RevealSection>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" 
              alt="Artisanal coffee roasting process" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </RevealSection>
          <RevealSection className="delay-200">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">The Bean to Cup Philosophy</h2>
            <p className="text-textMuted text-lg leading-relaxed mb-6 font-light">
              At Lumière, we believe that great coffee starts long before it reaches your cup. It begins with the soil, the climate, and the hands that cultivate the beans. 
            </p>
            <p className="text-textMuted text-lg leading-relaxed font-light">
              We travel the globe to build direct relationships with farmers, ensuring they receive fair compensation for their labor. Our roasting process is a delicate balance of science and art, carefully calibrated to highlight the unique terroir of each bean.
            </p>
          </RevealSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center flex-row-reverse">
          <RevealSection className="md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" 
              alt="People enjoying coffee in a cozy cafe community space" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </RevealSection>
          <RevealSection className="md:order-1 delay-200">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">A Space for Community</h2>
            <p className="text-textMuted text-lg leading-relaxed mb-6 font-light">
              We designed Lumière to be more than just a place to grab a quick caffeine fix. It is a sanctuary from the bustling city—a space where ideas are born, friendships are forged, and moments of quiet reflection are savored.
            </p>
            <p className="text-textMuted text-lg leading-relaxed font-light">
              From our comfortable seating to our carefully curated playlists, every detail of our cafe is designed to create an atmosphere of warmth and inspiration.
            </p>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
