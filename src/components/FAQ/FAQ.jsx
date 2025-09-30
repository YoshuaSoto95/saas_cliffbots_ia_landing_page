import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQ.css';
import { FaPlus } from 'react-icons/fa'; // Usaremos un solo ícono que rotará

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const faqData = [
        {
            question: "What is CliffBots IA?",
            answer: "CliffBots IA is an advanced AI-powered chatbot platform that helps businesses automate conversations, scale support, and drive sales with unparalleled ease and efficiency."
        },
        {
            question: "Can I integrate CliffBots IA with my website?",
            answer: "Yes, integration is simple and seamless. We provide easy-to-use SDKs, dedicated plugins for platforms like WordPress and Shopify, and a robust API for custom solutions."
        },
        {
            question: "Do I need coding skills to use CliffBots IA?",
            answer: "Not at all! Our intuitive drag-and-drop visual builder allows you to design, build, and deploy powerful chatbots without writing a single line of code."
        },
        {
            question: "Is my data secure with CliffBots IA?",
            answer: "Absolutely. We prioritize your security with enterprise-grade encryption, regular audits, and full compliance with GDPR & SOC 2 standards to ensure your data is always protected."
        },
        {
            question: "Can I try CliffBots IA for free?",
            answer: "Yes, we offer a 14-day free trial on our Pro plan, with no credit card required. Experience the full power of CliffBots IA and see the impact for yourself."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <motion.div
                className="faq-container"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <motion.div
                    className="faq-header"
                    variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}
                >
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">Everything you need to know about CliffBots IA.</p>
                </motion.div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="faq-item"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <div className="faq-question" onClick={() => handleToggle(index)}>
                                <h3>{item.question}</h3>
                                <motion.div
                                    className="faq-icon"
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaPlus />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer-container"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p className="faq-answer">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;