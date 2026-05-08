import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const SignUpComponent = () => {
    let navigator = useNavigate()
    const navigate = useNavigate();


    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [password, updatePassword] = useState("")
    let [phone, updatePhone] = useState("")
    let [emailStrength, setEmailStrength] = useState("")


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

    const checkEmailStrength = (value) => {
        if (!value || value.length === 0) {
            setEmailStrength("")
            return
        }

        const strongRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (strongRegex.test(value)) {
            setEmailStrength("Strong 💪")
        } else if (value.length >= 6) {
            setEmailStrength("Medium ⚠️ (Add uppercase, number, special char)")
        } else {
            setEmailStrength("Weak ❌ (Too short)")
        }
    }

    return (
        <div className="row justify-content-center overral">
            {/* <Navbar/> */}
            <div className="col-md-6 mt-0  mob">
                <br />
                <h1 className="text-light"><u>Sign Up</u></h1>
                <br /><br />

                <Link to='/signin'>Already have an account? Sign In</Link>
                <br /><br />

                <h6 className="split" onClick={() => { navigator("/") }}><b className="br1">Home</b></h6>

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
                        value={username}
                    />
                    <br />

                    <input type="email"
                        className="form-control input-box"
                        placeholder="Enter Your Email"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                            checkEmailStrength(e.target.value)
                        }}
                        value={email}
                    />
                    <h6 className={
                        emailStrength.includes("Strong") ? "text-success" :
                            emailStrength.includes("Medium") ? "text-warning" :
                                "text-danger"
                    }>
                        {emailStrength}
                    </h6>

                    <br />

                    <input type="password"
                        className="form-control  input-box"
                        placeholder="Enter Your Password"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                        }}
                        value={password}
                    />


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

