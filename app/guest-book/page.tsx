import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuestBookPage() {
    const lang = "en";

    const testimonials = [
        {
            quote: "A most comfortable and well-equipped house. We had a wonderful week here and liked the local area a lot. Thanks for a great time.",
            author: "Nick and Jo and family, England",
        },
        {
            quote: "We have just returned from a fantastic week at La Maison des Amis. The house is beautiful, very well equipped and spotlessly clean. The pool was lovely and the children loved the trampoline and table tennis.",
            author: "The Smith Family, UK",
        },
        {
            quote: "Une maison magnifique dans un cadre idyllique. Paul et Nadia sont des hôtes formidables. Nous y retournerons certainement!",
            author: "La famille Dupont, France",
        },
        {
            quote: "Perfect for families! The kids spent all day in the pool while we relaxed with a glass of local Gaillac wine. Heaven!",
            author: "The Johnsons, Australia",
        },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container guest-book">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Guest Book</h1>
                        <p className="lead">
                            Here&apos;s what our guests have to say about their stay at La Maison des Amis.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-6">
                            <blockquote>
                                <p>{testimonial.quote}</p>
                                <cite>— {testimonial.author}</cite>
                            </blockquote>
                        </div>
                    ))}
                </div>

                <hr className="featurette-divider" />

                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Leave a Review</h3>
                        <p>
                            <a
                                href="https://www.tripadvisor.com/Hotel_Review-g1940548-d1907794-Reviews-La_Maison_des_Amis-Giroussens_Tarn_Midi_Pyrenees.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Review on TripAdvisor
                            </a>
                            {" "}
                            <a
                                href="https://www.homeaway.co.uk/reviews/write/p6609702"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-default"
                            >
                                Review on HomeAway
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
