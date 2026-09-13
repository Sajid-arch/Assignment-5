import React from 'react';

const Sidebar-func = () => {
    return (
        <input className='hidden peer' type="checkbox" name="checkbox" id="sidebar-toggle" />
        <label htmlFor="sidebar-toggle" className="w-full h-full fixed top-0 left-0 bg-black opacity-70 z-40 hidden peer-checked:flex transition-transform ease-in-out duration-500"></label>
    );
};

export default Sidebar-func;