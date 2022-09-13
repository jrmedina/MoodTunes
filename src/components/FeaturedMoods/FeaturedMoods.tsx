import "./FeaturedMoods.css";
import React, { useState } from "react";
import { FeaturedMoodsProps } from "../../model";
import SingleMood from "../SingleMood/SingleMood";
import "./FeaturedMoods.css";

interface Props {
  songs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms?: string[];
  }[];
  moods: {
    id: number;
    title: string;
    img: string;
  }[];
}

const FeaturedMoods: React.FC<Props> = ({ songs, moods }) => {
  const moodMusic = moods.map((mood) => {
    return (
      <SingleMood
        key={mood.id}
        id={mood.id}
        title={mood.title}
        image={mood.img}
      />
    );
  });
  const featuredMoods = moodMusic.slice(0, 10);

  return <div className="moods-container">{featuredMoods}</div>;
};

export default FeaturedMoods;
