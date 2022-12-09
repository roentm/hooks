import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../components/home/home';
import Movies from '../components/pages/Movies';
import Page2 from '../components/pages/page2';
import Layout from '../layout/layout';


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                {/* <Route path='/movies' element={<h1>test</h1>}/> */}
                <Route path='/page2' element={<Page2/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes