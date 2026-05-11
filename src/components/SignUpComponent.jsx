import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const SignUpComponent = () => {
    // let navigator = useNavigate()
    const navigate = useNavigate();


    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [password, updatePassword] = useState("")
    let [phone, updatePhone] = useState("")

    const [showPassword, setShowPassword] = useState(false);



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

                // go to home page
                navigate("/home");
            }

        } catch (error) {
            //console.log should be removed later
            console.log(error);
            setError(error.message);
            setLoading("");
        }
    };

    // for username
    const borderColor =
        username.length < 4
            ? "red"
            : username.length < 8
                ? "orange"
                : "green";


    //for email
    const emailBorderColor =
        email.includes("@") && email.includes(".")
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
        <div className="row justify-content-center overral">
            <Navbar />
            <div className="col-md-6 mt-0  mob scroll">
                <br />
                <h1 className="text-light"><u>Sign Up</u></h1>
                <br /><br />

                <Link to='/signin'>Already have an account? Sign In</Link>
                <br /><br />

                {/* <h6 className="split" onClick={() => { navigator("/") }}><b className="br1">Home</b></h6> */}

                {/* <h3 className="text-light">Please fill in this form</h3> */}
            </div>

            <div className="col-md-6 ">
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                {/* <p>Current Username :{username}</p> */}

                {/* <div className="input-group"> */}
                <form onSubmit={handleSubmit} className="colla viel">

                    <input type="text"
                        className="form-control  input-box"
                        placeholder="Enter Your Username"
                        required
                        onChange={(e) => {
                            updateUsername(e.target.value)
                        }}
                        style={{
                            border: `2px solid ${username ? borderColor : "#ccc"}`,
                            borderRadius: "8px",
                        }}
                        value={username}
                    />
                    <br />

                    <input type="email"
                        className="form-control input-box"
                        placeholder="Enter Your Email"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                        }}
                        style={{
                            border: `3px solid ${email ? emailBorderColor : "#ccc"}`,
                            borderRadius: "8px",
                        }}
                        value={email}
                    />


                    <br />

                    <input type={showPassword ? "text" : "password"}
                        className="form-control  input-box"
                        placeholder="Enter Your Password"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                        }}
                        style={{
                            border: `3px solid ${password ? passwordBorderColor : "#ccc"}`,
                            borderRadius: "8px",
                        }}
                        value={password}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "40px",
                            top: "54%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#555",
                        }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </span>


                    <br />

                    <input type="tel"
                        className="form-control  input-box"
                        placeholder="Enter Your Phone Number"
                        required
                        minLength={10}
                        maxLength={10}
                        pattern="[0-9]{10,}"
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            // updatePhone(e.target.value)
                            updatePhone(value)
                        }}
                        value={phone}
                    />
                    {/* <br /> */}

                    <button className="btn btn-dark">
                        Sign Up
                    </button><br />




                </form>

            </div>
        </div>
        // </div>


    )
}

export default SignUpComponent;

