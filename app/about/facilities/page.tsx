import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FacilitiesPage() {
    const lang = "en";

    return (
        <>
            <Navbar lang={lang} />

            <div className="container about">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Facilities</h1>
                        <p className="lead">
                            La Maison des Amis is fully equipped for your comfort and enjoyment.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h3>The House</h3>
                        <ul>
                            <li>4 bedrooms sleeping up to 10 people</li>
                            <li>2 bathrooms</li>
                            <li>Fully equipped kitchen</li>
                            <li>Living room with fireplace</li>
                            <li>Dining room</li>
                            <li>WiFi throughout</li>
                            <li>Central heating</li>
                            <li>Washing machine and dryer</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Outside</h3>
                        <ul>
                            <li>Large swimming pool (12m x 6m)</li>
                            <li>Tennis court</li>
                            <li>Table tennis</li>
                            <li>Trampoline</li>
                            <li>BBQ area</li>
                            <li>Outdoor dining area</li>
                            <li>5 acres of private grounds</li>
                            <li>Private parking</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
