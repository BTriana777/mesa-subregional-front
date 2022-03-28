import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseNav, uiOpenNav } from '../../actions/ui';

import { FaHome, FaInfoCircle, FaUserAlt} from 'react-icons/fa';
import { ImNewspaper } from 'react-icons/im';
import {IoMdMenu, IoMdClose } from 'react-icons/io';

export const NavBar = () => {

  const { navOpen } = useSelector(state => state.ui)
  const dispatch = useDispatch();

  const handleClickOpenNav = () => {
    if(navOpen){
      dispatch( uiCloseNav() );
    } else {
      dispatch( uiOpenNav() );
    }
  }

  return (
    <nav className='nav-main-container'>
      <div className='nav-bnt-img-ul-container'>
        <div className='btn-nav-container' onClick={handleClickOpenNav}>
          {
            navOpen?
              <IoMdClose color='#fff' size={'35px'}  />
            :
              <IoMdMenu color='#fff' size={'35px'} />
          }
        </div>
        <img src="https://i.imgur.com/Bs8H3EA.png" alt="mesa-logo" className='img-nav' />
        <ul>
            <li>
              {
                navOpen?
                  <span>Home</span>
                :
                  <FaHome color='#fff' size={'30px'}/>
              }
            </li>
            <li>
              {
                navOpen?
                  <span>Historia</span>
                :
                  <FaInfoCircle color='#fff' size={'30px'}/>
              }
            </li>
            <li>
              {
                navOpen?
                  <span>Noticias</span>
                :
                  <ImNewspaper color='#fff' size={'30px'}/>
              }
            </li>
        </ul>
      </div>
      <div className='nav-user-container'>
        <FaUserAlt color='#fff' size={'35px'} />
      </div>
    </nav>
  )
}