import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";

export default function HomePage() {
    const lang = "en";

    return (
        <>
            <Navbar lang={lang} />
            <Carousel lang={lang} />

            {/* Marketing messaging and featurettes */}
            <div className="container marketing">
                {/* Three columns of text below the carousel */}
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Link href="/rates/">
                            <img alt="Albi" className="img-circle" src="/images/albi-med.jpg" />
                        </Link>
                        <h2>Rates</h2>
                        <p>
                            Our large four-bedroom house comfortably accommodates 10 people, with prices
                            starting at €350 for a weekend in winter, up to €1750 for a week in August.
                        </p>
                        <p>
                            Outside of peak season we can be flexible, taking into account the number of
                            people and length of stay.
                        </p>
                        <p>
                            <Link className="btn" href="/rates/">
                                More &raquo;
                            </Link>
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <Link href="/guest-book/">
                            <img alt="Dine al fresco" className="img-circle" src="/images/bella.jpg" />
                        </Link>
                        <h2>Guest book</h2>
                        <p>
                            A most comfortable and well-equipped house. We had a wonderful week here and
                            liked the local area a lot.
                        </p>
                        <p>Thanks for a great time.</p>
                        <p>
                            <strong>Nick and Jo and family, England.</strong>
                        </p>
                        <p>
                            <Link className="btn" href="/guest-book/">
                                More &raquo;
                            </Link>
                        </p>
                        <div className="facebook">
                            <iframe
                                src="https://www.facebook.com/plugins/like.php?href=http://www.facebook.com/maisondesamis&amp;layout=button_count&amp;show_faces=false&amp;width=100&amp;action=like&amp;colorscheme=light&amp;height=80"
                                title="Facebook Like"
                            />
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <Link href="/about/">
                            <img alt="Les Martels" className="img-circle" src="/images/les-martels.jpg" />
                        </Link>
                        <h2>About</h2>
                        <p>
                            We are Paul, Nadia, and boys and we would like to welcome you to La Maison
                            des Amis in the heart of the Tarn. We have lived in a number of different
                            countries and have traveled extensively throughout the world. We find the
                            Tarn right up there with great places to visit, relax and enjoy. Come and
                            see for yourself.
                        </p>
                        <p>
                            <Link className="btn" href="/about/">
                                More &raquo;
                            </Link>
                        </p>
                    </div>
                </div>

                {/* START THE FEATURETTES */}
                <hr className="featurette-divider" />

                <div className="featurette">
                    <iframe
                        className="featurette-image pull-right map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.85668563456!2d1.7!3d43.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae8d6c39e5c7e7%3A0x406f69c2f3d9450!2s81500%20Giroussens%2C%20France!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                        title="Location Map"
                    />
                    <h2 className="featurette-heading">
                        Location <span className="muted">close to perfect</span>
                    </h2>
                    <p className="lead">
                        La Maison des Amis is situated right in the heart of the Tarn, one of
                        France&apos;s hidden treasures, and served by the airports of Toulouse (30 mins),
                        Carcassonne (75 mins) and Rodez (90 mins).
                    </p>
                    <p className="lead">
                        <i className="fa fa-home"></i> Les Martels, Giroussens, 81500, France
                    </p>
                </div>

                <hr className="featurette-divider" />

                <div className="featurette">
                    <img
                        alt="Contact us"
                        className="featurette-image pull-left shadow"
                        src="/images/paul-and-nadia.jpg"
                    />
                    <Contact lang={lang} />
                    <hr className="featurette-divider" />
                    <p className="lead">
                        <iframe
                            className="forecast"
                            src="https://embed.windy.com/embed2.html?lat=43.7631&lon=1.77693&zoom=8&level=surface&overlay=temp&menu=&message=&marker=true&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=43.7631&detailLon=1.77693&metricWind=km%2Fh&metricTemp=%C2%B0C"
                            title="Weather Forecast"
                        />
                    </p>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
