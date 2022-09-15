import "./SingleMood.css";
import { Link } from "react-router-dom";
import React from "react";

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
  handleMood: React.Dispatch<React.SetStateAction<any>>;
}

const SingleMood: React.FC<SingleMoodProps> = ({
  title,
  image,
  handleMood,
}) => {
  const handleChange = (e: React.MouseEvent<HTMLImageElement>) => {
    handleMood(e.currentTarget.id);
  };

  return (
    <div className="single-mood">
      <Link to={`/results`}>
        <img
          onClick={handleChange}
          className="mood-img"
          src={image}
          id={title}
          alt={title}
        />
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default SingleMood;
