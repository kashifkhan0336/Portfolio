import React from 'react'

export default function Project(props) {
  return (
    <div className="project" style={{animationDelay: `${props.delay*100}ms`}}>
        <img src={props.projectImg} alt=""  className='project-img'/>
        <div className="padding">
        <h2 className='project-title'>{props.projectTitle}</h2>
        <div className="project-links-container">
            <a href={props.githubLink} className="github-link">Github Repo</a>
            {props.liveSite && <a href={props.liveSite} className="live-site-link">Live Site</a>}
        </div>
        </div>
    </div>
  )
}
