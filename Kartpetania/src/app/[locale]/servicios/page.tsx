"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Map, Coffee, Users, Trophy, Maximize, Wind, ChevronRight, Bed, Flag, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section - Circuit Aerial */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src="/images/services/circuit-aerial.jpg"
                    alt="Kartpetania Circuit Aerial View"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tight mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0"
                >
                    <div className="max-w-5xl mx-auto px-4 transform translate-y-1/2">
                        <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 grid grid-cols-3 divide-x divide-white/10">
                            <div className="p-6 text-center">
                                <div className="text-3xl md:text-4xl font-black text-red-500 mb-1">1,450m</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Track Length</div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-3xl md:text-4xl font-black text-red-500 mb-1">8.5m</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Track Width</div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-3xl md:text-4xl font-black text-red-500 mb-1">12+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Layouts</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-32">

                {/* Track Layouts */}
                <motion.section {...fadeInUp}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Map className="w-4 h-4" />
                            <span>Circuit Configurations</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase">{t('layoutsTitle')}</h2>
                    </div>

                    <div className="text-center mb-4">
                        <p className="text-gray-400 max-w-2xl mx-auto">Although up to 12 different layouts are possible, the most common are the 3 detailed below:</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Competition Layout */}
                        <div className="group relative bg-gradient-to-br from-red-900/20 to-slate-900 rounded-3xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300">
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">1,200m</span>
                            </div>
                            <div className="relative h-56 w-full bg-gradient-to-b from-slate-800/50 to-transparent">
                                <Image
                                    src="/images/services/layout-red.png"
                                    alt="Competition Layout"
                                    fill
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 pt-0">
                                <div className="flex items-center gap-2 mb-3">
                                    <Flag className="w-5 h-5 text-red-500" />
                                    <h3 className="text-xl font-bold text-white">Competition</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    This isn't the longest variant, but it has a length of <span className="text-white font-semibold">1,200 meters</span>. It's used for 2-stroke and 4-stroke karting championships, motorcycle races, exhibitions, and touring car track days. This variant utilizes the entire finish straight: <span className="text-white font-semibold">175 meters</span>.
                                </p>
                            </div>
                        </div>

                        {/* Rental Layout */}
                        <div className="group relative bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">980m</span>
                            </div>
                            <div className="relative h-56 w-full bg-gradient-to-b from-slate-800/50 to-transparent">
                                <Image
                                    src="/images/services/layout-purple.png"
                                    alt="Rental Layout"
                                    fill
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 pt-0">
                                <div className="flex items-center gap-2 mb-3">
                                    <Gauge className="w-5 h-5 text-purple-500" />
                                    <h3 className="text-xl font-bold text-white">Kart Rental</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A variant of more than <span className="text-white font-semibold">980 meters</span> of track, which will delight the drivers who use our rental karts. Perfect for all skill levels.
                                </p>
                            </div>
                        </div>

                        {/* Small Track Layout */}
                        <div className="group relative bg-gradient-to-br from-cyan-900/20 to-slate-900 rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">540m</span>
                            </div>
                            <div className="relative h-56 w-full bg-gradient-to-b from-slate-800/50 to-transparent">
                                <Image
                                    src="/images/services/layout-blue.png"
                                    alt="Small Track Layout"
                                    fill
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 pt-0">
                                <div className="flex items-center gap-2 mb-3">
                                    <Users className="w-5 h-5 text-cyan-500" />
                                    <h3 className="text-xl font-bold text-white">Small Track</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    It has almost <span className="text-white font-semibold">540 meters</span> of track and is generally used as an auxiliary track, for introductory courses or learning, and radio control championships.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Facilities */}
                <motion.section {...fadeInUp}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Coffee className="w-4 h-4" />
                            <span>Relax & Enjoy</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase">{t('facilitiesTitle')}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
                            We have a <span className="text-white font-semibold">300m² cafeteria</span> with TV, Wi-Fi connection and great views of the circuit, from where you can see the entire karting track.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Cafeteria & Catering */}
                        <div className="group relative h-96 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/services/cafeteria-interior.jpg"
                                alt="Cafeteria"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Cafeteria & Catering</h3>
                                <p className="text-orange-100 text-sm mb-2 font-semibold">Meals organized by request:</p>
                                <ul className="text-white/90 text-sm space-y-1 mb-3">
                                    <li>• Paellas</li>
                                    <li>• Barbecues</li>
                                    <li>• Hamburgers & Sandwiches</li>
                                </ul>
                                <a href="https://wa.me/34620888997" className="text-yellow-300 text-sm font-semibold hover:underline">
                                    WhatsApp: 620 888 997
                                </a>
                            </div>
                        </div>

                        {/* Multipurpose Room */}
                        <div className="group relative h-96 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/services/terrace-view.png"
                                alt="Multipurpose Room"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Multipurpose Room</h3>
                                <p className="text-blue-100 text-sm leading-relaxed">
                                    <span className="font-semibold">150 m²</span> warehouse used as a multipurpose room for:
                                </p>
                                <ul className="text-white/90 text-sm space-y-1 mt-2">
                                    <li>• Conferences</li>
                                    <li>• Exhibitions</li>
                                    <li>• Courses & Training</li>
                                </ul>
                            </div>
                        </div>

                        {/* Terrace */}
                        <div className="group relative h-96 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/services/terrace-seating.jpg"
                                alt="Terrace"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Panoramic Terrace</h3>
                                <p className="text-green-100 text-sm leading-relaxed">
                                    Enjoy sunny days on our wonderful terrace & grill, with the best views of the circuit and the <span className="font-semibold">Carpetovetonic mountain range</span> — known since Roman times.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Events & Activities */}
                <motion.section {...fadeInUp}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/images/services/action-karts-new.jpg"
                                    alt="Kartpetania Circuit Aerial View"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 shadow-xl">
                                <Trophy className="w-10 h-10 text-white mb-2" />
                                <div className="text-white font-bold text-lg">50,000 m²</div>
                                <div className="text-yellow-100 text-sm">Total Area</div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    <Trophy className="w-4 h-4" />
                                    <span>Experiences</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-4">{t('eventsTitle')}</h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {t('eventsDesc')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: Users, text: 'activity1', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
                                    { icon: Maximize, text: 'activity2', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
                                    { icon: Wind, text: 'activity3', color: 'bg-green-500/10 text-green-400 border-green-500/20' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 p-4 rounded-xl border ${item.color} hover:scale-[1.02] transition-transform cursor-pointer`}
                                    >
                                        <item.icon className="w-6 h-6" />
                                        <span className="text-white font-medium">{t(item.text)}</span>
                                        <ChevronRight className="w-5 h-5 ml-auto opacity-50" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Accommodations */}
                <motion.section {...fadeInUp}>
                    <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-3xl p-8 md:p-12 border border-blue-500/20">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    <Bed className="w-4 h-4" />
                                    <span>Nearby Stay</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase">{t('accommodationsTitle')}</h2>
                            </div>
                            <p className="text-gray-400 max-w-md">{t('accommodationsDesc')}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* La Posada */}
                            <a href="https://www.booking.com/hotel/es/hostal-la-posada-espirdo.html" target="_blank" rel="noopener noreferrer" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src="/images/services/la-posada.jpg"
                                        alt="Hostal-Restaurante La Posada"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">2 km</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">Hostal-Restaurante &quot;LA POSADA&quot;</h3>
                                    <p className="text-gray-400 text-sm">Espirdo</p>
                                </div>
                            </a>

                            {/* La Nava de Tizneros */}
                            <a href="https://www.escapadarural.com/casa-rural/segovia/la-nava-de-tizneros" target="_blank" rel="noopener noreferrer" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src="/images/services/la-nava.jpg"
                                        alt="La Nava de Tizneros"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">3 km</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">LA NAVA DE TIZNEROS</h3>
                                    <p className="text-gray-400 text-sm">Sleeps 8 people</p>
                                </div>
                            </a>

                            {/* La Serrana */}
                            <a href="https://www.laserranasegovia.es" target="_blank" rel="noopener noreferrer" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                                <div className="relative h-40 overflow-hidden bg-white flex items-center justify-center">
                                    <Image
                                        src="/images/services/la-serrana.jpg"
                                        alt="La Serrana"
                                        fill
                                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">600 m</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">&quot;LA SERRANA&quot;</h3>
                                    <p className="text-gray-400 text-sm">Rural house • 12-14 people • Private patio for vehicles</p>
                                </div>
                            </a>

                            {/* La Casona de Espirdo */}
                            <a href="https://www.escapadarural.com/casa-rural/segovia/la-casona-de-espirdo" target="_blank" rel="noopener noreferrer" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src="/images/services/casona-espirdo.jpg"
                                        alt="La Casona de Espirdo"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">2 km</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">Casa Rural &quot;LA CASONA DE ESPIRDO&quot;</h3>
                                    <p className="text-gray-400 text-sm">Espirdo</p>
                                </div>
                            </a>

                            {/* Apartamentos Aralso */}
                            <a href="https://www.booking.com/hotel/es/apartamentos-aralso-sotillo.html" target="_blank" rel="noopener noreferrer" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                                <div className="relative h-40 overflow-hidden bg-white flex items-center justify-center">
                                    <Image
                                        src="/images/services/aralso.jpg"
                                        alt="Hotel Apartamento Aralso"
                                        fill
                                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">5 km</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">Apartamentos ARALSO</h3>
                                    <p className="text-gray-400 text-sm">La Lastrilla • Easy parking • Quiet area</p>
                                </div>
                            </a>

                            {/* El Canto del Pajaro */}
                            <a href="https://www.escapadarural.com/casa-rural/segovia/el-canto-del-pajaro" target="_blank" rel="noopener noreferrer" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-900/50 to-slate-800 flex items-center justify-center">
                                    <Bed className="w-12 h-12 text-blue-400/50" />
                                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">6 km</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">Casa Rural &quot;EL CANTO DEL PÁJARO&quot;</h3>
                                    <p className="text-gray-400 text-sm">Adrada de Pirón • Sleeps 10-16</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
