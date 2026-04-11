import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll links for homepage, regular links for other pages
  const navLinks = isHomePage ? [
    { label: 'System', href: '#system', isScroll: true },
    { label: 'Flow', href: '#flow', isScroll: true },
    { label: 'Pricing', href: '#pricing', isScroll: true },
    { label: 'Implementation', href: '#implementation', isScroll: true },
    { label: 'Contact', href: '#contact', isScroll: true },
  ] : [
    { label: 'Home', href: '/', isScroll: false },
    { label: 'System', href: '/system', isScroll: false },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bugarttia-charcoal/95 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-[7vw] h-16 lg:h-20 flex items-center justify-between">
        {/* Logo - LEFT */}
        <Link to="/" className="flex items-center">
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
            BUGARTTIA
          </span>
        </Link>

        {/* Desktop Navigation - CENTER */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isScroll ? (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-bugarttia-gray hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href 
                    ? 'text-bugarttia-neon' 
                    : 'text-bugarttia-gray hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* CTA + Mobile Menu Button - RIGHT */}
        <div className="flex items-center gap-4">
          {isHomePage ? (
            <a 
              href="#contact"
              className="hidden lg:inline-flex px-6 py-2.5 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-lg hover:bg-bugarttia-neon/90 transition-colors text-sm"
            >
              Book a Call
            </a>
          ) : (
            <Link 
              to="/"
              className="hidden lg:inline-flex px-6 py-2.5 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-lg hover:bg-bugarttia-neon/90 transition-colors text-sm"
            >
              Back to Home
            </Link>
          )}
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-bugarttia-charcoal/98 backdrop-blur-lg border-b border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              link.isScroll ? (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-bugarttia-gray hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors py-2 ${
                    location.pathname === link.href 
                      ? 'text-bugarttia-neon' 
                      : 'text-bugarttia-gray hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            {isHomePage ? (
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-lg mt-4"
              >
                Book a Call
              </a>
            ) : (
              <Link 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-bugarttia-neon text-bugarttia-charcoal font-semibold rounded-lg mt-4"
              >
                Back to Home
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
