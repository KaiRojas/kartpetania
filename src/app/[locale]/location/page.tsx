"use client";

import { useTranslations } from 'next-intl';
import { MapPin, Navigation, ExternalLink, Car } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocationPage() {
    const t = useTranslations('LocationPage');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Full Width Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-[400px] rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.687358368564!2d-4.040186923499786!3d40.87989502737604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41137c86d8001b%3A0x608035c60273934d!2sKartpetania!5e0!3m2!1sen!2ses!4v1709660000000!5m2!1sen!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>

                {/* Info Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Address Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-br from-red-900/20 to-slate-900 rounded-2xl p-8 border border-red-500/20"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-500/20 rounded-xl shrink-0">
                                <MapPin className="w-8 h-8 text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">{t('addressTitle')}</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">{t('address')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Directions Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-2xl p-8 border border-blue-500/20"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                                <Navigation className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">{t('directionsTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('directions')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Navigation CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="https://www.google.com/maps/dir//Kartpetania,+La+Higuera,+Segovia,+Spain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/30"
                    >
                        <Car className="w-6 h-6" />
                        Open in Google Maps
                        <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                        href="https://maps.apple.com/?daddr=Kartpetania,+La+Higuera,+Segovia,+Spain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 border border-white/10"
                    >
                        Open in Apple Maps
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
