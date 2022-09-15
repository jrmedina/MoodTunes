import "./SingleSong.css";
import React from "react";
import { SingleSongProps } from "../../model";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const SingleSong: React.FC<SingleSongProps> = ({
  title,
  artist,
  urlKey,
  genres,
}) => {
  return (
    <div className="singleSong">
      <div className="song-details">
        <p className="title">"{title}"</p>
        <p className="artist">{artist}</p>
        <p className="genres">{genres.join(", ")}</p>
      </div>
      <div className="player-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${urlKey}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className="player"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default SingleSong;
