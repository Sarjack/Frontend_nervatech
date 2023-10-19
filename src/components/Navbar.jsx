import { useEffect, useState } from 'react'
import Button from './Button'
import NervaLogo from './NervaLogo'

const Navbar = () => {
  function goToContactUs(event) {
    event.preventDefault()
    window.location.href = '/contact'
  }
  function closeMenuItems() {
    const checkbox = document.querySelector('.checkbox')
    if (checkbox) {
      checkbox.checked = false
      const menuItems = document.getElementById('menu-items')
      document.body.classList.remove('popup-open')
      menuItems.classList.add('hide-menu-items')
    }
  }
  function toggleMenuItems() {
    const checkbox = document.querySelector('.checkbox')

    if (!checkbox.checked) {
      checkbox.checked = false
      const menuItems = document.getElementById('menu-items')
      document.body.classList.remove('popup-open')
      menuItems.classList.add('hide-menu-items')
    } else {
      const menuItems = document.getElementById('menu-items')
      menuItems.classList.remove('hide-menu-items')
      document.body.classList.add('popup-open')
    }
  }
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname)
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
  }, [])

  function getExtraLinks() {
    if (currentUrl !== '/contact' && currentUrl !== '/about') {
      return (
        <li className="links-hover">
          <a href="#our-solutions">Our Solutions</a>
        </li>
      )
    }
  }

  return (
    <div className="navbar">
      <NervaLogo className="navbar-logo" />
      <input
        className="checkbox"
        type="checkbox"
        name=""
        id=""
        onChange={toggleMenuItems}
      />
      <div className="menu">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="menu-items hide-menu-items" id="menu-items">
        <li className="links-hover">
          <a href="/">Home</a>
        </li>
        <li className="links-hover">
          <a href="#our-solutions" onClick={closeMenuItems}>
            Our Solutions
          </a>
        </li>
        <li className="links-hover">
          <a href="/manufacturer">For Manufacturers</a>
        </li>
        <li className="links-hover">
          <a href="/buyer">For Buyers</a>
        </li>
        <li className="links-hover">
          <a href="/about">About Us</a>
        </li>
        <li>
          <Button text={'Quick Message'} onClick={goToContactUs} />
        </li>
      </div>
      <nav className="nav-links-container">
        <ul className="nav-links">
          <li className="links-hover">
            <a href="/">Home</a>
          </li>
          {getExtraLinks()}

          <li className="links-hover">
            <a href="/about">About Us</a>
          </li>
          <li>
            <Button text={'Quick Message'} onClick={goToContactUs} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
