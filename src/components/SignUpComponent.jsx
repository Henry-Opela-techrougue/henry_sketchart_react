import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUpComponent = () => {

    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [password, updatePassword] = useState("")
    let [phone, updatePhone] = useState("")
    let [passwordStrength, setPasswordStrength] = useState("")


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

    const checkPasswordStrength = (value) => {
    if (!value || value.length === 0) {
        setPasswordStrength("")
        return
    }

    const strongRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (strongRegex.test(value)) {
        setPasswordStrength("Strong 💪")
    } else if (value.length >= 6) {
        setPasswordStrength("Medium ⚠️ (Add uppercase, number, special char)")
    } else {
        setPasswordStrength("Weak ❌ (Too short)")
    }
}

    return (
        <div className="row justify-content-center mt-0 overral">
            <Navbar/>
            <div className="col-md-6 ">
                <br />
                <h1 className="text-light"><u>Sign Up</u></h1>

                <h3 className="text-light">Please fill in this form</h3>


                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                {/* <p>Current Username :{username}</p> */}

                {/* <div className="input-group"> */}
                    <form onSubmit={handleSubmit} className="colla viel">

                    <label>Enter Your Username</label>
                    <input type="text"
                        className="form-control  input-box"
                        placeholder=""
                        required
                        onChange={(e) => {
                            updateUsername(e.target.value)
                        }}
                        value={username}
                    />
                    <br /><br />

                    <label>Enter Your Email</label>
                    <input type="email"
                        className="form-control input-box"
                        placeholder=""
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                            checkPasswordStrength(e.target.value)
                        }}
                        value={email}
                    />
                    <p className={
                    passwordStrength.includes("Strong") ? "text-success" :
                    passwordStrength.includes("Medium") ? "text-warning" :
                    "text-danger"
                    }>
                    {passwordStrength}
                    </p> 
                    
                    <br /><br />

                    <label>Enter Your Password</label>
                    <input type="password"
                        className="form-control  input-box"
                        placeholder=""
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                        }}
                        value={password}
                    />
                    

                    <br /><br />

                    <label>Enter Your Phone Number</label>
                    <input type="tel"
                        className="form-control  input-box"
                        placeholder=""
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
                    <br /><br />

                    <button className="btn btn-dark">
                        Sign Up
                    </button><br />

                    <Link to='/signin'>Already have an account? Sign In</Link>


                </form>

                </div>
            </div>
        // </div>


    )
}

export default SignUpComponent;

