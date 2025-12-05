"use client";

import { useTranslations } from 'next-intl';
import { Gift, Trophy, Calendar, Clock, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PromotionsPage() {
    const t = useTranslations('PromotionsPage');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

                {/* Christmas Promo - Featured */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative bg-gradient-to-r from-red-900/40 via-red-800/30 to-green-900/30 rounded-3xl p-10 border border-red-500/30 overflow-hidden"
                >
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Gift className="w-64 h-64 text-white" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles className="w-6 h-6 text-yellow-400" />
                            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">Special Offer</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 italic uppercase">{t('christmasTitle')}</h2>
                        <p className="text-xl text-red-200 mb-8">{t('christmasSubtitle')}</p>

                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{t('pack10Title')}</h3>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                    {t('pack10Price')}
                                </div>
                                <p className="text-sm text-gray-400 mt-2">Save 40€</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{t('pack5Title')}</h3>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                    {t('pack5Price')}
                                </div>
                                <p className="text-sm text-gray-400 mt-2">Save 25€</p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-red-200 bg-red-900/30 px-4 py-2 rounded-full w-fit">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{t('validity')}</span>
                        </div>
                    </div>
                </motion.section>

                {/* Championships */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Trophy className="w-4 h-4" />
                            <span>Racing Events</span>
                        </div>
                        <h2 className="text-4xl font-black text-white italic uppercase">{t('championshipsTitle')}</h2>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900 rounded-2xl p-8 border border-white/10">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-yellow-500/20 rounded-xl">
                                    <Calendar className="w-8 h-8 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{t('event1Title')}</h3>
                                    <span className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold border border-red-500/30">
                                        {t('event1Status')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Historical Results */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white">{t('privateHoursTitle')}</h2>
                    </div>

                    <div className="bg-slate-800/30 rounded-2xl p-8 border border-white/10">
                        <h3 className="text-lg font-semibold text-gray-400 mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            {t('results')}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <a href="#" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-white/5 hover:border-blue-500/30">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <FileText className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-white font-medium">Results 2020 (PDF)</span>
                            </a>
                            <a href="#" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-white/5 hover:border-blue-500/30">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <FileText className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-white font-medium">Results 2019 (PDF)</span>
                            </a>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
