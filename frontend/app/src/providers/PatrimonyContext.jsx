import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios';

export const PatrimonyContext = createContext();

export const PatrimonyProvider = ({ children }) => {
    const [patrimonys, setPatrimony] = useState([]);  // Corrigido para 'patrimonys'
    const apiPath = '/patrimony';

    async function getPatrimonyById(id) {
        try {
            const response = await ApiAxios.get(`${apiPath}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar patrimônio:", error);
            return null;
        }
    }

    async function postPatrimonyAPI(newPatrimony) {
        return await ApiAxios.post(apiPath, {
                patrimonyCode: newPatrimony.patrimonyCode,
                equipamentId: newPatrimony.equipamentId,
                description: newPatrimony.description
        });
    }

    async function updatePatrimonyAPI(id, updatedPatrimony) {
        try {
            const response = await ApiAxios.put(`${apiPath}/${id}`, updatedPatrimony);
            setPatrimony((prevPatrimonys) =>
                prevPatrimonys.map((patrimony) =>
                    patrimony.id === id ? response.data : patrimony
                )
            );
        } catch (error) {
            console.error("Erro ao atualizar patrimônio:", error);
        }
    }

    function updatePatrimony(value) {
        postPatrimonyAPI(value)
            .then(res => setPatrimony([...patrimonys, res.data])) // Corrigido para usar 'patrimonys'
            .catch(err => console.error("Erro ao adicionar patrimônio:", err));
            console.log(value)
    }

    useEffect(() => {
        async function fetchPatrimonyAPI() {
            try {
                const response = await ApiAxios.get(apiPath);
                setPatrimony(response.data); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error("Erro ao buscar patrimonios:", error); // Log de erro
            }
        }

        fetchPatrimonyAPI();
    }, []);

    return (
        <PatrimonyContext.Provider
            value={{
                write: {
                    patrimonys: updatePatrimony,
                    updatesPatrimony: updatePatrimonyAPI
                },
                read: {
                    patrimonys,  // Passando 'patrimonys' para o contexto
                    getPatrimonyById,
                }
            }}
        >
            {children}
        </PatrimonyContext.Provider>
    );
};

export const usePatrimony = () => useContext(PatrimonyContext);
