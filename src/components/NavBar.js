import React from 'react'
import search from '../../src/assets/search.svg'
import './navbar.css'

const NavBar = () => {
  return (
    <div>
        <div className='background'>
            <h1>hello</h1>
        </div>
        <div className='search'>
            <label for="search">See results</label>
             <input type="search" id="search" name="search"></input>
             <img src={search} width={20}  alt="logo" className="logo"/>
        </div>
    </div>
  )
}

export default NavBar