import React from "react";
import { RandomProps } from "../../model";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
const RandomSong: React.FC<RandomProps> = ({ song, randomize }) => {
  return (
    <div>
      {song.title ? (
        <div>
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <Link to={"/random"} onClick={randomize}>
            <button className="random-button">Random Tune for Your Mood</button>
          </Link>
          <iframe
            src={`https://open.spotify.com/embed/track/${song.urlKey}?utm_source=generator&theme=0`}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default RandomSong;
