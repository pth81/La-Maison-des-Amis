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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{getText("title")}</h1>
                <p className="text-xl text-gray-600 mb-12">{getText("lead")}</p>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {markets.map((m, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{m.day}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{m.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
