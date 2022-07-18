import React, {useEffect} from 'react'
import Project from '../components/Project';
import projects from '../projects';

export default function Projects() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio - Projects";
  }, []);
  const displayProjects = projects.map((project, i) => {
    return <Project projectImg={project.projectImg} projectTitle={project.projectTitle} githubLink={project.githubLink} liveSite={project.liveSite || ""} delay={i}/>
  })
  return (
    <section className="projects-section">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {displayProjects}
      </div>
    </section>
  )
}
