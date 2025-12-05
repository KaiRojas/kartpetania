"use client";

import { motion } from 'framer-motion';
import { Scale, Building2, Mail, Phone, MapPin, FileText, ScrollText } from 'lucide-react';

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-gray-500/20 rounded-full mb-4">
                        <Scale className="w-8 h-8 text-gray-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tight mb-2">
                        Legal Notice
                    </h1>
                    <p className="text-gray-400">
                        Aviso Legal
                    </p>
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8">
                {/* LSSICE Compliance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10"
                >
                    <p className="text-gray-300 leading-relaxed">
                        In compliance with Article 10 of Law 34/2002, of July 11, on Information Society Services
                        and Electronic Commerce (LSSICE), the identifying data of the company are set out below.
                    </p>
                </motion.div>

                {/* Company Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Building2 className="w-6 h-6 text-red-500" />
                        Company Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Company Name</h3>
                            <p className="text-white font-bold text-lg">KARTING DIEZ KARTPETANIA SL</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Tax Identification Number (CIF)</h3>
                            <p className="text-white font-bold text-lg">B40236051</p>
                        </div>
                    </div>
                </motion.div>

                {/* Registered Office */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-red-500" />
                        Registered Office
                    </h2>
                    <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-white font-semibold">POLG. 2 - PARC. 36 S/N</p>
                        <p className="text-gray-300">40191 LA HIGUERA</p>
                        <p className="text-gray-400">Segovia, Spain</p>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Mail className="w-6 h-6 text-red-500" />
                        Contact Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Email</h3>
                            <a href="mailto:info@kartpetania.com" className="text-red-400 hover:text-red-300 font-semibold transition-colors text-lg">
                                info@kartpetania.com
                            </a>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Phone</h3>
                            <a href="tel:+34620888997" className="text-red-400 hover:text-red-300 font-semibold transition-colors text-lg">
                                620 888 997
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Registration Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-red-500" />
                        Registration Details in the Commercial Register
                    </h2>
                    <p className="text-gray-300 leading-relaxed bg-white/5 rounded-xl p-4">
                        KARTING DIEZ KARTPETANIA SL, a limited liability company established in Segovia in 2009,
                        by Public Deed number 1414, before the notary Julio Vazquez y Velasco, of the Illustrious College of Notaries.
                    </p>
                </motion.div>

                {/* Terms of Use */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-slate-800/30 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <ScrollText className="w-6 h-6 text-red-500" />
                        Terms of Use
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            This website has been created by KARTING DIEZ KARTPETANIA SL for informational purposes
                            and for the personal use of its users. This Legal Notice aims to regulate access to and
                            use of this website, as well as the relationship between the website and its users.
                        </p>
                        <p className="font-semibold text-white">
                            By accessing this website, you accept the following terms and conditions:
                        </p>
                        <ul className="space-y-3 ml-4">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>Access to this website is the sole responsibility of the users.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>Simply accessing this website does not imply establishing any type of commercial relationship between KARTING DIEZ KARTPETANIA SL and the user.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>Accessing and browsing this website implies acceptance and knowledge of the legal notices, conditions and terms of use contained herein.</span>
                            </li>
                        </ul>
                        <p className="pt-4 border-t border-white/10 mt-6">
                            The website owner may offer services or products that may be subject to their own specific
                            terms and conditions which, as applicable, may replace, supplement and/or modify these terms
                            and conditions, and which will be communicated to the user in each specific case.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
