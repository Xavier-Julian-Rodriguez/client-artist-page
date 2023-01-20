import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [hamburger, setHamburger] = useState('burgerBar unclicked');
    const [theMenu, setTheMenu] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
  

    const updateMenu = () => {
        if(!isMenuClicked) {
          setHamburger('burgerBar clicked');
          setTheMenu('menu visible');
        
        } else {
          setHamburger('burgerBar unclicked');
          setTheMenu('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
      }
    
      return (
        <div>
            <div className='hamContainer'>
                <ul
                className='hamburger'
                onClick={updateMenu}
                >
                    <li id='navLines' className={hamburger}></li>
                    <li id='navLines' className={hamburger}></li>
                    <li id='navLines' className={hamburger}></li>
                </ul>
            </div>
            <div className={theMenu}>
                <div className={isMenuClicked}>
                    <span className='linksList' onClick={isMenuClicked}>
                    <Link to="/" className="links">HOME</Link>
                    <Link to="/Resume" className="links">RESUME</Link>
                    <Link to="/Reels" className="links">REELS</Link>
                    <Link href="" className="links">HEADSHOTS</Link>
                    <Link to="/Contact" className="links">CONTACT ME</Link>  
                    </span>
                </div>    
            </div>
        </div>
    )
}

export default Header;