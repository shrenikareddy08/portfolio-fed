const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python"]

  return (
   <div className="section skills-container" id="skills">
      <h2>Skills</h2>
      {skills.map((s, i) => (
        <span key={i} className="skill">{s}</span>
      ))}
    </div>
  )
}

export default Skills