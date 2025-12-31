import Link from "next/link";
import { Home } from "lucide-react";

interface FooterProps {
    lang: string;
}

export default function Footer({ lang }: FooterProps) {
    const basePath = `/${lang}`;

    // Translations
    const t = {
        about: lang === "fr" ? "À propos" : lang === "es" ? "Acerca de" : lang === "cat" ? "Sobre" : "About",
        guestBook: lang === "fr" ? "Livre d'or" : lang === "es" ? "Libro de visitas" : lang === "cat" ? "Llibre d'hostes" : "Guest book",
        morePhotos: lang === "fr" ? "Plus de photos" : lang === "es" ? "Más fotos" : lang === "cat" ? "Més fotos" : "More photos",
        usefulLinks: lang === "fr" ? "Liens utiles" : lang === "es" ? "Enlaces útiles" : lang === "cat" ? "Enllaços útils" : "Useful links",
        facilities: lang === "fr" ? "Équipements" : lang === "es" ? "Instalaciones" : lang === "cat" ? "Instal·lacions" : "Facilities",
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
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            {t.about}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href={`${basePath}/guest-book/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.guestBook}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/about/photos/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.morePhotos}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/links/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.usefulLinks}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/about/facilities/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.facilities}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Booking Section */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            {t.booking}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href={`${basePath}/about/availability/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.availability}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/rates/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.rates}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/about/#contact`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.contactUs}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Region Section */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            {t.region}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href={`${basePath}/about/markets/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.markets}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/about/restaurants/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.restaurants}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${basePath}/about/towns/`} className="text-gray-600 hover:text-primary-600 transition-colors">
                                    {t.towns}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Reviews Section */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            {t.reviews}
                        </h4>
                        <a
                            href="https://www.tripadvisor.com/Hotel_Review-g1940548-d1907794-Reviews-La_Maison_des_Amis-Giroussens_Tarn_Midi_Pyrenees.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            <img
                                src="/images/tripadvisor.png"
                                alt="TripAdvisor"
                                className="w-6 h-6"
                            />
                            <span>TripAdvisor</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <Link
                            href={basePath || "/"}
                            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            <Home className="h-5 w-5" />
                            <span className="font-medium">La Maison des Amis - In the Heart of the Tarn</span>
                        </Link>
                        <p className="text-sm text-gray-500">
                            Holiday rental villa with pool, wifi. 30 mins Toulouse, Tarn, France.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
