import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import AgentSystemSection from './sections/AgentSystemSection';
import DataIntelligenceSection from './sections/DataIntelligenceSection';
import ImplementationSection from './sections/ImplementationSection';
import SystemFlowSection from './sections/SystemFlowSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bugarttia-charcoal text-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AgentSystemSection />
        <DataIntelligenceSection />
        <ImplementationSection />
        <SystemFlowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
