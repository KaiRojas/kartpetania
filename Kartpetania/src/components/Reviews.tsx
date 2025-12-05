"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const reviews = [
    {
        id: 1,
        author: "Carlos Rodriguez",
        rating: 5,
        text: "Increíble experiencia. El circuito es muy técnico y divertido. Los karts corren mucho y están en muy buen estado. El personal muy amable y atento.",
        date: "Hace 2 semanas"
    },
    {
        id: 2,
        author: "Sarah Smith",
        rating: 5,
        text: "Best karting track I've been to in Spain. The staff is super friendly and the facilities are top notch. Will definitely come back!",
        date: "1 month ago"
    },
    {
        id: 3,
        author: "Miguel Ángel García",
        rating: 5,
        text: "Perfecto para ir con amigos. Hicimos un Gran Premio y fue la bomba. Las instalaciones están muy cuidadas y el ambiente es genial.",
        date: "Hace 3 semanas"
    },
    {
        id: 4,
        author: "Laura Martínez",
        rating: 5,
        text: "Llevé a mis hijos y lo pasaron genial. Los karts infantiles son muy seguros y el personal estuvo pendiente en todo momento. Muy recomendable.",
        date: "Hace 1 semana"
    },
    {
        id: 5,
        author: "David Fernández",
        rating: 5,
        text: "Circuito impresionante, uno de los mejores de la zona. Las curvas son técnicas y muy divertidas. El ambiente de competición es increíble.",
        date: "Hace 2 meses"
    },
    {
        id: 6,
        author: "Ana López",
        rating: 5,
        text: "Celebramos un cumpleaños aquí y fue un éxito total. La organización perfecta, los karts en muy buen estado y la comida deliciosa.",
        date: "Hace 1 mes"
    },
    {
        id: 7,
        author: "Roberto Sánchez",
        rating: 5,
        text: "Vengo regularmente a entrenar con mi kart privado. Las instalaciones son profesionales y el trato es excelente. 100% recomendado.",
        date: "Hace 3 meses"
    },
    {
        id: 8,
        author: "Elena Torres",
        rating: 4,
        text: "Gran experiencia en familia. Los niños disfrutaron mucho con los karts biplaza. El paisaje de la sierra es espectacular desde las terrazas.",
        date: "Hace 2 semanas"
    }
];

export default function Reviews() {
    const t = useTranslations('Reviews');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Show 3 reviews at a time on desktop, 1 on mobile
    const reviewsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Auto-advance carousel
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [isPaused, currentIndex]);

    const currentReviews = reviews.slice(
        currentIndex * reviewsPerPage,
        currentIndex * reviewsPerPage + reviewsPerPage
    );

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <section
            className="py-24 bg-slate-950 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <span className="text-gray-400 text-sm">4.9 on Google</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative flex items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hidden lg:flex items-center justify-center"
                        aria-label="Previous reviews"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hidden lg:flex items-center justify-center"
                        aria-label="Next reviews"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Reviews Grid - Full Width */}
                    <div className="w-full">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {currentReviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/50 relative group hover:border-yellow-500/30 transition-colors"
                                    >
                                        <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-700 group-hover:text-yellow-500/30 transition-colors" />

                                        {/* Stars */}
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-gray-600" />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-300 mb-6 leading-relaxed text-sm min-h-[80px]">
                                            "{review.text}"
                                        </p>

                                        {/* Author & Date */}
                                        <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                                    {review.author.charAt(0)}
                                                </div>
                                                <span className="font-semibold text-white text-sm">{review.author}</span>
                                            </div>
                                            <span className="text-xs text-gray-500">{review.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > currentIndex ? 1 : -1);
                                        setCurrentIndex(i);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                                        ? 'bg-red-500 w-8'
                                        : 'bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    aria-label={`Go to page ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex justify-center gap-4 mt-6 lg:hidden">
                            <button
                                onClick={prevSlide}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
