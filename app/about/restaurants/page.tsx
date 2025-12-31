import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RestaurantsPage() {
    const lang = "en";

    const restaurants = [
        {
            name: "Le Colvert",
            location: "Giroussens",
            description: "Local favorite with excellent regional cuisine. Just 5 minutes from the house.",
            image: "/images/gambas-du-colvert.jpg",
        },
        {
            name: "Didier",
            location: "Lavaur",
            description: "Fine dining in the heart of Lavaur.",
            image: "/images/didier.jpg",
        },
        {
            name: "La Femme du Boulanger",
            location: "Gaillac",
            description: "Charming restaurant in the wine town of Gaillac.",
            image: "/images/femme.jpg",
        },
        {
            name: "Berthalay",
            location: "Near Albi",
            description: "Traditional cuisine with stunning views.",
            image: "/images/berthalay.jpg",
        },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container restaurants">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Restaurants</h1>
                        <p className="lead">
                            The Tarn region offers wonderful dining options, from casual bistros
                            to fine dining restaurants.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className="col-md-6">
                            <div className="link-box">
                                <img src={restaurant.image} alt={restaurant.name} />
                                <p className="title">{restaurant.name}</p>
                                <p><em>{restaurant.location}</em></p>
                                <p>{restaurant.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
