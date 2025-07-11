
//Used to indicate that this component is a client-side component in Next.js
"use client"; 
import React from 'react'
// Importing Nav and MobileNav components
import Nav from './Nav'
import MobileNav from './MobileNav'

export const ResponsiveNav = () => {
  const [showNav, setShowNav] = React.useState(false);
  const openNavHandler = () => {setShowNav(true)};
  const closeNavHandler = () => {setShowNav(false)};
  return (
    <>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </>
  )
}
