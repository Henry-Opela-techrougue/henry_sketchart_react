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
            <h1 className="text-warning text-start ms-1 move">Welcome To SketchArts</h1>
            <h2 className="text-start ms-5 move">This is where you can learn drawing techniques and other amizing things about art. </h2>

            <br />

            <h2 className="text-start ms-5 text-dark move">We provide various essentials to help those with the passion to draw various amenities. </h2>
            <br />
            <br />
            <br />



            <div className="body">
                <div className="icon">
                    <div className="br">
                        <button className="btn btn-primary split br" onClick={() => { navigator("/addproduct") }}><b className="item a">Add Product</b></button>
                        <br />
                        <br />
                    </div>

                    <div className="">
                        <button className="btn btn-primary split br" onClick={() => { navigator("/getproducts") }}><b className="item b">Add Product</b></button>
                        <br />
                        <br />
                    </div>

                    <div className="">
                        <button className="btn btn-primary split br" onClick={() => { navigator("/signin") }}><b className="item c">Sign In</b></button>
                        <br />
                        <br />
                    </div>

                    <div className="">
                        <button className="btn btn-primary split br" onClick={() => { navigator("/signup") }}><b className="item d">Sign Up</b></button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>


        </div>
    )


}

export default Home;