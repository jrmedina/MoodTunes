import React, { useState, useEffect } from 'react';
import { json } from 'stream/consumers';
import SingleSong from '../SingleSong/SingleSong';

  type MySong = {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms?: string[];
  }

  type MyState = {
    songs: MySong
  }


const SongsContainer: React.FC = () => {

  const [songs, setSongs] = useState<MySong []>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001");
        const json = await response.json();
        setSongs(json.songs)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  

//switch this any later 
const songCards: any [] = songs.map(song => {
  console.log(songs, "songs")

return (
  <SingleSong 
  title={song.title} 
  artist={song.artist}
  urlKey={song.urlKey}
  genres={song.genres}
  key={song.id}
  id={song.id}
  />
)
})
  return (
    <div>
      {songCards}
    </div>
  )
}

export default SongsContainer
