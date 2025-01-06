import React, { useState } from 'react';
import Heading from '../subComponent/Heading';
import FilterSkillBtn from '../subComponent/FilterSkillBtn';
import IconCloud from '../subComponent/IconCloud';
import SkillList from '../subComponent/SkillList';

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

function Skills() {
    const [activeTab, setActiveTab] = useState("All"); // Default tab is "All"

    return (
        <div className='skill  m-[0px_0px_100px_0px] p-[50px_200px_0px_200px]'>
            <div className='grid grid-cols-2 grid-flow-row gap-4'>
                <div className="">
                    <Heading title="Skills" />
                </div>
                <div className="absolute top-3 right-[5rem] z-[-9] opacity-[0.4] mb-4 bottom-9">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
            <div className='skill_body'>
                <div>
                    <FilterSkillBtn activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div>
                    <SkillList activeTab={activeTab} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
