import React from 'react'

type songDetails = {

  id: number;
  title: string;
  artist: string;
  urlKey: string;
  genres: string[];
  searchTerms?: string[];
}

const SingleSong: React.FC<songDetails> = ({title, artist, urlKey, genres}) => {
  
 
  return (
    <div>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{urlKey}</p>
      <p>{genres}</p>
    </div>
  )
}

export default SingleSong
  
  
