import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faHeart,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { useSelector} from 'react-redux';
import imgMus from "../../assets/image 1.png"
import { useEffect } from 'react';
import "./style.scss"

function SearchApi() {
    const theme = useSelector(state => state.theme.value);
    const musicQueue = useSelector(state => state.musicSlice.selecteQueue)
    

    useEffect(() => {
        console.log(musicQueue);
      },[musicQueue] )


  return (
    <div>
        
        <div className='SearchApi'  id={theme}>
          <input className='SearchApi_input' type="text" placeholder='Search for something' />
          <FontAwesomeIcon className='SearchApi__faMagnifyingGlass' icon={faMagnifyingGlass} /> 
        </div>
        {musicQueue.map((item) => {
    return (
        <div key={crypto.randomUUID()} className='SearchApi__music' id={theme}>
            <div className='SearchApi__music_Conteinericon'>
                <FontAwesomeIcon className='SearchApi__music_icon' icon={faHeart} />
            </div>
            <div className='SearchApi__music_ConteinerImg'>
                <div>
                    <img className='SearchApi__music_img' src={`https://mp4.freemyip.com${item.image_music}`} alt="" />
                </div>
                <div>
                    <h3 className='SearchApi__music_title'>{item.name_music}</h3>
                    <h3 className='SearchApi__music_subtitle'>{item.category}</h3>
                </div>
                <div className='SearchApi__music_timeIcon'>
                    <h3 className='SearchApi__music_time'>04:32</h3>
                    <FontAwesomeIcon className='SearchApi__music_icon' icon={faCircleXmark} />
                </div>
            </div>
        </div>
    );
})}
        
    </div>
  )
}

export default SearchApi