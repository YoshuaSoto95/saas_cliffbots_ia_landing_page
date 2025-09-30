import { Element } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics/KeyMetrics';
import Features from './components/Features/Features';
import UseCases from './components/UseCases/UseCases';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import CTA from './components/CTA/CTA';
import Community from './components/Community/Community';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <KeyMetrics />
        <Element name="features">
          <Features />
        </Element>
        <UseCases />
        <Element name="comments">
          <Testimonials />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <CTA />
        <Element name="community">
          <Community />
        </Element>
        <Element name="faq">
          <FAQ />
        </Element>
        <Footer />
      </main>
    </div>
  );
}

export default App;