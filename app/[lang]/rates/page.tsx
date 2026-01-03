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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{getText("lead")}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                    {/* Peak Season */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200">
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-6">
                            <h2 className="font-heading text-3xl">{getText("peakSeason")}</h2>
                        </div>
                        <div className="p-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-cream-200">
                                        <th className="pb-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{getText("period")}</th>
                                        <th className="pb-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">{getText("weeklyRate")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-cream-100">
                                        <td className="py-5 text-lg font-medium text-gray-800">{getText("july")}</td>
                                        <td className="py-5 text-right text-2xl font-semibold text-primary-700">€1,500</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 text-lg font-medium text-gray-800">{getText("august")}</td>
                                        <td className="py-5 text-right text-2xl font-semibold text-primary-700">€1,750</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Off Season */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200">
                        <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white px-8 py-6">
                            <h2 className="font-heading text-3xl">{getText("offSeason")}</h2>
                        </div>
                        <div className="p-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-cream-200">
                                        <th className="pb-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{getText("period")}</th>
                                        <th className="pb-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">{getText("rate")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-cream-100">
                                        <td className="py-5 text-lg font-medium text-gray-800">{getText("weekend")}</td>
                                        <td className="py-5 text-right"><span className="text-sm text-gray-500">{getText("from")}</span> <span className="text-2xl font-semibold text-sage-700">€350</span></td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 text-lg font-medium text-gray-800">{getText("week")}</td>
                                        <td className="py-5 text-right"><span className="text-sm text-gray-500">{getText("from")}</span> <span className="text-2xl font-semibold text-sage-700">€700</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* What's Included */}
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-cream-200">
                    <h3 className="font-heading text-3xl text-primary-800 mb-8 text-center">{getText("included")}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl">
                            <div className="bg-primary-100 p-4 rounded-full mb-4">
                                <Waves className="h-8 w-8 text-primary-700" />
                            </div>
                            <span className="text-gray-700 font-medium">{getText("poolTennis")}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl">
                            <div className="bg-primary-100 p-4 rounded-full mb-4">
                                <Wifi className="h-8 w-8 text-primary-700" />
                            </div>
                            <span className="text-gray-700 font-medium">{getText("wifi")}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl">
                            <div className="bg-primary-100 p-4 rounded-full mb-4">
                                <Bed className="h-8 w-8 text-primary-700" />
                            </div>
                            <span className="text-gray-700 font-medium">{getText("bedLinen")}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl">
                            <div className="bg-primary-100 p-4 rounded-full mb-4">
                                <ChefHat className="h-8 w-8 text-primary-700" />
                            </div>
                            <span className="text-gray-700 font-medium">{getText("kitchen")}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl">
                            <div className="bg-primary-100 p-4 rounded-full mb-4">
                                <Trees className="h-8 w-8 text-primary-700" />
                            </div>
                            <span className="text-gray-700 font-medium">{getText("grounds")}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
