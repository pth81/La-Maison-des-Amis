import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: {
            en: "About La Maison des Amis",
            fr: "À propos de La Maison des Amis",
            es: "Acerca de La Maison des Amis",
            cat: "Sobre La Maison des Amis",
        },
        welcome: {
            en: "We are Paul, Nadia, and boys and we would like to welcome you to La Maison des Amis in the heart of the Tarn.",
            fr: "Nous sommes Paul, Nadia et les garçons et nous aimerions vous souhaiter la bienvenue à La Maison des Amis au cœur du Tarn.",
            es: "Somos Paul, Nadia y los niños y nos gustaría darles la bienvenida a La Maison des Amis en el corazón del Tarn.",
            cat: "Som en Paul, la Nadia i els nois i ens agradaria donar-vos la benvinguda a La Maison des Amis al cor del Tarn.",
        },
        description: {
            en: "La Maison des Amis is a beautifully converted large 4-bedroom holiday villa on 5 acres, with pool and tennis. Comfortably sleeps 10 people.",
            fr: "La Maison des Amis est une grande maison de vacances de 4 chambres magnifiquement rénovée sur 2 hectares, avec piscine et tennis. Peut accueillir confortablement 10 personnes.",
            es: "La Maison des Amis es una gran villa de vacaciones de 4 dormitorios bellamente convertida en 2 hectáreas, con piscina y tenis. Cómodamente 10 personas.",
            cat: "La Maison des Amis és una gran casa de vacances de 4 habitacions bellament convertida en 2 hectàrees, amb piscina i tennis. Còmodament 10 persones.",
        },
        location: {
            en: "The Location",
            fr: "L'Emplacement",
            es: "La Ubicación",
            cat: "La Ubicació",
        },
        locationDesc: {
            en: "La Maison des Amis is situated right in the heart of the Tarn, one of France's hidden treasures.",
            fr: "La Maison des Amis est située au cœur du Tarn, l'un des trésors cachés de la France.",
            es: "La Maison des Amis está situada en el corazón del Tarn, uno de los tesoros ocultos de Francia.",
            cat: "La Maison des Amis està situada al cor del Tarn, un dels tresors amagats de França.",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    return (
        <>
            <Navbar lang={lang} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main About Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="/images/les-martels.jpg"
                            alt="La Maison des Amis - Les Martels"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">{getText("title")}</h1>
                        <p className="text-xl text-gray-700 mb-4">{getText("welcome")}</p>
                        <p className="text-lg text-gray-600">{getText("description")}</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <Contact lang={lang} />
                    </div>
                    <div>
                        <img
                            src="/images/paul-and-nadia.jpg"
                            alt="Paul and Nadia"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Location Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{getText("location")}</h2>
                    <p className="text-lg text-gray-600 mb-6">{getText("locationDesc")}</p>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-96"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.85668563456!2d1.7!3d43.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae8d6c39e5c7e7%3A0x406f69c2f3d9450!2s81500%20Giroussens%2C%20France!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                            title="Location Map"
                            allowFullScreen
                            loading="lazy"
                            name="about-location-map"
                        />
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
