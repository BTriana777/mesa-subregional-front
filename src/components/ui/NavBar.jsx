import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseNav, uiOpenNav } from '../../actions/ui';

import { FaHome, FaInfo, FaUserAlt} from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
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
                  <FaHome className='icon-nav' size={'38px'} cursor='pointer'/>
              }
            </li>
            <li>
              {
                navOpen?
                  <span>Historia</span>
                :
                  <FaInfo className='icon-nav' size={'36px'} cursor='pointer'/>
              }
            </li>
            <li>
              {
                navOpen?
                  <span>Noticias</span>
                :
                  <BiNews className='icon-nav' size={'38px'} cursor='pointer'/>
              }
            </li>
        </ul>
      </div>
      <div className='nav-user-container'>
        <FaUserAlt className='icon-nav' size={'38px'} cursor='pointer' />
      </div>
    </nav>
  )
}