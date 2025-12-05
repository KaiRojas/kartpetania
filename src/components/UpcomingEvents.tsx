"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Flag, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const registeredDrivers = [
    { number: 1, name: "Iván Machado", note: "Kartpetano 2024" },
    { number: 2, name: "Iván Vacas" },
    { number: 3, name: "Enrique Martín" },
    { number: 4, name: "Javier Palomeque" },
    { number: 5, name: "Tomás Carbó" },
    { number: 6, name: "Juan Francisco Casado" },
    { number: 7, name: "Lucio Serna" },
    { number: 8, name: "Luis Fernando Rodríguez" },
    { number: 9, name: "Adrián Fernández" },
    { number: 10, name: "Guillermo Fernández" },
    { number: 11, name: "Jose Daniel Fernández" },
    { number: 12, name: "Ianko Andonov" },
    { number: 13, name: "Marcos Martín" },
    { number: 14, name: "Manuel Serrano" },
    { number: 15, name: "Andrés Puche" },
    { number: 16, name: "Roberto Sanjuan" },
    { number: 17, name: "Francisco Fernández" },
    { number: 18, name: "Javier de los Mozos" },
    { number: 19, name: "Julian Wessel" },
    { number: 20, name: "Iván Vázquez" },
    { number: 21, name: "Emilio Cid" },
    { number: 22, name: "Fernando Arance" },
];

export default function UpcomingEvents() {
    const [showDrivers, setShowDrivers] = useState(false);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-red-950/20 to-slate-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[url('/images/kartpetanos-2025.jpg')] bg-cover bg-center opacity-5" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                        <Calendar className="w-4 h-4" />
                        <span>UPCOMING EVENT</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight">
                        Don&apos;t <span className="text-red-500">Miss Out</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid lg:grid-cols-2 gap-8 items-start"
                >
                    {/* Event Poster */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10">
                            <Image
                                src="/images/kartpetanos-2025.jpg"
                                alt="KARTPETANOS 2025 Event Poster"
                                fill
                                className="object-cover"
                            />
                            {/* Date Badge */}
                            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3 text-center border border-red-500/50">
                                <div className="text-red-500 text-xs font-bold uppercase">December</div>
                                <div className="text-white text-3xl font-black">14</div>
                                <div className="text-gray-400 text-xs">Sunday</div>
                            </div>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-2">
                                KARTPETANOS <span className="text-red-500">2025</span>
                            </h3>
                            <p className="text-xl text-yellow-400 font-bold italic">
                                One more year, the bravest meet in KARTPETANIA! 🔥
                            </p>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            An individual endurance race: <strong className="text-white">100 laps</strong> on the &quot;chicane&quot; layout
                            or <strong className="text-white">80 laps</strong> on the &quot;competition&quot; layout if exceeding 20 registered drivers.
                            A challenge where the coveted <strong className="text-red-400">KARTPETANO 2025</strong> statuette is at stake!
                        </p>

                        {/* Event Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                                <h4 className="font-bold text-white">Unique Trophy</h4>
                                <p className="text-sm text-gray-400">The KARTPETANO 2025 statuette - within reach of very few</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <Flag className="w-8 h-8 text-green-500 mb-2" />
                                <h4 className="font-bold text-white">BIREL 390cc</h4>
                                <p className="text-sm text-gray-400">Specially prepared rental kart fleet</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-4 border border-red-500/30">
                            <p className="text-white font-medium">
                                🎁 Among all participants: <span className="text-yellow-400 font-bold">4 FREE runs in KART 390CC</span> will be raffled!
                            </p>
                        </div>

                        {/* Registration Status */}
                        <div className="bg-red-950/50 rounded-xl p-4 border border-red-500/30">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-red-500" />
                                    <span className="font-bold text-white">Registered Drivers</span>
                                </div>
                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse w-fit">
                                    GRID FULL - 22 DRIVERS
                                </span>
                            </div>

                            <button
                                onClick={() => setShowDrivers(!showDrivers)}
                                className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-2"
                            >
                                <span className="text-sm">{showDrivers ? 'Hide' : 'View'} Driver List</span>
                                {showDrivers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>

                            {showDrivers && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-3 grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2"
                                >
                                    {registeredDrivers.map((driver) => (
                                        <div
                                            key={driver.number}
                                            className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2"
                                        >
                                            <span className="w-6 h-6 bg-red-600 text-white text-xs font-bold rounded flex items-center justify-center">
                                                {driver.number}
                                            </span>
                                            <span className="text-sm text-gray-300 truncate">
                                                {driver.name}
                                                {driver.note && (
                                                    <span className="text-yellow-500 text-xs ml-1">★</span>
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Download Button */}
                        <a
                            href="/docs/kartpetanos-regulation-2025.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-red-600/30"
                        >
                            <Download className="w-5 h-5" />
                            Download Regulation (PDF)
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
