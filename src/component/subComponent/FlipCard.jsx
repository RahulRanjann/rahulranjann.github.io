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
            <div className="flip-card-container grid grid-rows-2 grid-flow-col gap-6 mt-10">
            {projects.map((project, index) => (
                <ReactCardFlip
                    key={index}
                    isFlipped={isFlipped[index]}
                    flipDirection="horizontal"
                >
                    {/* Front side of the card */}
                    <div className="front-card" style={{ backgroundImage: `url(${project.img})` }}>
                        <div className='glass'>
                            <div className="title_holder">
                                <h1 className="title scale-up-center">{project.title}</h1>
                            </div>
                            <div className="desc_holder">
                                <button className="desc" onClick={() => handleClick(index)}>
                                            <BsPhoneFlip className='redo' />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Back side of the card */}
                    <div className="back-card" onClick={() => handleClick(index)}>
                        <p>{project.desc}</p>
                        <div className="techStack">
                            {/* Render each technology */}
                            {project.techStack && project.techStack.split(',').map((tech, idx) => (
                                <Tech tech={tech.trim()} key={idx} /> // Ensure tech is trimmed
                            ))}
                        </div>
                        <div className="grouped">
                            <div>
                                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                    <img src={Globe} alt="Website Link" className='hostedLink' />
                                </a>
                            </div>
                            <div>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <img src={Github} alt="GitHub Link" className='codeLink' />
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
