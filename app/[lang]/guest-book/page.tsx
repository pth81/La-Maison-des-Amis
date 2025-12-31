import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
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
        { quote: "A most comfortable and well-equipped house. We had a wonderful week here. The pool was perfect, the gardens beautiful.", author: "Nick and Jo", location: "England", year: "2024" },
        { quote: "The house is beautiful, very well equipped and spotlessly clean. Paul and Nadia were wonderful hosts.", author: "The Smith Family", location: "UK", year: "2024" },
        { quote: "Une maison magnifique dans un cadre idyllique. Nous avons passé des vacances inoubliables.", author: "La famille Dupont", location: "France", year: "2023" },
        { quote: "Everything was perfect - the house, the pool, the location. We'll definitely be back!", author: "The Johnsons", location: "Australia", year: "2023" },
        { quote: "Le paradis existe, il se trouve au coeur du Tarn. Merci pour tout!", author: "Marie et Pierre", location: "Belgique", year: "2023" },
        { quote: "A truly magical place. The kids loved the trampoline and pool, we loved the peace and quiet.", author: "The Williams", location: "Scotland", year: "2022" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{getText("lead")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-cream-200 relative"
                        >
                            <div className="absolute -top-4 left-8 bg-primary-500 text-white p-3 rounded-full">
                                <Quote className="h-5 w-5" />
                            </div>
                            <p className="text-gray-700 mb-6 italic leading-relaxed pt-4">"{testimonial.quote}"</p>
                            <div className="border-t border-cream-200 pt-4">
                                <cite className="text-primary-700 font-semibold not-italic block">{testimonial.author}</cite>
                                <span className="text-sm text-gray-500">{testimonial.location} · {testimonial.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
