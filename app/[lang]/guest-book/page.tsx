import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function GuestBookPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Guest Book", fr: "Livre d'or", es: "Libro de visitas", cat: "Llibre d'hostes" },
        lead: {
            en: "Here's what our guests have to say about their stay at La Maison des Amis.",
            fr: "Voici ce que nos invités disent de leur séjour à La Maison des Amis.",
            es: "Esto es lo que nuestros huéspedes dicen sobre su estancia en La Maison des Amis.",
            cat: "Això és el que diuen els nostres hostes sobre la seva estada a La Maison des Amis.",
        },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const testimonials = [
        { quote: "A most comfortable and well-equipped house. We had a wonderful week here.", author: "Nick and Jo, England" },
        { quote: "The house is beautiful, very well equipped and spotlessly clean.", author: "The Smith Family, UK" },
        { quote: "Une maison magnifique dans un cadre idyllique.", author: "La famille Dupont, France" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container guest-book">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{getText("title")}</h1>
                        <p className="lead">{getText("lead")}</p>
                    </div>
                </div>

                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-6">
                            <blockquote>
                                <p>{testimonial.quote}</p>
                                <cite>— {testimonial.author}</cite>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
