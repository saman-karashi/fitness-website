import {useState,useEffect} from 'react';
import logo from '../../assets/logo-path.svg';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import useWindowSize from '../../customHooks/useWindowSize';

const Navbar = () => {
const [isOpen , setIsOpen] = useState(false);
const width = useWindowSize();

if(isOpen && width > 1000) setIsOpen(false)

const menuClass = isOpen && width <= 1000 ? 'menu open' : 'menu'; 

  return (
    <nav className='navbar p-1rem'>
      {/* Container */}
      <div className='container flex'>
        <div className='logo'>
          <img src={logo} alt='emmafits' />
          <p className='sub-logo'>Powered by avid workouts</p>
        </div>

        <div className='center-listItems'>
          <a href='/home' className='active'>
            Home Page
          </a>
          <a href='/classTime'>Class Time</a>
          <a href='/review'>Review</a>
          <a href='/lastPost'>Last Post</a>
        </div>
        <div className='right-listItems'>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </div>
        {/* Mobile hamburger */}
        <div className='hamburger '>
          <button className='hamburger-btn' onClick={()=> setIsOpen(true)}>
            <FaBars />
          </button>
        </div>
        {/* Mobile menu */}
       <div className={menuClass}>
            <ul className='mt-2rem'>
          <li>
            <a href='/home' className='active'>
              Home Page
            </a>
          </li>
          <li>
            <a href='/classTime'>Class Time</a>
          </li>
          <li>
            <a href='/review'>Review</a>
          </li>
          <li>
            <a href='/lastPost'>Last Post</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
            </ul>
          <div className='times'>
            <button className='times-btn' onClick={()=> setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
