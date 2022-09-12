import React from 'react'
import { SingleSongProps } from '../../model'

const SingleSong: React.FC<SingleSongProps> = ({id, title, artist, urlKey, genres, searchTerms}) => {
  
 
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
  
  
