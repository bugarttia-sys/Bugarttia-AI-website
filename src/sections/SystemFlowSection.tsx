import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FlowStep {
  day: number;
  title: string;
  desc: string;
}

const flowSteps: FlowStep[] = [
  { day: 4, title: 'Contextual Outreach', desc: 'Hyper-relevant messaging' },
  { day: 5, title: 'Strategic Activation', desc: 'Optimal timing' },
  { day: 6, title: 'Recursive Follow-up', desc: 'Self-learning sequences' },
  { day: 7, title: 'Confirmed Meeting', desc: 'Guaranteed handoff' },
];

export default function SystemFlowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline
      if (headlineRef.current) {
        gsap.fromTo(headlineRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Animate steps
      if (stepsRef.current) {
        const steps = stepsRef.current.querySelectorAll('.flow-step');
        gsap.fromTo(steps,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Animate CTA
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
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
      id="system-flow"
      className="relative w-full py-24 lg:py-32 px-6 lg:px-[7vw]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headlineRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lead <span className="text-bugarttia-neon">→</span> Qualified <span className="text-bugarttia-neon">→</span> Booked.
            <br />
            Fully Autonomous Execution.
          </h2>
        </div>

        <div ref={stepsRef} className="glass-card rounded-3xl p-6 lg:p-10 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 lg:items-stretch lg:justify-between lg:h-full overflow-visible lg:overflow-x-auto scrollbar-hide">
            {flowSteps.map((step, index) => {
              const isLast = index === flowSteps.length - 1;
              
              return (
                <div 
                  key={step.day}
                  className="flow-step grid grid-cols-[44px_1fr] gap-x-4 lg:flex lg:flex-col lg:items-center lg:flex-1 lg:min-w-0 lg:gap-y-0 relative group"
                >
                  <div 
                    className={`circle col-start-1 row-start-1 w-11 h-11 lg:w-16 lg:h-16 rounded-full flex items-center justify-center lg:mb-4 z-10 transition-all duration-300 ${
                      isLast 
                        ? 'bg-bugarttia-neon shadow-glow' 
                        : 'bg-bugarttia-charcoal border border-white/10 group-hover:border-bugarttia-neon/50'
                    }`}
                  >
                    <span className="font-bold text-base lg:text-xl text-white">
                      {step.day}
                    </span>
                  </div>

                  <span 
                    className="col-start-2 row-start-1 self-center font-bold text-[15px] lg:text-base text-white text-left lg:text-center leading-tight"
                  >
                    {step.title}
                  </span>

                  <span className="col-start-2 row-start-2 text-bugarttia-gray/60 text-[13px] lg:text-sm text-left lg:text-center mt-0.5">
                    {step.desc}
                  </span>

                  {!isLast && (
                    <div className="hidden lg:block absolute top-7 lg:top-8 left-[calc(50%+28px)] lg:left-[calc(50%+32px)] w-[calc(100%-56px)] lg:w-[calc(100%-64px)] h-px bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div ref={ctaRef} className="text-center">
          <button className="px-8 py-4 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-xl hover:bg-bugarttia-neon/90 transition-colors flex items-center gap-2 mx-auto">
            Request a Live Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
