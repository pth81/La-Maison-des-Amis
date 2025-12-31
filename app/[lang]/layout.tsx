import type { Metadata } from "next";

// Define supported languages
export function generateStaticParams() {
    return [
        { lang: "fr" },
        { lang: "es" },
        { lang: "cat" },
    ];
}

// Generate metadata based on language
export async function generateMetadata({
    params
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const { lang } = await params;

    const titles: Record<string, string> = {
        fr: "La Maison des Amis - Grande maison de vacances avec piscine & wifi, Tarn, France",
        es: "La Maison des Amis - Villa de vacaciones familiar con piscina y wifi, Tarn, Francia",
        cat: "La Maison des Amis - Casa de vacances familiar amb piscina i wifi, Tarn, França",
    };

    const descriptions: Record<string, string> = {
        fr: "Grande maison de vacances de 4 chambres dans le Tarn, France. Une grange magnifiquement rénovée sur 2 hectares, avec piscine, tennis et wifi. Confortablement 10 personnes.",
        es: "Gran villa de vacaciones de 4 dormitorios en el Tarn, Francia. Un granero bellamente convertido en 2 hectáreas, con piscina, tenis y wifi. Cómodamente 10 personas.",
        cat: "Gran casa de vacances de 4 habitacions al Tarn, França. Una granja bellament convertida en 2 hectàrees, amb piscina, tennis i wifi. Còmodament 10 persones.",
    };

    return {
        title: titles[lang] || titles.fr,
        description: descriptions[lang] || descriptions.fr,
    };
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang}>
            <head>
                {/* Bootstrap 3 */}
                <link
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                {/* Font Awesome */}
                <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
                {/* Custom CSS */}
                <link href="/css/style.css" rel="stylesheet" />
                <link href="/css/scrolling-nav.css" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
