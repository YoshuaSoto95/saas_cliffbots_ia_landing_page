import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './KeyMetrics.css';
import Counter from './Counter';

const KeyMetrics = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const metrics = [
        { value: 15, suffix: "M+", label: "Conversations Automated" },
        { value: 50, suffix: "+", label: "Industries Served" },
        { value: 0.1, decimals: 1, suffix: "s", label: "Average Response Time" },
        { value: 99.9, decimals: 1, suffix: "%", label: "System Uptime Guarantee" },
    ];

    return (
        <section className="metrics-section">
            <motion.div
                className="metrics-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.h2 className="metrics-title" variants={itemVariants}>
                    Smart. Scalable. Reliable.
                </motion.h2>
                <motion.p className="metrics-subtitle" variants={itemVariants}>
                    Numbers that highlight our impact in AI automation.
                </motion.p>

                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <motion.div className="metric-card" key={index} variants={itemVariants}>
                            <h3 className="metric-number animated-gradient-text">
                                <Counter to={metric.value} decimals={metric.decimals} suffix={metric.suffix} />
                            </h3>
                            <p className="metric-label">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default KeyMetrics;