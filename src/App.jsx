
import './App.css';
import './styles/tailwind.css';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/AboutMe';
import Blank from './components/blankscreen';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectGallery from './components/ProjectList';



const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About></About>
      <Carousel></Carousel>
      <Projects></Projects>
      <ProjectGallery></ProjectGallery>
      <Contact></Contact>
      <Blank></Blank>
      <Footer></Footer>

    </div>
  );
};

export default App;

