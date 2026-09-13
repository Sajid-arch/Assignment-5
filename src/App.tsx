import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Tech from './Tech'
import { Suspense } from 'react'
import type Itech from './TechType'
// import TechSection from './components/Tech-section'

  const techData = async():Promise<Itech[]> =>{
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  };


function App() {
  const techPromise = techData();

  return (
    <>
      <Navbar />

        
        <input className='hidden peer' type="checkbox" name="checkbox" id="sidebar-toggle" />
        <label htmlFor="sidebar-toggle" className="w-full h-full fixed top-0 left-0 bg-black opacity-70 z-40 hidden peer-checked:flex transition-transform ease-in-out duration-500"></label>

      <Sidebar/>

      <Hero/>

      {/* <TechSection/> */}
              
        <Suspense fallback ={<h2>Loading ...</h2>}>
          <Tech techPromise = {techPromise}/>
        </Suspense>

      <Footer/>





    </>
  )
}

export default App
