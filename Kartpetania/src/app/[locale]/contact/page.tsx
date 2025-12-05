"use client";

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch {
            setFormStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hidden form for Netlify to detect during build */}
            <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>

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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Quick Contact Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-green-900/20"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full">
                            <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-green-100 text-sm uppercase tracking-wide font-medium">Fastest Response</p>
                            <p className="text-white text-2xl font-bold">WhatsApp: 620 888 997</p>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/34620888997"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center gap-2"
                    >
                        Open WhatsApp
                        <Send className="w-4 h-4" />
                    </a>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{t('infoTitle')}</h3>

                        <div className="space-y-4">
                            {/* Address Card */}
                            <div className="bg-gradient-to-br from-red-900/20 to-slate-900 rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-500/20 rounded-xl">
                                        <MapPin className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">{t('addressLabel')}</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            KARTING DIEZ KARTPETANIA S.L.<br />
                                            Calle Baja, 4<br />
                                            40191 La Higuera, Segovia
                                        </p>
                                        <p className="text-sm italic text-gray-500 mt-2">{t('addressNote')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-xl">
                                        <Phone className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{t('phoneLabel')}</h4>
                                        <p className="text-gray-300 text-lg">+34 620 888 997</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-500/20 rounded-xl">
                                        <Mail className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{t('emailLabel')}</h4>
                                        <p className="text-gray-300">info@kartpetania.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.687358368564!2d-4.040186923499786!3d40.87989502737604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41137c86d8001b%3A0x608035c60273934d!2sKartpetania!5e0!3m2!1sen!2ses!4v1709660000000!5m2!1sen!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900 rounded-3xl p-8 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{t('formTitle')}</h3>

                        {formStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-400">We&apos;ll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="mt-6 text-red-400 hover:text-red-300 font-medium"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Hidden fields for Netlify */}
                                <input type="hidden" name="form-name" value="contact" />
                                <p className="hidden">
                                    <label>
                                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                                    </label>
                                </p>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        {t('nameLabel')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white placeholder-gray-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        {t('emailLabel')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white placeholder-gray-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        {t('messageLabel')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white placeholder-gray-500 transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                {formStatus === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
                                        Something went wrong. Please try again or contact us via WhatsApp.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/30"
                                >
                                    {formStatus === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            {t('submitButton')}
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
