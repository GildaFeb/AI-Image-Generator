"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant/constant' 
import { MenuIcon, SearchIcon, ShoppingCart, UserIcon } from 'lucide-react'

type Props ={
    openNav: () => void;
};

const Nav = ({openNav}: Props) => {
    const[navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handder = () => {
            if (window.scrollY > 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        }
        window.addEventListener('scroll', handder);
        return () => {
            window.removeEventListener('scroll', handder);
        }
    }, []);

    const bg_style = navBg ? "bg-gray-900 shadow-md" : "";
  return (
<div className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full px-6 md:px-16 bg-transparent`}>
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">IMAGEN</h1>

        {/* Centered Nav Links */}
        <div className="flex-1 hidden md:flex justify-center space-x-10">
            {NavLinks.map((link) => (
                <Link 
                    key={link.id} 
                    href={link.url}
                    className="group relative text-white text-lg font-medium w-fit block transition-all duration-300 transform hover:scale-105 hover:text-gray-300"
                >
                    <p className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </p>
                </Link>
            ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-5 md:space-x-8 text-white">
            <ShoppingCart className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110" />
            <SearchIcon className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110" />
            <MenuIcon onClick={openNav} className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110 md:hidden" />
        </div>
    </div>
  )
}

export default Nav
