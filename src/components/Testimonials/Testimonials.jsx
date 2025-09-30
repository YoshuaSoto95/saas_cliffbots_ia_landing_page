import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- 1. Importar componentes y módulos de Swiper ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// --- 2. Importar los estilos de Swiper ---
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    // --- 3. Expandir la data a 6 testimonios e incluir imágenes ---
    const testimonialsData = [
        {
            stars: 5,
            quote: "CliffBot transformed our customer support, reducing response times by 60% and drastically improving our efficiency.",
            name: "Sarah L.",
            title: "CTO, SaaS Startup",
            img: "https://randomuser.me/api/portraits/women/44.jpg" // Imagen de ejemplo
        },
        {
            stars: 5,
            quote: "Our sales team is twice as productive. CliffBot’s lead qualification and meeting scheduling are game-changers for us.",
            name: "James T.",
            title: "CEO, E-commerce Brand",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            stars: 4,
            quote: "The AI assistant feels so human-like, our clients often think they're chatting with a real member of our team. Impressive!",
            name: "Emily R.",
            title: "Founder, Digital Agency",
            img: "https://randomuser.me/api/portraits/women/17.jpg"
        },
        {
            stars: 5,
            quote: "The analytics dashboard is incredibly insightful. We've optimized our entire support funnel based on the data from CliffBot.",
            name: "Michael B.",
            title: "Head of Operations",
            img: "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            stars: 5,
            quote: "Setup was a breeze with the no-code builder. We had our first chatbot live in a single afternoon. Highly recommended!",
            name: "Jessica P.",
            title: "Marketing Manager",
            img: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            stars: 4,
            quote: "Seamless integration with Zendesk. It feels like a native part of our workflow now, but much smarter.",
            name: "David C.",
            title: "Support Lead, Tech Corp",
            img: "https://randomuser.me/api/portraits/men/86.jpg"
        }
    ];

    const renderStars = (rating) => {
        // ... (esta función no cambia)
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section className="testimonials-section">
            <motion.div
                className="testimonials-container"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <motion.div className="testimonials-header" variants={itemVariants}>
                    <h2 className="testimonials-title">What our customers say</h2>
                    <p className="testimonials-subtitle">Real stories from businesses thriving with CliffBot IA.</p>
                </motion.div>

                {/* --- 4. Reemplazar el grid con el componente Swiper --- */}
                <motion.div variants={itemVariants}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1} // Por defecto en móvil
                        breakpoints={{
                            // Cuando el ancho de la pantalla es >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            // Cuando el ancho de la pantalla es >= 1024px
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index} style={{ height: 'auto' }}>
                                <div className="testimonial-card">
                                    <div className="stars-container">{renderStars(testimonial.stars)}</div>
                                    <p className="testimonial-quote">“{testimonial.quote}”</p>

                                    {/* --- 5. Añadir la sección de autor con imagen --- */}
                                    <div className="author-profile">
                                        <img src={testimonial.img} alt={testimonial.name} className="author-img" />
                                        <div className="author-details">
                                            <p className="testimonial-author">{testimonial.name}</p>
                                            <p className="author-title">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonials;