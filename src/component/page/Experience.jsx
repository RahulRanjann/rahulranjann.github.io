import React from 'react';
import Timeline from '../subComponent/Timeline';
import Heading from '../subComponent/Heading'
import LT from "../../assets/logo/LTLogo.png";
import GoMS from "../../assets/logo/GoMilestoneLogo.png";
import PL from "../../assets/logo/PineLimeLogo.png";
const experienceData = [
    {
        type: 'work',
        CompanyName: "Let's Transport",
        date: "May 2024 - Aug 2024",
        title: "Full Stack Developer",
        Location: "Bangalore, India",
        description: "Developed a website that increased website traffic by 40% and boosted company profit by 7%. Automated the process of scraping data from various websites and uploading it to a designated website.",
        logo: LT,
        link: "https://www.letstransport.com/"
    },
    {
        type: 'work',
        CompanyName: "Pine&Lime",
        date: "Mar 2024 - May 2024",
        title: "Full Stack Developer",
        Location: "Gurgaon, India",
        description: "A full-featured e-commerce application enabling users to register, authenticate, and manage their products.",
        logo: PL,
        link: "https://www.pinenlime.com/"
    },
    {
        type: 'work',
        CompanyName: "GoMilestone",
        date: "Dec 2023 - Jan 2024",
        title: "Full Stack Developer",
        Location: "Gurgaon, India",
        description: "Developed a responsive and scalable company website using HTML, CSS, JavaScript, and Bootstrap 5.",
        logo: GoMS,
        link: "https://gomilestone.com/"
    }
];

const Experience = () => {
    return (
        <div className='skill'>
            <Heading title="Experience" />
            <Timeline timelineData={experienceData} />
        </div>
    );
};

export default Experience;
