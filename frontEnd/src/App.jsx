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
                <li><a href="">Local Store</a></li>
                <li><a href="">Log In</a></li>
                <li><a href="">Cart</a></li>
              </ul>
            </div>
          </div>
        </header>
        <div className='top2'>
          <div>
            <div className='listContainer'>
              <ul>
                <li><a href="">Browse In-Store</a></li>
                <li><a href="">Weekly Sales</a></li>
                <li><a href="">Best-Seller</a></li>
                <li><a href="">New-Arrival</a></li>
                <li><a href="">Coming Soon</a></li>
              </ul>
              <div className='block'></div>
            </div>
          </div>
        </div>

        <div className='mainBodyContainer'>
          <div className='mainBody'>

          </div>
        </div>



        <div className='footerContainer'>
          <footer>
            <small>
              Copyright © 2025 shoe shoe shoe. All Rights Reserved.
            </small>
          </footer>
        </div>
        
      </div>
      

    </>
  )
}

export default App
