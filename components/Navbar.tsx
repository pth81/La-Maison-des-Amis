"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Menu, X, Phone, ChevronDown } from "lucide-react";

interface NavbarProps {
    lang: string;
}

export default function Navbar({ lang }: NavbarProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const basePath = `/${lang}`;

    const getFlagImage = () => {
        switch (lang) {
            case "fr": return "/images/fr.png";
            case "es": return "/images/es.png";
            case "cat": return "/images/cat.png";
            default: return "/images/uk.png";
        }
    };

    const getFlagTitle = () => {
        switch (lang) {
            case "fr": return "Français";
            case "es": return "Español";
            case "cat": return "Catalan";
            default: return "English";
        }
    };

    const switchLang = (targetLang: string) => {
        let path = pathname.replace(/^\/(en|fr|es|cat)/, "");
        if (!path) path = "/";
        return `/${targetLang}${path === "/" ? "" : path}`;
    };

    const navLinks = [
        { href: `${basePath}/about/`, label: lang === "fr" ? "À propos" : lang === "es" ? "Acerca de" : lang === "cat" ? "Sobre" : "About" },
        { href: `${basePath}/rates/`, label: lang === "fr" ? "Tarifs" : lang === "es" ? "Tarifas" : lang === "cat" ? "Tarifes" : "Rates" },
        { href: `${basePath}/guest-book/`, label: lang === "fr" ? "Livre d'or" : lang === "es" ? "Libro de visitas" : lang === "cat" ? "Llibre d'hostes" : "Guest book" },
        { href: `${basePath}/links/`, label: lang === "fr" ? "Liens utiles" : lang === "es" ? "Enlaces útiles" : lang === "cat" ? "Enllaços útils" : "Useful Links" },
    ];

    const languages = [
        { code: "en", flag: "/images/uk.png", label: "English" },
        { code: "cat", flag: "/images/cat.png", label: "Catalan" },
        { code: "fr", flag: "/images/fr.png", label: "Français" },
        { code: "es", flag: "/images/es.png", label: "Español" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href={basePath || "/"} className="flex items-center space-x-3 text-primary-700 hover:text-primary-600 transition-colors">
                        <Home className="h-6 w-6" />
                        <span className="font-heading text-xl font-semibold tracking-wide">La Maison des Amis</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-600 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-cream-200 transition-colors"
                            >
                                <img src={getFlagImage()} alt={getFlagTitle()} className="w-5 h-5" />
                                <ChevronDown className="h-4 w-4 text-gray-600" />
                            </button>
                            
                            {isLangOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-10" 
                                        onClick={() => setIsLangOpen(false)}
                                    />
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-20 border border-cream-200">
                                        {languages.map((lng) => (
                                            <Link
                                                key={lng.code}
                                                href={switchLang(lng.code)}
                                                className="flex items-center space-x-3 px-4 py-2 hover:bg-cream-100 transition-colors"
                                                onClick={() => setIsLangOpen(false)}
                                            >
                                                <img src={lng.flag} alt={lng.label} className="w-5 h-5" />
                                                <span className="text-gray-700">{lng.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Contact Link */}
                        <Link
                            href={`${basePath}/about/#contact`}
                            className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
                            aria-label="Contact"
                        >
                            <Phone className="h-4 w-4" />
                            <span className="text-sm font-medium">Contact</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-cream-200 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-cream-200 bg-cream-50">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-cream-200 transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="pt-4 border-t border-cream-200">
                            <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Language</div>
                            {languages.map((lng) => (
                                <Link
                                    key={lng.code}
                                    href={switchLang(lng.code)}
                                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-cream-200 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <img src={lng.flag} alt={lng.label} className="w-5 h-5" />
                                    <span className="text-gray-700">{lng.label}</span>
                                </Link>
                            ))}
                        </div>

                        <Link
                            href={`${basePath}/about/#contact`}
                            className="flex items-center justify-center space-x-2 mx-4 mt-4 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Phone className="h-5 w-5" />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
