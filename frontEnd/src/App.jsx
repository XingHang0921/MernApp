import { useState } from 'react'
import homePageImage from './assets/homePageImage.jpg'
import './App.css'
import searchIcon from './assets/searchIcon.png'
import logo from './assets/homePageImage.jpg'

function App() {

  return (
    <>
      <title>E-Commerce</title>
      <header className=''>
        <div className='narBar'>
          <div className='logo'>
              {/* <img src={logo} alt="" /> */}
          </div>
          
          <form action="search" className='search'>
            <img src={searchIcon} className='searchIcon' alt="" />
            <input className='searchInput' type="text" 
              placeholder='Search In-Store Item'/>
          </form>

          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Product</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='advertizeContainer'>
        <div className='row'>
          <div className='advertize'>
            <h1>Discorve Whats New Today</h1>
            <p>Lorem ipsum, dolor sit amet consectetur <br />
              dipisicing elit. Quo sunt voluptatum nobis omn<br />
              is quas soluta est voluptas debitis tempore iste<br />
              dolor, inventore ipsam facilis impedit<br />
              doloremque nesciunt magni eligendi.</p>
          </div>
          <div className='advertize'>
            <img src={homePageImage} alt="advertize image" />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
