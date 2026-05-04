import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
    let navigator = useNavigate()


    // text
    return (
        <div className="container-fluid background">
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
            <h1 className="display-1 text-light text-start move center"><b>Welcome To SketchArts</b></h1>
            <h3 className="text-start ms-5 move text-light center">This is where you can learn drawing techniques and other amizing things about art. </h3>

            <br />

            <h3 className="text-start ms-5 text-light move">We provide various essentials to help those with the passion to draw various amenities. </h3>
            <br />
            <br />
            <br />

                    <h3 className="center text-light">For more</h3>
            
                    <div className="body text-light" onClick={() => { navigator("/explore") }}><b className="iteme">Explore</b></div>

            {/* <div className="icon blur">
                <div className="body">
                    <div className="itema">
                        <h6 className="split" onClick={() => { navigator("/addproduct") }}><b className="br">Add Product</b></h6>
                        <br />
                        <br />
                    </div>

                    <div className="itemb">
                        <h6 className="split" onClick={() => { navigator("/getproducts") }}><b className="br">Our Products</b></h6>
                        <br />
                        <br />
                    </div>

                    <div className="itemc">
                        <h6 className="split" onClick={() => { navigator("/signin") }}><b className="br">Sign In</b></h6>
                        <br />
                        <br />
                    </div>

                    <div className="itemd">
                        <h6 className="split" onClick={() => { navigator("/signup") }}><b className="br">Sign Up</b></h6>
                        <br />
                        <br />
                    </div>
                </div>
            </div> */}


        </div>
    )


}

export default Home;