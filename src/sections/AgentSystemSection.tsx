import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const agents = [
  { icon: '🔍', title: 'Signal Detection', desc: 'High-intent signals', image: '/images/city_angle_02.jpg' },
  { icon: '🔗', title: 'Data Enrichment', desc: '360° profiles', image: '/images/city_street_03.jpg' },
  { icon: '🎯', title: 'Qualification', desc: 'AI-validated scoring', image: '/images/enrichment_office.jpg' },
];

export default function AgentSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.agent-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="system" className="w-full py-24 lg:py-32 px-6 lg:px-[7vw]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-bugarttia-neon text-sm font-semibold tracking-widest uppercase">The System</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Intelligent Agent Ecosystem</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent) => (
            <div key={agent.title} className="agent-card glass-card p-6 lg:p-8 rounded-2xl hover:bg-white/10 transition-colors overflow-hidden">
              <img 
                src={agent.image} 
                alt={agent.title}
                className="w-full h-48 lg:h-56 object-cover rounded-xl mb-4 hidden lg:block"
              />
              <div className="text-4xl mb-4">{agent.icon}</div>
              <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
              <p className="text-bugarttia-gray/70">{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
