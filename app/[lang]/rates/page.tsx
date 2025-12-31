import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Waves, Wifi, Bed, ChefHat, Trees } from "lucide-react";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function RatesPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Rates", fr: "Tarifs", es: "Tarifas", cat: "Tarifes" },
        lead: {
            en: "Our large four-bedroom house comfortably accommodates 10 people.",
            fr: "Notre grande maison de quatre chambres accueille confortablement 10 personnes.",
            es: "Nuestra gran casa de cuatro dormitorios aloja cómodamente a 10 personas.",
            cat: "La nostra gran casa de quatre habitacions allotja còmodament 10 persones.",
        },
        peakSeason: { en: "Peak Season", fr: "Haute Saison", es: "Temporada Alta", cat: "Temporada Alta" },
        offSeason: { en: "Off Season", fr: "Basse Saison", es: "Temporada Baja", cat: "Temporada Baixa" },
        period: { en: "Period", fr: "Période", es: "Período", cat: "Període" },
        rate: { en: "Rate", fr: "Tarif", es: "Tarifa", cat: "Tarifa" },
        weeklyRate: { en: "Weekly Rate", fr: "Tarif Hebdomadaire", es: "Tarifa Semanal", cat: "Tarifa Setmanal" },
        weekend: { en: "Weekend", fr: "Week-end", es: "Fin de semana", cat: "Cap de setmana" },
        week: { en: "Week", fr: "Semaine", es: "Semana", cat: "Setmana" },
        from: { en: "From", fr: "À partir de", es: "Desde", cat: "Des de" },
        included: { en: "What's Included", fr: "Ce qui est inclus", es: "Qué está incluido", cat: "Què està inclòs" },
        poolTennis: { en: "Pool & tennis", fr: "Piscine et tennis", es: "Piscina y tenis", cat: "Piscina i tennis" },
        wifi: { en: "WiFi", fr: "WiFi", es: "WiFi", cat: "WiFi" },
        bedLinen: { en: "Bed linen & towels", fr: "Linge de lit et serviettes", es: "Ropa de cama y toallas", cat: "Roba de llit i tovalloles" },
        kitchen: { en: "Fully equipped kitchen", fr: "Cuisine entièrement équipée", es: "Cocina totalmente equipada", cat: "Cuina totalment equipada" },
        grounds: { en: "5 acres of grounds", fr: "2 hectares de terrain", es: "2 hectáreas de terreno", cat: "2 hectàrees de terreny" },
        july: { en: "July", fr: "Juillet", es: "Julio", cat: "Juliol" },
        august: { en: "August", fr: "Août", es: "Agosto", cat: "Agost" },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    return (
        <>
            <Navbar lang={lang} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{getText("title")}</h1>
                <p className="text-xl text-gray-600 mb-12">{getText("lead")}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Peak Season */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-primary-600 text-white px-6 py-4">
                            <h2 className="text-2xl font-semibold">{getText("peakSeason")}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{getText("period")}</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{getText("weeklyRate")}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getText("july")}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">€1,500</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getText("august")}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">€1,750</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Off Season */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gray-700 text-white px-6 py-4">
                            <h2 className="text-2xl font-semibold">{getText("offSeason")}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{getText("period")}</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{getText("rate")}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getText("weekend")}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{getText("from")} €350</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getText("week")}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{getText("from")} €700</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* What's Included */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">{getText("included")}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                            <Waves className="h-6 w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{getText("poolTennis")}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                            <Wifi className="h-6 w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{getText("wifi")}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                            <Bed className="h-6 w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{getText("bedLinen")}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                            <ChefHat className="h-6 w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{getText("kitchen")}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                            <Trees className="h-6 w-6 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{getText("grounds")}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
