import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "fr" }, { lang: "es" }, { lang: "cat" }];
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
        { name: "Le Colvert", location: "Giroussens", image: "/images/gambas-du-colvert.jpg" },
        { name: "Didier", location: "Lavaur", image: "/images/didier.jpg" },
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="container restaurants">
                <h1>{getText("title")}</h1>
                <div className="row">
                    {restaurants.map((r, i) => (
                        <div key={i} className="col-md-6">
                            <div className="link-box">
                                <img src={r.image} alt={r.name} />
                                <p className="title">{r.name}</p>
                                <p><em>{r.location}</em></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
