"use client";

import { MapPin, Calendar, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function LocationSection() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight">
                        Find <span className="text-red-600">Us</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Located in La Higuera, Segovia - just a short drive from Madrid
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Aerial Directions Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
                    >
                        <Image
                            src="/images/location-aerial.jpg"
                            alt="Aerial view of Kartpetania circuit location with directions"
                            width={800}
                            height={500}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Address Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-red-600/20 p-2 rounded-lg">
                                    <MapPin className="w-5 h-5 text-red-500" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Address</h3>
                            </div>
                            <div className="text-gray-300 text-sm leading-relaxed">
                                <p className="font-semibold text-white">Circuito Kartpetania</p>
                                <p>Calle Baja, 4</p>
                                <p>40191 La Higuera, Segovia</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <a
                                href="https://www.google.com/maps/dir//41.017533,-4.090610/@41.017533,-4.09061,15z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2.5 text-sm font-bold transition-all hover:bg-gray-200 hover:scale-[1.02]"
                            >
                                <Navigation className="w-4 h-4" />
                                Get Directions
                            </a>
                            <Link
                                href="/horarios"
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 text-white px-4 py-2.5 text-sm font-bold transition-all hover:bg-red-700 hover:scale-[1.02]"
                            >
                                <Calendar className="w-4 h-4" />
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Google Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 h-[300px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
                >
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?q=41.017533,-4.090610&z=14&output=embed"
                        className="absolute inset-0 filter grayscale hover:grayscale-0 transition-all duration-500"
                        title="Kartpetania Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
