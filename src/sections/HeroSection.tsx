import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sideCardRef = useRef<HTMLDivElement>(null);

  // FIX 1: Entrance animation - animate H1 parent opacity
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background fade
      if (bgRef.current) {
        tl.fromTo(bgRef.current, 
          { opacity: 0, scale: 1.1 }, 
          { opacity: 1, scale: 1, duration: 1.2 }, 
          0
        );
      }

      // Label animation
      if (labelRef.current) {
        tl.fromTo(labelRef.current, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6 }, 
          0.2
        );
      }

      // H1 animation - FIX: animate parent H1 opacity directly
      if (h1Ref.current) {
        const words = h1Ref.current.querySelectorAll('.word');
        
        // Animate words
        tl.fromTo(words, 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.04 }, 
          0.3
        );
        
        // FIX 1: Also animate parent H1 opacity
        tl.fromTo(h1Ref.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.7 }, 
          0.3
        );
      }

      // Paragraph animation
      if (paragraphRef.current) {
        tl.fromTo(paragraphRef.current, 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6 }, 
          0.5
        );
      }

      // CTAs animation
      if (ctaRef.current) {
        tl.fromTo(ctaRef.current.children, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, 
          0.6
        );
      }

      // Side card animation
      if (sideCardRef.current) {
        tl.fromTo(sideCardRef.current, 
          { x: 50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.7 }, 
          0.7
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-triggered parallax (desktop only)
  useLayoutEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const triggers: ScrollTrigger[] = [];

      // Parallax for content
      if (contentRef.current) {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (contentRef.current) {
              gsap.set(contentRef.current, { y: self.progress * 100 });
            }
          }
        });
        triggers.push(st);
      }

      return () => {
        triggers.forEach(st => st.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero_city_night.jpg" 
          alt="City skyline at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bugarttia-charcoal/80 via-bugarttia-charcoal/50 to-bugarttia-charcoal" />
      </div>

      {/* Content Container - FIX 2: flex-col lg:flex-row */}
      <div 
        ref={contentRef}
        className="relative z-10 w-full min-h-screen lg:h-full flex flex-col lg:flex-row items-stretch lg:items-center py-20 lg:py-0 px-6 lg:px-[7vw]"
      >
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          {/* Label */}
          <span 
            ref={labelRef}
            className="inline-block text-bugarttia-neon text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Agentic Workflows
          </span>

          {/* H1 - FIX 1: Will be animated properly */}
          <h1 
            ref={h1Ref}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="word inline-block">Agentic</span>{' '}
            <span className="word inline-block">Workflows.</span>
            <br />
            <span className="word inline-block text-bugarttia-neon">Built</span>{' '}
            <span className="word inline-block text-bugarttia-neon">to</span>{' '}
            <span className="word inline-block text-bugarttia-neon">Convert.</span>
          </h1>

          {/* Paragraph */}
          <p 
            ref={paragraphRef}
            className="text-lg text-bugarttia-gray/80 mb-8 max-w-xl"
          >
            A multi-agent system that discovers leads, enriches data, personalizes outreach, 
            and books meetings—while you sleep.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-xl hover:bg-bugarttia-neon/90 transition-colors flex items-center justify-center gap-2">
              Book a Strategy Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors">
              See the System
            </button>
          </div>
        </div>

        {/* Side Card - FIX 2: block lg:absolute (visible on mobile) */}
        <div 
          ref={sideCardRef}
          className="block lg:absolute static lg:right-[7vw] lg:top-[22vh] w-full lg:w-[34vw] h-auto lg:min-h-[400px] lg:max-h-[56vh] glass-card rounded-2xl p-6 lg:p-7 shadow-card mt-10 lg:mt-0"
        >
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-bugarttia-neon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold tracking-wider text-bugarttia-gray uppercase">24/7 Revenue Engine</span>
          </div>
          
          <h3 className="text-xl font-bold mb-4">How It Works</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-bugarttia-neon mt-2 flex-shrink-0"></span>
              <span className="text-sm text-bugarttia-gray/80">Lead discovery & enrichment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-bugarttia-neon mt-2 flex-shrink-0"></span>
              <span className="text-sm text-bugarttia-gray/80">Qualification & personalization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-bugarttia-neon mt-2 flex-shrink-0"></span>
              <span className="text-sm text-bugarttia-gray/80">Outreach, follow-up, booking</span>
            </li>
          </ul>
          
          <a href="#" className="inline-flex items-center gap-1 text-bugarttia-neon text-sm font-semibold mt-6 hover:gap-2 transition-all">
            Explore the 9 agents
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
