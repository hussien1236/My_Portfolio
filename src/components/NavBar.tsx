import { useState } from "react";
import { Code, Contact2, Home, Menu, X, Briefcase } from "lucide-react";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex justify-between w-full mt-5 items-center">
      <div className="relative">
        <span className="relative font-bold lg:text-5xl text-4xl z-10">Hussein</span>
        <img src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" className="absolute w-20 -bottom-1 -right-4 z-0" />
      </div>
      {/* Desktop Nav Links */}
      <ul className="flex lg:gap-5 gap-3 lg:font-semibold font-medium max-md:hidden nav_links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Hamburger Icon for Small Devices */}
      <button className="md:hidden z-20" onClick={() => setSidebarOpen(true)}>
        <Menu size={32} />
      </button>
      <a href='#contact' className="max-md:hidden">
      <button className="primary_button">
        Connect With Me
      </button>
      </a>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex flex-row-reverse backdrop-blur-xs bg-black/40">
          <div className="max-sm:w-2/3 w-2/6 p-5 max-w-xs bg-[#161513] h-full flex flex-col gap-8 animate-slide-in-right">
            <button className="self-end mb-8" onClick={() => setSidebarOpen(false)}>
              <X size={32} />
            </button>
            <ul className="flex flex-col gap-6 font-semibold text-lg nav_links">
              <li> <a href="#home" onClick={() => setSidebarOpen(false)} className="flex text-2xl items-center gap-2"><Home size={25}/>Home</a></li>
              <li><a href="#skills" onClick={() => setSidebarOpen(false)} className="flex text-2xl items-center gap-2"><Code size={25}/> Skills</a></li>
              <li><a href="#experience" onClick={() => setSidebarOpen(false)} className="flex text-2xl items-center gap-2"><Briefcase size={25}/> Experience</a></li>
              <li> <a href="#projects" onClick={() => setSidebarOpen(false)} className="flex text-2xl items-center gap-2"><Code size={25}/> Projects</a></li>
              <li><a href="#contact" onClick={() => setSidebarOpen(false)}className="flex text-2xl items-center gap-2"><Contact2 size={25}/>Contact</a></li>
            </ul>
            <a href='#contact' className="max-md:hidden">
            <button className="primary_button mt-8">Connect With Me</button>
            </a>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </div>
  );
}

export default NavBar