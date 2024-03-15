import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <header className="container mx-auto p-7 lg:px-16 xl:px-24">
      <Navbar />
      <Banner />
    </header>
  );
}

export default Header