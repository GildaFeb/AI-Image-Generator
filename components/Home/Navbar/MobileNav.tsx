import { NavLinks } from '@/constant/constant'
import { MenuIcon, SearchIcon, ShoppingCart, XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    showNav: boolean;
    closeNav: () => void;
};


const MobileNav = ({closeNav, showNav} : Props) => {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-200%]";
  
  return (
    <div>
      {/* Mobile Navigation Component */}

    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-screen transform transition-all
duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-0`}>

        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} >
            
            <p className="ml-8 group relative text-lg font-medium w-fit block transition-all duration-300 transform hover:scale-105 text-center text-white">
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 duration-300 "></span>
            </p>
            </Link>
          );
        })}
        {/* Close icon */}
        <XIcon onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] cursor-pointer sm:w-8 w-6 h-6 hover:scale-125 duration-300"/>
      </div>
    </div>
  )
}

export default MobileNav