import React from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Layout from '../layout/Layout';
import FormHook from '../components/reactHookForm/FormHook'


const AppRouts = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<FormHook/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouts