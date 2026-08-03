import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Header */}
      <section className="py-24 bg-primary text-surface text-center mb-20">
        <div className="container mx-auto px-4 animate-fade-in-up mt-8">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="We'd love to hear from you. Drop by for a cup or send us a message." 
            className="!mb-0"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Contact Info (Dark Card) */}
          <RevealSection className="lg:col-span-5 relative z-10">
            <div className="bg-primary text-surface p-12 lg:p-16 rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-12">Connect With Us</h3>
              
              <div className="space-y-12">
                <div className="group">
                  <h4 className="text-sm text-surface/50 uppercase tracking-widest mb-3 flex items-center">
                    <MapPin size={16} className="mr-3 text-secondary" /> Location
                  </h4>
                  <p className="text-xl font-serif font-light leading-relaxed">
                    123 Coffee Lane<br />
                    Espresso District, CA 90210
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-sm text-surface/50 uppercase tracking-widest mb-3 flex items-center">
                    <Clock size={16} className="mr-3 text-secondary" /> Hours
                  </h4>
                  <p className="text-xl font-serif font-light leading-relaxed">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 7:00 PM
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-sm text-surface/50 uppercase tracking-widest mb-3 flex items-center">
                    <Phone size={16} className="mr-3 text-secondary" /> Phone
                  </h4>
                  <p className="text-xl font-serif font-light leading-relaxed">(555) 123-4567</p>
                </div>

                <div className="group">
                  <h4 className="text-sm text-surface/50 uppercase tracking-widest mb-3 flex items-center">
                    <Mail size={16} className="mr-3 text-secondary" /> Email
                  </h4>
                  <p className="text-xl font-serif font-light leading-relaxed">hello@lumierecafe.com</p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Contact Form */}
          <RevealSection className="lg:col-span-7 delay-200">
            <div className="bg-surface p-12 lg:p-24 shadow-[0_30px_60px_rgb(0,0,0,0.05)] rounded-2xl lg:-ml-12 relative h-full">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 tracking-tighter">Send a Message</h2>
              
              {isSuccess && (
                <div className="mb-8 p-6 bg-secondary/10 text-primary border-l-4 border-secondary animate-slide-up flex items-center" role="alert">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4 animate-pulse"></div>
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form className="space-y-12" onSubmit={handleSubmit} noValidate>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`peer w-full bg-transparent border-b-2 px-0 py-4 text-primary focus:outline-none transition-colors placeholder-transparent ${errors.name ? 'border-red-500' : 'border-surface/40 focus:border-secondary'}`}
                    placeholder="Name"
                    aria-invalid={!!errors.name}
                  />
                  <label htmlFor="name" className={`absolute left-0 -top-6 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-textMuted peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-secondary ${errors.name ? 'text-red-500' : 'text-primary'}`}>
                    Name *
                  </label>
                  {errors.name && <p className="absolute -bottom-6 left-0 text-xs font-bold text-red-500 tracking-wider">{errors.name}</p>}
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer w-full bg-transparent border-b-2 px-0 py-4 text-primary focus:outline-none transition-colors placeholder-transparent ${errors.email ? 'border-red-500' : 'border-surface/40 focus:border-secondary'}`}
                    placeholder="Email"
                    aria-invalid={!!errors.email}
                  />
                  <label htmlFor="email" className={`absolute left-0 -top-6 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-textMuted peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-secondary ${errors.email ? 'text-red-500' : 'text-primary'}`}>
                    Email *
                  </label>
                  {errors.email && <p className="absolute -bottom-6 left-0 text-xs font-bold text-red-500 tracking-wider">{errors.email}</p>}
                </div>
                
                <div className="relative">
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`peer w-full bg-transparent border-b-2 px-0 py-4 text-primary focus:outline-none transition-colors placeholder-transparent resize-none ${errors.message ? 'border-red-500' : 'border-surface/40 focus:border-secondary'}`}
                    placeholder="Message"
                    aria-invalid={!!errors.message}
                  ></textarea>
                  <label htmlFor="message" className={`absolute left-0 -top-6 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-textMuted peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-sm peer-focus:font-bold peer-focus:text-secondary ${errors.message ? 'text-red-500' : 'text-primary'}`}>
                    Message *
                  </label>
                  {errors.message && <p className="absolute -bottom-6 left-0 text-xs font-bold text-red-500 tracking-wider">{errors.message}</p>}
                </div>
                
                <div className="pt-8">
                  <Button 
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto px-16 tracking-widest uppercase text-sm font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </div>
              </form>
            </div>
          </RevealSection>

        </div>
      </section>
    </div>
  )
}
