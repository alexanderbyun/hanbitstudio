// Components
import Navbar from './components/Navbar.js';
import Index from './components/Index.js';
import About from './components/About.js';
import Process from './components/Process.js';
import IGFeed from './components/IGFeed.js';
import Galleries from './components/Galleries.js';
import Footer from './components/Footer.js';

// CSS & Libraries
import './style/App.css';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Switch, Route, Component, useEffect } from "react-router-dom";
import { Link } from "react-scroll";

   

function App() {

  return (
  
    <BrowserRouter>
      <div className='app'>
  
        <header>
          <Navbar />
          {/* <nav className="navbar">
              <h1 className="title">
                <Link className="title" to="index"  offset={100} duration={500} >HANBIT STUDIO</Link>
              </h1>

              <ul className="nav-links">
                  <li>
                      <Link to="about">ABOUT</Link>
                  </li>
                  <li>
                      <Link to="/galleries">PORTFOLIO</Link>
                  </li>
                  <li>
                      <a href="https://www.honeybook.com/widget/hanbit_studio_225291/cf_id/62bcd6134a96e61981d227ad" >INQUIRE</a>
                  </li>
                  {/* <li>
                      <Link to="/book">
                          <button>INQUIRE</button>
                      </Link>
                  </li> */}
              {/* </ul>

              <Routes>
                  <Route path="/galleries" element={<Galleries />} />
              </Routes>
          </nav> */}
        </header>
        
        <div id="index">
          <Index />
        </div>

        <div id="about">
          <About />
        </div>

        {/* <div>
          <Galleries />
        </div> */}

        <div id="process">
          <Process />
        </div>
        
        {/* <div>
          <IGFeed />
        </div> */}

        <div>
          <Footer />
        </div>
        
      </div>

    </BrowserRouter>
  );
};

export default App;
