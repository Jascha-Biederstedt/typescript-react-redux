import React from 'react';

import Recorder from '../Recorder';
import Calendar from '../Calendar';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  );
};

export default App;
