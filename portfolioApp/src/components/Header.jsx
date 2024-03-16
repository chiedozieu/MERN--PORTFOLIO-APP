import React from 'react';
import './styles/Header.scss';
import {Close }  from '@mui/icons-material'; // Import Close icon
import icons from '@mui/material/Link';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <div className="header_logo">
        <h1>Chiedozie Ugwor</h1>
      </div>
      <nav>
        <ul>
          <div className="closed"> 
            <Close className="close" />
          </div>
          <li>
            <Link>

            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
