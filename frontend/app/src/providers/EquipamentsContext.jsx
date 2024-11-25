import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios';

export const EquipamentsContext = createContext();

export const EquipamentsProvider = ({ children }) => {
    const [equipaments, setEquipament] = useState([]);
    const apiPath = '/equipaments';

    async function getEquipamentById(id) {
        try {
            const response = await ApiAxios.get(`${apiPath}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar equipamento:", error);
            return null;
        }
    }

    async function postEquipamentaAPI(newEquipament) {
        return await ApiAxios.post(apiPath, {
            model: newEquipament.model,
            serialNumber: newEquipament.serialNumber,
            manufacturer: newEquipament.manufacturer,
            categoryId: newEquipament.categoryId,
            description: newEquipament.description
        });
    }

    async function updateEquipamentAPI(id, updatedEquipament) {
        try {
            const response = await ApiAxios.put(`${apiPath}/${id}`, updatedEquipament);
            setEquipament((prevEquipaments) =>
                prevEquipaments.map((equipament) =>
                    equipament.id === id ? response. data : equipament
                )
            );
        } catch (erro) {
            console.erro("Erro ao atualizar equipamento: ", error);
        }
    }

    function updateEquipament(value) {
        postEquipamentaAPI(value)
            .then(res => setEquipament([...equipaments, res.data]))
            .then(err => console.log(err));
    }

    useEffect(() => {
        async function fetchEquipamentAPI() {
            return await ApiAxios.get(apiPath);
        }

        fetchEquipamentAPI()
            .then(data => {
                setEquipament(data.data);
            });
    }, []);

    async function deactivateEquipamentAPI(id) {
            await ApiAxios.delete(`${apiPath}/${id}`); 
            console.log(id);
    }

    return (
        <EquipamentsContext.Provider
            value={{
                write: {
                    equipaments: updateEquipament,
                    updatesEquipament: updateEquipamentAPI,
                    deactivatesEquipament: deactivateEquipamentAPI
                },
                read: {
                    equipaments,
                    getEquipamentById, // Adicionando o método show no contexto de leitura
                }
            }}
        >
            {children}
        </EquipamentsContext.Provider>
    );
};

export const useEquipament = () => useContext(EquipamentsContext);