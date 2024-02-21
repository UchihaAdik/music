import React from 'react'
import PopularAlbums from '../../components/PopularAlbums'
import AlbumInfo from '../../components/swager'
import "./style.scss"

function HomePage() {
  return (
    <div className='HomePage'>
      <PopularAlbums/>
      <AlbumInfo/>
    </div>
  )
}

export default HomePage