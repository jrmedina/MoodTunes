import React, { useState, useEffect } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";
import "./App.css";
import MoodForm from "../MoodForm/MoodForm";
import FeaturedMoods from "../FeaturedMoods/FeaturedMoods";
import SongsContainer from "../SongsContainer/SongsContainer";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {
  SingleSongProps,
  SongsProps,
  SingleMoodProps,
  MoodsProps,
  AppProps,
} from "../../model";
import { Switch, Route } from "react-router-dom";

interface Props {
  songs: {
    id: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms: string[];
  }[];
  moods: {
    id: number;
    title: string;
    img: string;
  }[];
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<Props>({ songs: [], moods: [] });

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setAppState({ songs: filtered })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001");
        const json = await response.json();
        setAppState({ songs: json.data.songs, moods: json.data.moods });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/results"
          render={() => (
            <div>
              <SongsContainer filteredSongs={appState.songs} />
            </div>
          )}
        />

        <Route
         
          path="/"
          render={() => (
            <div>
              <h2 className='featured-moods'>Featured Moods</h2>
              <FeaturedMoods 
                songs={appState.songs} 
                moods={appState.moods}
                setAppState={setAppState} />
              <MoodForm
                moods={appState.moods}
                setAppState={setAppState}
                songs={appState.songs}
              />
            </div>
          )}
        />
      </Switch>
        <Footer />
    </div>
  );
};

export default App;
