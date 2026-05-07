import Navbar from "./Navbar";
// import { Link, useNavigate } from "react-router-dom"


const FeedBack = () => {
    // const user = JSON.parse(localStorage.getItem("user"))

    // let navigator=useNavigate()


    // const handleLogout=()=>{
    //     localStorage.clear()
    //     navigator("/signin")
    // }

    return (
        <div className="row nork">
            <Navbar />
            <div className="row ">
                <h3 className="text-light move"><u>FeedBack</u></h3>
                <p className="text-light move">If you have any issue or requirement please share with us.</p>
            </div>

            <div className="row">
                <div>

                    <label className="text-light">Place your comments  below</label>
                    <br />
                    <textarea
                        className="viel"
                        rows="10"
                        column="2"
                    >

                    </textarea>
                    <br /><br />

                    <button className="blue" onClick={() => window.open("sms:0104554676", "_self")}>Send Request</button>
                </div>
            </div>

            {/* {user ?
            (
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link" to='#'>
                        {user.username}
                    </Link>

                    <button className="btn nav-link" onClick={handleLogout}>Log Out</button>
                </div>
                //colon
            ) : (
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link text-light br1" to='/signin'>Sign In</Link>
                    <Link className="nav-link text-light br1" to='/signup'>Sign Up</Link>
                </div>
            )} */}
        </div>
    )
}

export default FeedBack;