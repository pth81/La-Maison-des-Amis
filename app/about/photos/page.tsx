import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PhotosPage() {
    const lang = "en";

    const photos = [
        { src: "/images/les-martels.jpg", caption: "La Maison des Amis" },
        { src: "/images/OctoberAlFresco.jpg", caption: "Al fresco dining" },
        { src: "/images/well.jpg", caption: "The garden" },
        { src: "/images/pigeonier.jpg", caption: "The pigeonnier" },
        { src: "/images/lamaison-du-neige.jpg", caption: "Winter wonderland" },
        { src: "/images/MaisonDeMaitre.jpg", caption: "Maison de Maître" },
    ];

    return (
        <>
            <Navbar lang={lang} />

            <div className="container about">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Photo Gallery</h1>
                        <p className="lead">
                            Take a look at La Maison des Amis and the beautiful Tarn region.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {photos.map((photo, index) => (
                        <div key={index} className="col-md-4">
                            <img src={photo.src} alt={photo.caption} className="img-responsive" />
                            <p className="photo-title">{photo.caption}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer lang={lang} />
        </>
    );
}
