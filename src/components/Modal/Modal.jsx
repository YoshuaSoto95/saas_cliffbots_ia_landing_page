import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

// Componente para el Paso 1
const Step1 = ({ selectedPlan, allPlans, onContinue, setPlan }) => (
    <>
        <h2>Create Your Account (1/2)</h2>
        <p className="modal-subtitle">Let's get you started. Just a few details are needed.</p>
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>

            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" placeholder="e.g., Jane Doe" required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
                <label htmlFor="plan">Selected Plan</label>
                <select id="plan" defaultValue={selectedPlan.plan} onChange={(e) => setPlan(e.target.value)}>
                    {allPlans.map(p => <option key={p.plan} value={p.plan}>{p.plan}</option>)}
                </select>
                <small className="helper-text">You can still change your plan here.</small>
            </div>

            <button type="submit" className="btn modal-btn">Continue to Payment</button>
            <p className="privacy-note">We respect your privacy and will not share your data.</p>
        </form>
    </>
);

// Componente para el Paso 2
const Step2 = ({ planDetails }) => {
    const [paymentMethod, setPaymentMethod] = useState('Visa');

    return (
        <>
            <h2>Checkout (2/2)</h2>
            <p>Review your order and complete payment</p>
            <div className="checkout-step2-grid">
                {/* Columna Izquierda */}
                <div className="invoice-summary">
                    <h4>Invoice Summary</h4>
                    <div className="invoice-item"><span>Plan:</span> <span>{planDetails.plan} Plan</span></div>
                    <div className="invoice-item"><span>Cycle:</span> <span>Monthly</span></div>
                    <div className="invoice-item price"><span>Price:</span> <span>${planDetails.price}</span></div>

                    <h4>Payment Method</h4>
                    <div className="payment-options">
                        <div className={`payment-option ${paymentMethod === 'PayPal' ? 'active' : ''}`} onClick={() => setPaymentMethod('PayPal')}>PayPal</div>
                        <div className={`payment-option ${paymentMethod === 'Visa' ? 'active' : ''}`} onClick={() => setPaymentMethod('Visa')}>Visa</div>
                        <div className={`payment-option ${paymentMethod === 'MasterCard' ? 'active' : ''}`} onClick={() => setPaymentMethod('MasterCard')}>MasterCard</div>
                        <div className={`payment-option ${paymentMethod === 'BTC' ? 'active' : ''}`} onClick={() => setPaymentMethod('BTC')}>BTC</div>
                    </div>
                    <button className="btn modal-btn pay-btn">Pay Securely</button>
                </div>
                {/* Columna Derecha */}
                <div className="payment-fields">
                    {(paymentMethod === 'Visa' || paymentMethod === 'MasterCard') && (
                        <div className="card-form">
                            <input type="text" placeholder="Cardholder Name" />
                            <input type="text" placeholder="Card Number" />
                            <div className="card-details">
                                <input type="text" placeholder="MM / YY" />
                                <input type="text" placeholder="CVV" />
                            </div>
                        </div>
                    )}
                    {paymentMethod === 'PayPal' && <button className="btn paypal-btn">Continue with PayPal</button>}
                    {paymentMethod === 'BTC' && <div className="btc-qr">QR Code Placeholder</div>}
                </div>
            </div>
        </>
    );
};


const Modal = ({ closeModal, selectedPlan, allPlans }) => {
    const [step, setStep] = useState(1);
    const [currentPlanName, setCurrentPlanName] = useState(selectedPlan.plan);
    const currentPlanDetails = allPlans.find(p => p.plan === currentPlanName) || selectedPlan;

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
        exit: { opacity: 0, scale: 0.9 },
    };

    return (
        <motion.div
            className="modal-overlay"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
        >
            <motion.div
                className="modal-container"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
            >
                <button className="close-btn" onClick={closeModal}>✕</button>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 ? (
                            <Step1
                                selectedPlan={currentPlanDetails}
                                allPlans={allPlans}
                                onContinue={() => setStep(2)}
                                setPlan={setCurrentPlanName}
                            />
                        ) : (
                            <Step2 planDetails={currentPlanDetails} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Modal;