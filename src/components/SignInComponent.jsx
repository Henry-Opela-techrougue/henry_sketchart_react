import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignInComponent = () => {
    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");
    let [passwordStrength, setPasswordStrength] = useState("")

    let [pass, updatePass] = useState("");
    let [password2, updatePassword2] = useState("");
    let [passwordStrength2, setPasswordStrength2] = useState("")


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

    const checkEmailStrength = (value) => {
        if (!value || value.length === 0) {
            setPasswordStrength("")
            return
        }

        const strongRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (strongRegex.test(value)) {
            setPasswordStrength("Strong")
        } else if (value.length >= 6) {
            setPasswordStrength("Medium (Add uppercase, number, special char)")
        } else {
            setPasswordStrength("Weak (Too short)")
        }
    }

    const checkPasswordStrength = (value) => {
        if (!value || value.length2 === 0) {
            setPasswordStrength2("")
            return
        }

        const strongRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (strongRegex.test2(value)) {
            setPasswordStrength2("Strong")
        } else if (value.length2 >= 6) {
            setPasswordStrength2("Medium (Add uppercase, number, special char)")
        } else {
            setPasswordStrength2("Weak (Too short)")
        }
    }


    return (
        <div className="row justify-content-center mt-0 black backpen ">
            <Navbar />
            <div className="col-md-6 mt-0">
                <h2 className="text-light"><u>Sign In</u></h2>

                {/* <h3 className="text-light">Please fill in the credentials</h3> */}


                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <h5 className="text-danger">{error}</h5>


                <form onSubmit={handleSubmit} className="neon">
                    <label>Enter Your Email</label>
                    <input type="email"
                        placeholder=""
                        className="form-control mb-0"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                            checkEmailStrength(e.target.value)
                        }}
                        value={email} />
                    <p className={
                        passwordStrength.includes("Strong") ? "text-success" :
                            passwordStrength.includes("Medium") ? "text-warning" :
                                "text-danger"
                    }>
                        {passwordStrength}
                    </p>
                    <br />

                    <label>Enter Your Password </label>
                    <input type="password"
                        placeholder=""
                        className="form-control mt-0"
                        required
                        onChange={(e) => {
                            updatePass(e.target.value)
                            checkPasswordStrength(e.target.value)                        }}
                        value={password2} />
                    <h6 className={
                        passwordStrength2.includes("Strong") ? "text-success" :
                            passwordStrength2.includes("Medium") ? "text-warning" :
                                "text-danger"
                    }>
                        {passwordStrength}
                    </h6>
                    <br />
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