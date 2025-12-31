import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function AboutPage() {
    const lang = "en";

    return (
        <>
            <Navbar lang={lang} />

            <div className="container about">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="/images/les-martels.jpg"
                            alt="La Maison des Amis - Les Martels"
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-md-6">
                        <h1>About La Maison des Amis</h1>
                        <p className="lead">
                            We are Paul, Nadia, and boys and we would like to welcome you to La Maison
                            des Amis in the heart of the Tarn.
                        </p>
                        <p>
                            We have lived in a number of different countries and have traveled
                            extensively throughout the world. We find the Tarn right up there with
                            great places to visit, relax and enjoy. Come and see for yourself.
                        </p>
                        <p>
                            La Maison des Amis is a beautifully converted large 4-bedroom holiday
                            villa on 5 acres, with pool and tennis. Comfortably sleeps 10 people.
                        </p>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row">
                    <div className="col-md-6">
                        <Contact lang={lang} />
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/images/paul-and-nadia.jpg"
                            alt="Paul and Nadia"
                            className="img-responsive shadow"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row">
                    <div className="col-md-12">
                        <h2>The Location</h2>
                        <p className="lead">
                            La Maison des Amis is situated right in the heart of the Tarn, one of
                            France&apos;s hidden treasures, and served by the airports of Toulouse (30
                            mins), Carcassonne (75 mins) and Rodez (90 mins).
                        </p>
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.85668563456!2d1.7!3d43.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae8d6c39e5c7e7%3A0x406f69c2f3d9450!2s81500%20Giroussens%2C%20France!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                            title="Location Map"
                            style={{ width: "100%", height: "400px" }}
                        />
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
