import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'

export const EquipamentsContext = createContext()

export const EquipamentsProvider = ({ children }) => {
    const [equipaments, setEquipament] = useState([])

    function updateEquipament(value) {
        setEquipament([...equipaments, value])
    }

    useEffect(() => {
        async function fetchCategoriesAPI() {
            return await ApiAxios.get('/equipament')
        }

        fetchCategoriesAPI()
            .then(data => setEquipament(data.data))

    }, [])

    return (
        <EquipamentsContext.Provider
            value={{
                write: {
                    equipaments: updateEquipament
                },
                read: {
                    equipaments
                }
            }}
        >
            {children}
        </EquipamentsContext.Provider>
    )
}

export const useEquipament = () => {
    return useContext(EquipamentsContext)
}