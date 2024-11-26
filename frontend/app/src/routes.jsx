/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Home from './pages/Home'
import Equipment from './pages/Equipaments'
import Patrimony from './pages/Patrimony'
import Loans from './pages/Loans'
import People from './pages/People'
import SignIn from './pages/SignIn'
import { useAuth } from './providers/AuthContext'

 
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const auth = useAuth()
    const location = useLocation()

    // console.log('oi daniel' + auth.user.signIn)

    return auth.user.signed ? (
        <>{ children }</>
    ) :
    <Navigate
        replace
        to="/signIn"
        state={{ from: location }}
    />
}

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/signIn' element={<SignIn />}/>
            <Route element={<DefaultLayout />}>
                <Route
                    
                    path='/' 
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path='/equipamentos' 
                    element={
                    <PrivateRoute>
                        <Equipment />
                    </PrivateRoute>
                    }
                />
                <Route 
                    path='/patrimonios' 
                    element={
                        <PrivateRoute>
                            <Patrimony />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path='/emprestimos' 
                    element={
                        <PrivateRoute>
                            <Loans />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path='/pacientes' 
                    element={
                        <PrivateRoute>
                            <People />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    )
}

export default RoutesApp