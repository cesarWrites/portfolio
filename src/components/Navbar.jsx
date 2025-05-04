function Navbar() {
    return (
      <nav className="navbar">
        <h1 className="text-2xl font-bold text-accent">Sarah Mukuti</h1>
        <div className="space-x-4">
          <a href="#about-section" className="hover:text-accent">About</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#articles" className="hover:text-accent">Articles</a>
          <a href="https://drive.google.com/drive/u/0/folders/1Z2oixHkNRGhV4vztaSbdaN-eJXwEpkQg" target="_blank" className="hover:text-accent">Resume</a>
        </div>
      </nav>
    );
  }
  
  
  export default Navbar;
  