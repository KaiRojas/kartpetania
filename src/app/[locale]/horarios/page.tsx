"use client";

import { useTranslations } from 'next-intl';
import { Clock, Calendar, Info, Phone, Zap, Users, ChevronRight, Trophy, Bike } from 'lucide-react';
import { motion } from 'framer-motion';

type ScheduleItem = {
    day: string;
    date: number;
    morning?: { time: string; activity: string; special?: boolean };
    afternoon?: { time: string; activity: string; special?: boolean };
    isSpecialEvent?: boolean;
};

export default function SchedulePage() {
    const t = useTranslations('SchedulePage');

    const decemberSchedule: ScheduleItem[] = [
        { day: 'Sat', date: 6, morning: { time: '10:00-20:00', activity: 'Rental Kart' } },
        { day: 'Sun', date: 7, morning: { time: '10:00-20:00', activity: 'Rental Kart' } },
        { day: 'Mon', date: 8, morning: { time: '10:00-19:30', activity: 'Rental Kart + Bikes', special: true }, isSpecialEvent: true },
        { day: 'Sat', date: 13, morning: { time: '10:00-20:00', activity: 'Rental Kart' } },
        {
            day: 'Sun', date: 14,
            morning: { time: '10:00-15:00', activity: 'KARTPETANOS 2025', special: true },
            afternoon: { time: '16:00-20:00', activity: 'Rental Kart' },
            isSpecialEvent: true
        },
        { day: 'Sat', date: 20, morning: { time: '10:00-20:00', activity: 'Rental Kart' } },
        {
            day: 'Sun', date: 21,
            morning: { time: '10:00-16:00', activity: 'Pitfactory Track Day', special: true },
            afternoon: { time: '16:00-20:00', activity: 'Rental Kart' },
            isSpecialEvent: true
        },
        { day: 'Sat', date: 27, morning: { time: '10:00-20:00', activity: 'Rental Kart' } },
        { day: 'Sun', date: 28, morning: { time: '10:00-20:00', activity: 'Rental Kart' } },
    ];

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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">

                {/* Quick Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-red-900/20"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-red-100 text-sm uppercase tracking-wide font-medium">{t('bookingRequired')}</p>
                            <p className="text-white text-2xl font-bold">620 888 997</p>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/34620888997"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-colors flex items-center gap-2"
                    >
                        WhatsApp
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* Regular Hours Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {/* Weekdays Closed */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-600/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-3">
                                <Calendar className="w-4 h-4" />
                                <span>{t('seasonTitle')}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('closedDays')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('closedDaysText')}</p>
                            <div className="mt-4 pt-4 border-t border-slate-700/50">
                                <p className="text-red-400 text-sm italic">{t('holidays')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Thursday & Friday */}
                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
                                <Clock className="w-4 h-4" />
                                <span>10:00 - 19:30</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('openDays')}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('openDaysNote')}</p>
                        </div>
                    </div>

                    {/* Weekends */}
                    <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
                                <Clock className="w-4 h-4" />
                                <span>10:00 - 20:00</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('weekendTitle')}</h3>
                            <p className="text-gray-300 text-sm">{t('weekendDays')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* December Special Schedule - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/30 rounded-2xl overflow-hidden"
                >
                    <div className="bg-purple-900/30 px-6 py-4 border-b border-purple-500/20">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-purple-400" />
                            <h3 className="text-xl font-bold text-white">December 2024 Schedule</h3>
                        </div>
                    </div>

                    <div className="p-4 md:p-6">
                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-gray-400">Rental Kart</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="text-gray-400">Special Event</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bike className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-400">Bikes Allowed</span>
                            </div>
                        </div>

                        {/* Schedule Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Morning</th>
                                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Afternoon</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {decemberSchedule.map((item) => (
                                        <tr
                                            key={`${item.day}-${item.date}`}
                                            className={`border-b border-slate-800 ${item.isSpecialEvent ? 'bg-purple-500/10' : ''}`}
                                        >
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${item.isSpecialEvent
                                                            ? 'bg-yellow-500/20 text-yellow-400'
                                                            : 'bg-slate-700 text-white'
                                                        }`}>
                                                        {item.date}
                                                    </div>
                                                    <div>
                                                        <span className="text-white font-medium">{item.day}</span>
                                                        <span className="text-gray-500 text-sm ml-1">Dec</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                {item.morning && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-500 text-sm font-mono">{item.morning.time}</span>
                                                        <span className={`px-2 py-1 rounded text-xs font-medium ${item.morning.special
                                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                                : 'bg-green-500/20 text-green-400'
                                                            }`}>
                                                            {item.morning.activity}
                                                        </span>
                                                        {item.morning.activity.includes('KARTPETANOS') && (
                                                            <Trophy className="w-4 h-4 text-yellow-500" />
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="py-4 px-4">
                                                {item.afternoon && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-500 text-sm font-mono">{item.afternoon.time}</span>
                                                        <span className={`px-2 py-1 rounded text-xs font-medium ${item.afternoon.special
                                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                                : 'bg-green-500/20 text-green-400'
                                                            }`}>
                                                            {item.afternoon.activity}
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* Important Policies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-4"
                >
                    <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        Important Information
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Rental Policy */}
                        <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 transition-colors">
                            <div className="flex items-center gap-2 text-yellow-500 mb-3">
                                <Users className="w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wide">Rental Karts</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('rentalPolicy')}</p>
                        </div>

                        {/* Electric Vehicle Policy */}
                        <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-5 hover:border-red-500/40 transition-colors">
                            <div className="flex items-center gap-2 text-red-500 mb-3">
                                <Zap className="w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wide">Electric Vehicles</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('electricPolicy')}</p>
                        </div>

                        {/* Private Kart Policy */}
                        <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
                            <div className="flex items-center gap-2 text-blue-500 mb-3">
                                <Clock className="w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wide">Private Karts</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('privatePolicy')}</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
