import Link from "next/link";
import { Home, MapPin, Grape } from "lucide-react";

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
        <footer className="bg-gradient-to-b from-cream-100 to-cream-200 border-t-4 border-primary-400 mt-20">
            {/* Decorative element */}
            <div className="flex justify-center -mt-5">
                <div className="bg-cream-100 px-6 py-2 rounded-full">
                    <Grape className="h-6 w-6 text-primary-500" />
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* About Section */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-primary-800 mb-5">
                            {t.about}
                        </h4>
                        <ul className="space-y-3">
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
                        <h4 className="font-heading text-lg font-semibold text-primary-800 mb-5">
                            {t.booking}
                        </h4>
                        <ul className="space-y-3">
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
                        <h4 className="font-heading text-lg font-semibold text-primary-800 mb-5">
                            {t.region}
                        </h4>
                        <ul className="space-y-3">
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
                        <h4 className="font-heading text-lg font-semibold text-primary-800 mb-5">
                            {t.reviews}
                        </h4>
                        <a
                            href="https://www.tripadvisor.com/Hotel_Review-g1940548-d1907794-Reviews-La_Maison_des_Amis-Giroussens_Tarn_Midi_Pyrenees.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-primary-600"
                        >
                            <img
                                src="/images/tripadvisor.png"
                                alt="TripAdvisor"
                                className="w-6 h-6"
                            />
                            <span className="font-medium">TripAdvisor</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-cream-400 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <Link
                            href={basePath || "/"}
                            className="flex items-center space-x-3 text-primary-700 hover:text-primary-600 transition-colors"
                        >
                            <Home className="h-5 w-5" />
                            <span className="font-heading text-xl font-semibold">La Maison des Amis</span>
                        </Link>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="h-4 w-4 text-primary-500" />
                            <span className="text-sm">30 mins from Toulouse · Tarn, France</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
