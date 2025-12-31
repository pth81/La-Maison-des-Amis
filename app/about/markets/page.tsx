import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketsPage() {
    const lang = "en";

    const markets = [
        { day: "Monday", location: "Lavaur", type: "Morning market" },
        { day: "Tuesday", location: "Gaillac", type: "Traditional market" },
        { day: "Wednesday", location: "Albi", type: "Covered market" },
        { day: "Thursday", location: "Graulhet", type: "Morning market" },
        { day: "Friday", location: "Lisle-sur-Tarn", type: "Traditional market" },
        { day: "Saturday", location: "Albi", type: "Large weekly market" },
        { day: "Sunday", location: "Lavaur", type: "Morning market" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container markets">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Local Markets</h1>
                        <p className="lead">
                            The Tarn region is famous for its wonderful markets, offering fresh
                            local produce, artisan crafts, and a true taste of French life.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Location</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {markets.map((market, index) => (
                                    <tr key={index}>
                                        <td>{market.day}</td>
                                        <td>{market.location}</td>
                                        <td>{market.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <img
                            src="/images/local-markets-small.jpg"
                            alt="Local markets"
                            className="img-responsive"
                        />
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
