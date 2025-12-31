"use client";

import { useEffect } from "react";

interface CarouselProps {
    lang: string;
}

interface Slide {
    image: string;
    alt: string;
    title: string;
    lead?: string;
    link?: { href: string; text: string };
    isPortrait?: boolean;
    isDarker?: boolean;
    centerCaption?: boolean;
}

export default function Carousel({ lang }: CarouselProps) {
    // Initialize carousel on mount
    useEffect(() => {
        const initCarousel = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const win = window as any;
            if (typeof window !== "undefined" && win.jQuery) {
                const $ = win.jQuery;
                $('#myCarousel').carousel();

                // Set height dynamically
                const setHeight = () => {
                    const width = window.innerWidth * 0.6666;
                    $('.carousel .container').each(function (this: HTMLElement) {
                        $(this).height(width);
                    });
                    $('.carousel img').each(function (this: HTMLElement) {
                        $(this).height(width);
                    });
                };

                setHeight();
                $(window).on('resize', setHeight);
                $('#myCarousel').on('slide.bs.carousel', setHeight);
            }
        };

        // Wait for jQuery to load
        const checkJQuery = setInterval(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof window !== "undefined" && (window as any).jQuery) {
                clearInterval(checkJQuery);
                initCarousel();
            }
        }, 100);

        return () => clearInterval(checkJQuery);
    }, []);

    // Translations
    const t = {
        heartOfTarn: lang === "fr" ? "Au Cœur du Tarn" : lang === "es" ? "En el Corazón del Tarn" : lang === "cat" ? "Al Cor del Tarn" : "In the Heart of the Tarn",
        siteDesc: lang === "fr"
            ? "Grande maison de vacances de 4 chambres magnifiquement rénovée sur 2 hectares, avec piscine et tennis. Confortablement 10 personnes. Tarn, France."
            : lang === "es"
                ? "Gran villa de vacaciones de 4 dormitorios bellamente convertida en 2 hectáreas, con piscina y tenis. Cómodamente 10 personas. Tarn, Francia."
                : lang === "cat"
                    ? "Gran casa de vacances de 4 habitacions bellament convertida en 2 hectàrees, amb piscina i tennis. Còmodament 10 persones. Tarn, França."
                    : "Beautifully converted large 4-bedroom holiday villa on 5 acres, with pool and tennis. Comfortably sleeps 10. Tarn, France.",
        relaxPool: lang === "fr" ? "Détendez-vous à la piscine" : lang === "es" ? "Relájate en la piscina" : lang === "cat" ? "Relaxa't a la piscina" : "Relax at the pool",
        hangOut: lang === "fr" ? "Profitez" : lang === "es" ? "Disfruta" : lang === "cat" ? "Gaudeix" : "Hang out",
        greatFood: lang === "fr" ? "Avec de la bonne cuisine" : lang === "es" ? "Con buena comida" : lang === "cat" ? "Amb bona cuina" : "With great food",
        comfortableRooms: lang === "fr" ? "Dans des chambres confortables" : lang === "es" ? "En habitaciones cómodas" : lang === "cat" ? "En habitacions còmodes" : "In comfortable rooms",
        wanderGarden: lang === "fr" ? "Promenez-vous dans le jardin" : lang === "es" ? "Pasea por el jardín" : lang === "cat" ? "Passeja pel jardí" : "Wander in the garden",
        neighbourGarden: lang === "fr" ? "Ou mieux encore - le jardin du voisin" : lang === "es" ? "O mejor aún - el jardín del vecino" : lang === "cat" ? "O encara millor - el jardí del veí" : "Or better still - our neighbour's garden",
        exploreCountryside: lang === "fr" ? "Explorez la campagne" : lang === "es" ? "Explora el campo" : lang === "cat" ? "Explora el camp" : "Explore the countryside",
        jumpAround: lang === "fr" ? "Sautez" : lang === "es" ? "Salta" : lang === "cat" ? "Salta" : "Jump around",
        swingBat: lang === "fr" ? "Jouez au tennis de table" : lang === "es" ? "Juega al tenis de mesa" : lang === "cat" ? "Juga a ping-pong" : "Swing a bat",
        amuseKids: lang === "fr" ? "Amusez les enfants" : lang === "es" ? "Divierta a los niños" : lang === "cat" ? "Diverteix els nens" : "Amuse the kids",
        learnMore: lang === "fr" ? "En savoir plus" : lang === "es" ? "Más información" : lang === "cat" ? "Més informació" : "Learn more",
    };

    const slides: Slide[] = [
        { image: "/images/main-slider/image01x1170.jpg", alt: "The heart of the Tarn from the roof of Les Martels. Holiday villa with pool and tennis. Sleeps 10.", title: t.heartOfTarn, lead: t.siteDesc },
        { image: "/images/main-slider/image02x1170.jpg", alt: "Large swimming pool", title: t.relaxPool },
        { image: "/images/main-slider/image03x1170.jpg", alt: "A great place to relax", title: t.hangOut },
        { image: "/images/main-slider/image04x1170.jpg", alt: "The Tarn for great food and restaurants", title: t.greatFood, link: { href: `${lang === "en" ? "" : "/" + lang}/about/restaurants/`, text: t.learnMore } },
        { image: "/images/main-slider/image05x1170.jpg", alt: "Comfortable rooms", title: t.comfortableRooms },
        { image: "/images/main-slider/image07.jpg", alt: "A 5 acre park to wander around", title: t.wanderGarden, isPortrait: true, isDarker: true, centerCaption: true },
        { image: "/images/main-slider/image8.jpg", alt: "Les jardins des Martels, across the road, wonderful!", title: t.neighbourGarden, link: { href: "https://www.jardinsdesmartels.com", text: t.learnMore } },
        { image: "/images/main-slider/image09x1170.jpg", alt: "Explore the rolling hills of the Tarn", title: t.exploreCountryside },
        { image: "/images/main-slider/image10x1170.jpg", alt: "Kids love the trampoline", title: t.jumpAround, isDarker: true },
        { image: "/images/main-slider/image11x1170.jpg", alt: "Ping pong, and tennis too!", title: t.swingBat },
        { image: "/images/main-slider/image13x1170.jpg", alt: "Cap d'couverte, inexpensive fun park for the kids", title: t.amuseKids, link: { href: "https://www.vert-marine.com/cap-decouverte-le-garric-81/", text: t.learnMore } },
    ];

    return (
        <div className="carousel slide" id="myCarousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div key={index} className={`item${index === 0 ? " active" : ""}`}>
                        <img
                            alt={slide.alt}
                            src={slide.image}
                            className={slide.isPortrait ? "portrait" : ""}
                        />
                        <div className="container">
                            <div className={slide.centerCaption ? "carousel-center-caption" : "carousel-caption" + (slide.isDarker ? " darker" : "")}>
                                <h1>{slide.title}</h1>
                                {slide.lead && <h1 className="site-desc">{slide.lead}</h1>}
                                {slide.link && (
                                    <a className="btn btn-large btn-primary" href={slide.link.href}>
                                        {slide.link.text}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a className="left carousel-control" data-slide="prev" href="#myCarousel">
                &lsaquo;
            </a>
            <a className="right carousel-control" data-slide="next" href="#myCarousel">
                &rsaquo;
            </a>
        </div>
    );
}
