import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'
import { useAuth } from "./AuthContext";

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [categories, setCategory] = useState([])
    const { user } = useAuth()

    function updateCategory(value) {
        setCategory([...categories, value])
    }

    useEffect(() => {
        async function fetchCategoriesAPI() {
            return await ApiAxios.get('/categories')
        }

        if(user.signed) {
            fetchCategoriesAPI()
            .then(data => setCategory(data.data))
        }

    }, [user.signed])

    return (
        <CategoryContext.Provider
            value={{
                write: {
                    categories: updateCategory
                },
                read: {
                    categories
                }
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    return useContext(CategoryContext)
}