import React from 'react'

export default function Skill(props) {
  console.log(props.skillDuration)
  return (
    <div className="skill" style={{animationDelay: `${props.skillDuration * 100}ms`}}>
        <span><img src={props.skillIcon} alt="" className="skill-icon"/></span>
        <p className='skill-name'><span>{props.skillName}</span></p>
    </div>
  )
}
