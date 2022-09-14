import "./SingleMood.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

interface SingleMoodProps {
  id: number;
  title: string;
  image: string;
  songs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms: string[];
  }[];
  setAppState: React.Dispatch<React.SetStateAction<any>>;
}

interface FormProps {
  mood: string;
}

const SingleMood: React.FC<SingleMoodProps> = ({
  id,
  title,
  image,
  songs,
  setAppState,
}) => {

  const handleChange = (e: React.MouseEvent<HTMLImageElement>) => {  
    let filterResults = songs.filter((song) =>
      song.searchTerms.includes(e.currentTarget.id.toLowerCase())
    );
    setAppState({ songs: filterResults });
  }

  return (
    <div className="single-mood">
      <Link to={`/results`} >
      <img
        onClick={handleChange}
        className="mood-img"
        src={image}
        id={title}
      />
      <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default SingleMood;
