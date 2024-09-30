import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Equipaments from './pages/Equipaments'

const RoutesApp = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' Component={Equipaments}/>
            </Route>
        </Routes>
    )
}

export default RoutesApp