import React, { useState, useEffect } from 'react';
import { json } from 'stream/consumers';
import SingleSong from '../SingleSong/SingleSong';

interface Props {
  filteredSongs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms: string[];
  }[],
}
const SongsContainer: React.FC<Props> = ({ filteredSongs }) => {


  return (
    <div>
      <p>Hey it works dude</p>
    </div>
  )
}

export default SongsContainer
