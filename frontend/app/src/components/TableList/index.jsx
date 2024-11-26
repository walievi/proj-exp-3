import React, { useState, useEffect } from 'react';
import { useLocation  } from "react-router-dom";
import './index.css'; // Importar estilos

//Importar componentes do projeto
import { useTableList } from '../../providers/TableListProvider';
import { useEquipament } from '../../providers/EquipamentsContext';
import { usePatrimony } from '../../providers/PatrimonyContext';
import { getPaginationPages } from './PaginationUtils.js';
import { exportToCSV } from './ExportUtils'; // Importar script de exportação de dados

// Icones de Material UI
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// Importando componentes de Material UI
import InformationModal from '../InformationModal/index.jsx';


const BasicTable = ({ columns, data, createModal }) => {

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
    const location = useLocation();
    const equipamentContext = useEquipament();
    const patrimonyContext = usePatrimony();
    const tableListContext = useTableList();

    const renderSNColumn = (row) => {
        return row["SN"] || 'N/A'; // Exibe 'N/A' caso SN não exista
    };

    const renderStatusColumn = (row) => {
        return renderStatus(row["Status"]); // Chama a função renderStatus para exibir o status formatado
    };

    const renderStatus = (status) => {
        if (status === "Ativo") {
            return (
                <span className="d-flex align-items-center">
                    <span className="badge bg-success text-light p-2 rounded-pill d-flex align-items-center">
                        <span className="status-circle bg-success-circle"></span>
                        Ativo
                    </span>
                </span>
            );
        } else if (status === "Inativo") {
            return (
                <span className="d-flex align-items-center">
                    <span className="badge bg-secondary text-light p-2 rounded-pill d-flex align-items-center">
                        <span className="status-circle bg-secondary-circle"></span>
                        Inativo
                    </span>
                </span>
            );
        }
        return status || "N/A";
    };

    function handleClickAdd() {
        tableListContext.write.showCreateModal(true);
    }

    function handleDeactivateEquipament(id) {
        alert('Equipamento desativado');
        equipamentContext.write.deactivatesEquipament(id)
    }

    function handleDeactivatePatrimony(id) {
        alert('Patrimônio desativado');
        patrimonyContext.write.deactivatesPatrimony(id)
    }

    function handleDeactivateItem(id) {
        switch (location.pathname) {
            // case '/categorias':
            //     return <CategoryModal />;
            case '/equipamentos':
                handleDeactivateEquipament(id);
                break;
            case '/patrimonios':
                handleDeactivatePatrimony(id);
                break;
            default:
                return null;
        }
    }

// Estados de controle de pesquisa
    const [searchColumn, setSearchColumn] = useState (columns[0]);
    const [searchQuery, setSearchQuery] = useState ("");

// Função de pesquisa
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(
            data.filter((item) => {
                if (!searchColumn || !searchQuery) return true;
                const value = item[searchColumn]?.toString().toLowerCase() || "";
                return value.includes(searchQuery.toLowerCase());
            })
        );
    }, [searchColumn, searchQuery, data]);

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
            setItemsPerPage(7);
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
        const sortedData = [...filteredData].sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFilteredData(sortedData);
    };

    const resetOrder = () => {
        setFilteredData([...data]); // Restaura a lista original
        setSearchQuery(""); // Limpa a busca
        setSearchColumn(columns[0]); // Reseta a coluna de busca
        setSortConfig({ key: null, direction: 'asc' }); // Reseta a ordenação
    };

    return (
        <>
            <div className="w-100 p-3">
                <div className="table-container bg-white border rounded p-3">
                    <div className="table-header-container sticky-top bg-white">
                        <div className="items-table-header-container d-flex align-items-center justify-content-between py-3">
                            <div className='searchContainer'>
                                <div className="radio-buttons">
                                    <label htmlFor="searchColumn" className="select-label">
                                        Selecione a coluna:
                                    </label>
                                </div>
                                <div className="search-container">
                                    <select
                                        className="form-select"
                                        id="searchColumn"
                                        name="searchColumn"
                                        value={searchColumn}
                                        onChange={(e) => setSearchColumn(e.target.value)}
                                    >
                                        {columns.map((column, index) => (
                                            <option key={index} value={column}>
                                                {column}
                                            </option>
                                        ))}
                                    </select>

                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Digite sua pesquisa"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        disabled={!searchColumn}
                                        id="search"
                                        style={{color: '#000'}}
                                    />
                                </div>
                            </div>
                            <div className="action-item-header d-flex">
                                <button className="btn btn-secondary me-2" onClick={resetOrder}>
                                    Redefinir
                                </button>
                                <button className="btn btn-success me-2" onClick={handleExport}>
                                    <CloudDownloadOutlinedIcon /> {' '}
                                    Exportar
                                </button>
                                <button id="AddItem" className="btn btn-primary" onClick={handleClickAdd}>
                                    <AddCircleOutlineIcon /> {' '}
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-sm align-middle" id='table-data'>
                        <thead>
                            <tr>
                                {columns && columns.length > 0 && columns.map((column, index) => (
                                    <th key={index} className="table-row-header" scope="col">
                                        <button className='sort-button' onClick={() => handleSort(column)}>
                                            {column}
                                            {sortConfig.key === column ? (
                                                sortConfig.direction === 'asc' ? <ArrowUpwardOutlinedIcon fontSize="small"/> : <ArrowDownwardOutlinedIcon fontSize="small"/>
                                            ) : (
                                                <SortByAlphaOutlinedIcon fontSize="small"/>
                                            )}
                                        </button>
                                    </th>
                                ))}
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row, rowIndex) => (
                                <tr key={rowIndex}>

                                    {columns.map((column, colIndex) => {
                                        if (column === "SN") {
                                            return (
                                                <td key={colIndex} className="table-row-data" scope="row">
                                                    {renderSNColumn(row)}
                                                </td>
                                            );
                                        } else if (column === "Status") {
                                            return (
                                                <td key={colIndex} className="table-row-data status-column" scope="row">
                                                    {renderStatusColumn(row)}
                                                </td>
                                            );
                                        } else {
                                            return (
                                                <td key={colIndex} className="table-row-data" scope="row">
                                                    {row[column] || 'N/A'}
                                                </td>
                                            );
                                        }
                                    })}
                                    <td className="table-row-data" scope="row">
                                        {location.pathname === '/equipamentos' || location.pathname === '/patrimonios' ? (
                                                <button 
                                                    className="btn btn-danger me-2" 
                                                    onClick={() => handleDeactivateItem(row.id)} 
                                                    disabled={row.Status === "Inativo"}
                                                >
                                                    <CloseTwoToneIcon /> {' '} 
                                                    Desativar
                                                </button>
                                            ) : null}
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