import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../components/home/home';
import MovieInfo from '../components/pages/MovieInfo';
import Layout from '../layout/layout';


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/info/:id' element={<MovieInfo/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes