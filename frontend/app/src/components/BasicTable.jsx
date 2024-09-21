import React from 'react';
import './BasicTable.css'; // Importar estilos

//Icones de Material UI
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

//Importando checkbox de Material UI
import Checkbox from '@mui/material/Checkbox';


const BasicTable = ({ title, subtitle, columns, data }) => {
    const renderStatus = (status) => {
        if(status === "Ativo") {
            return <span className="status-active">Ativo</span>;
        } else if (status === "Inativo") {
            return <span className="status-inactive">Inativo</span>;
        }
        return status || "N/A";
    };
    return (
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
                                        <DeleteOutlineIcon />
                                    </div>
                                    Deletar
                                </button>
                            </div>
                            <div className="item-header">
                                <button className="filter-button">
                                    <div className="button-icon">
                                        <FilterListIcon />
                                    </div>
                                    Filtrar
                                </button>
                            </div>
                            <div className="item-header">
                                <button className="export-button">
                                    <div className="button-icon">
                                        <CloudDownloadOutlinedIcon />
                                    </div>
                                    Exportar
                                </button>
                            </div>
                            <div className="item-header">
                                <button className="create-button">
                                    <div className="button-icon">
                                        <AddCircleOutlineIcon />
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
                                {/* <input className="checkbox-base" type="checkbox" /> */}
                                <Checkbox />
                            </th>
                            {columns && columns.length > 0 && columns.map((column, index) => (
                                <th key={index} className="table-row-header"
                                    >{column}
                                </th>
                            ))}
                            <th className="table-row-header">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="checkbox-column">
                                    {/* <input className="checkbox-base" type="checkbox" /> */}
                                    <Checkbox />
                                </td>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="table-row-data">
                                        {column === "Status" ? renderStatus(row[column]) : row[column] || 'N/A'}
                                    </td>
                                ))}
                                <td className="table-row-data">
                                    <MoreVertOutlinedIcon className="action-button"/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default BasicTable;