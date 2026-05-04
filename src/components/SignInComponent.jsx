import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignInComponent = () => {
    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    //To show if UI is loading to notify user what is going on
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    //Create variable for useNavigate
    let navigate = useNavigate()

    //To prevent reloading 
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Notify on loading
        setError("")
        setSuccess("")
        setLoading("Verifying data.Please wait...")




        //Try send data to server
        try {
            //Create form data
            const user_data = new FormData()

            user_data.append("email", email);
            user_data.append("password", password);

            //Use axios to send data to server
            const response = await axios.post(
                "https://opelahenry.alwaysdata.net/api/signin",
                user_data
            )

            console.log(response);

            if (response.status === 200) {
                if (response.data.user) {
                    // stringify makes object to become a string
                    localStorage.setItem("user", JSON.stringify(response.data.user))
                    // Navigate is placed in the if because after loading it will take one to the path specified
                    navigate("/")

                }
            }



        } catch (error) {
            console.log(error);
            setLoading("")
            setError(error.message);
        }

    }

    return (
        <div className="row justify-content-center black show">
            <Navbar/>
            <div className="col-md-6 p-4">
                <h2 className="text-light"><u>Sign In</u></h2>

                <h3 className="text-light">Please fill in this form</h3>
                
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <h5 className="text-danger">{error}</h5>

                <form onSubmit={handleSubmit} className="viel">
                    <input type="email"
                        placeholder="Enter Your Email"
                        className="form-control"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                        }}
                        value={email} />
                    <br /><br />

                    <input type="password"
                        placeholder="Enter Your Password"
                        className="form-control"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                        }}
                        value={password} />
                    <br /><br />

                    <button className="btn btn-dark">Sign In</button>
                    <br />
                    <Link to='/signup'>Don't have an account?Sign Up</Link>
                </form>
            </div>
        </div>
    );
}

export default SignInComponent;