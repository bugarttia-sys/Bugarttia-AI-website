import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineStep {
  day: number;
  title: string;
  desc: string;
}

const timelineSteps: TimelineStep[] = [
  { day: 1, title: 'Strategic Alignment', desc: 'Intelligence & Mapping' },
  { day: 2, title: 'Harness Integration', desc: 'Data Connectivity' },
  { day: 3, title: 'Agent Skill Training', desc: 'Expertise Config' },
  { day: 4, title: 'Narrative Architecture', desc: 'Signal-Based Messaging' },
  { day: 5, title: 'Ecosystem Sync', desc: 'CRM Integration' },
  { day: 6, title: 'Stress-Testing', desc: 'Outcome Validation' },
  { day: 7, title: 'Autonomous Launch', desc: 'Live Generation' },
];

export default function ImplementationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline
      if (headlineRef.current) {
        gsap.fromTo(headlineRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
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
        const steps = stepsRef.current.querySelectorAll('.timeline-step');
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="implementation"
      className="relative w-full py-24 lg:py-32 px-6 lg:px-[7vw]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bugarttia-neon/5 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headlineRef} className="text-center mb-16">
          <span className="inline-block text-bugarttia-neon text-sm font-semibold tracking-widest uppercase mb-4">
            AI Automation for Sales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Deployed in 7 Days. <span className="text-bugarttia-neon">Selling in 8.</span>
          </h2>
          <p className="text-lg text-bugarttia-gray/70 max-w-2xl mx-auto">
            Our AI automation for sales integrates seamlessly into your ecosystem, 
            delivering qualified leads and booked meetings with zero friction.
          </p>
        </div>

        <div ref={stepsRef} className="glass-card rounded-3xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 lg:items-stretch lg:justify-between lg:h-full overflow-visible lg:overflow-x-auto scrollbar-hide">
            {timelineSteps.map((step, index) => {
              const isLast = index === timelineSteps.length - 1;
              
              return (
                <div 
                  key={step.day}
                  className="timeline-step grid grid-cols-[44px_1fr] gap-x-4 lg:flex lg:flex-col lg:items-center lg:flex-1 lg:min-w-0 lg:gap-y-0 relative group"
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

                  <span className="col-start-2 row-start-1 self-center font-bold text-[15px] lg:text-base text-white text-left lg:text-center leading-tight">
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
      </div>
    </section>
  );
}
