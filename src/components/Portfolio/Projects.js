import React from 'react'
// import arrowBack from '../../images/arrowBack.svg'
// import arrowFront from '../../images/arrowFront.svg'
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineLink } from 'react-icons/ai';

function Projects(props) {

  return (
    <>
        <div className="project-container">
            <div className="project">
                <img src={props.project} alt="project" />
            </div>
            <div className="details">
                {/* <div className="arrow">
                    <div className="back">
                        <div className="back-color">
                            <img src={arrowBack} alt="back" />
                        </div>
                    </div>
                    <div className="front">
                        <div className="front-color">
                            <img src={arrowFront} alt="front" />
                        </div>
                    </div>
                </div> */}
                <div className="info">
                    <h2>{props.name}</h2>
                    <div className="links">
                        <a href={props.github_link}>
                            <AiOutlineGithub size="30px"/>
                        </a>
                        <a href={props.deployed_link}>
                            <AiOutlineLink size="30px" color="#000"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects