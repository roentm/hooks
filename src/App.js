import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AppHome from './comps/appHome';
import VodInput from './comps/vodInput';
import Footer from './comps/footer';
import './App.css';
import AppVodInfo from './comps/appVodInfo';

function App() {
  return (
    <BrowserRouter>
      <VodInput/>
      <Routes>
        <Route index element={<AppHome/>}/>
        <Route path="/info/:id" element={<AppVodInfo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
