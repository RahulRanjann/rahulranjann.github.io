import React from 'react'
import { AboutImg } from "../../assets"
import Heading from '../subComponent/Heading'


function About() {
  return (
    <div className=" mt-0 mr-0 mb-[12px] ml-[10px] pt-[35px] pr-[200px] pb-[100px] pl-[200px]">
        <div className=' flex flex-row'>
            <div className="left basis-1/2">
                <Heading title="About Me" className="font-" />
                <div className='about_description text-left text-white  text-center font-quicksand mt-0 mb-[10px] text-[#393737] text-[30px] font-medium'>
                    <p className='m-[1px]'>I'm Rahul. A web developer and problem solver.</p>
                </div>
                <div className='about_description_body text-white w-[700px]'>
                    <p className='desc-l1'>
                        I am a dedicated Full Stack Developer with a passion for blending technology and design to create impactful, user-centered solutions. With expertise in React, TypeScript, HTML, CSS, and JavaScript, I have built scalable web applications and led projects from initial concept to deployment. My journey extends beyond code, having explored Digital Campaign Design, Flash Actionscript, and Web Design, all of which fuel my passion for Product Design and solving real-world problems through purposeful innovation.
                    </p>
                    <p className='desc-l2'>
                        What drives me most is the ability to craft solutions that make a difference—whether it’s developing intuitive job application platforms like JoinArena, building seamless tour and travel websites, or designing AI-driven resume builders. I am constantly pushing boundaries, learning new technologies, and delivering solutions that not only meet but exceed user expectations.
                    </p>
                    <p className='quote'>
                        <br />
                        This is one of my favourite quotes ( by <b>Peter Drucker</b> ):
                    </p>
                    <p>
                        <b><i>“There is nothing so useless as doing efficiently that which should not be done at all.”</i></b>
                    </p>
                </div>
            </div>
            <div className="right basis-1/2 mt-6">
                <img className="border-double border-4 border-white-500 rounded-md" src={AboutImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
