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
        { name: "Albi", distance: "30 min", highlight: "UNESCO World Heritage cathedral", image: "/images/albi-cathedral-small.jpg" },
        { name: "Toulouse", distance: "40 min", highlight: "The Pink City, culture & cuisine", image: "/images/airbus-small.jpg" },
        { name: "Gaillac", distance: "20 min", highlight: "Historic wine region", image: "/images/gaillac-vineyards.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {towns.map((town, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-cream-200 group">
                            <div className="h-56 overflow-hidden relative">
                                <img 
                                    src={town.image} 
                                    alt={town.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-sm font-medium text-primary-700">{town.distance}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-2xl font-semibold text-primary-800 mb-2">{town.name}</h3>
                                <p className="text-gray-600">{town.highlight}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
