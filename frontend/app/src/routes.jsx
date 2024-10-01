import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Equipaments from './pages/Equipaments'
import Patrimony from './pages/Patrimony'
import Loans from './pages/Loans'

const RoutesApp = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' Component={Equipaments}/>
                <Route path='/patrimonios' Component={Patrimony}/>
                <Route path='/emprestimos' Component={Loans}/>
            </Route>
        </Routes>
    )
}

export default RoutesApp