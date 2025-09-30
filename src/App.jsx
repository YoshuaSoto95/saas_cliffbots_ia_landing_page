// En App.js
import { Element } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics/KeyMetrics';
import Features from './components/Features/Features';
import UseCases from './components/UseCases/UseCases';
import Testimonials from './components/Testimonials/Testimonials';
// Importa tus otras secciones aquí

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
      </main>
    </div>
  );
}

export default App;