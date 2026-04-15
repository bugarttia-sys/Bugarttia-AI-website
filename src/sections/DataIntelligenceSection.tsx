import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: '/images/city_rooftop_04.jpg', alt: 'City rooftop view' },
  { src: '/images/city_bridge_05.jpg', alt: 'City bridge at dusk' },
  { src: '/images/city_aerial_06.jpg', alt: 'City aerial perspective' },
];

export default function DataIntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.photo-item');
      if (items) {
        gsap.fromTo(items,
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block w-full py-24 lg:py-32 px-6 lg:px-[7vw]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-bugarttia-neon text-sm font-semibold tracking-widest uppercase">
            AI Workflow Automation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Intelligence That Drives Revenue
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:gap-8">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="photo-item relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/9]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
