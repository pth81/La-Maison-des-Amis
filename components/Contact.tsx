interface ContactProps {
    lang: string;
}

export default function Contact({ lang }: ContactProps) {
    const t = {
        heading: lang === "fr" ? "Nous" : "Contact",
        subheading: lang === "fr" ? "contacter" : "us",
    };

    return (
        <div id="contact">
            <h2 className="featurette-heading">
                {t.heading} <span className="muted">{t.subheading}</span>
            </h2>
            <p className="lead">
                <i className="fa fa-phone"></i> +33 5 63 41 87 32
            </p>
            <p className="lead">
                <i className="fa fa-envelope"></i>{" "}
                <a href="mailto:info@darrach.net?subject=La%20Maison%20des%20Amis%20info%20request">
                    info [at] darrach.net
                </a>
            </p>
            <p className="lead">
                <i className="fa fa-mobile"></i> +33 6 13 33 65 33 (Nadia)
            </p>
            <p className="lead">
                <i className="fa fa-mobile"></i> +33 6 18 51 23 85 (Paul)
            </p>
        </div>
    );
}
