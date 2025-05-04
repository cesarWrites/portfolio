function Projects() {
    const projects = [
      {
        name: "Portfolio Website",
        desc: "Personal portfolio built with React and Vite.",
        live: "https://yourportfolio.com",
        github: "https://github.com/yourusername/portfolio"
      },
      // Add more
    ];
  
    return (
      <section id = "projects" className="projects">
      <div className="project-card">
        <h3>Pro-dev learning app</h3>
        <p>A course Application that gievs users access to multiple courses.</p>
        <a href="https://pro-dev-learning-c72m4nef3-cesarwrites.vercel.app/" target="_blank" rel="noreferrer">Live Site</a>
        <a href="https://github.com/cesarWrites/pro-dev-learning-app" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <h3>Dev-Notes</h3>
        <p>A web application that gives users access to books, tech news and tech tips.</p>
        <a href="https://cesarwrites.github.io/news" target="_blank" rel="noreferrer">Live Site</a>
        <a href="https://github.com/cesarWrites/devnotes-app" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <h3>Microgesture Recognition</h3>
        <p>A multimodal AI application that enables users to make requests based on microgestures.</p>
        <a href="https://pro-dev-learning-c72m4nef3-cesarwrites.vercel.app/" target="_blank" rel="noreferrer">Live Site</a>
        <a href="https://github.com/cesarWrites/pro-dev-learning-app" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <h3>Pro-dev learning app</h3>
        <p>A course Application that gievs users access to multiple courses.</p>
        <a href="https://pro-dev-learning-c72m4nef3-cesarwrites.vercel.app/" target="_blank" rel="noreferrer">Live Site</a>
        <a href="https://github.com/cesarWrites/pro-dev-learning-app" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
    );
  }
  
  export default Projects;
  