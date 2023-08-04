import '../style/App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galleries from './Galleries';
import { Link } from "react-scroll";

function Navbar() {
    
        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)

        const closeMenu = () => setClick(false)
 
        return (
                <nav className="navbar">
                <Link className="title" to="index" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HANBIT STUDIO</Link>
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
                
        );
};

export default Navbar;