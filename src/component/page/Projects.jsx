import React from 'react';
import Heading from '../subComponent/Heading';
import FlipCard from '../subComponent/FlipCard';
import { Om, Rahul } from "../../assets/contri"; // Importing images correctly

function Projects() {
    const projects = [
        {
            // img: githubImg,
            img: require('../../assets/githubApi.png'),
            title: "GitHub Profile Finder",
            desc: "A web app that uses the GitHub API to fetch profile details by entering a username. It displays user info like name, bio, profile picture, repositories, followers, and more. Built with React.js, it features dynamic data fetching, error handling, and a clean UI for an enhanced user experience.",
            techStack: "HTML, CSS, JavaScript, Tailwind, React, GitHub API",
            websiteLink: "https://rahulranjann.github.io/ReactJs-main/",
            githubLink: "https://github.com/RahulRanjann/ReactJs-main/blob/main/about-react-hooks/src/Component/GitHubApi.jsx",
            colabaterName: [
                {
                    name: "Rahul Ranjan",
                    img: Rahul, 
                    colabaterLink: "https://github.com/rahulranjann"
                },
            ]
        },
        {
            img: require('../../assets/goMilestone.png'),
            title: "Go Milestone",
            desc: "Developed the official GoMilestone website using HTML, CSS, JavaScript, and MDB5. Integrated a Google Map to display the company’s location and added a country code feature in the contact us form to enhance phone number input. The website was successfully hosted on GitHub Pages for easy access and deployment.",
            techStack: "HTML, CSS, JavaScript, MDB5, Google Map, GitHub",
            websiteLink: "https://rahulranjann.github.io/JavaScriptProject/GoMile%20Stone/index.html",
            githubLink: "https://github.com/RahulRanjann/JavaScriptProject/tree/master/GoMile%20Stone",
            colabaterName: [
                {
                    name: "Rahul Ranjan",
                    img: Rahul,
                    colabaterLink: "https://github.com/rahulranjann"
                }
            ]
        },
        {
            img: require('../../assets/tour&traver.png'),
            title: "TourTravel",
            desc: "A website where users can sign up, log in, and book tickets via a form. Firebase handles authentication and database management. The site integrates Tawk.to for real-time chat support. Built with HTML, CSS (Bootstrap), and JavaScript for a responsive and interactive user experience.", 
            techStack: "Firebase, JavaScript, gitHub, HTML, CSS",
            websiteLink: "https://rahulranjann.github.io/JavaScriptProject/tour%20and%20travel%20website/web.html#book",
            githubLink: "https://github.com/RahulRanjann/JavaScriptProject/tree/master/tour%20and%20travel%20website",
            colabaterName: [
                {
                    name: "Rahul Ranjan",
                    img: Rahul,
                    colabaterLink: "https://github.com/rahulranjann"
                },
                {
                    name: "Om Prakash",
                    img: Om,
                    colabaterLink: "https://github.com/samnickgammer"
                }
            ]
        }

        // Add more projects as necessary
    ];

    return (
        <div className='skill  mt-0 mr-0 mb-[12px] ml-[10px] pt-[35px] pr-[200px] pb-[100px] pl-[200px]'>
            <div>
                <Heading title="Projects" />
            </div>
            <div className="">
                <FlipCard projects={projects} />
            </div>
        </div>
    );
}

export default Projects;
