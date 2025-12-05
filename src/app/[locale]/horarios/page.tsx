"use client";

import { useTranslations } from 'next-intl';
import { Clock, Calendar, Info, Phone, Zap, Users, ChevronRight, Trophy, Bike } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

// CMS-ready data structure - in future, this would come from Sanity
interface ScheduleEntry {
    year: number;
    month: number;  // 1-12
    day: number;
    sessions: {
        startTime: string;
        endTime: string;
        activity: string;
        activityKey?: string; // Translation key
        special?: boolean;
        bikesAllowed?: boolean;
    }[];
}

// This data structure is ready for Sanity CMS - each entry has full date info
// In future: const scheduleData = await sanity.fetch('*[_type == "schedule"]')
const scheduleData: ScheduleEntry[] = [
    { year: 2025, month: 12, day: 6, sessions: [{ startTime: '10:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }] },
    { year: 2025, month: 12, day: 7, sessions: [{ startTime: '10:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }] },
    { year: 2025, month: 12, day: 8, sessions: [{ startTime: '10:00', endTime: '19:30', activity: 'Rental Kart + Bikes', activityKey: 'rentalKart', bikesAllowed: true }] },
    { year: 2025, month: 12, day: 13, sessions: [{ startTime: '10:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }] },
    {
        year: 2025, month: 12, day: 14,
        sessions: [
            { startTime: '10:00', endTime: '15:00', activity: 'KARTPETANOS 2025', special: true },
            { startTime: '16:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }
        ]
    },
    { year: 2025, month: 12, day: 20, sessions: [{ startTime: '10:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }] },
    {
        year: 2025, month: 12, day: 21,
        sessions: [
            { startTime: '10:00', endTime: '16:00', activity: 'Pitfactory Track Day', special: true },
            { startTime: '16:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }
        ]
    },
    { year: 2025, month: 12, day: 27, sessions: [{ startTime: '10:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }] },
    {
        year: 2025, month: 12, day: 28,
        sessions: [
            { startTime: '10:00', endTime: '16:00', activity: 'Rental Kart (TBC)', activityKey: 'rentalKart' },
            { startTime: '16:00', endTime: '20:00', activity: 'Rental Kart', activityKey: 'rentalKart' }
        ]
    },
];

// Helper to get day name
const getDayName = (date: Date, locale: string): string => {
    return date.toLocaleDateString(locale, { weekday: 'short' });
};

// Helper to get month name
const getMonthName = (date: Date, locale: string): string => {
    return date.toLocaleDateString(locale, { month: 'long' });
};

export default function SchedulePage() {
    const t = useTranslations('SchedulePage');
    const s = useTranslations('Schedule');
    const [today, setToday] = useState<Date | null>(null);
    const [locale, setLocale] = useState('en');

    useEffect(() => {
        setToday(new Date());
        // Get locale from URL path
        const path = window.location.pathname;
        if (path.startsWith('/es')) {
            setLocale('es');
        }
    }, []);

    // Filter and process schedule entries
    const processedSchedule = useMemo(() => {
        if (!today) return [];

        return scheduleData
            .map(entry => {
                const entryDate = new Date(entry.year, entry.month - 1, entry.day);
                const isPast = entryDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                const isToday = entryDate.getDate() === today.getDate() &&
                    entryDate.getMonth() === today.getMonth() &&
                    entryDate.getFullYear() === today.getFullYear();

                // Process sessions - split full-day into morning/afternoon
                let morningDisplay: { time: string; activity: string; special?: boolean; bikesAllowed?: boolean } | null = null;
                let afternoonDisplay: { time: string; activity: string; special?: boolean; bikesAllowed?: boolean } | null = null;

                for (const session of entry.sessions) {
                    const startHour = parseInt(session.startTime.split(':')[0]);
                    const endHour = parseInt(session.endTime.split(':')[0]);
                    const activityName = session.activityKey ? s(session.activityKey) : session.activity;

                    // Full day session (starts before 14:00, ends after 14:00)
                    if (startHour < 14 && endHour > 14) {
                        morningDisplay = {
                            time: `${session.startTime}-14:00`,
                            activity: activityName,
                            special: session.special,
                            bikesAllowed: session.bikesAllowed
                        };
                        afternoonDisplay = {
                            time: `14:00-${session.endTime}`,
                            activity: activityName,
                            special: session.special,
                            bikesAllowed: session.bikesAllowed
                        };
                    }
                    // Morning only session
                    else if (startHour < 14) {
                        morningDisplay = {
                            time: `${session.startTime}-${session.endTime}`,
                            activity: activityName,
                            special: session.special,
                            bikesAllowed: session.bikesAllowed
                        };
                    }
                    // Afternoon only session
                    else {
                        afternoonDisplay = {
                            time: `${session.startTime}-${session.endTime}`,
                            activity: activityName,
                            special: session.special,
                            bikesAllowed: session.bikesAllowed
                        };
                    }
                }

                const hasSpecialEvent = entry.sessions.some(s => s.special);

                return {
                    ...entry,
                    entryDate,
                    dayName: getDayName(entryDate, locale === 'es' ? 'es-ES' : 'en-US'),
                    isPast,
                    isToday,
                    hasSpecialEvent,
                    morningDisplay,
                    afternoonDisplay,
                };
            })
            .filter(entry => !entry.isPast);
    }, [today, locale, s]);

    // Get current month/year for title
    const currentYear = today?.getFullYear() || 2025;
    const currentMonthName = today ? getMonthName(today, locale === 'es' ? 'es-ES' : 'en-US') : '';

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

                {/* December Special Schedule - Dynamic */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/30 rounded-2xl overflow-hidden"
                >
                    <div className="bg-purple-900/30 px-6 py-4 border-b border-purple-500/20">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-purple-400" />
                            <h3 className="text-xl font-bold text-white capitalize">
                                {locale === 'es' ? 'Calendario' : 'Schedule'} {currentMonthName} {currentYear}
                            </h3>
                        </div>
                    </div>

                    <div className="p-4 md:p-6">
                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-gray-400">{s('rentalKart')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="text-gray-400">{s('specialEvent')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bike className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-400">{s('bikesAllowed')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                                <span className="text-gray-400">{locale === 'es' ? 'Hoy' : 'Today'}</span>
                            </div>
                        </div>

                        {/* Schedule Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{s('date')}</th>
                                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{s('morning')}</th>
                                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{s('afternoon')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {processedSchedule.length === 0 ? (
                                        <tr>
                                            <td colSpan={3} className="py-8 text-center text-gray-500">
                                                {locale === 'es' ? 'No hay eventos programados' : 'No upcoming events scheduled'}
                                            </td>
                                        </tr>
                                    ) : (
                                        processedSchedule.map((item) => (
                                            <tr
                                                key={`${item.year}-${item.month}-${item.day}`}
                                                className={`border-b border-slate-800 transition-colors ${item.isToday
                                                    ? 'bg-cyan-500/10 border-l-4 border-l-cyan-500'
                                                    : item.hasSpecialEvent
                                                        ? 'bg-purple-500/10'
                                                        : ''
                                                    }`}
                                            >
                                                <td className="py-4 px-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${item.isToday
                                                            ? 'bg-cyan-500/30 text-cyan-300 ring-2 ring-cyan-500'
                                                            : item.hasSpecialEvent
                                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                                : 'bg-slate-700 text-white'
                                                            }`}>
                                                            {item.day}
                                                        </div>
                                                        <div>
                                                            <span className="text-white font-medium capitalize">{item.dayName}</span>
                                                            {item.isToday && (
                                                                <span className="ml-2 text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-full">
                                                                    {locale === 'es' ? 'HOY' : 'TODAY'}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* Morning Column */}
                                                <td className="py-4 px-4">
                                                    {item.morningDisplay && (
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="text-gray-500 text-sm font-mono">
                                                                {item.morningDisplay.time}
                                                            </span>
                                                            <span className={`px-2 py-1 rounded text-xs font-medium ${item.morningDisplay.special
                                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                                : 'bg-green-500/20 text-green-400'
                                                                }`}>
                                                                {item.morningDisplay.activity}
                                                            </span>
                                                            {item.morningDisplay.activity.includes('KARTPETANOS') && (
                                                                <Trophy className="w-4 h-4 text-yellow-500" />
                                                            )}
                                                            {item.morningDisplay.bikesAllowed && (
                                                                <Bike className="w-4 h-4 text-blue-400" />
                                                            )}
                                                        </div>
                                                    )}
                                                </td>
                                                {/* Afternoon Column */}
                                                <td className="py-4 px-4">
                                                    {item.afternoonDisplay && (
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="text-gray-500 text-sm font-mono">
                                                                {item.afternoonDisplay.time}
                                                            </span>
                                                            <span className={`px-2 py-1 rounded text-xs font-medium ${item.afternoonDisplay.special
                                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                                : 'bg-green-500/20 text-green-400'
                                                                }`}>
                                                                {item.afternoonDisplay.activity}
                                                            </span>
                                                            {item.afternoonDisplay.bikesAllowed && (
                                                                <Bike className="w-4 h-4 text-blue-400" />
                                                            )}
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
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
                        {t('importantInfo')}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Rental Policy */}
                        <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 transition-colors">
                            <div className="flex items-center gap-2 text-yellow-500 mb-3">
                                <Users className="w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wide">{s('rentalKart')}</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('rentalPolicy')}</p>
                        </div>

                        {/* Electric Vehicle Policy */}
                        <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-5 hover:border-red-500/40 transition-colors">
                            <div className="flex items-center gap-2 text-red-500 mb-3">
                                <Zap className="w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wide">{t('electricPolicyTitle')}</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('electricPolicy')}</p>
                        </div>

                        {/* Private Kart Policy */}
                        <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
                            <div className="flex items-center gap-2 text-blue-500 mb-3">
                                <Clock className="w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wide">{t('privatePolicyTitle')}</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{t('privatePolicy')}</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
