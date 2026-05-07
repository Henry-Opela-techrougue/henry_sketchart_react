import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Explore = () => {
    let navigator = useNavigate()


    return (
        <div className="row ground">
            <Navbar />
            <div className="col-md-6  p--1">
                <div className="">
                    <div className="card-body">
                        <h5 className="text-light">If you would like to place new product(s) to our site click on</h5>
                            {/* button */}
                            <div className="icon">
                                <div className="body">
                                <div>
                                    <h6 className="split" onClick={() => { navigator("/addproduct") }}><b className="br">Add Product</b></h6>
                                    <br />
                                    <br />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 m-1 p--1">
                    <div className="">
                        <div className="card-body m-1">
                            <h5 className="text-light">If you would like to view our products and purchase one</h5>
                            {/* button */}
                            <div className="icon">
                                <div className="body">
                                    <div>
                                        <h6 className="split" onClick={() => { navigator("/getproducts") }}><b className="br">Our Products</b></h6>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="col-md-6">
                <div className="">
                    <div className="card-body">
                        <h5 className="text-light">When logging in to your registered account </h5>
                        {/* button */}
                        <div className="icon">
                            <div className="body">
                                <div>
                                    <h6 className="split" onClick={() => { navigator("/signin") }}><b className="br">Sign In</b></h6>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 pb-2">
                <div className="pb-1">
                    <div className="card-body pb-1">
                        <h5 className="text-light">ToSign Up for a new account click on</h5>
                        {/* button */}
                        <div className="icon">
                            <div className="body">
                                <div>
                                    <h6 className="split" onClick={() => { navigator("/signup") }}><b className="br">Sign Up</b></h6>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

    )
}

export default Explore;