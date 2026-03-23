import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUpComponent = () => {

    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [password, updatePassword] = useState("")
    let [phone, updatePhone] = useState("")

    //
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        //Prevent default behaviour
        e.preventDefault()

        //Notify user to wait
        setError("")
        setSuccess("")
        setLoading("Submitting data.Please wait...");

        //Confirm user input
        //For debugging purposes and removed befor hosting
        console.log(username, email, phone, password)

        //Trt enter data to server 
        try {
            //Create form data
            const user_data = new FormData();
            user_data.append("username", username);
            user_data.append("email", email);
            user_data.append("password", password);
            user_data.append("phone", phone);

            //Use axios to send data to server
            const response = await axios.post("https://opelahenry.alwaysdata.net/api/signup", user_data)

            //console.log should be removed after testing
            console.log(response);
            if (response.status === 200) {
                setSuccess(response.data.message);
                setLoading("")
                updateUsername("")
                updateEmail("")
                updatePassword("")
                updatePhone("")
            }

        } catch (error) {
            //console.log should be removed later
            console.log(error);
            setError(error.message);
            setLoading("");
        }
    };
    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <div className="col-md-6 card shadow p-4">
                <br />
                <h1>
                    Sign Up
                </h1>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                {/* <p>Current Username :{username}</p> */}

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Your Username"
                        required
                        onChange={(e) => {
                            updateUsername(e.target.value)
                        }}
                        value={username}
                    />
                    <br /><br />
                    <input type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                        }}
                        value={email}
                    />
                    <br /><br />
                    <input type="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                        }}
                        value={password}
                    />
                    <br /><br />
                    <input type="tel"
                        className="form-control"
                        placeholder="Enter Your Phone Number"
                        required
                        onChange={(e) => {
                            updatePhone(e.target.value)
                        }}
                        value={phone}
                    />
                    <br /><br />

                    <button className="btn btn-dark">
                        Sign Up
                    </button><br />

                    <Link to='/signin'>Already have an account? Sign In</Link>


                </form>

            </div>
        </div>


    )
}

export default SignUpComponent;

