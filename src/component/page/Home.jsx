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
            <div className="avatar flex items-center justify-center">
                <img className="rounded-full w-60 h-60 object-contain" src={Avatar} alt="" />
            </div>
            <div className="name_box mb-4 text-7xl font-sans" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Hi, 👋 I'm <span className="my_name text-white font-bold text-6xl font-sans" style={{ fontFamily: "'Quicksand', sans-serif" }}>Rahul.</span>
            </div>

            <div className="typeWriter">
                {/* <Type /> Use the Type component */}
                <DecoderText dataArray={data} />
            </div>
            <div className="description text-center mt-5 pl-7 pr-7 text-white text-2xl font-medium">
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
