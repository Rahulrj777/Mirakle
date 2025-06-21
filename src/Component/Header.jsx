import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
      <div className="w-9/10 mx-auto h-[100px] flex justify-between items-center">
        {/* Logo */}
        <div className="w-32">
          <img
            src={logo}
            alt="logo"
            className="w-32"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-black font-semibold text-lg lg:text-base">
          <Link to='/'><li className="cursor-pointer hover:text-green-600">Home</li></Link>
          <Link to='/Shop'><li className="cursor-pointer hover:text-green-600">Shop</li></Link>
          <Link to="/About_Us"><li className="cursor-pointer hover:text-green-600">About Us</li></Link>
          <Link to='/Contect_Us'><li className="cursor-pointer hover:text-green-600">Contact Us</li></Link>
        </ul>

        {/* Search Box */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-2 py-1 bg-white">
          <BiSearchAlt className="text-gray-500 text-lg" />
          <input
            type="search"
            placeholder="Search..."
            className="outline-none px-2 bg-transparent text-sm w-32 md:w-48"
          />
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={openSidebar} className="text-3xl text-black cursor-pointer">☰</button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
          ${SidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={closeSidebar} className="text-2xl cursor-pointer">✕</button>
        </div>

        {/* Logo at Top */}
        <div className="flex justify-center items-center pb-6">
          <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 px-6 text-black font-medium text-lg">
          <Link to='/' onClick={closeSidebar}><li className="cursor-pointer hover:text-green-600">Home</li></Link>
          <Link to='/Shop' onClick={closeSidebar}><li className="cursor-pointer hover:text-green-600">Shop</li></Link>
          <Link to="/About_Us" onClick={closeSidebar}><li className="cursor-pointer hover:text-green-600">About Us</li></Link>
          <Link to='/Contect_Us' onClick={closeSidebar}><li className="cursor-pointer hover:text-green-600">Contact Us</li></Link>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {SidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-40 z-40"
        />
      )}
    </>
  );
};

export default Header;
