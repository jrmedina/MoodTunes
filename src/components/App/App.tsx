import React, { Component } from 'react';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import './App.css';

class App extends Component {
  constructor( props: any ) {
    super( props );
    this.state = {

    }
  }

  componentDidMount() {
    return fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => console.log(data));
    }

  render( ) {
    return (
      <div className="App">
        <h1>MoodTunes</h1>
      </div>
    );
  }
  
}

export default App;



