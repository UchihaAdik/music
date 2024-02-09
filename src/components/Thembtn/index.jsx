import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlice';
import { setTheme } from './themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun , faMoon} from '@fortawesome/free-solid-svg-icons';
import "./style.scss";

function ThemBtn() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  useEffect(() => {

    const savedTheme = JSON.parse(localStorage.getItem('mode'));
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (newTheme === "dark") {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }

    dispatch(setTheme(newTheme));
    localStorage.setItem('mode', JSON.stringify(newTheme));
  }

  return (
    <div onClick={switchTheme} className='ThemBtn' id={theme}>
      <FontAwesomeIcon icon={theme==='dark' ? faMoon : faSun} />
      <h3>{theme}</h3>
    </div>
  );
}

export default ThemBtn;