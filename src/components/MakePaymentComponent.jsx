import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const MakePaymentComponent = () => {

    const img_url = "https://opelahenry.alwaysdata.net/static/images/"

    let [phone, setPhone]=useState("")
    let [loading, setLoading]=useState("")
    let [error, setError]=useState("")
    let [success, setSuccess]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault()

        setLoading("Please wait...")
        setError("")
        setSuccess("")

        try {
            const data=new FormData()

            data.append("amount",product.product_cost)
            data.append("phone",phone)

            const response=await axios.post("https://opelahenry.alwaysdata.net/api/mpesa_payment", data)
            console.log(response)

            if (response.status===200){
                setLoading("")
                setSuccess(response.data.message)
            }
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
    }
    //useLocation used to take one to the current location
    //state is used to take an object to another omponent.The calibraces {} is placed if the state binded is empty
    const { product } = useLocation().state || {}
    console.log(product)
    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <h2>LIPA NA MPESA</h2>
            <div className="col-md-3">
                <img src={img_url + product.product_image} alt="" className="rounded img-thumbnail" />
            </div>

            <div className="col-md-3 p-4">
                <h2 className="text-dark">{product.product_name}</h2>
                <h4 className="text-primary">{product.product_category}</h4>
                <p className="text-muted">{product.product_description}</p>
                <h4 className="text-warning">{product.product_cost}</h4>

                <hr />

                <h6 className="text-warning">{loading}</h6>
                <h6 className="text-danger">{error}</h6>
                <h6 className="text-success">{success}</h6>

                <form onSubmit={handleSubmit}>
                    <input type="number"
                     className="form-control" 
                     required 
                     placeholder="Enter Amount" 
                     readOnly
                     //value{product.product_cost} in used to place the value of product and
                     //the readOnly is used to make the number not to be inputed.
                     value={product.product_cost}/>
                     

                    <br /><br />

                    <input type="tel" 
                    className="form-control"
                    required 
                    placeholder="Enter Phone number:2547xxxxxxxx" 
                    onChange={(e)=>{setPhone(e.target.value)}}
                    value={phone}/>
                    
                    <br /><br />

                    <button className="btn btn-dark">Pay Now</button>
                </form>
            </div>

        </div>


    )
}

export default MakePaymentComponent;