import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./style.scss"

function Header() {

  const theme = useSelector(state => state.theme.value); 

  return (
    <div  className='Header' id={theme}>
      Header
    </div>
  );
}

export default Header;