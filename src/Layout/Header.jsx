import React from 'react';
import { Link } from 'react-router-dom';
import AdminImg from "../assets/logo.png"

const Header = () => {

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-[#002B44]">
          Admin Dashboard Management
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-200">
          <img 
            src={AdminImg} 
            alt="Profile" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name and Role */}
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#002B44] leading-tight">
            Md. Tanvir Shekh
          </span>
          <span className="text-sm text-gray-400">
            Super Admin
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;