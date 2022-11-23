import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppForm from '../components/appForm';
import Layout from '../layout/layout';


const AppRoutes = () => {
    
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<AppForm/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes