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
            <div className="container about">
                <h1>{getText("title")}</h1>
                <div className="row">
                    {towns.map((t, i) => (
                        <div key={i} className="col-md-4">
                            <div className="link-box">
                                <img src={t.image} alt={t.name} />
                                <p className="title">{t.name}</p>
                                <p><em>{t.distance}</em></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
