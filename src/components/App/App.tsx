import React, { useState, useEffect } from 'react';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import './App.css';
import FeaturedMoods from '../FeaturedMoods/FeaturedMoods';
import SongsContainer from '../SongsContainer/SongsContainer';
import { SingleSongProps, SongsProps, SingleMoodProps, MoodsProps, AppProps } from '../../model';

interface Props {
  songs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms?: string[];
  }[],
  moods: {
    id: number;
    title: string;
    img: string;
  }[]
}

const App: React.FC = () => {

  const [appState, setAppState] = useState<Props>({ songs: [], moods: [] });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001");
        const json = await response.json();
        setAppState({ songs: json.data.songs, moods: json.data.moods })

      } catch (error) {
        console.log("error", error);
      }

    };
    fetchData();
  }, []);
  console.log('APPSTATE: ', appState)
  return (
    <div className="App">
      <h1>MoodTunes</h1>

      <FeaturedMoods
        songs={appState.songs}
        moods={appState.moods}
      />

      <SongsContainer />
    </div>
  );

}


export default App;



