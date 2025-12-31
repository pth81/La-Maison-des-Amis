import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RatesPage() {
    const lang = "en";

    return (
        <>
            <Navbar lang={lang} />

            <div className="container rates">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Rates</h1>
                        <p className="lead">
                            Our large four-bedroom house comfortably accommodates 10 people.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Peak Season</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th>Weekly Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>July</td>
                                    <td>€1,500</td>
                                </tr>
                                <tr>
                                    <td>August</td>
                                    <td>€1,750</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h2>Off Season</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Weekend</td>
                                    <td>From €350</td>
                                </tr>
                                <tr>
                                    <td>Week</td>
                                    <td>From €700</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p>
                            Outside of peak season we can be flexible, taking into account the
                            number of people and length of stay. Please contact us for a quote.
                        </p>
                        <h3>What&apos;s Included</h3>
                        <ul>
                            <li>Access to the pool and tennis court</li>
                            <li>WiFi throughout the property</li>
                            <li>All bed linen and towels</li>
                            <li>Kitchen fully equipped</li>
                            <li>5 acres of private grounds</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
