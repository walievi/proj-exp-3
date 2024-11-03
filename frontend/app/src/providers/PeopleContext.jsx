import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'

export const PeopleContext = createContext()

export const PeopleProvider = ({ children }) => {
    const [people, setPerson] = useState([])

    function updatePerson(value) {
        setPerson([...people, value])
    }

    useEffect(() => {
        async function fetchPeopleAPI() {
            return await ApiAxios.get('/people')
        }

        fetchPeopleAPI()
            .then(data => setPerson(data.data))

    }, [])

    return (
        <PersonContext.Provider
            value={{
                write: {
                    people: updatePerson
                },
                read: {
                    people
                }
            }}
        >
            {children}
        </PersonContext.Provider>
    )
}

export const usePeople = () => {
    return useContext(PeopleContext)
}