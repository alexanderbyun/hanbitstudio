import '../style/App.css';

function Navbar() {
    
        return (
            <nav className="navbar">
                <a className="title" href="/index">HANBIT STUDIO</a>
                <ul className="nav-links">
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="/galleries">GALLERIES</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACT</a>
                    </li>
                    <li>
                        <a href="/book">
                            <button>BOOK NOW</button>
                        </a>
                    </li>
                </ul>
            </nav>
        );
};

export default Navbar;