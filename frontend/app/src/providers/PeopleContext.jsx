import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'
import { useAuth } from "./AuthContext";

export const PeopleContext = createContext()

export const PeopleProvider = ({ children }) => {
    const [people, setPerson] = useState([])
    const apiPath = '/people';
    const { user } = useAuth()

    function updatePerson(value) {
        setPerson([...people, value])
    }

    async function getPersonById(id) {
        try {
            const response = await ApiAxios.get(`${apiPath}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar pessoa:", error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchPeopleAPI() {
            return await ApiAxios.get('/people')
        }

        if(user.signed) {
            fetchPeopleAPI()
                .then(data => setPerson(data.data))
        }
    }, [user.signed])

    return (
        <PeopleContext.Provider
            value={{
                write: {
                    people: updatePerson
                },
                read: {
                    people,
                    getPersonById,
                }
            }}
        >
            {children}
        </PeopleContext.Provider>
    )
}

export const usePeople = () => {
    return useContext(PeopleContext)
}