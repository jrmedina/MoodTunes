import React, { useState } from 'react';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import './App.css';
import FeaturedMoods from '../FeaturedMoods/FeaturedMoods';
import SongsContainer from '../SongsContainer/SongsContainer';


const App: React.FC = () => {

    return (
      <div className="App">
        <h1>MoodTunes</h1>
        <FeaturedMoods />
        <SongsContainer />
      </div>
    );

}


export default App;



