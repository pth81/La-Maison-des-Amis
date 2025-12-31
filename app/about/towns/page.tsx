import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TownsPage() {
    const lang = "en";

    const towns = [
        {
            name: "Albi",
            distance: "30 minutes",
            description: "UNESCO World Heritage city, home to the Toulouse-Lautrec museum and the largest brick cathedral in the world.",
            image: "/images/albi-cathedral-small.jpg",
        },
        {
            name: "Toulouse",
            distance: "40 minutes",
            description: "The 'Pink City' - France's fourth largest city, with excellent shopping, dining and the famous Airbus factory.",
            image: "/images/airbus-small.jpg",
        },
        {
            name: "Gaillac",
            distance: "20 minutes",
            description: "Historic wine town with beautiful abbey and numerous wine cooperatives to visit.",
            image: "/images/gaillac-vineyards.jpg",
        },
        {
            name: "Lavaur",
            distance: "15 minutes",
            description: "Charming market town with excellent weekly market and beautiful cathedral.",
            image: "/images/local-markets-small.jpg",
        },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container about">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Nearby Towns</h1>
                        <p className="lead">
                            Explore the beautiful towns and cities of the Tarn region.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {towns.map((town, index) => (
                        <div key={index} className="col-md-6">
                            <div className="link-box">
                                <img src={town.image} alt={town.name} />
                                <p className="title">{town.name}</p>
                                <p><em>{town.distance} from La Maison des Amis</em></p>
                                <p>{town.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
