import { useState } from 'react';
import ButtonComponent from '../Buttons/Button'
import './navbar.scss'


export default function NavbarComponent() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const orderNow = () =>{
    console.log('order now clicked')
  }
  const getQuote = () =>{
    console.log('quote clicked')
  }

  return (
    <>
    <div className="nav-bars" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
        </div>

        <div className={`Navbar-container${showSidebar ? ' show-sidebar' : ''}`}>
        
        <div className="image">
          <img src="https://i.pinimg.com/236x/fa/14/37/fa14379d0c120e0b7ae1e3377dbbc6de.jpg" alt="" />
        </div>
        <div className="menu-items">
          <ul>
            <li>
              THE MENU
            </li>
            <li>
              INDIVIDUAL BOXES
            </li>
            <li>
              CATERING
            </li>
            <li>
              BLOG
            </li>
            <li>
              ABOUT
            </li>
          </ul>
        </div>
        <div className="buttons">
          <div className="button">
          <ButtonComponent text="ORDER NOW" onClick={orderNow} bgColor="green" />
          </div>
          <div className="button-test">
          <ButtonComponent text="GET A QUOTE" onClick={getQuote} bgColor="blue"/>
          </div>
        </div>
    </div>
    </>
   
  )

  
}



