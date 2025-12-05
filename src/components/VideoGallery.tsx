"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const videos = [
    "PQSCfK_sG2s",
    "gx3oVSWTw3s",
    "I_EHq6K_Urc",
    "Bpv9uMTw9YI",
    "YJlhBTfeyUE",
    "7J8ylfa7Ngc"
];

export default function VideoGallery() {
    const t = useTranslations('VideoGallery');

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((videoId, index) => (
                        <motion.div
                            key={videoId}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`YouTube video player ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
