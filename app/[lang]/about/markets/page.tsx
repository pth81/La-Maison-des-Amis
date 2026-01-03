import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function MarketsPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Local Markets", fr: "Marchés Locaux", es: "Mercados Locales", cat: "Mercats Locals" },
        lead: {
            en: "The Tarn is famous for its wonderful markets.",
            fr: "Le Tarn est célèbre pour ses merveilleux marchés.",
            es: "El Tarn es famoso por sus maravillosos mercados.",
            cat: "El Tarn és famós pels seus meravellosos mercats.",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const markets = [
        { day: "Monday", location: "Lavaur" },
        { day: "Tuesday", location: "Gaillac" },
        { day: "Wednesday", location: "Albi" },
        { day: "Saturday", location: "Albi" },
        { day: "Sunday", location: "Lavaur" },
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{getText("lead")}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {markets.map((m, i) => (
                        <div 
                            key={i} 
                            className="bg-white rounded-2xl p-6 shadow-md border border-cream-200 hover:shadow-lg transition-all text-center"
                        >
                            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
                                {m.day}
                            </span>
                            <h3 className="font-heading text-2xl text-primary-800">{m.location}</h3>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <img 
                        src="/images/local-markets-small.jpg" 
                        alt="Local market" 
                        className="max-w-2xl w-full mx-auto rounded-2xl shadow-xl"
                    />
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
