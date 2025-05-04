function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-area">
          <h3>Data</h3>
          <ul>
            <li>SQL</li>
            <li>BigQuery</li>
            <li>Excel</li>
            <li>Data Studio</li>
            <li>MS SQL Server</li>
          </ul>
        </div>
        <div className="skill-area">
          <h3>Programming</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skill-area">
          <h3>AI / ML</h3>
          <ul>
            <li>TensorFlow</li>
            <li>Scikit-learn</li>
            <li>Hugging Face</li>
            <li>NLTK</li>
          </ul>
        </div>
        <div className="skill-area">
          <h3>Cloud</h3>
          <ul>
            <li>GCP</li>
            <li>AWS</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="skill-area">
          <h3>Automations</h3>
          <ul>
            <li>Robotic Process Automations</li>
            <li>Google AppScripts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;