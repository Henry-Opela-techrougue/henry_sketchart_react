import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const AddProuductComponent = () => {
    let [product_name, setProductName] = useState("")
    let [product_description, setProductDescription] = useState("")
    let [product_cost, setProductCost] = useState("")
    let [product_category, setProductCategory] = useState("")
    let [product_image, setProductImage] = useState("")

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")


    //To prevent reloading
    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        setSuccess("")
        setLoading("Please...")

        try {
            //FormData is use for transmission packing all product data
            const product_data = new FormData()

            product_data.append("product_name", product_name)
            product_data.append("product_description", product_description)
            product_data.append("product_cost", product_cost)
            product_data.append("product_category", product_category)
            product_data.append("product_image", product_image)

            // Use axios
            const response = await axios.post("https://opelahenry.alwaysdata.net/api/add_product", product_data)
            console.log(response)

            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message)

                //To clear the form
                setProductName("");
                setProductDescription("");
                setProductCost("");
                setProductCategory("");
                setProductImage("");
            }

        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }



    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>

                <h5 className="text-danger">{error}</h5>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Product Name"
                        className="form-control"
                        required
                        onChange={(e) => { setProductName(e.target.value) }}
                        value={product_name} />
                    <br /><br />

                    <textarea className="form-control"
                        rows="7"
                        placeholder="Product Description"
                        required
                        onChange={(e) => { setProductDescription(e.target.value) }}
                        value={product_description}
                    ></textarea>
                    <br /><br />

                    <input type="text"
                        placeholder="Product Cost"
                        className="form-control"
                        required
                        onChange={(e) => { setProductCost(e.target.value) }}
                        value={product_cost} />
                    <br /><br />

                    <label htmlFor="" className="form-label">Product Category</label>
                    <select className="form-control"
                        required
                        onChange={(e) => { setProductCategory(e.target.value) }}
                    >
                        <option value="">Select Category</option>
                        <option value="erasers">erasers</option>
                        <option value="pencils">pencils</option>
                        <option value="prawing books">drawing books</option>
                        <option value="reference Art Books">reference art books</option>
                    </select>
                    <br /><br />

                    <label htmlFor="" className="form-label">Product Image</label>
                    <input type="file"
                        placeholder="Upload Image"
                        className="form-control"
                        required
                        //accepts only images
                        //for pdf "application/pdf"
                        accept="image/*"
                        //accepts multiple images
                        // multiple
                        onChange={(e) => { setProductImage(e.target.files[0]) }} />
                    <br /><br />

                    <button className="btn btn-dark">Add Product</button>
                    <br />

                </form>



            </div>
        </div>
    )
}

export default AddProuductComponent;