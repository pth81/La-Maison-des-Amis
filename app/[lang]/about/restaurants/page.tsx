import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function RestaurantsPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Restaurants", fr: "Restaurants", es: "Restaurantes", cat: "Restaurants" },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const restaurants = [
        { name: "Le Colvert", location: "Giroussens", description: "Excellent local cuisine just 5 minutes away", image: "/images/gambas-du-colvert.jpg" },
        { name: "Didier", location: "Lavaur", description: "Fine dining in the heart of Lavaur", image: "/images/didier.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {restaurants.map((r, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-cream-200 group">
                            <div className="h-64 overflow-hidden">
                                <img 
                                    src={r.image} 
                                    alt={r.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-heading text-2xl font-semibold text-primary-800 mb-2">{r.name}</h3>
                                <p className="text-primary-600 font-medium mb-2">{r.location}</p>
                                <p className="text-gray-600">{r.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
