import React, { useState, useEffect } from "react";
import "./App.css";
import MoodForm from "../MoodForm/MoodForm";
import FeaturedMoods from "../FeaturedMoods/FeaturedMoods";
import SongsContainer from "../SongsContainer/SongsContainer";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Switch, Route } from "react-router-dom";
import { AppProps } from '../../model'

// interface AppProps {
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
//   currentMood?: string;
// }

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppProps>({
    songs: [],
    moods: [],
    currentMood: "",
  });

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

  const handleMood = (mood: string): void => {
    const results = appState.songs.filter((song) =>
      song.searchTerms.includes(mood.toLowerCase())
    );
    setAppState({
      songs: results,
      moods: [...appState.moods],
      currentMood: mood,
    });
  };



  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/results"
          render={() => (
            <div>
              <SongsContainer
                filteredSongs={appState.songs}
                currentMood={appState.currentMood}
              
              />
            </div>
          )}
        />

        <Route
          path="/"
          render={() => (
            <div>
              <h2 className="featured-moods">Featured Moods</h2>
              <FeaturedMoods
                handleMood={handleMood}
                songs={appState.songs}
                moods={appState.moods}
              />
              <MoodForm
                handleMood={handleMood}
                songs={appState.songs}
                moods={appState.moods}
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
