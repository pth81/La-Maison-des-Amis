import type { Metadata } from "next";
import Script from "next/script";

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

                {/* Favicons */}
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/apple-touch-icon-144-precomposed.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/apple-touch-icon-114-precomposed.png" />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/apple-touch-icon-72-precomposed.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/apple-touch-icon-57-precomposed.png" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </head>
            <body>
                {children}

                {/* jQuery */}
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js"
                    strategy="beforeInteractive"
                />
                {/* Bootstrap JS */}
                <Script
                    src="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"
                    strategy="afterInteractive"
                />
                {/* Holder.js */}
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.4.0/holder.js"
                    strategy="lazyOnload"
                />

                {/* StatCounter */}
                <Script id="statcounter-config" strategy="afterInteractive">
                    {`
            var sc_project=2321606;
            var sc_invisible=0;
            var sc_partition=21;
            var sc_security="b7ce24b6";
          `}
                </Script>
                <Script
                    src="https://www.statcounter.com/counter/counter_xhtml.js"
                    strategy="afterInteractive"
                />

                {/* Google Analytics */}
                <Script id="ga-init" strategy="afterInteractive">
                    {`
            var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
            var script = document.createElement('script');
            script.src = gaJsHost + "google-analytics.com/ga.js";
            document.head.appendChild(script);
          `}
                </Script>
                <Script id="ga-track" strategy="afterInteractive">
                    {`
            setTimeout(function() {
              try {
                var pageTracker = _gat._getTracker("UA-368202-3");
                pageTracker._trackPageview();
              } catch(err) {}
            }, 1000);
          `}
                </Script>
            </body>
        </html>
    );
}
