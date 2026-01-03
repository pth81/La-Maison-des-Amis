import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "La Maison des Amis - Family holiday villa with pool & wifi, Tarn, France",
    description: "Large 4-bedroom holiday villa in the Tarn, France. A beautifully converted barn on 5 acres, with pool, tennis and wifi. Comfortably sleeps 10.",
    keywords: "holiday, vacation, villa, house, rental, pool, tennis, park, garden, Lavaur, Tarn, France",
    authors: [{ name: "Paul Hickey" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Favicons */}
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/apple-touch-icon-144-precomposed.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/apple-touch-icon-114-precomposed.png" />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/apple-touch-icon-72-precomposed.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/apple-touch-icon-57-precomposed.png" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </head>
            <body className="bg-cream-50 text-gray-800">
                {children}
            </body>
        </html>
    );
}
