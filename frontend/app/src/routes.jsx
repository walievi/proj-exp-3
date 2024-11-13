import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Home from './pages/Home'
import Equipment from './pages/Equipaments'
import Patrimony from './pages/Patrimony'
import Loans from './pages/Loans'
import People from './pages/People'

const RoutesApp = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/equipamentos' element={<Equipment />}/>
                <Route path='/patrimonios' element={<Patrimony />}/>
                <Route path='/emprestimos' element={<Loans />}/>
                <Route path='/pacientes' element={<People />}/>
            </Route>
        </Routes>
    )
}

export default RoutesApp