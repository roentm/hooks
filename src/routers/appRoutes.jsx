import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/home/home'
import Page1 from '../components/pages/page1/page1'
import Page2 from '../components/pages/page2/page2'
import Layout from '../layout/layout'
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='/page1' element={<Page1 />} />
                    <Route path='/page2' element={<Page2 />} />2
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes