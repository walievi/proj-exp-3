import React, { useState } from 'react';
import './index.css'; // Importar estilos

import Icon from '@mui/material/Icon';
import ActionMenu from '../ActionMenu/index.jsx';

// Icones de Material UI
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

// Importando checkbox de Material UI
import Checkbox from '@mui/material/Checkbox';
import { useTableList } from '../../providers/TableListProvider';

const BasicTable = ({ title, subtitle, columns, data, createModal }) => {
    const tableListContext = useTableList();

    const renderStatus = (status) => {
        if (status === "Ativo") {
            return <span className="status-active">Ativo</span>;
        } else if (status === "Inativo") {
            return <span className="status-inactive">Inativo</span>;
        }
        return status || "N/A";
    };

    function handleClickAdd() {
        tableListContext.write.showCreateModal(true);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    // -------------- função de paginação ---------------
    // const handlePageChange = (page) => {
    //     if (page >= 1 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };

    // const renderPagination = () => {
    //     const pages = [];
    //     for (let i = 1; i <= totalPages; i++) {
    //         pages.push(
    //             <button
    //                 key={i}
    //                 onClick={() => handlePageChange(i)}
    //                 className={`page-button ${i === currentPage ? 'active' : ''}`}
    //             >
    //                 {i}
    //             </button>
    //         );
    //     }
    //     return pages;
    // };

    return (
        <>
            <div className="list-container">
                <div className="table-container">
                    <div className="table-header-container">
                        <div className="items-table-header-container">
                            <div className="title-header">
                                <div className="principal-item-header">
                                    <div className="text-item-header">{title}</div>
                                </div>
                                <div className="sub-item-header">{subtitle}</div>
                            </div>
                            <div className="action-item-header">
                                <div className="item-header">
                                    <button className="delete-button">
                                        <div>
                                            <Icon><DeleteOutlineIcon /></Icon>
                                        </div>
                                        Deletar
                                    </button>
                                </div>
                                <div className="item-header">
                                    <button className="filter-button">
                                        <div className="button-icon">
                                            <Icon><FilterListIcon /></Icon>
                                        </div>
                                        Filtrar
                                    </button>
                                </div>
                                <div className="item-header">
                                    <button className="export-button">
                                        <div className="button-icon">
                                            <Icon><CloudDownloadOutlinedIcon /></Icon>
                                        </div>
                                        Exportar
                                    </button>
                                </div>
                                <div className="item-header">
                                    <button className="create-button" onClick={handleClickAdd}>
                                        <div className="button-icon">
                                            <Icon><AddCircleOutlineIcon /></Icon>
                                        </div>
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table-content-container">
                        <thead>
                            <tr>
                                <th className="checkbox-header">
                                    <Checkbox />
                                </th>
                                {columns && columns.length > 0 && columns.map((column, index) => (
                                    <th key={index} className="table-row-header">{column}</th>
                                ))}
                                <th className="table-row-header"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="checkbox-column">
                                        <Checkbox />
                                    </td>
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex} className="table-row-data">
                                            {column === "Status" ? renderStatus(row[column]) : row[column] || 'N/A'}
                                        </td>
                                    ))}
                                    <td className="table-row-data">
                                        <ActionMenu />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {/* <tfoot>
                            <tr>
                                <td>
                                    <div className="pagination-controls">
                                        <button 
                                            className="pagination-button" 
                                            onClick={() => handlePageChange(currentPage - 1)} 
                                            disabled={currentPage === 1}
                                        >
                                            Anterior
                                        </button>
                                        
                                        <div className="page-numbers">
                                            {renderPagination()} 
                                        </div>
                                        
                                        <button 
                                            className="pagination-button" 
                                            onClick={() => handlePageChange(currentPage + 1)} 
                                            disabled={currentPage === totalPages}
                                        >
                                            Próxima
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot> */}
                    </table>   
                </div>
            </div>
            {tableListContext.read.showCreateModal ? createModal : null}
        </>
    );
};

export default BasicTable;
