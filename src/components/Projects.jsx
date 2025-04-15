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
      <section className="projects">
      <div className="project-card">
        <h3>My Portfolio</h3>
        <p>A personal portfolio built with React and vanilla CSS.</p>
        <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Site</a>
        <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <h3>My Portfolio</h3>
        <p>A personal portfolio built with React and vanilla CSS.</p>
        <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Site</a>
        <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
    );
  }
  
  export default Projects;
  