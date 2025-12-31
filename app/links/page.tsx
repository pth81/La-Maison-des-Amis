import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LinksPage() {
    const lang = "en";

    const links = [
        {
            title: "Les Jardins des Martels",
            url: "https://www.jardinsdesmartels.com",
            description: "Beautiful gardens right across the road from La Maison des Amis. A must-visit!",
            image: "/images/les-jardins.jpg",
        },
        {
            title: "Albi Tourism",
            url: "https://www.albi-tourisme.fr/us/",
            description: "UNESCO World Heritage city, home to the largest brick cathedral in the world.",
            image: "/images/albi-cathedral-small.jpg",
        },
        {
            title: "Cap Découverte",
            url: "https://www.vert-marine.com/cap-decouverte-le-garric-81/",
            description: "Fun park for kids with swimming, slides, and activities.",
            image: "/images/capdecouverte.jpg",
        },
        {
            title: "Le Cri de Tarzan",
            url: "https://www.lecridetarzan.com",
            description: "Acrobranching adventure park - fun for all the family!",
            image: "/images/tarzan-small.jpg",
        },
        {
            title: "Airbus Factory Tour",
            url: "https://manatour.fr",
            description: "Visit the A380 factory in Toulouse - an unforgettable experience.",
            image: "/images/airbus-small.jpg",
        },
        {
            title: "Tarn Tourism",
            url: "https://www.tourisme-tarn.com/en/",
            description: "Official tourism website for the Tarn region.",
            image: "/images/tourism-tarn.jpg",
        },
        {
            title: "Canoeing on the Tarn",
            url: "https://www.locationcanoe.com",
            description: "Kayaking and canoeing on the beautiful rivers of the Tarn.",
            image: "/images/tarn-canoe-small.jpg",
        },
        {
            title: "Tourist Train CFTT",
            url: "https://www.cftt.org",
            description: "Historic tourist train at the end of our garden!",
            image: "/images/tourist-train.jpg",
        },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container links">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Useful Links</h1>
                        <p className="lead">
                            Discover what the Tarn region has to offer with these useful links.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {links.map((link, index) => (
                        <div key={index} className="col-md-4">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <div className="link-box">
                                    <img src={link.image} alt={link.title} />
                                    <p className="title">{link.title}</p>
                                    <p>{link.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
