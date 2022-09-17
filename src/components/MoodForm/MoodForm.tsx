import "./MoodForm.css";
import React from "react";
import { Link } from "react-router-dom";
import { MoodProps, SetMoodProps } from "../../model";

const MoodForm: React.FC<MoodProps> = ({ moods, handleMood }) => {
  const [mood, setMood] = React.useState<SetMoodProps>({ mood: "" });

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
