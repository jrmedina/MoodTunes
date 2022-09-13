import React from 'react'
import "./SingleMood.css"

interface SingleMoodProps{
  id: number;
  title: string;
  image: string;
}

const SingleMood: React.FC<SingleMoodProps> = ({ id, title, image }) => {
  return (
    <div className="single-mood">
      <img className="mood-img" src={image} />
      <h2>{title}</h2>
    </div>
  );
}

export default SingleMood
