import './style/App.css';
import Navbar from './components/Navbar.js';
import Index from './components/Index.js';
import About from './components/About.js';
import Process from './components/Process.js';
import IGFeed from './components/IGFeed.js';
import Galleries from './components/Galleries.js';
import Footer from './components/Footer.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxU_shycolueL0_NZD2WJ6PRg7e7XLP8k",
  authDomain: "hanbitstudio-90651.firebaseapp.com",
  projectId: "hanbitstudio-90651",
  storageBucket: "hanbitstudio-90651.appspot.com",
  messagingSenderId: "567114379214",
  appId: "1:567114379214:web:f51f00f1a81b24476f459f",
  measurementId: "G-Y02V9N92DK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
