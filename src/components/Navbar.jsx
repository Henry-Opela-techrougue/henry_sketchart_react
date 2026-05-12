import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    //parse converts string to object
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(JSON.parse)
    console.log(user)

    let navigator = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigator("/signin")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand text-light" to='/'><b>SKETCH ARTS</b></Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav" >
                        {/* <Link className="nav-link" to='/'><b className="br1">Home</b></Link> */}
                        {/* <h6 className="split" onClick={() => { navigator("/aboutus") }}><b className="br1">About Us</b></h6> */}
                        {/* <Link className="nav-link blue" to='/getproducts'><b className="br1">Get Products</b></Link>
                        <Link className="nav-link blue" to='/addproduct'><b className="br1">Add Product</b></Link> */}

                    </div>
                    {user ?
                        (
                            <div className="navbar-nav ms-auto">
                                <Link className="nav-link text-light" to='#'>
                                    {user.username}
                                </Link>
                                <h6 className="br2" onClick={() => { navigator("/home") }}>Home</h6>


                                <button className="btn nav-link text-light br2" onClick={handleLogout}>Log Out</button>
                            </div>
                            //colon
                        ) : (
                            <div className="navbar-nav ms-auto">
                                <Link className="nav-link text-light br1" to='/signin'>Sign In</Link>
                                <Link className="nav-link text-light br1" to='/signup'>Sign Up</Link>
                            </div>
                        )}

                </div>
            </nav>


        </div>
    )
}

export default Navbar;