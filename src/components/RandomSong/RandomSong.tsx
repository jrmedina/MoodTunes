import React from 'react'
import { RandomProps } from "../../model";

const RandomSong: React.FC <RandomProps> = ({song}) => {
  console.log(song)
  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/track/${song.urlKey}?utm_source=generator&theme=0`}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default RandomSong


