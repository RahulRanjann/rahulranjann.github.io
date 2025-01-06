import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Github, Globe, Flip } from "../../assets";
import Avatar from './Avatar';
import { BsPhoneFlip } from "react-icons/bs";
import { IconContext } from "react-icons";
import Tech from './Tech';

const FlipCard = ({ projects }) => {
    const [isFlipped, setIsFlipped] = useState(Array(projects.length).fill(false));

    const handleClick = (index) => {
        const newFlipStates = [...isFlipped];
        newFlipStates[index] = !newFlipStates[index];
        setIsFlipped(newFlipStates);
    };

    return (
        <div>
            <div className="flip-card-container grid grid-rows-2 grid-flow-col gap-6 mt-10  mb-24">
            {projects.map((project, index) => (
                <ReactCardFlip
                    key={index}
                    isFlipped={isFlipped[index]}
                    flipDirection="horizontal"
                >
                    {/* Front side of the card */}
                    <div className="front-card bg-transparent rounded-[8px] w-[600px] h-[400px] text-center box-border" style={{ backgroundImage: `url(${project.img})` }}>
                        <div className='glass  flex  items-center justify-center relative w-[600px] h-[400px]'>
                            <div className="title_holder flex items-center justify-center w-[600px] h-[400px]">
                                <h1 className="title scale-up-center mt-[20px]">{project.title}</h1>
                            </div>
                            <div className="desc_holder">
                                <button className="desc font-quicksand font-medium text-[20px] text-center w-[80%] mt-[20px] mb-[20px]" onClick={() => handleClick(index)}>
                                            <BsPhoneFlip className='redo text-white border-0 rounded-full absolute right-[10px] bottom-[10px] w-[45px] h-[45px] cursor-pointer p-[5px] bg-[rgba(72,72,72,0.415)]' />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Back side of the card */}
                    <div className="back-card w-[600px] h-[400px] p-[2px] bg-[rgba(142,174,255,0.621)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] rounded-[10px]" onClick={() => handleClick(index)}>
                        <p className='text-center text-[20px] font-quicksand font-medium p-[10px] mt-[10px]'>{project.desc}</p>
                        <div className="techStack flex items-center justify-center flex-wrap gap-[10px] mt-[20px] mb-[20px] font-quicksand font-bold text-[20px] text-center w-full">
                            {/* Render each technology */}
                            {project.techStack && project.techStack.split(',').map((tech, idx) => (
                                <Tech tech={tech.trim()} key={idx} /> // Ensure tech is trimmed
                            ))}
                        </div>
                        <div className="grouped flex items-center justify-center flex-wrap gap-[10px] mt-[20px] mb-[20px] font-quicksand font-bold text-[20px] text-center w-full">
                            <div>
                                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                    <img src={Globe} alt="Website Link" className='hostedLink w-[50px] h-[50px]' />
                                </a>
                            </div>
                            <div>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <img src={Github} alt="GitHub Link" className='codeLink w-[50px] h-[50px]' />
                                </a>
                            </div>
                            <div>
                                <Avatar collaborators={project.colabaterName} />
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            ))}
        </div>
        </div>
    );
};

export default FlipCard;
