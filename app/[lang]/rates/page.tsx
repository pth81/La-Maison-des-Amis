import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

            <div className="container rates">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{getText("title")}</h1>
                        <p className="lead">{getText("lead")}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>{getText("peakSeason")}</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>{getText("period")}</th>
                                    <th>{getText("weeklyRate")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>{getText("july")}</td><td>€1,500</td></tr>
                                <tr><td>{getText("august")}</td><td>€1,750</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h2>{getText("offSeason")}</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>{getText("period")}</th>
                                    <th>{getText("rate")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>{getText("weekend")}</td><td>{getText("from")} €350</td></tr>
                                <tr><td>{getText("week")}</td><td>{getText("from")} €700</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>{getText("included")}</h3>
                        <ul className="included-list">
                            <li><i className="fa fa-tint"></i> {getText("poolTennis")}</li>
                            <li><i className="fa fa-wifi"></i> {getText("wifi")}</li>
                            <li><i className="fa fa-bed"></i> {getText("bedLinen")}</li>
                            <li><i className="fa fa-cutlery"></i> {getText("kitchen")}</li>
                            <li><i className="fa fa-tree"></i> {getText("grounds")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
