import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ( {setShowLoginData} ) => {

  const [menu, setMenu] = useState("menu");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /> </Link>
      <ul className="navbar-menu">
      <Link to='/' onClick={() => setMenu("Home")} className={menu==="Home"?"active":"null"}>Home</Link>
      <a href='#explore-menu-id' onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":"null"}>Menu</a>
      <a href='#app-download-id' onClick={() => setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":"null"}>Mobile App</a>
      <a href='#footer-id' onClick={() => setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":"null"}>Contact Us</a>
      </ul>
    
    <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon"/>
        <div className="navbar-search-icon">
            <Link to='/cart'> <img src={assets.basket_icon} aly="basket-icon"/> </Link>
            <div className={getTotalCartAmount() > 0 ?"dot":"null"}></div>
        </div>
        <button onClick={() => setShowLoginData(true)}>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar
