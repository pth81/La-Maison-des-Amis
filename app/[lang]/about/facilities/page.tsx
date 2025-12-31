import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function FacilitiesPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Facilities", fr: "Équipements", es: "Instalaciones", cat: "Instal·lacions" },
        lead: {
            en: "La Maison des Amis is fully equipped for your comfort.",
            fr: "La Maison des Amis est entièrement équipée pour votre confort.",
            es: "La Maison des Amis está completamente equipada para su comodidad.",
            cat: "La Maison des Amis està completament equipada per al vostre confort.",
        },
        house: { en: "The House", fr: "La Maison", es: "La Casa", cat: "La Casa" },
        outside: { en: "Outside", fr: "Extérieur", es: "Exterior", cat: "Exterior" },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    return (
        <>
            <Navbar lang={lang} />
            <div className="container about">
                <h1>{getText("title")}</h1>
                <p className="lead">{getText("lead")}</p>
                <div className="row">
                    <div className="col-md-6">
                        <h3>{getText("house")}</h3>
                        <ul>
                            <li>4 bedrooms / 10 people</li>
                            <li>2 bathrooms</li>
                            <li>WiFi</li>
                            <li>Central heating</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>{getText("outside")}</h3>
                        <ul>
                            <li>Pool (12m x 6m)</li>
                            <li>Tennis court</li>
                            <li>BBQ</li>
                            <li>5 acres</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
