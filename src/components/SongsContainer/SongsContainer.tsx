import "./SongsContainer.css";
import React from "react";
import SingleSong from "../SingleSong/SingleSong";
import { Link } from "react-router-dom";
import { SongsContainerProps } from '../../model'

const SongsContainer: React.FC<SongsContainerProps> = ({ filteredSongs, currentMood, resetResultState }) => {
  const songCards = filteredSongs.map((song) => {
    return (
      <SingleSong
        id={song.id}
        title={song.title}
        artist={song.artist}
        urlKey={song.urlKey}
        genres={song.genres}
        searchTerms={song.searchTerms}
        key={song.id}
      />
    );
  });

  return (
    <div className="song-container">
      <Link to="/">
        <button onClick={resetResultState} className="home-button">Home</button>
      </Link>
      {filteredSongs.length ? 
      <h4>Here are some {currentMood} Tunes to match your Mood!</h4>
       : <h4>Looks like there are no songs!</h4>}
      {songCards}
    </div>
  );
};

export default SongsContainer;
