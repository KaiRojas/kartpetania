"use client";

import { useTranslations } from 'next-intl';
import { Shield, Check, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InsurancePage() {
    const t = useTranslations('InsurancePage');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-blue-500/20 rounded-full mb-6">
                        <Shield className="w-12 h-12 text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Insurance Plans */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    {/* Basic */}
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900 rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all group">
                        <h3 className="text-2xl font-bold text-white mb-2">{t('basicTitle')}</h3>
                        <div className="text-5xl font-black text-white mb-4">{t('basicPrice')}</div>
                        <p className="text-gray-400 mb-6">{t('basicDesc')}</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <span>Karts coverage</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <span>Cars coverage</span>
                            </li>
                        </ul>
                    </div>

                    {/* Plus - Recommended */}
                    <div className="relative bg-gradient-to-br from-blue-900/30 to-slate-900 rounded-3xl p-8 border-2 border-blue-500/50 hover:border-blue-500 transition-all">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                            RECOMMENDED
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t('plusTitle')}</h3>
                        <div className="text-5xl font-black text-blue-400 mb-4">{t('plusPrice')}</div>
                        <p className="text-gray-300 mb-6">{t('plusDesc')}</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <span>Motorcycle coverage</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <span>Car coverage</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <span>Quad coverage</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <span>Kart coverage</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <a
                        href="https://www.skm-segurosdeportivos.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-900/30 hover:scale-105"
                    >
                        {t('cta')}
                        <ExternalLink className="ml-3 h-5 w-5" />
                    </a>
                    <p className="mt-6 text-sm text-gray-500">{t('provider')}</p>
                </motion.div>

                {/* Important Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 bg-yellow-900/20 rounded-2xl p-6 border border-yellow-500/30 flex items-start gap-4"
                >
                    <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm">
                        Insurance is <span className="font-bold text-yellow-400">mandatory</span> to ride on the track with your own vehicle. Please ensure you have valid coverage before your session.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
