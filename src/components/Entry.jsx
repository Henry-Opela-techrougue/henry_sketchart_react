import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Entry=() => {
    let navigator = useNavigate()

    return (
        
        <div className="row justify-content-center dark">
            <Navbar/>
                <div className="row">
                    <h3 className="text-light mt-0">Hello there, welcome to Sketch Arts</h3>
                    <p className="text-light mt-0">Sign In or Sign Up to see what's been stored for you.</p>
                </div>

                <div className="col-md-3 mb-3 ">
                    <div className="black pt-3 pb-2">
                        
                            <h3 className="text-light">Have your account?</h3>
                            <button className="white text-dark" onClick={() => { navigator("/signin") }}>Sign In</button>
                        
                    </div>
                    
                </div>

                <div className="col-md-3 mb-3">
                    <div className="light pt-3 pb-2">
                        
                            <h3>Attain an account?</h3>
                            <button className="purple text-light" onClick={() => { navigator("/signup") }}>Sign Up</button>
                        
                    </div>
                </div>
            
            
        </div>
    )
}

export default Entry;