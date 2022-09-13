import React from 'react'

interface Props {
  moods:{
  id: number;
  title: string;
  img: string;
} []
setAppState: React.Dispatch<React.SetStateAction<any>>
  songs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms: string[];
  }[],
}
interface FormProps {
  mood: string;
}

const MoodForm: React.FC <Props> = ({ moods, setAppState, songs }) => {
 const [mood, setMood] = React.useState<FormProps>({
  mood:''
 })

 const moodOptions = moods.map(mood => {


  return (
    <option key={mood.id} value={`${mood.title}`}>{mood.title}</option>
  )
 })
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setMood({mood: event.target.value })
  

  
  const filteredSongs = songs.filter(song => song.searchTerms.includes(mood.mood.toLowerCase()))
  console.log(filteredSongs)
 }

  return (
    <form >
      <label>Choose Your Mood: </label>
      <select onChange={handleChange} value={mood.mood}>
        {/* <option value='' disabled hidden>Select Your Mood</option> */}
       {moodOptions}
      </select>
    </form>
  )
}

export default MoodForm
