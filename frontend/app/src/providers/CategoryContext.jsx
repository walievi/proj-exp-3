import React, { createContext, useContext, useEffect, useState } from "react";
import ApiAxios from './ApiAxios'

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [categories, setCategory] = useState([])

    function updateCategory(value) {
        setCategory([...categories, value])
    }

    useEffect(() => {
        async function fetchCategoriesAPI() {
            return await ApiAxios.get('/category')
        }

        fetchCategoriesAPI()
            .then(data => setCategory(data.data))

    }, [])

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