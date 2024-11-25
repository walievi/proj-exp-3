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

    async function postPersonAPI(newPerson) {
        return await ApiAxios.post(apiPath, {
            name: newPerson.name,
            cpf: newPerson.cpf,
            rg: newPerson.rg,
            birth_date: newPerson.birth_date,
            email: newPerson.email,
            phone: newPerson.phone,
            mother_name: newPerson.mother_name,
            father_name: newPerson.father_name,
            is_disabled: newPerson.is_disabled,
            card_sus: newPerson.card_sus,
            education_level: newPerson.education_level,
        });
    }

    function updatePerson(value) {
        postPersonAPI(value)
            .then(res => setPerson([...people, res.data]))
            .then(err => console.log(err));
    }

    async function updatePersonAPI(id, updatedPerson) {
        try {
            const response = await ApiAxios.put(`${apiPath}/${id}`, updatedPerson);
            setPerson((prevPeople) =>
                prevPeople.map((person) =>
                    person.id === id ? response. data : person
                )
            );
        } catch (erro) {
            console.erro("Erro ao atualizar pessoa: ", error);
        }
    }

    return (
        <PeopleContext.Provider
            value={{
                write: {
                    people: updatePerson,
                    updatesPeople: updatePersonAPI
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