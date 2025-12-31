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
        { title: "Les Jardins des Martels", description: "Our neighbouring botanical gardens - a must-visit!", url: "https://www.jardinsdesmartels.com", image: "/images/les-jardins.jpg" },
        { title: "Albi Tourism", description: "UNESCO World Heritage city just 30 minutes away", url: "https://www.albi-tourisme.fr", image: "/images/albi-cathedral-small.jpg" },
        { title: "Tarn Tourism", description: "Discover the beautiful Tarn region", url: "https://www.tourisme-tarn.com", image: "/images/tourism-tarn.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{getText("lead")}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-cream-200"
                        >
                            <div className="h-48 md:h-auto md:w-48 overflow-hidden flex-shrink-0">
                                <img
                                    src={link.image}
                                    alt={link.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-center flex-grow">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <h3 className="font-heading text-xl font-semibold text-primary-800 group-hover:text-primary-600 transition-colors mb-2">
                                            {link.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{link.description}</p>
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-primary-400 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1" />
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
