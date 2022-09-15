import "./FeaturedMoods.css";
import React from "react";
import SingleMood from "../SingleMood/SingleMood";
import "./FeaturedMoods.css";
import { MoodProps } from '../../model'

// interface MoodProps {
//   songs: {
//     id: number;
//     title: string;
//     artist: string;
//     urlKey: string;
//     genres: string[];
//     searchTerms: string[];
//   }[];
//   moods: {
//     id: number;
//     title: string;
//     img: string;
//   }[];
//   handleMood: React.Dispatch<React.SetStateAction<any>>;
// }

const FeaturedMoods: React.FC<MoodProps> = ({ songs, moods, handleMood }) => {
  const moodMusic = moods
    .map((mood) => {
      return (
        <SingleMood
          key={mood.id}
          id={mood.id}
          title={mood.title}
          image={mood.img}
          songs={songs}
          handleMood={handleMood}
        />
      );
    })
    .slice(0, 10);

  return <div className="moods-container">{moodMusic}</div>;
};

export default FeaturedMoods;
