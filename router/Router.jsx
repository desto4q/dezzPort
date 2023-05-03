import React from 'react'
import Home from './pages/Home'
import Main_nav from '../components/Main_nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <>
        <BrowserRouter>
            <Main_nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router