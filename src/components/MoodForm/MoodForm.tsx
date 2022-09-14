import React from "react";
import { Link } from "react-router-dom";

interface Props {
  moods: {
    id: number;
    title: string;
    img: string;
  }[];
  setAppState: React.Dispatch<React.SetStateAction<any>>;
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
  quantity: string;
}

const MoodForm: React.FC<Props> = ({ moods, setAppState, songs }) => {


  const [mood, setMood] = React.useState<FormProps>({ mood: "", quantity: '' });

  const moodOptions = moods.map((mood) => {
    return (
      <option key={mood.id} value={`${mood.title}`}>
        {mood.title}
      </option>
    );
  });
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault();
    setMood({ mood: event.target.value, quantity: event.target.value });
  };

  const handleClick = () => {
    console.log(mood.mood);
    const filtered = songs.filter((song) =>
      song.searchTerms.includes(mood.mood.toLowerCase())
    );
    setAppState({ songs: filtered, });
        

  };

  return (
    <form>
      <select onChange={(e) => handleChange(e)} value={mood.mood}>
        <option value="" disabled>
          Select Your Mood
        </option>
        {moodOptions}
      </select>



      {/* potential work around...maybe getting tangled w app state changes */}

      {/* <select onChange={(e) => handleChange(e)} value={mood.quantity}>
        <option value="" disabled>
          Select How Many
        </option>
        <option value="all">All</option>
        <option value="random">Random</option>
      </select> */}

      <Link to={`/results`} onClick={handleClick}>
        Submit
      </Link>
    </form>
  );
};

export default MoodForm;
