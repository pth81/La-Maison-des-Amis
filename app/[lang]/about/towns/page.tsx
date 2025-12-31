import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function TownsPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Nearby Towns", fr: "Villes Proches", es: "Ciudades Cercanas", cat: "Ciutats Properes" },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const towns = [
        { name: "Albi", distance: "30 min", image: "/images/albi-cathedral-small.jpg" },
        { name: "Toulouse", distance: "40 min", image: "/images/airbus-small.jpg" },
        { name: "Gaillac", distance: "20 min", image: "/images/gaillac-vineyards.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-12">{getText("title")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {towns.map((t, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="h-64 overflow-hidden">
                                <img 
                                    src={t.image} 
                                    alt={t.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.name}</h3>
                                <p className="text-gray-600 italic">{t.distance}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
