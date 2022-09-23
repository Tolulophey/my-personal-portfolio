import React from 'react'
import './portfolio.css'
import { useState } from 'react'
import ProjectList from './ProjectList'


function Portfolio() {
  const [showAll, setShowAll] = useState(true)
  const [showFE, setShowFE] = useState(false)
  const [showBE, setShowBE] = useState(false)
  const [showFS, setShowFS] = useState(false)
  
  const showAllProjects = ()=> {
    setShowAll(true);
    setShowFE(false);
    setShowBE(false);
    setShowFS(false);
  }
  const showFEProjects = ()=> {
    setShowAll(false);
    setShowFE(true);
    setShowBE(false);
    setShowFS(false);
  }
  const showBEProjects = ()=> {
    setShowAll(false);
    setShowBE(true);
    setShowFE(false);
    setShowFS(false);
  }
  const showFSProjects = ()=> {
    setShowAll(false);
    setShowFE(false);
    setShowBE(false);
    setShowFS(true);
  }
  return (
    <div id='Portfolio' className='portfolio'>
        <div className="button">
          <button id='all' className={showAll ? 'all active' : 'all'} onClick={showAllProjects} >All</button>
          <button id='frontend' className={showFE ? 'febutton active' : 'febutton'} onClick={showFEProjects}>Front-End</button>
          <button id='backend' className={showBE ? 'bebutton active' : 'bebutton'} onClick={showBEProjects}>Back-End</button>
          <button id='fullstack' className={showFS ? 'fsbutton active' : 'fsbutton'} onClick={showFSProjects}>Full Stack</button>
        </div>
        <div className="projects-container">
          <ProjectList
           showAll={showAll}
           setShowAll={setShowAll}
           showBE={showBE}
           setShowBE={setShowBE}
           showFE={showFE}
           setShowFE={setShowFE}
           showFS={showFS}
           setShowFS={setShowFS}
           />
        </div>
    </div>
  )
}

export default Portfolio