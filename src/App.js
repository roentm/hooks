import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Toggle from './components/Toggle';

function App() {
  return (
    <React.Fragment>
      <Counter />
      <Toggle/>
    </React.Fragment>
  );
}

export default App;
