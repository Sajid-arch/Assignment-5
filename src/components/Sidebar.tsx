import { RxCross2 } from 'react-icons/rx'

const Sidebar = () => {
    return (
            <aside className='fixed top-0 left-0 h-full py-6  px-5 transition-transform duration-500 -translate-x-full ease-in-out peer-checked:translate-x-0 flex flex-col z-50 bg-white w-7/10 sm:w-1/2'>
        <div className="flex flex-row items-center justify-end"><label htmlFor='sidebar-toggle' className='text-[#7B7171] cursor-pointer'><RxCross2 /></label></div>
          <ul className='flex flex-col justify-start items-start gap-4 font-medium text-sm text-[#475569]'>
              <li><a href="#" className='text-[#D91B7E]'>Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;