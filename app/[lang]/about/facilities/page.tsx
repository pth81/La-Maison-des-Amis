import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Wifi, Droplets, Flame, Waves, CircleDot, ChefHat, Trees } from "lucide-react";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function FacilitiesPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Facilities", fr: "Équipements", es: "Instalaciones", cat: "Instal·lacions" },
        lead: {
            en: "La Maison des Amis is fully equipped for your comfort.",
            fr: "La Maison des Amis est entièrement équipée pour votre confort.",
            es: "La Maison des Amis está completamente equipada para su comodidad.",
            cat: "La Maison des Amis està completament equipada per al vostre confort.",
        },
        house: { en: "The House", fr: "La Maison", es: "La Casa", cat: "La Casa" },
        outside: { en: "Outside", fr: "Extérieur", es: "Exterior", cat: "Exterior" },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{getText("title")}</h1>
                <p className="text-xl text-gray-600 mb-12">{getText("lead")}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <Home className="h-6 w-6 text-primary-600" />
                            {getText("house")}
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-primary-600">•</span>
                                <span>4 bedrooms / 10 people</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Droplets className="h-5 w-5 text-primary-600" />
                                <span>2 bathrooms</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Wifi className="h-5 w-5 text-primary-600" />
                                <span>WiFi</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Flame className="h-5 w-5 text-primary-600" />
                                <span>Central heating</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <Trees className="h-6 w-6 text-primary-600" />
                            {getText("outside")}
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <Waves className="h-5 w-5 text-primary-600" />
                                <span>Pool (12m x 6m)</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <CircleDot className="h-5 w-5 text-primary-600" />
                                <span>Tennis court</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <ChefHat className="h-5 w-5 text-primary-600" />
                                <span>BBQ</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Trees className="h-5 w-5 text-primary-600" />
                                <span>5 acres</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
