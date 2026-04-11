import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// All 9 agents - Original 6 + 3 new ones
const agents = [
  // Original 6 cards
  {
    icon: '🔍',
    title: 'Signal Detection',
    desc: 'AI-powered monitoring across 100+ sources to identify high-intent prospects in real-time.',
    bullets: ['Real-time social listening', 'Intent signal capture', 'Multi-source aggregation']
  },
  {
    icon: '🔗',
    title: 'Data Enrichment',
    desc: 'Automatically enrich lead profiles with 50+ data points from premium sources.',
    bullets: ['50+ data attributes', 'Premium data providers', 'Real-time verification']
  },
  {
    icon: '🎯',
    title: 'Qualification',
    desc: 'AI-driven scoring and qualification based on your ideal customer profile.',
    bullets: ['Custom scoring models', 'ICP matching', 'Automatic disqualification']
  },
  {
    icon: '📡',
    title: 'Smart Routing',
    desc: 'Intelligent lead distribution to the right sales rep based on territory and expertise.',
    bullets: ['Territory-based routing', 'Load balancing', 'Skill-based assignment']
  },
  {
    icon: '📊',
    title: 'Analytics',
    desc: 'Comprehensive analytics and insights into your lead generation performance.',
    bullets: ['Conversion tracking', 'Pipeline analytics', 'ROI measurement']
  },
  {
    icon: '🔌',
    title: 'Integration',
    desc: 'Seamless integration with your existing CRM and sales stack.',
    bullets: ['CRM synchronization', 'API access', 'Webhook support']
  },
  // NEW CARDS - 3 new agents
  {
    icon: '🎯',
    title: 'Amplemarket',
    desc: 'The premier source for initial data and elite market signals.',
    bullets: ['Premium data sources', 'Deep luxury research', 'Elite lead intelligence']
  },
  {
    icon: '🧠',
    title: 'OpenClaw AI',
    desc: 'Autonomous workflow management, handling everything from data enrichment to exclusive appointment booking.',
    bullets: ['Custom reasoning logic', 'Privacy-first execution', 'Complete workflow control']
  },
  {
    icon: '🎤',
    title: 'Pete & Gabi',
    desc: 'Specialized human-like voice AI for high-touch telephonic service and exclusive closing.',
    bullets: ['Human-like voice interaction', 'Immediate 24/7 service', 'High-end closing capabilities']
  }
];

export default function SystemPage() {
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
    <div className="min-h-screen bg-bugarttia-charcoal text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bugarttia-charcoal/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-[7vw] py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-bugarttia-neon">
            Bugarttia AI
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-bugarttia-gray hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/system" className="text-sm text-bugarttia-neon font-semibold">
              System
            </Link>
            <Link to="/" className="px-4 py-2 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-lg text-sm hover:bg-bugarttia-neon/90 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* System Section */}
      <section ref={sectionRef} className="w-full pt-32 pb-24 px-6 lg:px-[7vw]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bugarttia-neon text-sm font-semibold tracking-widest uppercase">The System</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">Intelligent Agent Ecosystem</h1>
            <p className="mt-4 text-bugarttia-gray max-w-2xl mx-auto text-lg">
              Nine autonomous agents working in perfect harmony to transform your lead generation.
            </p>
          </div>
          
          {/* 9-Card Grid - 3x3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div 
                key={agent.title} 
                className="agent-card relative glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-bugarttia-neon/30 hover:shadow-[0_0_40px_rgba(182,255,46,0.15)] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {agent.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-bugarttia-white">{agent.title}</h3>
                
                {/* Description */}
                <p className="text-bugarttia-gray/70 text-sm leading-relaxed mb-4">{agent.desc}</p>
                
                {/* Bullets */}
                <ul className="space-y-2">
                  {agent.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-bugarttia-gray/60">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-bugarttia-neon/60 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Corner accent on hover */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-3 right-3 w-6 h-px bg-gradient-to-l from-bugarttia-neon/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 w-px h-6 bg-gradient-to-b from-bugarttia-neon/40 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-lg hover:bg-bugarttia-neon/90 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Request a Live Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-6 lg:px-[7vw] border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-bugarttia-gray text-sm">
            © 2026 Bugarttia AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-bugarttia-gray hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/system" className="text-sm text-bugarttia-neon">
              System
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
