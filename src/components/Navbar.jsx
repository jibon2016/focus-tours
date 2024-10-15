import { useState } from 'react';
import logo from '../assets/logo.png';
import { MdDehaze } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function Navbar(){
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    return (
      <nav className=" font-madimi-one flex max-md:flex-col max-md:items-center justify-between px-10 sticky w-full top-0 left-0 shadow-md bg-white backdrop-blur-md z-10">
        <div className="flex md:block justify-between items-center w-full ">
          <img src={logo} className="md:w-[200px] w-[150px] h-[50px] md:h-[60px]" alt="logo"/>
          {isNavbarOpen ? (
            <MdClose onClick={() => setIsNavbarOpen(false)} className='m-2 md:hidden text-2xl font-light'/>
          ): (
            <MdDehaze onClick={() => setIsNavbarOpen(true)} className='m-2 md:hidden text-2xl font-light'/>
          )} 
        </div>
        <div className={`${ isNavbarOpen ? 'top-[50px] ' : '-top-[500px] '} transition-all duration-500 ease-in-out absolute text-center w-full max-md:flex max-md:gap-4 max-md:flex-col max-md:py-5 bg-white/90 md:bg-transparent md:static md:flex md:items-center md:justify-center z-30`}>
          <ul className="flex max-md:flex-col max-md:justify-center text-center max-md:items-center text-nowrap md:space-x-6 tracking-normal text-xl font-normal text-gray-600  md:mr-5">
            <li  className='w-full max-md:border-b border-gray-300 max-md:py-2'><a className='hover:text-blue-600 ' href="">Home</a></li>
            <li  className='w-full max-md:border-b border-gray-300 max-md:py-2'><a className='hover:text-blue-600 ' href="">Contacts</a></li>
            <li  className='w-full max-md:border-b border-gray-300 max-md:py-2'><a className='hover:text-blue-600 ' href="">Services</a></li>
            <li  className='w-full max-md:border-b border-gray-300 max-md:py-2'><a className='hover:text-blue-600 ' href="">About-us</a></li>
          </ul>
          <div>
            <button className='bg-[#5183d8] animate-pulse text-white py-2 px-4 rounded-full hover:bg-[#87acec]'>Take a Flight</button>
          </div>
        </div>
      </nav>
  )
}
