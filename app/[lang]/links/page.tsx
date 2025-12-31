import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function LinksPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Useful Links", fr: "Liens utiles", es: "Enlaces útiles", cat: "Enllaços útils" },
        lead: {
            en: "Discover what the Tarn region has to offer.",
            fr: "Découvrez ce que la région du Tarn a à offrir.",
            es: "Descubre lo que la región del Tarn tiene para ofrecer.",
            cat: "Descobreix el que la regió del Tarn té per oferir.",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const links = [
        { title: "Les Jardins des Martels", url: "https://www.jardinsdesmartels.com", image: "/images/les-jardins.jpg" },
        { title: "Albi Tourism", url: "https://www.albi-tourisme.fr", image: "/images/albi-cathedral-small.jpg" },
        { title: "Cap Découverte", url: "https://www.vert-marine.com/cap-decouverte-le-garric-81/", image: "/images/capdecouverte.jpg" },
        { title: "Tarn Tourism", url: "https://www.tourisme-tarn.com", image: "/images/tourism-tarn.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container links">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{getText("title")}</h1>
                        <p className="lead">{getText("lead")}</p>
                    </div>
                </div>

                <div className="row">
                    {links.map((link, index) => (
                        <div key={index} className="col-md-3">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <div className="link-box">
                                    <img src={link.image} alt={link.title} />
                                    <p className="title">{link.title}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
