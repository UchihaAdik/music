import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart,faCirclePlay,faCirclePause,faCircleLeft,faCircleRight ,faInfinity,faVolumeOff,faVolumeHigh ,faIcicles} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import './style.scss';



const CustomAudioPlayer = ({ playlist }) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(1); 
  const theme = useSelector(state => state.theme.value);
  const playerRef = useRef(null);



  useEffect(() => {
    if (playlist.length > 0) {
      setPlaying(true);
    }
  }, [playlist]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (progress) => {
    setPlayed(progress.played);
    setCurrentTime(progress.playedSeconds);
  };

  const handleSeekChange = (value) => {
    setPlayed(value);
    playerRef.current.seekTo(value);
  };

  const handleEnded = () => {
    if (repeat) {
      playerRef.current.seekTo(0);
    } else {
      playNextTrack();
    }
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };
  const playBeforeTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1) % playlist.length);
  };

  const toggleRepeat = () => {
    setRepeat(!repeat);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    
    <div className="audio-player" id={theme}>
      <ReactPlayer
            className="ffff"
            ref={playerRef}
            url={playlist[currentTrackIndex]?.url || ''}
            playing={playing}
            onProgress={handleProgress}
            onEnded={handleEnded}
            onDuration={(duration) => setDuration(duration)}
            volume={volume} 
            controlsList="nodownload"/>



      <div className="audio-player__leftConteiner">
          <div>
            <img className='audio-player__leftConteiner_img' src={playlist[currentTrackIndex]?.img} alt="" />
          </div>
          <div>
          <h3 className='audio-player__leftConteiner_title'>{playlist[currentTrackIndex]?.text}</h3>
            <h3 className='audio-player__leftConteiner_subtitle'>{playlist[currentTrackIndex]?.category}</h3> 
          </div>
          <div className='audio-player__leftConteiner_iconConteiner'>
          <FontAwesomeIcon icon={faHeart} />
          <a
          href={playlist[currentTrackIndex]?.url || ''}
          download={`song_${currentTrackIndex + 1}.mp3`}>Скачать</a>
          </div>
      </div>
      <div className='audio-player__centerConteiner'>
          <div >
          <input className='audio-player__input' type="range"min={0} max={1} step="any" value={played}
                onChange={(e) => handleSeekChange(parseFloat(e.target.value))}/>
          </div>
          <div className='audio-player__centerConteiner__top_timeConteiner'>
            <div> <h3 className='audio-player_time'>{formatTime(currentTime)}</h3></div>  <div> <h3 className='audio-player_time'>{formatTime(duration)}</h3></div>
          </div>
          <div className='audio-player__centerConteiner__bottom'>
            <FontAwesomeIcon  onClick={playBeforeTrack} className='audio-player__centerConteiner__icon_lr' icon={faCircleLeft} />
            <FontAwesomeIcon onClick={handlePlayPause} className='audio-player__centerConteiner__icon_pause' icon={playing ? faCirclePause : faCirclePlay} />
            <FontAwesomeIcon  onClick={playNextTrack} className='audio-player__centerConteiner__icon_lr' icon={faCircleRight} />
            <FontAwesomeIcon onClick={toggleRepeat} icon={repeat ?  faIcicles: faInfinity} className='audio-player__centerConteiner__icon_faInfinity'/>

          </div>
      </div>

      
      <div className="controls">
        
      <FontAwesomeIcon className='controls_volume_icon' icon={faVolumeOff} />
        <input className='controls_volume'
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
        />
        <FontAwesomeIcon className='controls_volume_icon' icon={faVolumeHigh} />
        
      </div>
    </div>
  );
};

export default CustomAudioPlayer;