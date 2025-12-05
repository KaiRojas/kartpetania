"use client";

import { useTranslations } from 'next-intl';
import { Calendar, Utensils, Target, Disc3, AlertCircle, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeContent() {
    const t = useTranslations('HomePage');

    const features = [
        {
            icon: Target,
            titleKey: 'trainingTitle',
            descKey: 'training',
            color: 'red'
        },
        {
            icon: Disc3,
            titleKey: 'rentalTitle',
            descKey: 'rental',
            color: 'blue'
        },
        {
            icon: Calendar,
            titleKey: 'eventsTitle',
            descKey: 'events',
            color: 'purple'
        },
        {
            icon: Utensils,
            titleKey: 'diningTitle',
            descKey: 'dining',
            color: 'orange'
        }
    ];

    const colorClasses: Record<string, { icon: string; border: string; bg: string }> = {
        red: { icon: 'text-red-500', border: 'border-red-500/20', bg: 'bg-red-500/10' },
        blue: { icon: 'text-blue-500', border: 'border-blue-500/20', bg: 'bg-blue-500/10' },
        purple: { icon: 'text-purple-500', border: 'border-purple-500/20', bg: 'bg-purple-500/10' },
        orange: { icon: 'text-orange-500', border: 'border-orange-500/20', bg: 'bg-orange-500/10' }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Hero Intro - Clean Centered Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tight mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                        {t('subtitle')}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        {t('facilities')}
                    </p>
                </motion.div>

                {/* Features Grid - Symmetrical 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const colors = colorClasses[feature.color];
                        return (
                            <motion.div
                                key={feature.titleKey}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`p-3 rounded-xl bg-white/10 ${colors.icon}`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {t(feature.titleKey)}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {t(feature.descKey)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Important Notices - Clean CTA Row */}
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-red-600/20 to-red-600/5 p-6 rounded-2xl border border-red-500/30 flex items-center gap-4"
                    >
                        <div className="p-3 bg-red-500/20 rounded-full">
                            <Phone className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">{t('bookingTitle')}</h4>
                            <p className="text-red-200/80 text-sm">
                                WhatsApp: <span className="font-semibold">620 888 997</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-blue-600/20 to-blue-600/5 p-6 rounded-2xl border border-blue-500/30 flex items-center gap-4"
                    >
                        <div className="p-3 bg-blue-500/20 rounded-full">
                            <Calendar className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">{t('upcomingEventsTitle')}</h4>
                            <p className="text-blue-200/80 text-sm">
                                Dec 14: <span className="font-semibold">KARTPETANOS 2025</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
