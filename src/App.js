import React, { Component } from 'react';

import Congrats from './Congrats';
import GussedWords from './GussedWords';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GussedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
