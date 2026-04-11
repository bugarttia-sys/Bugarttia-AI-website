import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import AgentSystemSection from './sections/AgentSystemSection';
import ImplementationSection from './sections/ImplementationSection';
import SystemFlowSection from './sections/SystemFlowSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import SystemPage from './pages/SystemPage';

// Home page component
function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AgentSystemSection />
        <ImplementationSection />
        <SystemFlowSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bugarttia-charcoal text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/system" element={<SystemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
