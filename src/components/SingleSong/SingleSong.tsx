import React from 'react'
import { SingleSongProps } from '../../model'
import "./SingleSong.css";
import ReactPlayer from "react-player";



const SingleSong: React.FC<SingleSongProps> = ({id, title, artist, urlKey, genres, searchTerms}) => {
  
 
  return (
    <div className="singleSong">
      <p className="title">{title}</p>
      <p className="artist">{artist}</p>
      <ReactPlayer
       
        url={`https://www.youtube.com/watch?v=${urlKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        // className="player"
      />
      <p className="genres">{genres}</p>
    </div>
  );
}

export default SingleSong
  
  
