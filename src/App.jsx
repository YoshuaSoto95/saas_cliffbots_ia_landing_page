import React, { useState } from 'react';
import './App.css';
import { Element } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';

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
import Modal from './components/Modal/Modal';

const pricingData = [
  {
    plan: "Starter",
    price: "29",
    features: [
      { text: "1 chatbot", available: true },
      { text: "1,000 messages / mo", available: true },
      { text: "Basic AI responses", available: true },
      { text: "No analytics", available: false },
    ],
    buttonText: "Choose Starter",
    isPopular: false,
  },
  {
    plan: "Pro",
    price: "79",
    features: [
      { text: "5 chatbots", available: true },
      { text: "50,000 messages / mo", available: true },
      { text: "Smart AI responses", available: true },
      { text: "Performance analytics", available: true },
    ],
    buttonText: "Choose Pro",
    isPopular: true,
  },
  {
    plan: "Enterprise",
    price: "199",
    features: [
      { text: "Unlimited chatbots", available: true },
      { text: "Unlimited messages", available: true },
      { text: "Custom-trained AI", available: true },
      { text: "Advanced analytics + support", available: true },
    ],
    buttonText: "Choose Enterprise",
    isPopular: false,
  }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    if (plan.buttonText !== "Contact Us") {
      // Esta línea ahora encontrará la función 'setSelectedPlan' que declaraste arriba
      setSelectedPlan(plan);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

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
          <Pricing openModal={openModal} pricingData={pricingData} />
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

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            closeModal={closeModal}
            selectedPlan={selectedPlan}
            allPlans={pricingData}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;