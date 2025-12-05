"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const galleryImages = [
    {
        src: '/images/racing-action.png',
        alt: 'High speed kart racing action',
        className: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
        src: '/images/karts-closeup.png',
        alt: 'Close up of racing karts',
        className: 'col-span-1 md:col-span-1 row-span-1'
    },
    {
        src: '/images/pit-lane.png',
        alt: 'Pit lane preparation',
        className: 'col-span-1 md:col-span-1 row-span-1'
    },
    {
        src: '/images/track-aerial.jpg',
        alt: 'Aerial view of Kartpetania circuit',
        className: 'col-span-1 md:col-span-2 row-span-1'
    },
    {
        src: '/images/kart-pov.png',
        alt: 'Driver point of view',
        className: 'col-span-1 md:col-span-1 row-span-1'
    },
];

const moreGalleryImages = [
    {
        src: '/images/gallery-1.png',
        alt: 'Kart racing on the track',
        className: 'col-span-1 md:col-span-1 row-span-1'
    },
    {
        src: '/images/gallery-2.png',
        alt: '24 Horas Kartpetanas race start',
        className: 'col-span-1 md:col-span-2 row-span-1'
    },
    {
        src: '/images/gallery-3.png',
        alt: 'Racing karts lined up on the grid',
        className: 'col-span-1 md:col-span-1 row-span-1'
    },
];

export default function Gallery() {
    const [expanded, setExpanded] = useState(false);
    const t = useTranslations('Hero');
    const g = useTranslations('Gallery');

    return (
        <section className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tight">
                        {t('experienceThe')} <span className="text-red-600">{t('adrenaline')}</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Main Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-2xl group ${image.className}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 p-4">
                                    <p className="text-white font-medium text-sm">{image.alt}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expandable Section */}
                <div className="relative mt-4">
                    {/* Faded preview when collapsed */}
                    {!expanded && (
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] opacity-40">
                                {moreGalleryImages.slice(0, 2).map((image, index) => (
                                    <div
                                        key={index}
                                        className={`relative overflow-hidden rounded-2xl ${image.className}`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none" />
                        </div>
                    )}

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                                    {moreGalleryImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.15 }}
                                            className={`relative overflow-hidden rounded-2xl group ${image.className}`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 p-4">
                                                    <p className="text-white font-medium text-sm">{image.alt}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Expand/Collapse Button */}
                    <motion.button
                        onClick={() => setExpanded(!expanded)}
                        className="mx-auto mt-8 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-sm font-medium uppercase tracking-wider">
                            {expanded ? g('showLess') : g('viewMore')}
                        </span>
                        <motion.div
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors"
                        >
                            <ChevronDown className="w-6 h-6" />
                        </motion.div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
