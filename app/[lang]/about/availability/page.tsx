import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function AvailabilityPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Availability", fr: "Disponibilité", es: "Disponibilidad", cat: "Disponibilitat" },
        lead: {
            en: "Check our availability calendar below.",
            fr: "Consultez notre calendrier de disponibilité ci-dessous.",
            es: "Consulta nuestro calendario de disponibilidad a continuación.",
            cat: "Consulta el nostre calendari de disponibilitat a continuació.",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    return (
        <>
            <Navbar lang={lang} />
            <div className="container about">
                <h1>{getText("title")}</h1>
                <p className="lead">{getText("lead")}</p>
                <div className="calendar">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=lamaisondesamis%40gmail.com&ctz=Europe/Paris"
                        style={{ border: 0, width: "100%", height: "600px" }}
                        title="Availability Calendar"
                    />
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
