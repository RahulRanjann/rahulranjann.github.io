import React from "react";
import Type from "../Navbar/Type"; // Import the Type component
import DecoderText from "./DecoderText";
import {
    Avatar
} from "../../assets";
import SocialMedia from "../subComponent/SocialMedia";

function Home() {
    const data = [" MITian.", " Programmer.", " Student.", " Developer."];
    return (
        <div className="page_container">
            <div className="avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="name_box">
                Hi, 👋 I'm <span className="my_name">Rahul.</span>
            </div>
            <div className="typeWriter">
                {/* <Type /> Use the Type component */}
                <DecoderText dataArray={data} />
            </div>
            <div className="description">
                <p>
                    Born in 2000 in India. I believe coding and technology can bring about
                    positive change and innovation. With a mission to create impactful
                    solutions, I am constantly exploring new ideas and developing projects
                    to contribute to the future of tech
                </p>
            </div>
            <SocialMedia />
        </div>
    );
}

export default Home;
