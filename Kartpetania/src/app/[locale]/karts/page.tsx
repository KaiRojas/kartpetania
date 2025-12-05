"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Shield, Clock, AlertTriangle, CheckCircle, Users, Gauge, ChevronRight, X, Zap, Trophy, Flame, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function KartsPage() {
    const t = useTranslations('KartsPage');
    const [showRulesModal, setShowRulesModal] = useState(false);
    const [activePackage, setActivePackage] = useState<string | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (showRulesModal || activePackage) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => document.body.classList.remove('modal-open');
    }, [showRulesModal, activePackage]);


    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/karts/kart-fleet-hero.png"
                        alt="Kartpetania Fleet"
                        fill
                        className="object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h1 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4 drop-shadow-lg">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        {t('subtitle')}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-32">

                {/* 270cc Kart - Flagship */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Trophy className="w-4 h-4" />
                            <span>{t('flagshipBadge')}</span>
                        </div>
                        <h2 className="text-5xl font-black text-white italic uppercase mb-4">270cc Honda Kart</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                            Karts equipped with a 270cc Honda 4-stroke engine. This engine will delight everyone, from complete beginners who have never driven a kart before, to those with a bit more experience.
                        </p>
                    </div>

                    {/* Kart Image & Info */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 rounded-3xl overflow-hidden border border-orange-500/30 mb-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="relative h-96 lg:h-[500px]">
                                <Image
                                    src="/images/karts/adult-270cc.png"
                                    alt="270cc Kart"
                                    fill
                                    className="object-contain p-8"
                                />
                            </div>
                            <div className="p-8 lg:p-12">
                                <h3 className="text-3xl font-bold text-white mb-6">{t('perfectForEveryone')}</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                        <p className="text-gray-300"><span className="font-semibold text-white">{t('ages12Plus')}</span> {t('ages12PlusNote')}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                        <p className="text-gray-300"><span className="font-semibold text-white">{t('noUpperLimit')}</span> {t('noUpperLimitNote')}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                        <p className="text-gray-300"><span className="font-semibold text-white">{t('trackRental')}</span> {t('trackRentalNote')}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                        <p className="text-gray-300"><span className="font-semibold text-white">{t('helmetTiming')}</span> {t('helmetTimingNote')}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                        <p className="text-gray-300"><span className="font-semibold text-white">{t('fullInsurance')}</span> {t('fullInsuranceNote')}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                        <p className="text-gray-300"><span className="font-semibold text-white">{t('professionalInstruction')}</span> {t('professionalInstructionNote')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Packages */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Track Session */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <Timer className="w-5 h-5 text-orange-400" />
                                <h3 className="text-xl font-bold text-white">{t('trackSession')}</h3>
                            </div>
                            <div className="text-4xl font-black text-orange-400 mb-1">€15</div>
                            <p className="text-gray-400 text-sm mb-4">{t('perPerson')}</p>
                            <ul className="space-y-2 text-sm text-gray-300 flex-grow">
                                <li>• {t('tenMinutes')}</li>
                                <li>• {t('timesheetProvided')}</li>
                                <li>• {t('noMinPeople')}</li>
                                <li>• {t('groupsCanMix')}</li>
                            </ul>
                            <button
                                onClick={() => setActivePackage('track-session')}
                                className="mt-4 text-orange-400 hover:text-orange-300 text-sm font-semibold underline text-left"
                            >
                                {t('seeMore')}
                            </button>
                        </div>

                        {/* Sprint Race */}
                        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <Gauge className="w-5 h-5 text-blue-400" />
                                <h3 className="text-xl font-bold text-white">{t('sprintRace')}</h3>
                            </div>
                            <div className="text-4xl font-black text-blue-400 mb-1">€30</div>
                            <p className="text-gray-400 text-sm mb-4">{t('perPerson')}</p>
                            <ul className="space-y-2 text-sm text-gray-300 flex-grow">
                                <li>• {t('fiveMinQualifying')}</li>
                                <li>• {t('tenLapRace')}</li>
                                <li>• {t('timesheetProvided')}</li>
                                <li>• {t('fiveToFifteenRequired')}</li>
                            </ul>
                            <button
                                onClick={() => setActivePackage('sprint-race')}
                                className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold underline text-left"
                            >
                                {t('seeMore')}
                            </button>
                        </div>

                        {/* Friends Cup */}
                        <div className="bg-gradient-to-br from-green-900/20 to-slate-900 rounded-2xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="w-5 h-5 text-green-400" />
                                <h3 className="text-xl font-bold text-white">{t('friendsCup')}</h3>
                            </div>
                            <div className="text-4xl font-black text-green-400 mb-1">€45</div>
                            <p className="text-gray-400 text-sm mb-4">{t('perPerson')}</p>
                            <ul className="space-y-2 text-sm text-gray-300 flex-grow">
                                <li>• {t('fifteenMinQualifying')}</li>
                                <li>• {t('twelveLapRace')}</li>
                                <li>• {t('fiveMinBreak')}</li>
                                <li>• {t('fiveToFifteenRequired')}</li>
                            </ul>
                            <button
                                onClick={() => setActivePackage('friends-cup')}
                                className="mt-4 text-green-400 hover:text-green-300 text-sm font-semibold underline text-left"
                            >
                                {t('seeMore')}
                            </button>
                        </div>

                        {/* Endurance */}
                        <div className="relative bg-gradient-to-br from-red-900/30 to-slate-900 rounded-2xl p-6 border-2 border-red-500/50 hover:border-red-500 transition-all overflow-hidden flex flex-col">
                            <div className="absolute -top-1 -right-8 bg-gradient-to-r from-red-500 to-orange-500 text-black text-xs font-bold px-8 py-1 rotate-45">{t('intenseBadge')}</div>
                            <div className="flex items-center gap-2 mb-4">
                                <Flame className="w-5 h-5 text-red-400" />
                                <h3 className="text-xl font-bold text-white">{t('endurance')}</h3>
                            </div>
                            <div className="text-4xl font-black text-red-400 mb-1">€55</div>
                            <p className="text-gray-400 text-sm mb-4">{t('perPerson')}</p>
                            <ul className="space-y-2 text-sm text-gray-300 flex-grow">
                                <li>• {t('tenMinQualifying')}</li>
                                <li>• {t('thirtyLapRace')}</li>
                                <li>• {t('noBreaks')}</li>
                                <li>• {t('fiveToFifteenRequired')}</li>
                            </ul>
                            <button
                                onClick={() => setActivePackage('endurance')}
                                className="mt-4 text-red-400 hover:text-red-300 text-sm font-semibold underline text-left"
                            >
                                {t('seeMore')}
                            </button>
                        </div>
                    </div>
                </motion.section>

                {/* 390cc Kart - Dangerous & Cool */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                >
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent rounded-3xl" />

                    <div className="relative bg-gradient-to-br from-red-950/40 via-slate-900 to-black rounded-3xl overflow-hidden border-2 border-red-600/50 shadow-2xl shadow-red-900/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

                        <div className="relative p-8 lg:p-12">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-red-500/30">
                                    <Zap className="w-4 h-4" />
                                    <span>{t('extremePerformance')}</span>
                                </div>
                                <h2 className="text-5xl font-black text-white italic uppercase mb-4 drop-shadow-lg">390cc Honda Kart</h2>
                                <p className="text-red-200 text-lg font-semibold">{t('390ccSubtitle')}</p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div className="relative h-96 lg:h-[500px] order-2 lg:order-1">
                                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl" />
                                    <Image
                                        src="/images/karts/adult-390cc.png"
                                        alt="390cc Kart"
                                        fill
                                        className="object-contain p-4 drop-shadow-2xl"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                                        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                            <Flame className="w-8 h-8 text-red-500" />
                                            {t('championshipGrade')}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {t('390ccDesc')}
                                        </p>

                                        <div className="bg-red-950/50 rounded-xl p-6 border border-red-500/30 mb-6 text-center">
                                            <div className="text-5xl font-black text-red-400 mb-2">€21</div>
                                            <p className="text-gray-300">{t('perTenMinSession')}</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                                                <Trophy className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                                <p className="text-gray-300 text-sm">{t('usedForChampionships')}</p>
                                            </div>
                                            <div className="flex items-start gap-3 bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20">
                                                <AlertTriangle className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                                                <p className="text-gray-300 text-sm"><span className="text-yellow-400 font-bold">{t('experienceRequired')}</span> {t('experienceRequiredNote')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Children's Karts Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Shield className="w-4 h-4" />
                            <span>{t('safeAndFun')}</span>
                        </div>
                        <h2 className="text-4xl font-black text-white italic uppercase">{t('kidsTitle')}</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t('kidsDesc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Biplaza */}
                        <div className="group bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                            <div className="relative h-72 w-full bg-gradient-to-b from-slate-800/50 to-transparent overflow-hidden">
                                <Image
                                    src="/images/karts/kids-biplaza.png"
                                    alt="Biplaza Kart"
                                    fill
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                                        {t('biplazaPrice')}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <Users className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-2xl font-bold text-white">{t('biplazaTitle')}</h3>
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">{t('biplazaDesc')}</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm">{t('kidsFeature1')}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm">{t('kidsFeature2')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Junior */}
                        <div className="group bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                            <div className="relative h-72 w-full bg-gradient-to-b from-slate-800/50 to-transparent overflow-hidden">
                                <Image
                                    src="/images/karts/kids-junior.png"
                                    alt="Junior Kart"
                                    fill
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                                        {t('juniorPrice')}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <Gauge className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-2xl font-bold text-white">{t('juniorTitle')}</h3>
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">{t('juniorDesc')}</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm">{t('kidsFeature1')}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm">{t('kidsFeature2')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Safety & Rules */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* Safety */}
                    <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900 rounded-2xl p-8 border border-yellow-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-yellow-500/20 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t('safetyTitle')}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{t('safetyDesc')}</p>
                    </div>

                    {/* Rules */}
                    <div className="bg-gradient-to-br from-red-900/20 to-slate-900 rounded-2xl p-8 border border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                                <Shield className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t('rulesTitle')}</h3>
                        </div>
                        <ul className="space-y-3 mb-4">
                            {['rule1', 'rule2', 'rule3', 'rule4'].map((rule) => (
                                <li key={rule} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <ChevronRight className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                    <span>{t(rule)}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowRulesModal(true)}
                            className="text-red-400 hover:text-red-300 text-sm font-semibold underline"
                        >
                            {t('seeDetailsHere')}
                        </button>
                    </div>
                </motion.section>

                {/* Cancellation Policy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-slate-800/50 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-yellow-500" />
                        {t('cancellationPolicyTitle')}
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            {t('cancellationText1')}
                        </p>
                        <p className="text-yellow-200 bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20">
                            <span className="font-semibold">{t('cancellationImportant')}</span> {t('cancellationArrival')}
                        </p>
                        <p>
                            {t('cancellationRefund')}
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* Rules Modal */}
            {showRulesModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide border border-white/10"
                    >
                        <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white">{t('completeRulesTitle')}</h2>
                            <button
                                onClick={() => setShowRulesModal(false)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>
                        <div className="p-6 space-y-6 text-gray-300">
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                                <p className="text-blue-200 font-semibold">
                                    {t('rulesImportantNote')}
                                </p>
                            </div>

                            <p className="leading-relaxed">
                                {t('rulesIntro')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleNeckItems')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleFollowInstructions')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleContract')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleLeaveTrack')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleProhibitStart')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleHelmetRequired')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleWinterClothing')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleNoSmoking')}</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold shrink-0">*</span>
                                    <p>{t('ruleInsurance')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-0 bg-slate-900 border-t border-white/10 p-6">
                            <button
                                onClick={() => setShowRulesModal(false)}
                                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                            >
                                {t('closeButton')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Package Details Modal */}
            {activePackage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide border border-white/10"
                    >
                        {activePackage === 'track-session' && (
                            <>
                                <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-500 p-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Timer className="w-6 h-6" />
                                        Track Session
                                    </h2>
                                    <button onClick={() => setActivePackage(null)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <div className="p-6 space-y-6 text-gray-300">
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-orange-400 mb-2">€15</div>
                                        <p className="text-gray-400">per person</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">The Experience</h3>
                                        <p className="leading-relaxed">
                                            This is your entry into karting - 10 minutes of pure driving pleasure on our 980m track.
                                            No competition, no pressure - just you, the kart, and the open track. Perfect for first-timers
                                            wanting to get comfortable or experienced drivers looking for casual laps.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">What's Included</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> 10 minutes of track time</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Timesheet with your lap times</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Helmet and safety equipment</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Full insurance coverage</li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/30">
                                        <h3 className="font-bold text-orange-300 mb-2">Flexibility</h3>
                                        <p className="text-sm">No minimum number of people required. You can come solo or with friends. Different groups may share the track during your session.</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {activePackage === 'sprint-race' && (
                            <>
                                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500 p-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Gauge className="w-6 h-6" />
                                        Sprint Race
                                    </h2>
                                    <button onClick={() => setActivePackage(null)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <div className="p-6 space-y-6 text-gray-300">
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-blue-400 mb-2">€30</div>
                                        <p className="text-gray-400">per person</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">The Experience</h3>
                                        <p className="leading-relaxed">
                                            Feel the thrill of real racing! Start with a 5-minute qualifying session where you push to set your
                                            fastest lap - this determines your starting position. Then it's race time: 10 laps of wheel-to-wheel
                                            competition with your group. First to complete 10 laps gets the checkered flag!
                                        </p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">Race Format</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 5-minute qualifying session</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Grid positions based on fastest lap</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 10-lap race (or 13 min max)</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> No break between qualifying and race</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Official timesheet with results</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/30">
                                        <h3 className="font-bold text-blue-300 mb-2">Group Requirements</h3>
                                        <p className="text-sm">Minimum 5 people, maximum 15. Your group races exclusively - no mixing with other groups. Perfect for friends, colleagues, or team outings.</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {activePackage === 'friends-cup' && (
                            <>
                                <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-500 p-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Users className="w-6 h-6" />
                                        Friends Cup
                                    </h2>
                                    <button onClick={() => setActivePackage(null)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <div className="p-6 space-y-6 text-gray-300">
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-green-400 mb-2">€45</div>
                                        <p className="text-gray-400">per person</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">The Experience</h3>
                                        <p className="leading-relaxed">
                                            The complete racing experience! Enjoy an extended 15-minute qualifying session to really dial in your
                                            fastest laps and find the perfect racing line. After a 5-minute break to catch your breath and strategize,
                                            it's time for a 12-lap race. More laps mean more overtaking opportunities and dramatic battles!
                                        </p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">Race Format</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 15-minute qualifying session</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 5-minute break between sessions</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 12-lap race (or 15 min max)</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Grid based on qualifying times</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Full timesheet and results</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/30">
                                        <h3 className="font-bold text-green-300 mb-2">Perfect For Groups</h3>
                                        <p className="text-sm">Minimum 5 people, maximum 15. Exclusive use of the track for your group. The break between qualifying and race adds to the anticipation and lets everyone discuss tactics!</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {activePackage === 'endurance' && (
                            <>
                                <div className="sticky top-0 bg-gradient-to-r from-red-600 to-orange-500 p-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Flame className="w-6 h-6" />
                                        Endurance Race
                                    </h2>
                                    <button onClick={() => setActivePackage(null)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <div className="p-6 space-y-6 text-gray-300">
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-red-400 mb-2">€55</div>
                                        <p className="text-gray-400">per person</p>
                                    </div>
                                    <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                                        <p className="text-red-200 font-bold text-center text-lg">⚠️ FOR THE BRAVEST ONLY ⚠️</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">The Ultimate Challenge</h3>
                                        <p className="leading-relaxed">
                                            This is the ultimate test of skill, stamina, and racecraft. After a 10-minute qualifying session
                                            to establish grid positions, you'll face 30 grueling laps with <span className="text-red-400 font-bold">NO BREAKS</span>.
                                            Strategy becomes crucial - push too hard early and tire out, conserve too much and lose positions.
                                            Only the fittest and fastest will triumph!
                                        </p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <h3 className="font-bold text-white mb-3">Race Format</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> 10-minute qualifying session</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> 30-lap race (or 35 min max)</li>
                                            <li className="flex items-center gap-2"><Flame className="w-4 h-4 text-red-400" /> No breaks - continuous racing!</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> Full results and timesheet</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/30">
                                        <h3 className="font-bold text-yellow-300 mb-2">Physical Demands</h3>
                                        <p className="text-sm">This race requires physical fitness and mental focus. Recommended for experienced kart drivers who are comfortable with sustained high-intensity driving. Stay hydrated before the event!</p>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="sticky bottom-0 bg-slate-900 border-t border-white/10 p-6">
                            <button
                                onClick={() => setActivePackage(null)}
                                className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
