import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateElements = sectionRef.current?.querySelectorAll('.animate-in');
      if (!animateElements?.length) return;
      
      gsap.fromTo(animateElements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section ref={sectionRef} id="contact" className="w-full py-24 px-6 lg:px-[7vw]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-in">
          <span className="text-bugarttia-neon text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">Ready to Deploy?</h2>
          <p className="text-lg text-bugarttia-gray/70">
            Book a strategy call or send us a message. We'll respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 lg:p-12 animate-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-bugarttia-gray mb-2">Name</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-bugarttia-gray/50 focus:outline-none focus:border-bugarttia-neon/50 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bugarttia-gray mb-2">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-bugarttia-gray/50 focus:outline-none focus:border-bugarttia-neon/50 transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-bugarttia-gray mb-2">Company</label>
            <input 
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-bugarttia-gray/50 focus:outline-none focus:border-bugarttia-neon/50 transition-colors"
              placeholder="Your Company"
            />
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-bugarttia-gray mb-2">Message</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-bugarttia-gray/50 focus:outline-none focus:border-bugarttia-neon/50 transition-colors resize-none"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full lg:w-auto lg:px-12 px-8 py-4 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-xl hover:bg-bugarttia-neon/90 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            Send Message
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
