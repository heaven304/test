import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import NotFound from './404'

export default function RouterContainer() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile/:id' element={<Profile />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
