import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'

export const LoansContext = createContext()

export const LoansProvider = ({ children }) => {
    const [loans, setLoan] = useState([])

    function updateLoan(value) {
        setLoan([...loans, value])
    }

    useEffect(() => {
        async function fetchLoansAPI() {
            return await ApiAxios.get('/loan')
        }

        fetchLoansAPI()
            .then(data => setLoan(data.data))

    }, [])

    return (
        <LoanContext.Provider
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
        </LoanContext.Provider>
    )
}

export const useLoan = () => {
    return useContext(LoanContext)
}