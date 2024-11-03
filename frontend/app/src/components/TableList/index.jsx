import React, { useState } from 'react';
import './index.css'; // Importar estilos

//Importar componentes do projeto
import ActionMenu from '../ActionMenu';
import FilterModal from '../FilterModal';
// import InformationModal from '../InformationModal';
import { useTableList } from '../../providers/TableListProvider';
import { getPaginationPages} from './PaginationUtils.js';

// Icones de Material UI
import Icon from '@mui/material/Icon';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// Importando checkbox de Material UI
import Checkbox from '@mui/material/Checkbox';


const BasicTable = ({ title, subtitle, columns, data, createModal }) => {
//Configuração modal filtro
    const [isFilterModalOpen, setFilterModalOpen] = useState(false);

    const handleOpenFilterModal = () => {
        setFilterModalOpen(true);
    };

    const handleCloseFilterModal = () => {
        setFilterModalOpen(false);
    };

//Configuração tabela
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

//Configuração de paginação
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginationPages = getPaginationPages(currentPage, totalPages);

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
                                    <button className="filter-button" onClick={handleOpenFilterModal}>
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
                        
                    </table>

                    <div className="pagination-container">
                    <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        >
                            &laquo;
                        </button>
                        <button
                            className="pagination-button"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            &larr;
                        </button>
                        {paginationPages.map((page) => (
                            <button
                                key={page}
                                className={`pagination-button-number ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="pagination-button"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            &rarr;
                        </button>
                        <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            &raquo;
                        </button>
                    </div>   
                </div>
            </div>
            {isFilterModalOpen && <FilterModal onClose={handleCloseFilterModal} />}
            {tableListContext.read.showCreateModal ? createModal : null}
        </>
    );
};

export default BasicTable;
