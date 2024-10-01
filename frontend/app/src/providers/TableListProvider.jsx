import React, { createContext, useContext, useState } from "react";

const TableListContext = createContext()

export const TableListProvider = ({ children }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    function updateShowCreateModal(value) {
        setShowCreateModal(value)
    }

    return (
        <TableListContext.Provider
            value={{
                read: {
                    showCreateModal
                },
                write: {
                    showCreateModal: updateShowCreateModal
                }
            }}
        >
            {children}
        </TableListContext.Provider>
    )
}

export const useTableList = () => {
    return useContext(TableListContext)
}