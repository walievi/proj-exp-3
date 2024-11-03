import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'

export const PatrimonyContext = createContext()

export const PatrimonyProvider = ({ children }) => {
    const [patrimonys, setPatrimony] = useState([])

    function updatePatrimony(value) {
        setPatrimony([...patrimonys, value])
    }

    useEffect(() => {
        async function fetchPatrimonysAPI() {
            return await ApiAxios.get('/patrimony')
        }

        fetchPatrimonysAPI()
            .then(data => setPatrimony(data.data))

    }, [])

    return (
        <PatrimonyContext.Provider
            value={{
                write: {
                    patrimonys: updatePatrimony
                },
                read: {
                    patrimonys
                }
            }}
        >
            {children}
        </PatrimonyContext.Provider>
    )
}

export const usePatrimony = () => {
    return useContext(PatrimonyContext)
}