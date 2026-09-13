
import {RxHamburgerMenu } from 'react-icons/rx'
import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='w-full py-4 px-6 md:px-15 lg:px-30 bg-transparent font-jakarta backdrop-blur-xl fixed z-30 top-0 left-0 min-h-10 border-b-2 border-gray-100'>
                  <div className='container mx-auto flex flex-row items-center justify-between'>
                    <label htmlFor='sidebar-toggle' className='flex md:hidden text-[#7B7171]'><RxHamburgerMenu /></label>
                    <div className='max-w-1/4 md:max-w-full'><img src={logo} alt="Logo" className='object-cover' /></div>
                    <ul className='hidden md:flex flex-row items-center gap-4 font-medium text-xs lg:text-sm text-[#475569]'>
                      <li><a href="#" className='text-[#D91B7E]'>Home</a></li>
                      <li><a href="#">Technologies</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                    <div className='flex flex-row items-center justify-center gap-4 text-[9px] text-xs lg:text-sm font-semibold'>
                      <button className='cursor-pointer text-[#334155]'>Sign In</button>
                      <button className='bg-[#D91B7E] px-5 pt-2 pb-2.5 rounded-full cursor-pointer text-white'>Sign Up</button>
                      </div>
                  </div>
                </nav>
    );
};

export default Navbar;