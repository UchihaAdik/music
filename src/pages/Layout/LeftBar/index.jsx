import React from 'react'
import ThemBtn from '../../../components/Thembtn'
import { leftbarlink } from './leftbarlink'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { faMusic} from '@fortawesome/free-solid-svg-icons';
import "./style.scss"

function LeftBar() {
  const theme = useSelector(state => state.theme.value);
  return (
    <div className='leftBar' id={theme}>
      <div className='leftBar__top'>
        <div className='leftBar__top_logo'>
          <FontAwesomeIcon className='faMusic' icon={faMusic} id={theme}/>
          <h2 className='leftBar__top_title' id={theme}>ADA</h2>
        </div>
        <div className='leftBar__topList'>
        {leftbarlink.map((itemMenu)=>(
          <NavLink key={crypto.randomUUID()} className={({isActive})=>{return isActive?"active": ""}} to={itemMenu.link}>
            <div className='leftBar__topList_link' ><FontAwesomeIcon className='iconLeftbar' icon={itemMenu.img} id={theme}/><h3>{itemMenu.title}</h3></div>
          </NavLink>
        ))}
        </div>
      </div>

      <ThemBtn/>
    </div>
  )
}

export default LeftBar