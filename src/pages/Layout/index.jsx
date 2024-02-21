import { Outlet } from 'react-router-dom'
import React from 'react'
import LeftBar from './LeftBar'
import Header from './Header'
import RightBar from './RightBar'
import Musicbar from './MusicBar'
import { useSelector } from 'react-redux';

import "./style.scss"

function Layout() {

  const theme = useSelector(state => state.themeBackground.value);
  return (
    <div  className='LayoutBag' id={theme}>
      <div className='Layout'>
        <LeftBar/>
        <div className='layout__right'>
          <div className='layout__right__topCenteiner'>

            <div className='layout__right__topCenteiner_Headermain'>
              <Header/>
              <Outlet/>
            </div>
            <div>
              <RightBar/>
            </div>
            <div className='MusicbarLau'>
               <Musicbar/>
            </div>
            
          </div>
          
        </div>
      </div>  
    </div>
  )
}

export default Layout