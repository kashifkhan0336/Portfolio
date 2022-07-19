import React, {useEffect} from 'react'
import Skill from "../components/Skill";
import skills from "../skills";

export default function Skills() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio - Skills";
  }, []);
  const displaySkills = skills.map((skill, i) => {
    return (
      <Skill
        skillIcon={skill.skillIcon}
        skillName={skill.skillName}
        skillDuration={i}
      />
    );
  });
  return (
    <section className="skill-section">
      <div className="typewriter">
        <h1 className="skill-heading heading">My Skills</h1>
      </div>
      <div className="skill-container">
        {displaySkills}
      </div>
    </section>
  );
}
