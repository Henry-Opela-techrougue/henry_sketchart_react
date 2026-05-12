import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignInComponent = () => {
    // let navigator=useNavigate()
    const navigate = useNavigate();

    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);


    //To show if UI is loading to notify user what is going on
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    //Create variable for useNavigate
    

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
                    navigate("/home")

                }
            }



        } catch (error) {
            console.log(error);
            setLoading("")
            setError(error.message);
        }

    }

    //for email
    const emailBorderColor =
        email.includes("@") && email.includes(".com")
            ? "green"
            : email.length > 3
                ? "orange"
                : "red";

    // for password
    const passwordBorderColor =
        password.length < 6
            ? "red"
            : /[A-Z]/.test(password) &&
                /[0-9]/.test(password) &&
                /[^A-Za-z0-9]/.test(password)
                ? "green"
                : "orange";

    return (
        <div className="row justify-content-center backpen ">
            <Navbar />
            <div className="col-md-6">
                <h2 className="text-light"><u>Sign In</u></h2>
                <br />
                <Link to='/signup'>Don't have an account?Sign Up</Link>
                <br /><br />
                <br />
                {/* <h3 className="text-light">Please fill in the credentials</h3> */}
            </div>

                <div className="col-md-6">
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <h5 className="text-danger">{error}</h5>

                <form onSubmit={handleSubmit} className="neon">
                    
                    <input type="email"
                        placeholder="Enter Your Email"
                        className="form-control mb-0"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                        }}
                        style={{
                            border: `3px solid ${email ? emailBorderColor : "#ccc"}`,
                            borderRadius: "8px",
                        }}
                        value={email} />

                    <br />

                    
                    <input type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="form-control mt-0"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                            }}
                        style={{
                            border: `3px solid ${password ? passwordBorderColor : "#ccc"}`,
                            borderRadius: "8px",
                        }}
                        value={password} />
                        <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "40px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#555",
                        }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </span>
                    
                    <br />

                    <button className="btn btn-dark" >Sign In</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default SignInComponent;