import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutGrid, LuLogOut } from "react-icons/lu";
import Logo from "../assets/মুন্সীগঞ্জ_পলিটেকনিক_ইনস্টিটিউট.jpg"

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-72 h-screen bg-white border-r border-gray-200 p-5">
      {/* Institution Logo */}
      <div className="mb-10 flex justify-center">
        <div className="w-full p-4 flex justify-center items-center border-0">
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation - Only Dashboard Section */}
      <nav className="flex-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-[15px] transition-all
            ${isActive ? 'bg-[#00485E] text-white shadow-md' : 'text-[#002B44] hover:bg-gray-50'}
          `}
        >
          <LuLayoutGrid size={20} />
          <span>Dashboards</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-auto border-t border-gray-100 pt-4">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-[#002B44] font-semibold text-[15px] group">
          <LuLogOut size={22} className="text-orange-500 group-hover:text-red-600" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;