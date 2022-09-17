import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AppProps, ResultProps } from "../../model";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import MoodForm from "../MoodForm/MoodForm";
import FeaturedMoods from "../FeaturedMoods/FeaturedMoods";
import SongsContainer from "../SongsContainer/SongsContainer";
import Error from "../Error/Error";
import { fetchData } from "../../apiCalls"
import RandomSong from "../RandomSong/RandomSong";

const App: React.FC = () => {

  const [appState, setAppState] = useState<AppProps>({
    songs: [],
    moods: [],
  });

  const [resultState, setResultState] = useState<ResultProps>({
    currentMood: "",
    songs: [],
    randomSong: {}
  });

  useEffect(() => {
    fetchData().then(json => setAppState({ songs: json.data.songs, moods: json.data.moods }) );
  });
 
  const handleMood = (mood: string): void => {
    const results = appState.songs.filter((song) =>
      song.searchTerms.includes(mood.toLowerCase())
    );
    setResultState({
      songs: results,
      currentMood: mood,
      randomSong:results[0]
    });
  };

  const resetResultState = () => {
    setResultState({
      songs: [],
      currentMood: "",
      randomSong: {}
    });
  };

  const randomize = () => {
    const getRandom = resultState.songs[Math.floor(Math.random() * resultState.songs.length)]
   
    setResultState({
      songs: [],
      currentMood: "",
      randomSong: getRandom
    });
    
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact path="/results"
          render={() => (
            <div>
              <SongsContainer
                resetResultState={resetResultState}
                filteredSongs={resultState.songs}
                currentMood={resultState.currentMood}
                randomize={randomize} />
            </div> )} />
        <Route 
          exact path="/random"
          render={() => <RandomSong song={resultState.randomSong}/>}
    
          />
        <Route
          exact path="/"
          render={() => (
            <div>
              <h2 className="featured-moods">Featured Moods</h2>
              <FeaturedMoods handleMood={handleMood} moods={appState.moods} />
              <MoodForm handleMood={handleMood} moods={appState.moods} />
            </div> )} />
        <Route 
          path="*"
          render={() => (
            <div>
              <Error />
            </div> )} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
