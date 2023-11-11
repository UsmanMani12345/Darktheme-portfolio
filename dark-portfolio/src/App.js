import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Services from './Services/Services';
import Skill from './Skills/Skill';
import Resume from './Resume/Resume';
import Blog from './Blog/Blog';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Skill/>
      <Resume/>
      <Blog/>
      <Review/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
