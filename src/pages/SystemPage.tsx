import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Radar, 
  Brain, 
  Mic,
  Zap, 
  Database, 
  Filter, 
  Route, 
  BarChart3, 
  Plug 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Radar,
    title: "Signal Detection",
    description: "AI-powered monitoring across 100+ sources to identify high-intent prospects in real-time.",
    bullets: [
      "Real-time social listening",
      "Intent signal capture",
      "Multi-source aggregation"
    ]
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Automatically enrich lead profiles with 50+ data points from premium sources.",
    bullets: [
      "50+ data attributes",
      "Premium data providers",
      "Real-time verification"
    ]
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    description: "AI-driven scoring and qualification based on your ideal customer profile.",
    bullets: [
      "Custom scoring models",
      "ICP matching",
      "Automatic disqualification"
    ]
  },
  {
    icon: Route,
    title: "Smart Routing",
    description: "Intelligent lead distribution to the right sales rep based on territory and expertise.",
    bullets: [
      "Territory-based routing",
      "Load balancing",
      "Skill-based assignment"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Comprehensive analytics and insights into your lead generation performance.",
    bullets: [
      "Conversion tracking",
      "Pipeline analytics",
      "ROI measurement"
    ]
  },
  {
    icon: Plug,
    title: "Integration",
    description: "Seamless integration with your existing CRM and sales stack.",
    bullets: [
      "CRM synchronization",
      "API access",
      "Webhook support"
    ]
  },
  // NEW CARDS - ADDED TO EXPAND TO 9-CARD GRID
  {
    icon: Zap,
    title: "Amplemarket",
    description: "The premier source for initial data and elite market signals.",
    bullets: [
      "Premium data sources",
      "Deep luxury research",
      "Elite lead intelligence"
    ]
  },
  {
    icon: Brain,
    title: "OpenClaw AI",
    description: "Autonomous workflow management, handling everything from data enrichment to exclusive appointment booking.",
    bullets: [
      "Custom reasoning logic",
      "Privacy-first execution",
      "Complete workflow control"
    ]
  },
  {
    icon: Mic,
    title: "Pete & Gabi",
    description: "Specialized human-like voice AI for high-touch telephonic service and exclusive closing.",
    bullets: [
      "Human-like voice interaction",
      "Immediate 24/7 service",
      "High-end closing capabilities"
    ]
  }
];

export default function SystemPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll(".feature-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-bugarttia-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-bugarttia-neon/50 to-transparent" />
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-bugarttia-neon">
              The System
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-bugarttia-white tracking-tight">
            Our AI Agents
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-bugarttia-gray leading-relaxed">
            Six autonomous agents working in perfect harmony to transform your lead generation.
          </p>
        </div>

        {/* Feature Grid - 9 Cards (3x3 on desktop) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative overflow-hidden rounded-2xl bg-bugarttia-charcoal/50 border border-white/10 p-6 transition-all duration-300 hover:border-bugarttia-neon/30 hover:shadow-glow"
            >
              {/* Neon glow effect on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                <div className="absolute -inset-px bg-gradient-to-r from-bugarttia-neon/5 via-transparent to-bugarttia-neon/5 rounded-2xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center size-12 rounded-xl bg-bugarttia-neon/10 border border-bugarttia-neon/20 text-bugarttia-neon transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="size-6" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-bugarttia-white mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-bugarttia-gray leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-3 text-sm text-bugarttia-gray/70"
                    >
                      <span className="mt-1.5 size-1.5 rounded-full bg-bugarttia-neon/60 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-bugarttia-neon/40 to-transparent" />
                <div className="absolute top-4 right-4 w-px h-8 bg-gradient-to-b from-bugarttia-neon/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-bugarttia-neon text-bugarttia-black font-medium rounded-lg transition-all duration-300 hover:bg-bugarttia-neon/90 hover:scale-[1.02]"
          >
            <span>Request a Live Demo</span>
            <svg
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
