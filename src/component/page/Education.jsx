import React from 'react';
import Timeline from '../subComponent/Timeline'; 
import Rit from "../../assets/logo/DSEULogo.png";
import Mit from "../../assets/logo/mitLogo.png";
import Heading from '../subComponent/Heading'

const educationData = [
    {
        type: 'education',
        title: "B.Tech. in Computer Science",
        date: "2022 - 2025",
        Location: "Manipal Institute of Technology, Manipal",
        description: "Graduated with a First Class degree. Specialized in Full Stack Development and Machine Learning.",
        logo: Mit

    },
    {
        type: 'education',
        title: "Diploma in ITEMS",
        date: "2019 - 2022",
        Location: "Rajokari Institute of Technology, Delhi",
        description: "Completed with an excellent academic record and an interest in mathematics and computer science.",
        logo: Rit
    }
];

const Education = () => {
    return (
        <div className='skill  mt-0 mr-0 mb-[12px] ml-[10px] pt-[35px] pr-[200px] pb-[100px] pl-[200px]'>
            <Heading title="Education" />
            <Timeline timelineData={educationData} />
        </div>
    );
};

export default Education;
