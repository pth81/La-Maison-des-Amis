"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

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
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    };

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <div 
            ref={carouselRef}
            className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={clsx(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    <img
                        alt={slide.alt}
                        src={slide.image}
                        className={clsx(
                            "w-full h-full object-cover",
                            slide.isPortrait && "object-contain"
                        )}
                    />
                    {/* Atmospheric gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-end pb-20 sm:pb-28">
                        <div className={clsx(
                            "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full",
                            slide.centerCaption ? "text-center" : "text-left"
                        )}>
                            <h1 className={clsx(
                                "font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 tracking-wide",
                                slide.isDarker ? "text-cream-200" : "text-white"
                            )}
                            style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.5)' }}
                            >
                                {slide.title}
                            </h1>
                            {slide.lead && (
                                <p className={clsx(
                                    "text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl font-light leading-relaxed",
                                    slide.isDarker ? "text-cream-300" : "text-cream-100",
                                    slide.centerCaption && "mx-auto"
                                )}
                                style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.5)' }}
                                >
                                    {slide.lead}
                                </p>
                            )}
                            {slide.link && (
                                <div className={slide.centerCaption ? "flex justify-center" : ""}>
                                    <Link
                                        href={slide.link.href}
                                        className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        {slide.link.text}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows - more elegant */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators - elegant line style */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={clsx(
                            "h-1 rounded-full transition-all duration-300",
                            index === activeIndex ? "w-12 bg-primary-400" : "w-3 bg-white/40 hover:bg-white/60"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
