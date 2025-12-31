import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function LinksPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Useful Links", fr: "Liens utiles", es: "Enlaces útiles", cat: "Enllaços útils" },
        lead: {
            en: "Discover what the Tarn region has to offer.",
            fr: "Découvrez ce que la région du Tarn a à offrir.",
            es: "Descubre lo que la región del Tarn tiene para ofrecer.",
            cat: "Descobreix el que la regió del Tarn té per oferir.",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const links = [
        { title: "Les Jardins des Martels", url: "https://www.jardinsdesmartels.com", image: "/images/les-jardins.jpg" },
        { title: "Albi Tourism", url: "https://www.albi-tourisme.fr", image: "/images/albi-cathedral-small.jpg" },
        { title: "Cap Découverte", url: "https://www.vert-marine.com/cap-decouverte-le-garric-81/", image: "/images/capdecouverte.jpg" },
        { title: "Tarn Tourism", url: "https://www.tourisme-tarn.com", image: "/images/tourism-tarn.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{getText("title")}</h1>
                <p className="text-xl text-gray-600 mb-12">{getText("lead")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={link.image}
                                    alt={link.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                        {link.title}
                                    </p>
                                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
