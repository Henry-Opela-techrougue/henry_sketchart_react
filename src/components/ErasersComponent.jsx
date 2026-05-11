import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ErasersComponent = () => {
    let [products, setProducts] = useState([])
    let [erasers, setErasers] = useState([])

    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")



    //Base url for image location
    // img_url is used to link the url and find images inside the url
    const img_url = "https://opelahenry.alwaysdata.net/static/images/"

    //useNavigate will be used to take the user to a new page after pressing make payment.It takes one to a new component without reloading
    let navigator = useNavigate()

    //Function to fetch products to the server
    const getProducts = async () => {
        setError("")
        setLoading(true)

        try {
            //NO FormD ata because data is not being added

            const response = await axios.get("https://opelahenry.alwaysdata.net/api/get_products")
            console.log(response)

            if (response.status === 200) {
                setLoading("")
                setProducts(response.data)

                let erasers_products = response.data.filter((product) => product.product_category === "erasers");
                setErasers(erasers_products)
            }
        } catch (error) {
            // setLoading("")
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false); // stop loading no matter what
        }
    }
    useEffect(() => { getProducts() }, [])
    console.log("products:", products)

    return (
        <div className="row erase h-100 w-100">
            <Navbar />
            <h3 className="" onClick={() => { navigator("/home") }}>Back</h3>

            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>


            <div className="row">
                {/* Map/Loop over the product array to access one at a time  */}

                {/* products.map((product)=>()) is used to create multiple card body or div or any feature used to contain images
                to prevent adding and creating many card body.It prevents adding multiple card body repeatedly.The products.map(()=>()) is used to locate data in the database. */}

                <h2 className="text-center my-2 p-4 text-white"><u>Erasers</u></h2>
                {loading ? (
                    Array(8).fill(0).map((_, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card shadow h-100 w-100 p-3">

                                <Skeleton height={200} />

                                <h5 className="mt-3">
                                    <Skeleton width={120} />
                                </h5>

                                <p>
                                    <Skeleton count={2} />
                                </p>

                                <Skeleton width={100} height={35} />
                            </div>
                        </div>
                    ))
                ) : (
                    // REAL PRODUCTS
                    erasers.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4" key={product.id}>
                            <div className="card shadow card-margin h-100 w-100">

                                <img
                                    src={img_url + product.product_image}
                                    alt=""
                                    className="product_img mt-4"
                                />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-mute">{product.product_description}</p>
                                    <b className="text-warning">Ksh{product.product_cost}</b>
                                    <br />

                                    <button
                                        className="btn btn-dark"
                                        onClick={() =>
                                            navigator("/makepayment", { state: { product } })
                                        }
                                    >
                                        Purchase Now
                                    </button>

                                    <button
                                        className="btn btn-success m-2"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="icon">
                <div className="body">
                    <div>
                        <h6 className="split" onClick={() => { navigator("/getproducts") }}><b className="br1">Back</b></h6>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErasersComponent;