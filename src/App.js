import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import From from './components/form/From';

function App() {
  return (
    <React.Fragment>
      <Counter />
      <Toggle/>
      <From />
    </React.Fragment>
  );
}

export default App;
