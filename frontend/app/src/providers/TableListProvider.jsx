import React, { createContext, useContext, useState } from "react";

const TableListContext = createContext()

export const TableListProvider = ({ children }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    function updateShowCreateModal(value) {
        setShowCreateModal(value)
    }

    function updateShowInfoModal(value) {
        setShowInfoModal(value);
    }

    return (
        <TableListContext.Provider
            value={{
                read: {
                    showCreateModal,
                    showInfoModal,
                },
                write: {
                    showCreateModal: updateShowCreateModal,
                    showInfoModal: updateShowInfoModal,
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