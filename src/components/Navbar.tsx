"use client";

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useSeasonalEffects } from './SeasonalEffectsContext';

export default function Navbar() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const seasonalEffects = useSeasonalEffects();

    const links = [
        { href: '/', label: t('home') },
        { href: '/horarios', label: t('schedule') },
        { href: '/servicios', label: t('services') },
        { href: '/karts', label: t('karts') },
        { href: '/tarifas', label: t('rates') },
        { href: '/contact', label: t('contact') },
    ];

    return (
        <nav className="bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="Kartpetania Logo"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <span className="text-2xl font-bold italic text-white">
                                KART<span className="text-red-600">PETANIA</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
                                {seasonalEffects.currentSeason === 'winter' && (
                                    <button
                                        onClick={seasonalEffects.toggle}
                                        className={`text-sm hover:scale-110 transition-all ${seasonalEffects.isEnabled
                                            ? 'opacity-100'
                                            : 'opacity-50 hover:opacity-100'
                                            }`}
                                        title={seasonalEffects.isEnabled ? 'Turn off snow' : 'Turn on snow'}
                                    >
                                        ❄️
                                    </button>
                                )}
                                <Link
                                    href={pathname}
                                    locale="es"
                                    className="hover:scale-110 transition-transform"
                                    title="Español"
                                >
                                    <svg className="w-6 h-5 rounded-sm shadow-sm" viewBox="0 0 640 480">
                                        <rect fill="#c60b1e" width="640" height="480" />
                                        <rect fill="#ffc400" y="120" width="640" height="240" />
                                    </svg>
                                </Link>
                                <Link
                                    href={pathname}
                                    locale="en"
                                    className="hover:scale-110 transition-transform"
                                    title="English"
                                >
                                    <svg className="w-6 h-5 rounded-sm shadow-sm" viewBox="0 0 640 480">
                                        <rect fill="#bd3d44" width="640" height="480" />
                                        <rect fill="#fff" y="37" width="640" height="37" />
                                        <rect fill="#fff" y="111" width="640" height="37" />
                                        <rect fill="#fff" y="185" width="640" height="37" />
                                        <rect fill="#fff" y="259" width="640" height="37" />
                                        <rect fill="#fff" y="333" width="640" height="37" />
                                        <rect fill="#fff" y="407" width="640" height="37" />
                                        <rect fill="#192f5d" width="256" height="259" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 px-3 py-2 border-t border-gray-700 mt-4">
                            {seasonalEffects.currentSeason === 'winter' && (
                                <button
                                    onClick={seasonalEffects.toggle}
                                    className={`text-lg ${seasonalEffects.isEnabled
                                        ? 'opacity-100'
                                        : 'opacity-50'
                                        }`}
                                    title={seasonalEffects.isEnabled ? 'Turn off snow' : 'Turn on snow'}
                                >
                                    ❄️
                                </button>
                            )}
                            <Link href={pathname} locale="es" className="hover:scale-110 transition-transform" title="Español">
                                <svg className="w-8 h-6 rounded-sm shadow-sm" viewBox="0 0 640 480">
                                    <rect fill="#c60b1e" width="640" height="480" />
                                    <rect fill="#ffc400" y="120" width="640" height="240" />
                                </svg>
                            </Link>
                            <Link href={pathname} locale="en" className="hover:scale-110 transition-transform" title="English">
                                <svg className="w-8 h-6 rounded-sm shadow-sm" viewBox="0 0 640 480">
                                    <rect fill="#bd3d44" width="640" height="480" />
                                    <rect fill="#fff" y="37" width="640" height="37" />
                                    <rect fill="#fff" y="111" width="640" height="37" />
                                    <rect fill="#fff" y="185" width="640" height="37" />
                                    <rect fill="#fff" y="259" width="640" height="37" />
                                    <rect fill="#fff" y="333" width="640" height="37" />
                                    <rect fill="#fff" y="407" width="640" height="37" />
                                    <rect fill="#192f5d" width="256" height="259" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
