import './style/App.css';
import Navbar from './components/Navbar.js';
import Index from './components/Index.js';
import About from './components/About.js';
import Process from './components/Process.js';
import IGFeed from './components/IGFeed.js';
import Galleries from './components/Galleries.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <div className='app'>
      
      <header>
        <Navbar />
        
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
  );
};

export default App;
