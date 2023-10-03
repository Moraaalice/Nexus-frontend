"use client"
import React, { useState, useEffect } from 'react';
import { FaHome, FaUsers, FaSignOutAlt, FaFilter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';





const SideBar = () => {
  const [activeItem, setActiveItem] = useState<string | null>('dashboard');
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      setActiveItem('dashboard');
    } else if (pathname === '/customers') {
      setActiveItem('customers');
    } else if (pathname === '/meter') {
      setActiveItem('meter');
    } else if (pathname === '/logout') {
      setActiveItem('logout');
    }
  }, []);
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <div className="h-screen flex-col lg:flex-row bg-white">
      <div className="w-64 h-full bg-blue-700 text-white p-8 transform lg:transform-none lg:translate-x-0 transition-transform duration-300 ease-in-out">

        <div className="flex justify-between items-center mb-10">
          <Image src={"/images/logo.png"} 
           alt='logo'
           width={150}
           height={20}/>
        </div>
        <hr className="my-10" />
        <div className="space-y-10">
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg cursor-pointer ${
              activeItem === 'dashboard' ? 'bg-blue-600 text-blue-100' : ''
            }`}
            onClick={() => handleItemClick('dashboard')}>
            <div
              className={`w-8 h-6 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'dashboard' ? 'bg-blue-600 rounded-md' : ''}`}>
              <FaHome
                className={`w-6 h-6 ${activeItem === 'dashboard' ? 'text-blue' : 'text-blue'}`}/>
            </div>
            <Link href="/">
              <span className="font-bold text-lg">Dashboard</span>
            </Link>
          </div>
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg cursor-pointer ${
              activeItem === 'customers' ? 'bg-blue-600 text-white' : ''
            }`}
            onClick={() => handleItemClick('customers')}
          >
            <div
              className={`w-8 h-8 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'customers' ? 'bg-blue-600 rounded-md' : 'rounded-md'}`}>
              <FaUsers
                className={`w-6 h-6 ${activeItem === 'customers' ? 'text-white' : 'text-blue'}`}/>
            </div>
            <Link href="/customers">
              <span className="font-bold text-lg">Customers</span>
            </Link>
          </div>
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg cursor-pointer ${
              activeItem === 'meter' ? 'bg-blue-600 text-white' : ''}`}
            onClick={() => handleItemClick('meter')}>
            <div
              className={`w-8 h-5 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'meter' ? 'bg-blue-600 rounded-md' : 'rounded-md'}`}>
              <FaFilter
                className={`w-8 h-5 ${activeItem === 'meter' ? 'text-white' : 'text-blue'}`}/>
            </div>
            <Link href="/meter">
              <span className="font-bold text-lg">Meter</span>
            </Link>
          </div>
        </div>
        <div className="mb-60"></div>
        <div className="flex flex-col justify-end flex-grow mt-4 mb-4">
          <hr className="my-10" />
          <div className="mb-4"></div>
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg cursor-pointer ${
              activeItem === 'logout' ? 'bg-blue-600 text-white' : ''}`}
            onClick={() => handleItemClick('logout')}>
            <div
              className={`w-8 h-5 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'logout' ? 'bg-blue-600 rounded-md' : 'rounded-md'
              }`}>
              <FaSignOutAlt
                className={`w-8 h-5 ${activeItem === 'logout' ? 'text-white' : 'text-blue'}`}/>
            </div>
            <span className="font-bold text-lg">Logout</span>
          </div>
          <div className="mb-4"></div>
          <div className="mt-2 text-lg opacity-70">@2023, Nexus All rights reserved</div>
        </div>
      </div>
      <div className="flex-grow bg-white">
        <div></div>
      </div>
    </div>
  );
};
export default SideBar;










