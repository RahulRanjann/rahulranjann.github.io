import React from 'react';
import Heading from '../subComponent/Heading';
import FlipCard from '../subComponent/FlipCard';
import { Om, Rahul } from "../../assets/contri"; // Importing images correctly

function Projects() {
    const projects = [
        {
            // img: githubImg,
            img: require('../../assets/githubApi.png'),
            title: "Github Api",
            desc: "This is a brief description of the project. lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas. Nemo, ipsam.",
            techStack: "HTML, CSS, JavaScript, Tailwind CSS, Node.js",
            websiteLink: "https://www.example.com",
            githubLink: "https://github.com/example",
            colabaterName: [
                {
                    name: "Rahul Ranjan",
                    img: Rahul, 
                    colabaterLink: "https://github.com/rahulranjann"
                },
                {
                    name: "Om Prakash Bharti",
                    img: Om,
                    colabaterLink: "https://github.com/samnickgammer"
                }
            ]
        },
        {
            img: require('../../assets/goMilestone.png'),
            title: "GoMilestone",
            desc: "This is another project description.",
            techStack: "React, Express.js, MongoDB, Tailwind CSS",
            websiteLink: "https://www.example2.com",
            githubLink: "https://github.com/example2",
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
            desc: "This is another project description. lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas. Nemo, ipsam.", 
            techStack: "React, Express.js, MongoDB, Tailwind CSS, Node.js, html, css",
            websiteLink: "https://www.example2.com",
            githubLink: "https://github.com/example2",
            colabaterName: [
                {
                    name: "Rahul Ranjan",
                    img: Rahul,
                    colabaterLink: "https://github.com/rahulranjann"
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
