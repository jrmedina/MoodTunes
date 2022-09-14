import React, { useState, useEffect } from "react";
import { json } from "stream/consumers";
import SingleSong from "../SingleSong/SingleSong";

interface Props {
  filteredSongs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms: string[];
  }[];
}
const SongsContainer: React.FC<Props> = ({ filteredSongs }) => {
  console.log(filteredSongs);

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
    <div>
      {songCards}
    </div>
  );
};

export default SongsContainer;
