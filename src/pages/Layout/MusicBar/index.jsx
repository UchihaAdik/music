import CustomAudioPlayer from "./CustomAudioPlayer"
import { useSelector } from 'react-redux';
import { useEffect } from "react";

function Musicbar() {

  const musicQueue = useSelector(state => state.musicSlice.selecteQueue)

  
  const playlist = musicQueue.map((item) => ({
    url: item.audio_file ? `https://mp4.freemyip.com${item.audio_file}` : '',
    text: item.name_music,
    category: item.category,
    img: item.image_music ? `https://mp4.freemyip.com${item.image_music}` : '',
  }));
  
  return (
    <div className="kkk">
      <CustomAudioPlayer playlist={playlist}/>
    </div>
  )
}

export default Musicbar