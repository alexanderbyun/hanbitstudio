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
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
  
    <BrowserRouter>

      <div className='app'>
        
        <header>
        <nav className="navbar">
                <h1 className="title"><a href="/index">HANBIT STUDIO</a></h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/about">ABOUT</Link>
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
                </ul>

                <Routes>
                    <Route path="/galleries" element={<Galleries />} />
                </Routes>
            </nav>
        </header>
        
        <div>
          <Index />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Galleries />
        </div>

        <div>
          <Process />
        </div>
        
        <div>
          <IGFeed />
        </div>

        <div>
          <Footer />
        </div>
        
      </div>

    </BrowserRouter>
  );
};

export default App;
