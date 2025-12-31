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
    ];

    return (
        <>
            <Navbar lang={lang} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-12">{getText("title")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {photos.map((p, i) => (
                        <div key={i} className="group">
                            <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                                <img 
                                    src={p.src} 
                                    alt={p.caption} 
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <p className="text-center text-gray-700 font-medium">{p.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
