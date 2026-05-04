import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
    let navigator = useNavigate()


    // text
    return (
        <div className="background">
            <Navbar />
            <div className="landingpage">

                <div className="bg-overlay"></div>
                <div className="navbar">
                    <div className="menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* <div className="home-text">
                <h1 className="text-warning">Welcome to SKETCHARTS</h1>
                <p className="text-dark">Come live out your art talent with an aid from us</p>
            </div> */}

            </div>
            <h1 className="text-light center move"><u>Welcome To SketchArts</u></h1>
            <h4 className="center ms-5 move text-light">This is where you can learn drawing techniques and other amizing things about art. </h4>

            <br />

            <h4 className="center ms-5 text-light move">We provide various essentials to help those with the passion to draw various amenities. </h4>
            <br />
            <br />
            <br />

            <h2 className="text-light"><u>For More</u></h2>
                <h5 className="btw explore neon-button">Explore</h5>

            <div className="body">
                <div className="icon">
                    <div className="br">
                        <h5 className="split " onClick={() => { navigator("/addproduct") }}><b className="item a">Add Product</b></h5>
                        <br />
                        <br />
                    </div>

                    <div className="br">
                        <h5 className=" split" onClick={() => { navigator("/getproducts") }}><b className="item b">Our Product</b></h5>
                        <br />
                        <br />
                    </div>

                    <div className="br">
                        <h5 className=" split" onClick={() => { navigator("/signin") }}><b className="item c">Sign In</b></h5>
                        <br />
                        <br />
                    </div>

                    <div className="br">
                        <h5 className=" split" onClick={() => { navigator("/signup") }}><b className="item d">Sign Up</b></h5>
                        <br />
                        <br />
                    </div>
                </div>
            </div>


        </div>
    )


}

export default Home;