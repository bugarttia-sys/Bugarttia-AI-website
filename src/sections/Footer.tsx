export default function Footer() {
  return (
    <footer className="w-full py-12 lg:py-16 px-6 lg:px-[7vw] border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">BUGARTTIA</span>
          <span className="text-bugarttia-gray/60 text-sm">© 2026</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-bugarttia-gray hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-bugarttia-gray hover:text-white transition-colors">Terms of Service</a>
          <a href="mailto:hello@bugarttia.ai" className="text-sm text-bugarttia-gray hover:text-white transition-colors">hello@bugarttia.ai</a>
        </div>
      </div>
    </footer>
  );
}
