import "./MoodForm.css";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  moods: {
    id: number;
    title: string;
    img: string;
  }[];
  handleMood: React.Dispatch<React.SetStateAction<any>>;
  songs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms: string[];
  }[];
}
interface FormProps {
  mood: string;
}

const MoodForm: React.FC<Props> = ({ moods, handleMood, songs }) => {
  const [mood, setMood] = React.useState<FormProps>({ mood: "" });

  const moodOptions = moods.map((mood) => {
    return (
      <option key={mood.id} value={`${mood.title}`}>
        {mood.title}
      </option>
    );
  });
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setMood({ mood: e.target.value });
  };

  const handleClick = () => {
    handleMood(mood.mood);
  };

  return (
    <form className="dropdown-container">
      <select
        onChange={(e) => handleChange(e)}
        value={mood.mood}
        className="dropdown"
      >
        <option value="" disabled>
          Select Your Mood
        </option>
        {moodOptions}
      </select>

      <Link to={`/results`} onClick={handleClick}>
        <button className="choose-mood-button">Search Mood</button>
      </Link>
    </form>
  );
};

export default MoodForm;
