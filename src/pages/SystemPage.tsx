import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

// SVG Icon components in neon green
function SignalDetectionIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="24" cy="24" r="6" fill="currentColor" opacity={0.3} />
      <circle cx="24" cy="24" r="12" strokeDasharray="4 3" />
      <circle cx="24" cy="24" r="20" strokeDasharray="4 3" opacity={0.5} />
      <line x1="24" y1="4" x2="24" y2="10" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="44" strokeLinecap="round" />
      <line x1="4" y1="24" x2="10" y2="24" strokeLinecap="round" />
      <line x1="38" y1="24" x2="44" y2="24" strokeLinecap="round" />
    </svg>
  );
}

function DataEnrichmentIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="14" cy="14" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="34" cy="14" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="24" cy="34" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="14" cy="34" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="34" cy="34" r="4" fill="currentColor" opacity={0.3} />
      <line x1="18" y1="14" x2="30" y2="14" />
      <line x1="16" y1="17" x2="22" y2="31" />
      <line x1="32" y1="17" x2="26" y2="31" />
      <line x1="18" y1="34" x2="30" y2="34" />
    </svg>
  );
}

function QualificationIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M24 4l6 12 13 2-9.5 9 2.5 13L24 34l-12 6 2.5-13L5 18l13-2z" fill="currentColor" opacity={0.15} />
      <path d="M24 4l6 12 13 2-9.5 9 2.5 13L24 34l-12 6 2.5-13L5 18l13-2z" />
      <path d="M18 24l4 4 8-8" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonalizationIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="20" cy="16" r="7" fill="currentColor" opacity={0.15} />
      <circle cx="20" cy="16" r="7" />
      <path d="M6 40c0-7.7 6.3-14 14-14s14 6.3 14 14" strokeLinecap="round" />
      <circle cx="38" cy="12" r="3" />
      <circle cx="42" cy="24" r="3" />
      <circle cx="38" cy="36" r="3" />
      <line x1="27" y1="16" x2="35" y2="12" strokeDasharray="3 2" opacity={0.6} />
      <line x1="30" y1="28" x2="35" y2="36" strokeDasharray="3 2" opacity={0.6} />
    </svg>
  );
}

function OutreachIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="4" y="10" width="32" height="24" rx="3" fill="currentColor" opacity={0.15} />
      <rect x="4" y="10" width="32" height="24" rx="3" />
      <path d="M4 14l16 11 16-11" />
      <circle cx="38" cy="14" r="7" fill="currentColor" opacity={0.3} stroke="currentColor" />
      <path d="M35 14l2 2 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MeetingIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="6" y="10" width="36" height="32" rx="4" fill="currentColor" opacity={0.15} />
      <rect x="6" y="10" width="36" height="32" rx="4" />
      <line x1="6" y1="20" x2="42" y2="20" />
      <line x1="14" y1="6" x2="14" y2="14" strokeLinecap="round" />
      <line x1="34" y1="6" x2="34" y2="14" strokeLinecap="round" />
      <path d="M17 28l3 3 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 32l3 3 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FollowUpIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M8 24c0-8.8 7.2-16 16-16s16 7.2 16 16" strokeLinecap="round" />
      <path d="M40 24c0 8.8-7.2 16-16 16s-16-7.2-16-16" strokeLinecap="round" strokeDasharray="4 3" />
      <polygon points="40,18 40,30 34,24" fill="currentColor" />
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity={0.3} />
      <line x1="24" y1="24" x2="24" y2="16" strokeLinecap="round" strokeWidth={2.5} />
      <line x1="24" y1="24" x2="30" y2="28" strokeLinecap="round" strokeWidth={2} />
    </svg>
  );
}

function PerformanceAnalyticsIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="6" y="30" width="8" height="12" rx="1" fill="currentColor" opacity={0.2} />
      <rect x="6" y="30" width="8" height="12" rx="1" />
      <rect x="20" y="20" width="8" height="22" rx="1" fill="currentColor" opacity={0.3} />
      <rect x="20" y="20" width="8" height="22" rx="1" />
      <rect x="34" y="10" width="8" height="32" rx="1" fill="currentColor" opacity={0.4} />
      <rect x="34" y="10" width="8" height="32" rx="1" />
      <polyline points="8,26 22,16 36,6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="6" r="2" fill="currentColor" />
    </svg>
  );
}

function IntegrationHubIcon() {
  return (
    <svg className="w-10 h-10 text-bugarttia-neon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="24" cy="24" r="8" fill="currentColor" opacity={0.2} />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="6" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="24" cy="42" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="6" cy="24" r="4" fill="currentColor" opacity={0.3} />
      <circle cx="42" cy="24" r="4" fill="currentColor" opacity={0.3} />
      <line x1="24" y1="10" x2="24" y2="16" />
      <line x1="24" y1="32" x2="24" y2="38" />
      <line x1="10" y1="24" x2="16" y2="24" />
      <line x1="32" y1="24" x2="38" y2="24" />
      <path d="M20 20l-8-8" strokeDasharray="3 2" opacity={0.4} />
      <path d="M28 20l8-8" strokeDasharray="3 2" opacity={0.4} />
      <path d="M20 28l-8 8" strokeDasharray="3 2" opacity={0.4} />
      <path d="M28 28l8 8" strokeDasharray="3 2" opacity={0.4} />
    </svg>
  );
}

// Icon component lookup
const iconComponents: Record<string, () => React.JSX.Element> = {
  SignalDetection: SignalDetectionIcon,
  DataEnrichment: DataEnrichmentIcon,
  Qualification: QualificationIcon,
  Personalization: PersonalizationIcon,
  Outreach: OutreachIcon,
  Meeting: MeetingIcon,
  FollowUp: FollowUpIcon,
  PerformanceAnalytics: PerformanceAnalyticsIcon,
  IntegrationHub: IntegrationHubIcon,
};

// All 9 Bugarttia AI agents
const agents = [
  {
    iconKey: 'SignalDetection',
    title: 'Signal Detection',
    desc: 'AI-powered monitoring across 100+ sources to identify high-intent prospects in real-time.',
    bullets: ['Real-time social listening', 'Intent signal capture', 'Multi-source aggregation']
  },
  {
    iconKey: 'DataEnrichment',
    title: 'Data Enrichment',
    desc: 'Automatically enrich lead profiles with 50+ data points from premium sources.',
    bullets: ['50+ data attributes', 'Premium data providers', 'Real-time verification']
  },
  {
    iconKey: 'Qualification',
    title: 'Qualification',
    desc: 'AI-driven scoring and qualification based on your ideal customer profile.',
    bullets: ['Custom scoring models', 'ICP matching', 'Automatic disqualification']
  },
  {
    iconKey: 'Personalization',
    title: 'Personalization',
    desc: 'Dynamic message personalization tailored to each prospect\'s context and preferences.',
    bullets: ['Context-aware messaging', 'Behavioral triggers', 'Multi-channel adaptation']
  },
  {
    iconKey: 'Outreach',
    title: 'Outreach',
    desc: 'Automated multi-channel outreach sequences optimized for engagement and deliverability.',
    bullets: ['Email & LinkedIn sequencing', 'Optimal send-time detection', 'A/B testing at scale']
  },
  {
    iconKey: 'Meeting',
    title: 'Meeting Scheduling',
    desc: 'Seamless calendar integration and automated scheduling to book qualified meetings.',
    bullets: ['Calendar synchronization', 'Smart time-slot detection', 'Automated confirmations']
  },
  {
    iconKey: 'FollowUp',
    title: 'Follow-up Automation',
    desc: 'Intelligent follow-up sequences that adapt based on prospect engagement signals.',
    bullets: ['Engagement-based triggers', 'Self-learning sequences', 'Multi-touch orchestration']
  },
  {
    iconKey: 'PerformanceAnalytics',
    title: 'Performance Analytics',
    desc: 'Comprehensive analytics and insights into your lead generation performance.',
    bullets: ['Conversion tracking', 'Pipeline analytics', 'ROI measurement']
  },
  {
    iconKey: 'IntegrationHub',
    title: 'Integration Hub',
    desc: 'Seamless integration with your existing CRM, sales stack, and third-party tools.',
    bullets: ['CRM synchronization', 'API access', 'Webhook support']
  },
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
    <>
      <Navigation />
      <main>
        <section ref={sectionRef} className="w-full pt-32 pb-24 px-6 lg:px-[7vw]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-bugarttia-neon text-sm font-semibold tracking-widest uppercase">The System</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4">Intelligent Agent Ecosystem</h1>
              <p className="mt-4 text-bugarttia-gray max-w-2xl mx-auto text-lg">
                Nine autonomous agents working in perfect harmony to transform your lead generation.
              </p>
            </div>
            
            {/* 9-Card Grid - 3x3 on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => {
                const IconComponent = iconComponents[agent.iconKey];
                return (
                  <div 
                    key={agent.title} 
                    className="agent-card relative glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-bugarttia-neon/30 hover:shadow-[0_0_40px_rgba(182,255,46,0.15)] hover:scale-[1.02] transition-all duration-300 group"
                  >
                    {/* SVG Icon */}
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent />
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
                );
              })}
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
      </main>
      <Footer />
    </>
  );
}
