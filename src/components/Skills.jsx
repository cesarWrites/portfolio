function Skills() {
    const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git'];
    return (
      <section id="skills" className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <h2>Programming: 
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-accent text-white rounded-full">{skill}</span>
          ))}
          </h2>
        </div>
      </section>
    );
  }
  
  export default Skills;
  