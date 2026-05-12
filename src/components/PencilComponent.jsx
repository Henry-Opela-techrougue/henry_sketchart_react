import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";



const PencilComponent = () => {

    let [products, setProducts] = useState([])
    let [pencils, setPencils] = useState([])

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
                let pencils_products = response.data.filter((product) => product.product_category === "pencils")
                setPencils(pencils_products)
            }
        } catch (error) {
            // setLoading("")
            console.log(error)
            setError(error.message);
        } finally {
            setLoading(false); // stop loading no matter what
        }
    }

    useEffect(() => { getProducts() }, [])
    console.log("products:", products)

    return (
        <div className="portrait">
            <Navbar />
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>

            <div className="row">
                <h1 className="text-center my-2 p-4 text-dark"><u>Pencils</u></h1>
                <h3 className="" onClick={() => { navigator("/home") }}>Back</h3>

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
                    pencils.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4 rougue">
                            <div className="card shadow card-margin h-100 w-100">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    {/* {product.product_name}is used to place the required text in the  */}

                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-mute">{product.product_description}</p>
                                    <b className="text-warning">Ksh{product.product_cost}</b>
                                    <br />
                                    {/* {state: {product}} is used to take the user to the specific product */}
                                    <button className="btn btn-dark" onClick={() => { navigator("/makepayment", { state: { product } }) }}>Purchase Now</button>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )

}

export default PencilComponent;