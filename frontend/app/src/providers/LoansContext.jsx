import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'
import { useAuth } from "./AuthContext";

export const LoansContext = createContext()

export const LoansProvider = ({ children }) => {
    const [loans, setLoan] = useState([])
    const { user } = useAuth()

    function updateLoan(value) {
        setLoan([...loans, value])
    }

    useEffect(() => {
        async function fetchLoansAPI() {
            return await ApiAxios.get('/loans')
        }

        if(user.signed) {
            fetchLoansAPI()
                .then(data => setLoan(data.data))
        }
    }, [user.signed])

    return (
        <LoansContext.Provider
            value={{
                write: {
                    loans: updateLoan
                },
                read: {
                    loans
                }
            }}
        >
            {children}
        </LoansContext.Provider>
    )
}

export const useLoan = () => {
    return useContext(LoansContext)
}