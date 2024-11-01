import React, { useState } from "react";
import Icon from '@mui/material/Icon';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import Button from "../Button";
import './index.css'; // Importar estilos

const FilterModal = ({ onClose }) => {
    const [modelOrder, setModelOrder] = useState([]);
    const [manufacturerOrder, setManufacturerOrder] = useState([]);
    const [category, setCategory] = useState([]);

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModelOrder((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturerOrder((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleApplyFilters = () => {
        console.log("Filtros aplicados:", { modelOrder, manufacturerOrder, category });
        onClose(); // Fechar a modal após aplicar os filtros
    };

    return (
        <div id="modal-blur">
            <div id="modal-container">
                <div id="modal-header">
                    <div id="modal-title">Filtrar</div>
                    <div id="modal-close">
                        <button type="button" onClick={onClose}><Icon><CloseIcon /></Icon></button>
                    </div>
                </div>
                <div id="modal-content">
                    <form className="modal-form">
                        <div>
                            <label>Modelo:</label>
                            <div>
                                <label>
                                <Checkbox />
                                    A-Z
                                </label>
                                <label>
                                <Checkbox />
                                    Z-A
                                </label>
                            </div>
                        </div>
                        <div>
                            <label>Fabricante:</label>
                            <div>
                                <label>
                                <Checkbox />
                                    A-Z
                                </label>
                                <label>
                                <Checkbox />
                                    Z-A
                                </label>
                            </div>
                        </div>
                        <div>
                            <label>Categoria:</label>
                            <div>
                                <label>
                                <Checkbox />
                                    Categoria 1
                                </label>
                                <label>
                                <Checkbox />
                                    Categoria 2
                                </label>
                            </div>
                        </div>
                        <div id="modal-footer">
                            <Button text="Cancelar" opacity="70%" width="50%" type="button" onClick={onClose} />
                            <Button text="Aplicar" opacity="100%" width="50%" type="button" onClick={handleApplyFilters} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
