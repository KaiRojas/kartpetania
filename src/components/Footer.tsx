import { Link } from '@/i18n/routing';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold italic mb-4">
                            KART<span className="text-red-600">PETANIA</span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {t('description')}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/kartpetania/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/p/kartpetaniacom-100041938044588/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-red-500 shrink-0" />
                                <span>{t('address')}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-red-500 shrink-0" />
                                <a href="tel:+34620888997" className="hover:text-white transition-colors">
                                    {t('phone')}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-red-500 shrink-0" />
                                <a href="mailto:info@kartpetania.com" className="hover:text-white transition-colors">
                                    {t('email')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/horarios" className="text-gray-400 hover:text-white transition-colors">{t('scheduleLink')}</Link></li>
                            <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">{t('servicesLink')}</Link></li>
                            <li><Link href="/tarifas" className="text-gray-400 hover:text-white transition-colors">{t('ratesLink')}</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">{t('contactLink')}</Link></li>
                            <li><Link href="/legal" className="text-gray-400 hover:text-white transition-colors">{t('legalLink')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kartpetania. {t('rights')}</p>
                </div>
            </div>
        </footer>
    );
}
