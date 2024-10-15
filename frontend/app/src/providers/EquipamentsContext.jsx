import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'

export const EquipamentsContext = createContext()

export const EquipamentsProvider = ({ children }) => {
    const [equipaments, setEquipament] = useState([])
    const apiPath = '/equipament'

    function updateEquipament(value) {
        postEquipamentaAPI(value)
            .then(res => setEquipament([...equipaments, res.data]))
            .then(err => console.log(err))
    }

    async function postEquipamentaAPI(newEquipament) {
        return await ApiAxios.post(apiPath, {
            model: newEquipament.model,
            manufacturer: newEquipament.manufacturer,
            categoryId: newEquipament.categoryId,
            description: newEquipament.description
        })
    }

    useEffect(() => {
        async function fetchEquipamentAPI() {
            return await ApiAxios.get('/equipament')
        }

        fetchEquipamentAPI()
            .then(data => {
                setEquipament(data.data)
            })
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