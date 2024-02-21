import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.scss"
import { useSelector } from 'react-redux';
import imgpopular from "../../assets/image 3.png"
import { faHeart,faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function PopularAlbums() {
  const theme = useSelector(state => state.theme.value);
  return (
    <div className='PopularAlbums' id={theme}>
      <h3 className='PopularAlbums_titlt'>Popular Albums</h3>
      <div className='PopularAlbums__inerConteiner'>
        <div className='PopularAlbums_list'>
          <img className='PopularAlbums_img' src={imgpopular} alt="" />
          <div className='PopularAlbums_list_inner'>
            <h3 className='PopularAlbums_list_title'>Ephemeral Dreams</h3>
            <h4 className='PopularAlbums_list_subTitle'>Sarah Melody</h4>
            <FontAwesomeIcon className='PopularAlbums_list_icon' icon={faHeart} />
          </div>
          <div className='PopularAlbums_list_inner_bottom'>
            <h3 className='PopularAlbums_list_inner_bottom_titlt'>Ephemeral Dreams</h3>
            <FontAwesomeIcon className='PopularAlbums_list_inner_bottom_icon' icon={faCirclePlay} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PopularAlbums