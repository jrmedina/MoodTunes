import "./SongsContainer.css";
import React from "react";
import { Link } from "react-router-dom";
import SingleSong from "../SingleSong/SingleSong";
import { SongsContainerProps } from "../../model";


const SongsContainer: React.FC<SongsContainerProps> = ({
  filteredSongs,
  currentMood,
  resetResultState,
  randomize
}) => {
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
      <div className="button-container">
        <Link to="/">
          <button onClick={resetResultState} className="home-button">
            Home
          </button>
        </Link>
        <Link to={"/random"} onClick={randomize}>
          <button  className="random-button">
            Random Tune for Your Mood
          </button>
        </Link>
      </div>
      {filteredSongs.length ? (
        <h4>Here are some {currentMood} Tunes to match your Mood!</h4>
      ) : (
        <h4>You gotta select a Mood to see some Tunes!</h4>
      )}
      {songCards}
    </div>
  );
};

export default SongsContainer;
