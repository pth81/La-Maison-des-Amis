import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "fr" }, { lang: "es" }, { lang: "cat" }];
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
            <div className="container markets">
                <h1>{getText("title")}</h1>
                <p className="lead">{getText("lead")}</p>
                <table className="table table-striped">
                    <tbody>
                        {markets.map((m, i) => (
                            <tr key={i}><td>{m.day}</td><td>{m.location}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer lang={lang} />
        </>
    );
}
