import Link from "next/link";

interface FooterProps {
    lang: string;
}

export default function Footer({ lang }: FooterProps) {
    const basePath = lang === "en" ? "" : `/${lang}`;

    // Translations
    const t = {
        about: lang === "fr" ? "À propos" : lang === "es" ? "Acerca de" : lang === "cat" ? "Sobre" : "About",
        guestBook: lang === "fr" ? "Livre d'or" : lang === "es" ? "Libro de visitas" : lang === "cat" ? "Llibre d'hostes" : "Guest book",
        morePhotos: lang === "fr" ? "Plus de photos" : lang === "es" ? "Más fotos" : lang === "cat" ? "Més fotos" : "More photos",
        usefulLinks: lang === "fr" ? "Liens utiles" : lang === "es" ? "Enlaces útiles" : lang === "cat" ? "Enllaços útils" : "Useful links",
        facilities: lang === "fr" ? "Équipements" : lang === "es" ? "Instalaciones" : lang === "cat" ? "Instal·lacions" : "Facilities",
        inFrench: lang === "fr" ? "In English" : "En français",
        inFrenchLink: lang === "fr" ? "/" : "/fr/",
        booking: lang === "fr" ? "Réservation" : lang === "es" ? "Reserva" : lang === "cat" ? "Reserva" : "Booking",
        availability: lang === "fr" ? "Disponibilité" : lang === "es" ? "Disponibilidad" : lang === "cat" ? "Disponibilitat" : "Availability",
        rates: lang === "fr" ? "Tarifs" : lang === "es" ? "Tarifas" : lang === "cat" ? "Tarifes" : "Rates",
        contactUs: lang === "fr" ? "Nous contacter" : lang === "es" ? "Contáctenos" : lang === "cat" ? "Contacta'ns" : "Contact us",
        region: lang === "fr" ? "Région" : lang === "es" ? "Región" : lang === "cat" ? "Regió" : "Region",
        markets: lang === "fr" ? "Marchés" : lang === "es" ? "Mercados" : lang === "cat" ? "Mercats" : "Markets",
        restaurants: "Restaurants",
        towns: lang === "fr" ? "Villes" : lang === "es" ? "Ciudades" : lang === "cat" ? "Ciutats" : "Towns",
        reviews: lang === "fr" ? "Avis" : lang === "es" ? "Opiniones" : lang === "cat" ? "Ressenyes" : "Reviews",
    };

    return (
        <div className="container">
            <footer>
                <hr />
                <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2 col-xs-offset-5 col-sm-offset-1 col-md-offset-1">
                        <h4>{t.about}</h4>
                        <ul className="footer-menu">
                            <li><Link href={`${basePath}/guest-book/`}>{t.guestBook}</Link></li>
                            <li><Link href={`${basePath}/about/photos/`}>{t.morePhotos}</Link></li>
                            <li><Link href={`${basePath}/links/`}>{t.usefulLinks}</Link></li>
                            <li><Link href={`${basePath}/about/facilities/`}>{t.facilities}</Link></li>
                            <li><Link href={t.inFrenchLink}>{t.inFrench}</Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-2 col-xs-offset-5 col-sm-offset-1 col-md-offset-1">
                        <h4>{t.booking}</h4>
                        <ul className="footer-menu">
                            <li><Link href={`${basePath}/about/availability/`}>{t.availability}</Link></li>
                            <li><Link href={`${basePath}/rates/`}>{t.rates}</Link></li>
                            <li><Link href={`${basePath}/about/`}>{t.contactUs}</Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-2 col-xs-offset-5 col-sm-offset-1 col-md-offset-1">
                        <h4>{t.region}</h4>
                        <ul className="footer-menu">
                            <li><Link href={`${basePath}/about/markets/`}>{t.markets}</Link></li>
                            <li><Link href={`${basePath}/about/restaurants/`}>{t.restaurants}</Link></li>
                            <li><Link href={`${basePath}/about/towns/`}>{t.towns}</Link></li>
                        </ul>
                    </div>
                    <div className="reviews col-xs-4 col-sm-2 col-md-2 col-xs-offset-5 col-sm-offset-1 col-md-offset-1">
                        <h4>{t.reviews}</h4>
                        <div className="tripadvisor" style={{ marginBottom: "10px" }}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tripadvisor.com/Hotel_Review-g1940548-d1907794-Reviews-La_Maison_des_Amis-Giroussens_Tarn_Midi_Pyrenees.html"
                                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                            >
                                <img
                                    src="/images/tripadvisor.png"
                                    alt="TripAdvisor"
                                    style={{ width: "24px", height: "24px" }}
                                />
                                TripAdvisor
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="location pull-right">
                    <strong><small>Holiday rental villa with pool, wifi. 30 mins Toulouse, Tarn, France.</small></strong>
                </p>
                <p className="footer-brand">
                    <Link href={basePath || "/"}>
                        <i className="fa fa-home"></i> La Maison des Amis - In the Heart of the Tarn
                    </Link>
                </p>
            </footer>
        </div>
    );
}
