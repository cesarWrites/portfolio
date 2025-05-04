import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Articles />
      <Footer />
    </>
  );
}

export default Home;
