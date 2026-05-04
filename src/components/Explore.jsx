import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Explore = () => {
    let navigator = useNavigate()


    return (
        <div className="ground ">
            <Navbar />
            <section className="">
                <div className="row ">
                    <div className="col-md-6  p-4 m-4 facade chord">
                        <h4 className="text-light">If you would like to view our products to pick one of your liking just go to:</h4>
                        {/* button */}
                        <div className="icon blur">
                            <div className="body">
                                <div className="itema">
                                    <h6 className="split" onClick={() => { navigator("/getproducts") }}><b className="br">Our Products</b></h6>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*new row  */}
                    <div className="col-md-6  p-4 m-4 facade chord">
                    <h4 className="text-light">If you would like to place new product(s) to our site click on</h4>
                        {/* button */}
                        <div className="icon blur">
                            <div className="body">
                                <div className="itema">
                                    <h6 className="split" onClick={() => { navigator("/addproduct") }}><b className="br">Add Product</b></h6>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                </div>

                <div className="col-md-6  p-4 m-4 facade chord">
                    <h4 className="text-light">If you would like to place new product(s) to our site click on</h4>
                        {/* button */}
                        <div className="icon blur">
                            <div className="body">
                                <div className="itema">
                                    <h6 className="split" onClick={() => { navigator("/signin") }}><b className="br">Sign In</b></h6>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                </div>

                <div className="col-md-6  p-4 m-4 facade chord">
                    <h4 className="text-light">If you would like to place new product(s) to our site click on</h4>
                        {/* button */}
                        <div className="icon blur">
                            <div className="body">
                                <div className="itema">
                                    <h6 className="split" onClick={() => { navigator("/signup") }}><b className="br">Sign Up</b></h6>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </section>

            <section className="row">
                
            </section>
        </div>
    )
}

export default Explore;