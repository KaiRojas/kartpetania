"use client";

import { useTranslations } from 'next-intl';
import { Play, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoGallery from '@/components/VideoGallery';
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
    const t = useTranslations('GalleryPage');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h1 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">

                {/* Videos Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                            <Play className="w-6 h-6 text-red-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{t('videosTitle')}</h2>
                    </div>
                    <VideoGallery />
                </motion.section>

                {/* Photos Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <ImageIcon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{t('imagesTitle')}</h2>
                    </div>
                    <Gallery />
                </motion.section>

            </div>
        </div>
    );
}
