import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../sections/About'
import Explore from '../sections/Explore'
import Feedback from '../sections/Feedback'
import GetStarted from '../sections/GetStarted'
import Hero from '../sections/Hero'
import Insights from '../sections/Insights'
import WhatsNew from '../sections/WhatsNew'
import World from '../sections/World'


export default function Page() {
  return (
   
    <div className='bg-primary-black overflow-hidden'>
      <Hero />
      <div className='relative'>
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      
      <div className='relative'>
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className="gradient-03 z-0" />  
      </div>
       <center>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRqxizOYsAshBc-vinpXPA5waMRs2zKxedIQIt2nPloifiKQE_K4aiiHC7iLigqOeRSBQKSC2OanlUr/embed?start=false&loop=false&delayms=3000"width="960" height="569" ></iframe>    
       </center>
    </div>    
  )
}
