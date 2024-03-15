import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <header className=' mb-24'>
      <Navbar />
      <Banner />
    </header>
  );
}

export default Header