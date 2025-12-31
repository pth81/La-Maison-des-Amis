import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AvailabilityPage() {
    const lang = "en";

    return (
        <>
            <Navbar lang={lang} />

            <div className="container about">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Availability</h1>
                        <p className="lead">
                            Check our availability calendar below to find your perfect dates.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 calendar">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=lamaisondesamis%40gmail.com&ctz=Europe/Paris"
                            style={{ border: 0, width: "100%", height: "600px" }}
                            frameBorder="0"
                            scrolling="no"
                            title="Availability Calendar"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p>
                            For bookings and inquiries, please{" "}
                            <a href="/about/#contact">contact us</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
