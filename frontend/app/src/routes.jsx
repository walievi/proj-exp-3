import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Equipment from './pages/Equipaments'
import Patrimony from './pages/Patrimony'
import Loans from './pages/Loans'
import People from './pages/People'

const RoutesApp = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' Component={Equipment}/>
                <Route path='/patrimonios' Component={Patrimony}/>
                <Route path='/emprestimos' Component={Loans}/>
                <Route path='/pacientes' Component={People}/>
            </Route>
        </Routes>
    )
}

export default RoutesApp