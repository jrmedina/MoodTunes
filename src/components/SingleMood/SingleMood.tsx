import "./SingleMood.css";
import React from "react";
import { Link } from "react-router-dom";
import { SingleMoodProps } from "../../model";

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
      </Link>
      <h2>{title}</h2>
    </div>
  );
};

export default SingleMood;
