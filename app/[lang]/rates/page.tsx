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
                                <tr><td>July</td><td>€1,500</td></tr>
                                <tr><td>August</td><td>€1,750</td></tr>
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
                            <li><i className="fa fa-tint"></i> Pool & tennis</li>
                            <li><i className="fa fa-wifi"></i> WiFi</li>
                            <li><i className="fa fa-bed"></i> Bed linen & towels</li>
                            <li><i className="fa fa-cutlery"></i> Fully equipped kitchen</li>
                            <li><i className="fa fa-tree"></i> 5 acres of grounds</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
