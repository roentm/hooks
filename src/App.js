import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AppHome from './comps/appHome';
import VodInput from './comps/vodInput';
import Footer from './comps/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <VodInput/>
      <Routes>
        <Route index element={<AppHome/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
