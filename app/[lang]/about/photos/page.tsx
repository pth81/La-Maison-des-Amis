import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }, { lang: "cat" }];
}

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function PhotosPage({ params }: PageProps) {
    const { lang } = await params;

    const t: Record<string, Record<string, string>> = {
        title: { en: "Photos", fr: "Photos", es: "Fotos", cat: "Fotos" },
    };

    const getText = (key: string) => t[key]?.[lang] || t[key]?.en || "";

    const photos = [
        { src: "/images/les-martels.jpg", caption: "La Maison des Amis" },
        { src: "/images/well.jpg", caption: "The garden" },
        { src: "/images/pigeonier.jpg", caption: "The pigeonnier" },
        { src: "/images/OctoberAlFresco.jpg", caption: "Al fresco dining" },
        { src: "/images/MaisonDeMaitre.jpg", caption: "The main house" },
        { src: "/images/lamaison-du-neige.jpg", caption: "Winter at the villa" },
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-4">{getText("title")}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((p, i) => (
                        <div key={i} className="group">
                            <div className="overflow-hidden rounded-2xl shadow-lg border border-cream-200">
                                <img 
                                    src={p.src} 
                                    alt={p.caption} 
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <p className="text-center text-primary-700 font-medium mt-4 font-heading text-lg">{p.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
