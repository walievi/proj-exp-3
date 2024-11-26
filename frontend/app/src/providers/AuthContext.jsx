import { createContext, useCallback, useContext, useEffect, useState } from "react";
import axiosInstance from "./ApiAxios";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        signed: false,
        access_token: '',
    })

    const navigate = useNavigate()
    const location = useLocation();

    const handleAuth = async ({ username, password }) => {
        try {
            const formData = new FormData()

            formData.append('username', username)
            formData.append('password', password)
            const authRequest = await axiosInstance.post('/auth', formData)

            if(authRequest.status === 200) {
                if(!authRequest.data.error) {
                    axiosInstance.defaults.headers.Authorization = `Bearer ${authRequest.data.access_token}`
                    setUser({
                        signed: true,
                        access_token: authRequest.data.access_token
                    })
                    localStorage.setItem('token', authRequest.data.access_token)

                    if(location.state !== null) {
                        return navigate(location.state.from.pathname)
                    }
    
                    navigate('/')
                }
            }
            
        } catch (error) {
            console.log(error)
            if(error.response) {
                throw new Error('')
            }
        }
    }

    useEffect(() => {
        const tokenStorage = localStorage.getItem('token')

        // console.log('oi daniel' + JSON.stringify(location))
        // console.log('oi daniel token' + JSON.stringify(tokenStorage))

        if(tokenStorage !== null) {
            // console.log('Alguma coisa no useEffect')
            setUser({ 
                signed: true, 
                access_token: tokenStorage 
            })
            axiosInstance.defaults.headers.Authorization = `Bearer ${tokenStorage}`
            
            if(location.state !== null) {
                return navigate(location.state.from.pathname)
            }

            navigate('/')
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                handleAuth, user, setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}