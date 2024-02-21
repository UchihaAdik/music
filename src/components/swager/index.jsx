import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedItem, updateselecteQueue } from './musicSlice';  
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./style.scss"

const Allmusic = () => {
  const [albumInfo, setAlbumInfo] = useState([]);
  const dispatch = useDispatch();
  const [isHeartClicked, setIsHeartClicked] = useState(Array(albumInfo.length).fill(false));

  useEffect(() => {
    const fetchSwaggerSpec = async () => {
      try {
        const swaggerUrl = 'https://mp4.freemyip.com/api/music/music/';
        const response = await fetch(swaggerUrl);
        const swaggerJson = await response.json();
        setAlbumInfo(swaggerJson);
      } catch (error) { 
        console.error('Error fetching Swagger Specification:', error);
      }
    };

    fetchSwaggerSpec();
  }, []);

  const handleClick = (item, index) => {
    dispatch(updateSelectedItem(item));
    const newIsHeartClicked = [...isHeartClicked];
    newIsHeartClicked[index] = !newIsHeartClicked[index];
    setIsHeartClicked(newIsHeartClicked);
    
  }


  const handleClickQueue = (item) => {
    dispatch(updateselecteQueue(item))
  }

  const theme = useSelector(state => state.theme.value);

  return (
    <div>
      <h2>Allmusic</h2>
      {albumInfo.map((item, index) => (
        <div onClick={() => handleClickQueue(item)} key={crypto.randomUUID()}>
          <div className='Allmusic__music' id={theme} key={item.id}>
            <div className='Allmusic__music_Conteinericon'>
              <FontAwesomeIcon
                onClick={() => handleClick(item, index)}
                className={`Allmusic__music_icon ${isHeartClicked[index] ? 'selected' : ''}`}
                icon={faHeart}
              />
            </div>
            <div className='Allmusic__music_ConteinerImg'>
              <div>
                <img className='Allmusic__music_img' src={`https://mp4.freemyip.com${item.image_music}`} alt="" />
              </div>
              <div>
                <h3 className='Allmusic__music_title'>{item.name_music}</h3>
                <h3 className='Allmusic__music_subtitle'>{item.category}</h3>
              </div>
              <div className='Allmusic__music_timeIcon'>
                <h3 className='Allmusic__music_time'>04:32</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allmusic;