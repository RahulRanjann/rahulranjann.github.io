import React from 'react'
import { Link } from "react-router-dom";
import {
    GithubLogo,
    GMailLogo,
    InstagramLogo,
    LinkedinLogo,
} from "../../assets";

const SocialMedia = () => {
    const social = [
        {link: "https://github.com/rahulranjann",
         logo: GithubLogo,
        },

        {link: "https://www.linkedin.com/in/rahulranjann/",
         logo: LinkedinLogo,
        },

        {link: "https://www.instagram.com/rahulranjann/",
         logo: InstagramLogo,
        },

        {link: "mailto:don.rahulranjann@gmail.com",
         logo: GMailLogo,
        },

    ]   

  return (
    <div className="social_media">
                <div className="social_media_icon">

                    {social.map(({link, logo}) => (
                        <div className="media_link">
                            <a href={link} target="_blank">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                    ))}
                    <div className="resume_download_btn">
                        <button className="btn">
                            <Link to="/resume">Download Resume</Link>
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default SocialMedia
