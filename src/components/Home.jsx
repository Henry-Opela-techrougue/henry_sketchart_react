import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
    let navigator = useNavigate()


    // text
    return (
        <div className="row background h-150">
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

            <br />

            </div>

            <div className="row">
            <h3 className="display-1 text-dark text-start move center middle"><u>Welcome To SketchArts</u></h3>
            <h5 className="text-start move text-dark center middle">This is where you can learn drawing techniques and other amizing things about art. </h5>

            

            <h5 className="text-start text-dark move middle">We provide various essentials to help those with the passion to draw various amenities. </h5>
            </div>

            <br />
            <br />

            <div className="row">
                <h3 className="text-dark move middle"><u>For More</u></h3>

            </div>
            <br />
            <br />

                    <div className="row middle">
                        <div className="col-md-3">
                            {/* button */}
                            <div className="icon viel">
                                <div className="body">
                                    <div>
                                        <h6 className="">View our amizing products. </h6>
                                        <br />
                                        <h6 className="split" onClick={() => { navigator("/getproducts") }}><b className="br1">Our Products</b></h6>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                    </div>

                        <div className="col-md-3">
                        {/* button */}
                            <div className="icon viel">
                                <div className="body">
                                <div>
                                    <h6>Place new products.</h6>
                                    <br />
                                    <h6 className="split" onClick={() => { navigator("/addproduct") }}><b className="br1">Add Product</b></h6>
                                    <br />
                                    <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* <h6 className="text-light middle move">You can read About Us & Send us your Feedback if any.</h6> */}

                    </div>

                    {/* <br />
                    <br /> */}
                    {/* button */}
                            <div className="row">
                                <div className="col-md-12 icon middle">
                                <div className="body">
                                <div>
                                    <h6 className="split" onClick={() => { navigator("/aboutus") }}><b className="br1">About Us</b></h6>
                                    <br />
                                    <br />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-6 icon middle">
                                <div className="body">
                                <div>
                                    <h6 className="split" onClick={() => { navigator("/feedback") }}><b className="br1">Feedback</b></h6>
                                    <br />
                                    <br />
                                    </div>
                                </div>
                            </div> */}
                            </div>
                    
        </div>
    )


}

export default Home;