import { Phone, Mail, Smartphone } from "lucide-react";

interface ContactProps {
    lang: string;
}

export default function Contact({ lang }: ContactProps) {
    const t = {
        heading: lang === "fr" ? "Nous" : "Contact",
        subheading: lang === "fr" ? "contacter" : "us",
    };

    return (
        <div id="contact" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                {t.heading} <span className="text-gray-500">{t.subheading}</span>
            </h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <a href="tel:+33563418732" className="text-lg text-gray-700 hover:text-primary-600 transition-colors">
                        +33 5 63 41 87 32
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <a 
                        href="mailto:info@darrach.net?subject=La%20Maison%20des%20Amis%20info%20request"
                        className="text-lg text-gray-700 hover:text-primary-600 transition-colors"
                    >
                        info [at] darrach.net
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <a href="tel:+33613336533" className="text-lg text-gray-700 hover:text-primary-600 transition-colors">
                        +33 6 13 33 65 33 (Nadia)
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <a href="tel:+33618512385" className="text-lg text-gray-700 hover:text-primary-600 transition-colors">
                        +33 6 18 51 23 85 (Paul)
                    </a>
                </div>
            </div>
        </div>
    );
}
