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
        <div id="contact" className="space-y-8">
            <div>
                <h2 className="font-heading text-4xl sm:text-5xl text-primary-800 mb-1">
                    {t.heading}
                </h2>
                <p className="font-heading text-2xl text-primary-500 italic">{t.subheading}</p>
            </div>
            <div className="space-y-4">
                <a href="tel:+33563418732" className="flex items-center space-x-4 p-4 rounded-xl bg-cream-100 hover:bg-cream-200 transition-colors group">
                    <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <Phone className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-primary-700 transition-colors">
                        +33 5 63 41 87 32
                    </span>
                </a>
                <a 
                    href="mailto:info@darrach.net?subject=La%20Maison%20des%20Amis%20info%20request"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-cream-100 hover:bg-cream-200 transition-colors group"
                >
                    <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <Mail className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-primary-700 transition-colors">
                        info [at] darrach.net
                    </span>
                </a>
                <a href="tel:+33613336533" className="flex items-center space-x-4 p-4 rounded-xl bg-cream-100 hover:bg-cream-200 transition-colors group">
                    <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <Smartphone className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-primary-700 transition-colors">
                        +33 6 13 33 65 33 <span className="text-primary-600 font-medium">(Nadia)</span>
                    </span>
                </a>
                <a href="tel:+33618512385" className="flex items-center space-x-4 p-4 rounded-xl bg-cream-100 hover:bg-cream-200 transition-colors group">
                    <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <Smartphone className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-primary-700 transition-colors">
                        +33 6 18 51 23 85 <span className="text-primary-600 font-medium">(Paul)</span>
                    </span>
                </a>
            </div>
        </div>
    );
}
