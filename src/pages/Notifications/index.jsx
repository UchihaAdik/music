import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,} from '@fortawesome/free-solid-svg-icons';
import "./style.scss"
import { useDispatch } from 'react-redux';
import { removeSelectedItem } from '../../components/swager/musicSlice'; 

function Notifications() {
  const selectedItem = useSelector(state => state.musicSlice.selectedItem)
  const theme = useSelector(state => state.theme.value);

  const dispatch = useDispatch();

  const handleClick = (item, index) => {
    dispatch(removeSelectedItem(item));
  }

 useEffect(() => {
  console.log(selectedItem);

  }, [selectedItem]);


  return (
    <div>
      <h2>избранные</h2>
      {selectedItem.map((item, index) => (
        <div  onClick={() => handleClick(item, index)} key={crypto.randomUUID()}>
          <div className='Notifications__music' id={theme} key={item.id}>
            <div className='Notifications__music_Conteinericon'>
              <FontAwesomeIcon
               
                className='Notifications__music_icon'
                icon={faHeart}
              />
            </div>
            <div className='Notifications__music_ConteinerImg'>
              <div>
                <img className='Notifications__music_img' src={`https://mp4.freemyip.com${item.image_music}`} alt="" />
              </div>
              <div>
                <h3 className='Notifications__music_title'>{item.name_music}</h3>
                <h3 className='Notifications__music_subtitle'>{item.category}</h3>
              </div>
              <div className='Notifications__music_timeIcon'>
                <h3 className='Notifications__music_time'>04:32</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notifications