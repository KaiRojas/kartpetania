"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import {
    Bike,
    Car,
    Gauge,
    Clock,
    Shield,
    AlertTriangle,
    Phone,
    Ticket,
    ChevronRight,
    Zap,
    Info
} from 'lucide-react';

export default function OwnVehicleRatesPage() {
    const t = useTranslations('RatesPage');

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
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-full mb-4">
                        <Gauge className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tight mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">

                {/* Intro Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10 text-center"
                >
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {t('introText')}
                    </p>
                </motion.div>

                {/* Vehicle Types */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-black text-white mb-6 text-center uppercase tracking-wide border-b border-blue-500/30 pb-4">
                        <span className="text-blue-400">●</span> {t('vehicleTypesTitle')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Motorcycles */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 rounded-2xl p-6 border border-orange-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-orange-500/20 rounded-xl">
                                    <Bike className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{t('bikesTitle')}</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{t('bikesTypes')}</p>
                            <div className="text-3xl font-black text-orange-400">{t('bikesPrice')}</div>
                            <p className="text-gray-500 text-sm mt-1">{t('bikesNote')}</p>
                        </div>

                        {/* Competition Karts */}
                        <div className="bg-gradient-to-br from-green-900/20 to-slate-900 rounded-2xl p-6 border border-green-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-green-500/20 rounded-xl">
                                    <Gauge className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{t('kartsTitle')}</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{t('kartsTypes')}</p>
                            <div className="text-3xl font-black text-green-400">{t('kartsPrice')}</div>
                            <p className="text-gray-500 text-sm mt-1">{t('kartsNote')}</p>
                        </div>

                        {/* Cars */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-2xl p-6 border border-purple-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <Car className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{t('carsTitle')}</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{t('carsDesc')}</p>
                            <div className="text-3xl font-black text-purple-400">{t('consult')}</div>
                            <p className="text-gray-500 text-sm mt-1">{t('carsNote')}</p>
                        </div>
                    </div>
                </motion.section>

                {/* Important Information */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-black text-white text-center uppercase tracking-wide border-b border-yellow-500/30 pb-4 mb-8">
                        <span className="text-yellow-400">●</span> {t('importantInfoTitle')}
                    </h2>

                    {/* Availability */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg shrink-0">
                                <Clock className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">{t('availabilityTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('availabilityText')}</p>
                                <Link href="/horarios" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 mt-2 font-medium">
                                    {t('seeSchedule')} <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Insurance */}
                    <div className="bg-yellow-900/20 rounded-2xl p-6 border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-yellow-500/20 rounded-lg shrink-0">
                                <Shield className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">{t('insuranceTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed mb-3">{t('insuranceDesc')}</p>
                                <a
                                    href="https://www.skm-segurosdeportivos.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                                >
                                    <Shield className="w-4 h-4" />
                                    {t('purchaseInsurance') || 'Purchase Sports Insurance'}
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Track Access */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-500/20 rounded-lg shrink-0">
                                <Ticket className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{t('accessTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('accessText')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Staff Instructions */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg shrink-0">
                                <Info className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">{t('instructionsTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('instructionsText')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Price Variation */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-orange-500/20 rounded-lg shrink-0">
                                <AlertTriangle className="w-5 h-5 text-orange-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">{t('priceVariationTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('priceVariationText')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Electric Vehicles Warning */}
                    <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-red-500/20 rounded-lg shrink-0">
                                <Zap className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-red-300 mb-2">{t('electricTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('electricText')}</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">{t('ctaTitle')}</h3>
                    <p className="text-gray-300 mb-6">{t('ctaText')}</p>
                    <a
                        href="tel:+34620888997"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        620 888 997
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
