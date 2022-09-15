import "./SongsContainer.css";
import React from "react";
import SingleSong from "../SingleSong/SingleSong";
import { Link } from "react-router-dom";
import { SongsContainerProps } from '../../model'

// interface SongsContainerProps {
//   filteredSongs: {
//     id: number;
//     title: string;
//     artist: string;
//     urlKey: string;
//     genres: string[];
//     searchTerms: string[];
//   }[];
//   currentMood: string | undefined;
// }

const SongsContainer: React.FC<SongsContainerProps> = ({ filteredSongs, currentMood }) => {
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
        <button className="choose-mood-button">Home</button>
      </Link>
      <h4>Here are some {currentMood} Tunes to match your Mood!</h4>
      {songCards}
    </div>
  );
};

export default SongsContainer;
