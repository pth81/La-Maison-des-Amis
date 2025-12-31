import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import WeatherWidget from "@/components/WeatherWidget";

// Generate static params for all languages
export function generateStaticParams() {
    return [
        { lang: "en" },
        { lang: "fr" },
        { lang: "es" },
        { lang: "cat" },
    ];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function LangHomePage({ params }: PageProps) {
    const { lang } = await params;
    const basePath = `/${lang}`;

    // Translations
    const t: Record<string, Record<string, string>> = {
        rates: {
            en: "Rates",
            fr: "Tarifs",
            es: "Tarifas",
            cat: "Tarifes",
        },
        ratesDesc1: {
            en: "Our large four-bedroom house comfortably accommodates 10 people, with prices starting at €350 for a weekend in winter, up to €1750 for a week in August.",
            fr: "Notre grande maison de quatre chambres accueille confortablement 10 personnes, avec des prix à partir de 350€ pour un week-end en hiver, jusqu'à 1750€ pour une semaine en août.",
            es: "Nuestra gran casa de cuatro dormitorios aloja cómodamente a 10 personas, con precios desde €350 para un fin de semana en invierno, hasta €1750 para una semana en agosto.",
            cat: "La nostra gran casa de quatre habitacions allotja còmodament 10 persones, amb preus des de 350€ per a un cap de setmana a l'hivern, fins a 1750€ per a una setmana a l'agost.",
        },
        ratesDesc2: {
            en: "Outside of peak season we can be flexible, taking into account the number of people and length of stay.",
            fr: "En dehors de la haute saison, nous pouvons être flexibles, en tenant compte du nombre de personnes et de la durée du séjour.",
            es: "Fuera de temporada alta podemos ser flexibles, teniendo en cuenta el número de personas y la duración de la estancia.",
            cat: "Fora de temporada alta podem ser flexibles, tenint en compte el nombre de persones i la durada de l'estada.",
        },
        guestBook: {
            en: "Guest book",
            fr: "Livre d'or",
            es: "Libro de visitas",
            cat: "Llibre d'hostes",
        },
        guestQuote: {
            en: "A most comfortable and well-equipped house. We had a wonderful week here and liked the local area a lot.",
            fr: "Une maison très confortable et bien équipée. Nous avons passé une semaine merveilleuse ici et avons beaucoup aimé la région.",
            es: "Una casa muy cómoda y bien equipada. Pasamos una semana maravillosa aquí y nos gustó mucho la zona.",
            cat: "Una casa molt còmoda i ben equipada. Vam passar una setmana meravellosa aquí i ens va agradar molt la zona.",
        },
        thanks: {
            en: "Thanks for a great time.",
            fr: "Merci pour ce super moment.",
            es: "Gracias por un gran momento.",
            cat: "Gràcies per un bon moment.",
        },
        about: {
            en: "About",
            fr: "À propos",
            es: "Acerca de",
            cat: "Sobre",
        },
        aboutDesc: {
            en: "We are Paul, Nadia, and boys and we would like to welcome you to La Maison des Amis in the heart of the Tarn. We have lived in a number of different countries and have traveled extensively throughout the world. We find the Tarn right up there with great places to visit, relax and enjoy. Come and see for yourself.",
            fr: "Nous sommes Paul, Nadia et les garçons et nous aimerions vous souhaiter la bienvenue à La Maison des Amis au cœur du Tarn. Nous avons vécu dans plusieurs pays différents et avons beaucoup voyagé à travers le monde. Nous trouvons que le Tarn est l'un des meilleurs endroits à visiter, se détendre et profiter. Venez voir par vous-même.",
            es: "Somos Paul, Nadia y los niños y nos gustaría darles la bienvenida a La Maison des Amis en el corazón del Tarn. Hemos vivido en varios países diferentes y hemos viajado extensamente por todo el mundo. Encontramos que el Tarn está entre los mejores lugares para visitar, relajarse y disfrutar. Vengan a verlo ustedes mismos.",
            cat: "Som en Paul, la Nadia i els nois i ens agradaria donar-vos la benvinguda a La Maison des Amis al cor del Tarn. Hem viscut en diversos països diferents i hem viatjat molt per tot el món. Trobem que el Tarn és un dels millors llocs per visitar, relaxar-se i gaudir. Veniu a veure-ho vosaltres mateixos.",
        },
        more: {
            en: "More",
            fr: "Plus",
            es: "Más",
            cat: "Més",
        },
        location: {
            en: "Location",
            fr: "Emplacement",
            es: "Ubicación",
            cat: "Ubicació",
        },
        closeToPerfect: {
            en: "close to perfect",
            fr: "proche de la perfection",
            es: "cerca de la perfección",
            cat: "a prop de la perfecció",
        },
        locationDesc: {
            en: "La Maison des Amis is situated right in the heart of the Tarn, one of France's hidden treasures, and served by the airports of Toulouse (30 mins), Carcassonne (75 mins) and Rodez (90 mins).",
            fr: "La Maison des Amis est située au cœur du Tarn, l'un des trésors cachés de la France, et desservie par les aéroports de Toulouse (30 min), Carcassonne (75 min) et Rodez (90 min).",
            es: "La Maison des Amis está situada en el corazón del Tarn, uno de los tesoros ocultos de Francia, y servida por los aeropuertos de Toulouse (30 min), Carcassonne (75 min) y Rodez (90 min).",
            cat: "La Maison des Amis està situada al cor del Tarn, un dels tresors amagats de França, i servida pels aeroports de Toulouse (30 min), Carcassonne (75 min) i Rodez (90 min).",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    return (
        <>
            <Navbar lang={lang} />
            <Carousel lang={lang} />

            <div className="container marketing">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Link href={`${basePath}/rates/`}>
                            <img alt="Albi" className="img-circle" src="/images/albi-med.jpg" />
                        </Link>
                        <h2>{getText("rates")}</h2>
                        <p>{getText("ratesDesc1")}</p>
                        <p>{getText("ratesDesc2")}</p>
                        <p>
                            <Link className="btn" href={`${basePath}/rates/`}>
                                {getText("more")} &raquo;
                            </Link>
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <Link href={`${basePath}/guest-book/`}>
                            <img alt="Dine al fresco" className="img-circle" src="/images/bella.jpg" />
                        </Link>
                        <h2>{getText("guestBook")}</h2>
                        <p>{getText("guestQuote")}</p>
                        <p>{getText("thanks")}</p>
                        <p>
                            <strong>Nick and Jo and family, England.</strong>
                        </p>
                        <p>
                            <Link className="btn" href={`${basePath}/guest-book/`}>
                                {getText("more")} &raquo;
                            </Link>
                        </p>
                        <div className="facebook">
                            <iframe
                                src="https://www.facebook.com/plugins/like.php?href=http://www.facebook.com/maisondesamis&amp;layout=button_count&amp;show_faces=false&amp;width=100&amp;action=like&amp;colorscheme=light&amp;height=80"
                                title="Facebook Like"
                            />
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <Link href={`${basePath}/about/`}>
                            <img alt="Les Martels" className="img-circle" src="/images/les-martels.jpg" />
                        </Link>
                        <h2>{getText("about")}</h2>
                        <p>{getText("aboutDesc")}</p>
                        <p>
                            <Link className="btn" href={`${basePath}/about/`}>
                                {getText("more")} &raquo;
                            </Link>
                        </p>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="featurette">
                    <iframe
                        className="featurette-image pull-right map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.85668563456!2d1.7!3d43.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae8d6c39e5c7e7%3A0x406f69c2f3d9450!2s81500%20Giroussens%2C%20France!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                        title="Location Map"
                    />
                    <h2 className="featurette-heading">
                        {getText("location")} <span className="muted">{getText("closeToPerfect")}</span>
                    </h2>
                    <p className="lead">{getText("locationDesc")}</p>
                    <p className="lead">
                        <i className="fa fa-home"></i> Les Martels, Giroussens, 81500, France
                    </p>
                </div>

                <hr className="featurette-divider" />


                <div className="featurette">
                    <img
                        alt="Contact us"
                        className="featurette-image pull-left shadow"
                        src="/images/paul-and-nadia.jpg"
                    />
                    <Contact lang={lang} />
                    <hr className="featurette-divider" />
                    <p className="lead">
                        <WeatherWidget />
                    </p>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
