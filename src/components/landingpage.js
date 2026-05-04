import React from "react";
import "./landingpage.css"
import satoru from '../satoru.jpg';
// import BgVideo from "../media/bg.mp4"

const landingpage = () =>{

    return (
        <div className="landingpage">

            <image src={satoru} autoPlay muted loop class="video-bg"/>
            <div className="bg-overlay"></div>
            <div className="navbar">
                <div className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
                <div className="home-text">
                    <h1>Welcome to SKETCHARTS</h1>
                    <p>Come live out your art talent with an aid from us</p>
                </div>

                <div className="home-btn">Explore</div>

        </div>
    )
}

export default landingpage;