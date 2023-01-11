import React from 'react'
import data from './data'
import Projects from './Projects'


function ProjectList(props) {
 const frontEnd = data.FEProjects.map((project)=>{
       return   <Projects 
                key={project.id}
                project={project.image}
                name={project.name}
                deployed_link={project.deployed_link}
                github_link={project.github}
                />
 })
 const backEnd = data.BEProjects.map((project)=>{
        return <Projects
                key={project.id}
                project={project.image}
                name={project.name}
                deployed_link={project.deployed_link}
                github_link={project.github}
                />
 })
 const fullStack = data.FSProjects.map((project)=>{
        return <Projects 
                key={project.id}
                project={project.image}
                name={project.name}
                deployed_link={project.deployed_link}
                github_link={project.github}
                />
 })

  return (
    <>
        <div className={props.showAll ? 'all active' : "all"}>
            {frontEnd}
            {backEnd}
            {fullStack}
        </div>
        <div className={props.showFE ? 'frontend active' : "frontend"}>
            {frontEnd}
        </div>
        <div className={props.showBE ? "backend active" : "backend"}>
            {backEnd}
        </div>
        {/* <div className={props.showFS ? "fullstack active" : "fullstack"}>
            {fullStack}
        </div> */}

    </>
  )
}

export default ProjectList