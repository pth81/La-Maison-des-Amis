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
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href={basePath || "/"} className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                        <Home className="h-5 w-5" />
                        <span className="font-semibold text-lg">La Maison des Amis</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
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
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                                        {languages.map((lng) => (
                                            <Link
                                                key={lng.code}
                                                href={switchLang(lng.code)}
                                                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors"
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
                            className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors"
                            aria-label="Contact"
                        >
                            <Phone className="h-5 w-5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="pt-2 border-t border-gray-200">
                            <div className="px-3 py-2 text-sm font-medium text-gray-500">Language</div>
                            {languages.map((lng) => (
                                <Link
                                    key={lng.code}
                                    href={switchLang(lng.code)}
                                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <img src={lng.flag} alt={lng.label} className="w-5 h-5" />
                                    <span className="text-gray-700">{lng.label}</span>
                                </Link>
                            ))}
                        </div>

                        <Link
                            href={`${basePath}/about/#contact`}
                            className="flex items-center space-x-2 px-3 py-2 rounded-md text-primary-600 hover:bg-gray-100 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Phone className="h-5 w-5" />
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
