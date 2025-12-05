"use client";

import { useTranslations } from 'next-intl';
import { Bike, Car, Trophy, Shield, Check, CreditCard, ChevronRight, Zap, Clock, AlertTriangle, ClipboardList, Info, Warehouse } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RatesPage() {
    const t = useTranslations('RatesPage');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h1 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
                        {t('subtitle')}
                    </p>
                    <p className="text-gray-500">
                        {t('introText')}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

                {/* Day Rates */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-full text-lg font-bold mb-4 border border-green-500/30">
                            <Zap className="w-5 h-5" />
                            <span>{t('standardRatesTitle')}</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Motos */}
                        <div className="group bg-gradient-to-br from-red-900/20 to-slate-900 rounded-3xl p-8 border border-red-500/20 hover:border-red-500/50 transition-all hover:scale-[1.02]">
                            <div className="text-center mb-4">
                                <div className="bg-gradient-to-br from-red-600 to-red-700 p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-900/30">
                                    <Bike className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('bikesTitle')}</h3>
                                <p className="text-xs text-red-300/70 uppercase tracking-wide mb-3">{t('bikesTypes')}</p>
                                <div className="text-5xl font-black text-white mb-2">{t('bikesPrice')}</div>
                                <p className="text-sm text-gray-400">{t('bikesNote')}</p>
                            </div>
                        </div>

                        {/* Karts */}
                        <div className="group bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
                            <div className="text-center mb-4">
                                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-900/30">
                                    <Trophy className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('kartsTitle')}</h3>
                                <p className="text-xs text-purple-300/70 uppercase tracking-wide mb-3">{t('kartsTypes')}</p>
                                <div className="text-5xl font-black text-white mb-2">{t('kartsPrice')}</div>
                                <p className="text-sm text-gray-400">{t('kartsNote')}</p>
                            </div>
                        </div>

                        {/* Cars */}
                        <div className="group bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
                            <div className="text-center mb-4">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-900/30">
                                    <Car className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('carsTitle')}</h3>
                                <p className="text-xs text-blue-300/70 uppercase tracking-wide mb-3">{t('carsTypes')}</p>
                                <div className="text-4xl font-black text-white mb-2">{t('consult')}</div>
                                <p className="text-sm text-gray-400">{t('carsNote')}</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Important Information */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 bg-amber-500/20 text-amber-400 px-6 py-3 rounded-full text-lg font-bold mb-4 border border-amber-500/30">
                            <Info className="w-5 h-5" />
                            <span>{t('importantInfoTitle')}</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Hours & Availability */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-500/20 rounded-xl shrink-0">
                                    <Clock className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-gray-300 mb-2">{t('hoursNote')}</p>
                                    <p className="text-gray-400 text-sm mb-3">{t('availabilityNote')}</p>
                                    <Link href="/schedule" className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-medium">
                                        {t('seeSchedule')}
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Price Variation */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-500/20 rounded-xl shrink-0">
                                    <CreditCard className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-gray-300 mb-2">{t('priceVariation')}</p>
                                    <p className="text-gray-400 text-sm">{t('followStaffNote')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Electric Vehicle Warning */}
                    <div className="mt-6 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-5 border border-orange-500/30 flex items-center gap-4">
                        <div className="p-3 bg-orange-500/20 rounded-full shrink-0">
                            <AlertTriangle className="w-6 h-6 text-orange-400" />
                        </div>
                        <p className="text-orange-200 font-medium text-sm">{t('electricWarning')}</p>
                    </div>
                </motion.section>

                {/* Track Access Procedure */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-full text-lg font-bold mb-4 border border-cyan-500/30">
                            <ClipboardList className="w-5 h-5" />
                            <span>{t('trackAccessTitle')}</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { step: 1, key: 'trackAccessStep1' },
                            { step: 2, key: 'trackAccessStep2' },
                            { step: 3, key: 'trackAccessStep3' },
                            { step: 4, key: 'trackAccessStep4' },
                        ].map(({ step, key }) => (
                            <div key={step} className="relative bg-slate-800/50 rounded-xl p-5 border border-cyan-500/20">
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {step}
                                </div>
                                <p className="text-gray-300 text-sm pt-2">{t(key)}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Memberships */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 bg-yellow-500/20 text-yellow-400 px-6 py-3 rounded-full text-lg font-bold mb-4 border border-yellow-500/30">
                            <CreditCard className="w-5 h-5" />
                            <span>{t('membershipsTitle')}</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Annual - Track + Garage */}
                        <div className="relative bg-gradient-to-br from-yellow-900/30 to-slate-900 rounded-2xl p-6 border-2 border-yellow-500/50 overflow-hidden">
                            <div className="absolute -top-1 -right-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-10 py-1 rotate-45">BEST VALUE</div>
                            <div className="flex items-center gap-3 mb-3">
                                <Warehouse className="w-5 h-5 text-yellow-400" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">{t('annualTitle')}</h3>
                                    <p className="text-yellow-400/80 text-sm">{t('annualSubtitle')}</p>
                                </div>
                            </div>
                            <div className="text-4xl font-black text-yellow-400 mb-3">{t('annualPrice')}</div>
                            <p className="text-gray-300 text-sm mb-3">{t('annualDesc')}</p>
                            <p className="text-xs text-yellow-500/70 italic">{t('annualNote')}</p>
                        </div>

                        {/* Semi-Annual - Track + Garage */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Warehouse className="w-5 h-5 text-gray-400" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">{t('semiAnnualTitle')}</h3>
                                    <p className="text-gray-400 text-sm">{t('semiAnnualSubtitle')}</p>
                                </div>
                            </div>
                            <div className="text-4xl font-black text-white mb-3">{t('semiAnnualPrice')}</div>
                            <p className="text-gray-400 text-sm mb-3">{t('semiAnnualDesc')}</p>
                            <p className="text-xs text-gray-500 italic">{t('semiAnnualNote')}</p>
                        </div>

                        {/* Track Only Annual */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors">
                            <div className="mb-3">
                                <h3 className="text-xl font-bold text-white">{t('trackOnlyAnnualTitle')}</h3>
                                <p className="text-gray-400 text-sm">{t('trackOnlyAnnualSubtitle')}</p>
                            </div>
                            <div className="text-4xl font-black text-white mb-3">{t('trackOnlyAnnualPrice')}</div>
                            <p className="text-gray-400 text-sm">{t('trackOnlyAnnualDesc')}</p>
                        </div>

                        {/* Track Only Semi */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors">
                            <div className="mb-3">
                                <h3 className="text-xl font-bold text-white">{t('trackOnlySemiTitle')}</h3>
                                <p className="text-gray-400 text-sm">{t('trackOnlySemiSubtitle')}</p>
                            </div>
                            <div className="text-4xl font-black text-white mb-3">{t('trackOnlySemiPrice')}</div>
                            <p className="text-gray-400 text-sm">{t('trackOnlySemiDesc')}</p>
                        </div>
                    </div>
                </motion.section>

                {/* Insurance Notice */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-600/20 to-blue-900/20 rounded-2xl p-8 border border-blue-500/30 flex flex-col md:flex-row items-center gap-6"
                >
                    <div className="p-4 bg-blue-500/20 rounded-full shrink-0">
                        <Shield className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{t('insuranceTitle')}</h3>
                        <p className="text-gray-300">{t('insuranceDesc')}</p>
                    </div>
                    <a
                        href="https://www.skm-segurosdeportivos.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors"
                    >
                        {t('purchaseInsurance')}
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </motion.section>

            </div>
        </div>
    );
}
