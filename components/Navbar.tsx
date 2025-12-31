"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    lang: string;
}

export default function Navbar({ lang }: NavbarProps) {
    const pathname = usePathname();

    // Determine base path for links
    const basePath = lang === "en" ? "" : `/${lang}`;

    // Get language flag image
    const getFlagImage = () => {
        switch (lang) {
            case "fr": return "/images/fr.png";
            case "es": return "/images/es.png";
            case "cat": return "/images/cat.png";
            default: return "/images/uk.png";
        }
    };

    const getFlagTitle = () => {
        switch (lang) {
            case "fr": return "Français";
            case "es": return "Español";
            case "cat": return "Catalan";
            default: return "English";
        }
    };

    // Map current path to other languages
    const switchLang = (targetLang: string) => {
        // Remove current lang prefix if any
        let path = pathname.replace(/^\/(fr|es|cat)/, "");
        if (!path) path = "/";

        if (targetLang === "en") {
            return path;
        }
        return `/${targetLang}${path}`;
    };

    return (
        <>
            <script src="/js/scrolling-nav.js" defer></script>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-ex1-collapse"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand page-scroll" href={basePath || "/"}>
                            <i className="fa fa-home"></i> La Maison des Amis
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse pull-right">
                        <ul className="nav navbar-nav">
                            <li></li>
                            <li>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-default dropdown-toggle"
                                        type="button"
                                        id="langMenu"
                                        data-toggle="dropdown"
                                    >
                                        <img src={getFlagImage()} alt="" title={getFlagTitle()} />
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu" aria-labelledby="langMenu">
                                        <li>
                                            <Link href={switchLang("en")}>
                                                <img src="/images/uk.png" alt="" title="English" /> English
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={switchLang("cat")}>
                                                <img src="/images/cat.png" alt="" title="Catalan" /> Catalan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={switchLang("fr")}>
                                                <img src="/images/fr.png" alt="" title="Français" /> Français
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={switchLang("es")}>
                                                <img src="/images/es.png" alt="" title="Español" /> Español
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link className="page-scroll" href={`${basePath}/about/`}>
                                    {lang === "fr" ? "À propos" : lang === "es" ? "Acerca de" : lang === "cat" ? "Sobre" : "About"}
                                </Link>
                            </li>
                            <li>
                                <Link className="page-scroll" href={`${basePath}/rates/`}>
                                    {lang === "fr" ? "Tarifs" : lang === "es" ? "Tarifas" : lang === "cat" ? "Tarifes" : "Rates"}
                                </Link>
                            </li>
                            <li>
                                <Link className="page-scroll" href={`${basePath}/guest-book/`}>
                                    {lang === "fr" ? "Livre d'or" : lang === "es" ? "Libro de visitas" : lang === "cat" ? "Llibre d'hostes" : "Guest book"}
                                </Link>
                            </li>
                            <li>
                                <Link className="page-scroll" href={`${basePath}/links/`}>
                                    {lang === "fr" ? "Liens utiles" : lang === "es" ? "Enlaces útiles" : lang === "cat" ? "Enllaços útils" : "Useful Links"}
                                </Link>
                            </li>
                            <li>
                                <Link className="page-scroll" href={`${basePath}/about/#contact`}>
                                    <i className="fa fa-phone"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
