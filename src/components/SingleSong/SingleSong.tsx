import "./SingleSong.css";
import React from "react";
import { SingleSongProps } from "../../model";


const SingleSong: React.FC<SingleSongProps> = ({ urlKey }) => {
  return (
    <div className="singleSong">
      <iframe
        src={`https://open.spotify.com/embed/track/${urlKey}?utm_source=generator&theme=0`}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SingleSong;
