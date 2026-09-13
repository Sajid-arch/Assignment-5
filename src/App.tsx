
// import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import logo from './assets/logo-text.png'

function App() {


  return (
    <>
      <Navbar />

        
        <input className='hidden peer' type="checkbox" name="checkbox" id="sidebar-toggle" />
        <label htmlFor="sidebar-toggle" className="w-full h-full fixed top-0 left-0 bg-black opacity-70 z-40 hidden peer-checked:flex transition-transform ease-in-out duration-500"></label>

      <Sidebar/>

      <Hero/>





    </>
  )
}

export default App
