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
            <div className="container about">
                <h1>{getText("title")}</h1>
                <div className="row">
                    {photos.map((p, i) => (
                        <div key={i} className="col-md-4">
                            <img src={p.src} alt={p.caption} className="img-responsive" />
                            <p className="photo-title">{p.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer lang={lang} />
        </>
    );
}
