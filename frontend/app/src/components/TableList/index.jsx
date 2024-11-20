import React, { useState, useEffect } from 'react';
import './index.css'; // Importar estilos
import { exportToCSV} from './ExportUtils'; // Importar script de exportação de dados

//Importar componentes do projeto
import { useTableList } from '../../providers/TableListProvider';
import { getPaginationPages} from './PaginationUtils.js';

// Icones de Material UI
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// Importando componentes de Material UI
import Checkbox from '@mui/material/Checkbox';
import InformationModal from '../InformationModal/index.jsx';


const BasicTable = ({ title, subtitle, columns, data, createModal }) => {

//Configuração modal visualização
    const [selectedItem, setSelectedItem] = useState(null);

    const handleView = (item) => {
        setSelectedItem(item);
        tableListContext.write.showInfoModal(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        tableListContext.write.showInfoModal(false);
    }

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

// Estados de controle de pesquisa
    const [searchColumn, setSearchColumn] = useState (columns[0]);
    const [searchQuery, setSearchQuery] = useState ("");

// Função de pesquisa
    const filteredData = data.filter((item) => {
        if (!searchColumn || !searchQuery) return true;
        const value = item[searchColumn]?.toString().toLowerCase() || "";
        return value.includes(searchQuery.toLowerCase());
    });

//Configuração de paginação
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const updateItemsPerPage = () => {
        const screenHeight = window.innerHeight;
        if (screenHeight < 600) {
            setItemsPerPage(3);
        } else if (screenHeight <800) {
            setItemsPerPage(4);
        } else {
            setItemsPerPage(9);
        }
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        return() => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginationPages = getPaginationPages(currentPage, totalPages);

//Função de exportação de dados da tabela
    const handleExport = () => {
        exportToCSV(data, columns); // Chama a função exportando os dados
    };

//Estados de controle de ordenação
    const [sortConfig, setSortConfig] = useState({ key:null, direction: 'asc'});
    
// Função de ordenação
    const handleSort = (column) => {
        const direction = sortConfig.key === column && sortConfig.direction === 'asc' ? 'desc' : 'asc' ;
        setSortConfig({ key: column, direction});
        sortTable(column, direction);
    };

    const sortTable = (column, direction) => {
        data.sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return null;
        });
    };

    return (
        <>
            <div className="list-container container">
                <div className="table-container bg-white border rounded">
                    <div className="table-header-container sticky-top bg-white">
                        <div className="items-table-header-container d-flex align-items-center justify-content-between py-3">
                            <div>
                                <div className="text-item-header">{title}</div>
                                <div className="sub-item-header">{subtitle}</div>
                            </div>
                            <div className='searchContainer'>
                                <div className="radio-buttons">
                                    {columns.map((column, index) => (
                                        <label key={index} className='radio-label'>
                                            <input
                                                type='radio'
                                                name='searchColumn'
                                                value={column}
                                                checked={searchColumn === column}
                                                onChange={() => setSearchColumn(column)}
                                            />
                                            {column}
                                        </label>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder='Digite sua pesquisa'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    disabled={!searchColumn}
                                />
                            </div>
                            <div className="action-item-header d-flex">
                                <button className="btn btn-danger me-2">
                                    <DeleteOutlineIcon /> {' '} 
                                    Deletar
                                </button>
                                <button className="btn btn-success me-2" onClick={handleExport}>
                                    <CloudDownloadOutlinedIcon /> {' '}
                                    Exportar
                                </button>
                                <button className="btn btn-primary" onClick={handleClickAdd}>
                                    <AddCircleOutlineIcon /> {' '}
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-sm align-middle">
                        <thead>
                            <tr>
                                <th className="checkbox-header" scope="col">
                                    <Checkbox />
                                </th>
                                {columns && columns.length > 0 && columns.map((column, index) => (
                                    <th key={index} className="table-row-header" scope="col">
                                        <button className='sort-button' onClick={() => handleSort(column)}>
                                            {column}
                                            {sortConfig.key === column ? (
                                                sortConfig.direction === 'asc' ? ' ↑' : ' ↓'
                                            ) : null}
                                        </button>
                                    </th>
                                ))}
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="checkbox-column" scope="row">
                                        <Checkbox />
                                    </td>
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex} className="table-row-data" scope="row">
                                            {/* {column === "Status" ? renderStatus(row[column]) : row[column] || 'N/A'} */}
                                            {column === "SN" ? row["SN"] : row[column] || 'N/A'}
                                        </td>
                                    ))}
                                    <td className="table-row-data" scope="row">
                                        <button 
                                            className='btn btn-outline-info'
                                            onClick={() => handleView(row.id)}
                                        >
                                            <VisibilityOutlinedIcon />{' '}
                                            Visualizar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>

                    {tableListContext.read.showInfoModal && (
                        <InformationModal
                            open={Boolean(selectedItem)}
                            itemId={selectedItem}
                            onClose={handleCloseModal}
                        />
                    )}

                    <div className="pagination-container">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        >
                            &laquo;
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            &larr;
                        </button>
                        {paginationPages.map((page) => (
                            <button
                                key={page}
                                className={`btn btn-outline-primary ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="btn btn-outline-primary"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            &rarr;
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            &raquo;
                        </button>
                    </div>  
                </div>
            </div>
            {tableListContext.read.showCreateModal ? createModal : null}
        </>
    );
};

export default BasicTable;