import { useState } from 'react'
import homePageImage from './assets/homePageImage.jpg'
import './App.css'
import searchIcon from './assets/searchIcon.png'
import logo from './assets/react.svg'

function App() {

  return (
    <>
      <title>E-Commerce</title>
      <div className='mainPage'>
        <header className='top'>
          <div className='navBar'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <div>
              <form id="search" action="/search" className='search'>
                <img src={searchIcon} className='searchIcon' alt="" />
                <input className='searchInput' type="text" 
                  placeholder='Search In-Store Item'/>
                  <button type='submit' form='search'>Submit</button>
              </form>
            </div>
            <div className='nav'>
              <ul>
                <li><a href="">My Account</a></li>
                <li><a href="">Log In</a></li>
                <li><a href="">Cart</a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      

    </>
  )
}

export default App
