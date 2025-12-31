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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{getText("title")}</h1>
                <p className="text-xl text-gray-600 mb-12">{getText("lead")}</p>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=lamaisondesamis%40gmail.com&ctz=Europe/Paris"
                        className="w-full h-[600px] border-0"
                        title="Availability Calendar"
                        name="availability-calendar"
                    />
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
