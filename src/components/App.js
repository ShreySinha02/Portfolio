
import './App.css';
import Navbar from './Navbar';
import lap from './lap.jpg';
import phone from './phone.jpg';
import Introduction from './Introduction';
import About from './About';
import Showimage from './Showimage';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Upnav from './Upnav';


function App() {

// const [offsetY,setoffsetY]=useState(0)

  return (

    <ParallaxProvider>
      <Parallax speed={-40}>
    <div className="App "  id ="home">
      <Navbar />
      <Showimage image={lap}/> 
      <Introduction/>
     
    </div>
    </Parallax>
    <Parallax speed={0}>
    <div className='resume' id="about">
   
      <Showimage image={phone} />
      <About/>
      <Upnav/>
      
    </div>
    </Parallax>
   
    </ParallaxProvider>
  )
}



export default App;
