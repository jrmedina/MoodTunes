import "./FeaturedMoods.css";
import React from "react";
import SingleMood from "../SingleMood/SingleMood";
import { MoodProps } from "../../model";

const FeaturedMoods: React.FC<MoodProps> = ({ moods, handleMood }) => {
  const moodMusic = moods
    .map((mood) => {
      return (
        <SingleMood
          key={mood.id}
          id={mood.id}
          title={mood.title}
          image={mood.img}
          handleMood={handleMood}
        />
      );
    })
    .slice(0, 10);

  return <div className="moods-container">{moodMusic}</div>;
};

export default FeaturedMoods;
