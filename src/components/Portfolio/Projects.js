import React from 'react'
// import arrowBack from '../../images/arrowBack.svg'
// import arrowFront from '../../images/arrowFront.svg'
import link from '../../images/link.png'
import github from '../../images/github.png'

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
                        <a href={props.github_link}><img src={github} alt="github_link" /></a>
                        <a href={props.deployed_link}><img src={link} alt="deployed_link" /></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects