import Navbar from "./Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
// npm install bootstrap-icons to get icons

const AboutUs = () => {

    return (
        <div className="row truefex">

            <Navbar />
            <div className="row move mt-0">
                <h3 className="text-light nor mt-0"><u>About Sketch Arts</u></h3>
                <h6 className="text-light">For those with the passion of Art this site is to help you to achieve your goals.</h6>
                <h6 className="text-light">That is by us letting aquire such equipments for Art purposes </h6>

                <h6 className="text-light">You can reach us through the following social media platforms</h6>
            </div>

            {/* icons for social media */}
            <div className="row mb-2 nor">
                <div className="col-md-3">
                    <h1 className="text-light" onClick={() =>
                        window.open( "https://www.instagram.com/tokyorougue/", "_blank"
                            // "https://www.instagram.com/explore/search/keyword/?q=tokyorougue",
                            // "_blank"
                        )
                    } style={{ cursor: "pointer" }}>
                        <i className="bi bi-instagram" style={{ cursor: "pointer" }}></i>
                    </h1>
                </div>

                <div className="col-md-3">
                    <h2 className="text-light" onClick={() =>
                            window.open(
                                "https://www.youtube.com/results?search_query=@tokyorougue",
                                "_blank"
                            )
                        } ><i className="bi bi-youtube" style={{ cursor: "pointer" }}></i></h2>
                </div>

                <div className="col-md-3">
                    <h1 className="text-light">  <i className="bi bi-facebook" onClick={() =>
                        window.open(
                            "https://www.facebook.com/results?search_query=Tokyorougue",
                            "_blank"
                        )
                    } style={{ cursor: "pointer" }}></i></h1>
                </div>

                <div className="col-md-3">
                    <h1 className="text-light">  <i className="bi bi-whatsapp" onClick={() =>
                        window.open("https://wa.me/0104554676", "_blank")
                    }
                        style={{ cursor: "pointer" }}></i></h1>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;