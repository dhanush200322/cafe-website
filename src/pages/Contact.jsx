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

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10 tracking-tight">Visit Us</h2>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-secondary/10 p-4 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="text-secondary" size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                  <p className="text-textMuted text-lg font-light leading-relaxed">
                    123 Coffee Lane<br />
                    Espresso District, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-secondary/10 p-4 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Clock className="text-secondary" size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Hours</h3>
                  <p className="text-textMuted text-lg font-light leading-relaxed">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-secondary/10 p-4 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Phone className="text-secondary" size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                  <p className="text-textMuted text-lg font-light leading-relaxed">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-secondary/10 p-4 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Mail className="text-secondary" size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                  <p className="text-textMuted text-lg font-light leading-relaxed">hello@lumierecafe.com</p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Contact Form */}
          <RevealSection className="delay-200">
            <Card hover={false} className="p-10 md:p-12 border-none shadow-xl bg-surface/80 backdrop-blur-md">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 tracking-tight">Send a Message</h2>
              
              {isSuccess && (
                <div className="mb-8 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 animate-slide-up shadow-sm flex items-center" role="alert">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Name <span className="text-secondary">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500 animate-shake bg-red-50/50' : 'border-gray-200 focus:border-secondary focus:ring-secondary/30'} focus:outline-none focus:ring-4 transition-all duration-300 bg-background/50 hover:bg-surface shadow-sm`}
                    placeholder="Your Name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email <span className="text-secondary">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500 animate-shake bg-red-50/50' : 'border-gray-200 focus:border-secondary focus:ring-secondary/30'} focus:outline-none focus:ring-4 transition-all duration-300 bg-background/50 hover:bg-surface shadow-sm`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message <span className="text-secondary">*</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500 animate-shake bg-red-50/50' : 'border-gray-200 focus:border-secondary focus:ring-secondary/30'} focus:outline-none focus:ring-4 transition-all duration-300 bg-background/50 hover:bg-surface shadow-sm resize-none`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </RevealSection>

        </div>
      </section>
    </div>
  )
}
