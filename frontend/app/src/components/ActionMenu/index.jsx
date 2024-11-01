import React, { useState, useEffect, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import './index.css';

const ActionMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Função para fechar o menu ao clicar fora
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Efeito para adicionar/remover o event listener ao clicar fora do menu
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Funções para lidar com as ações de editar e visualizar detalhes
    const handleEdit = () => {
        console.log("Editar item");
        setIsOpen(false);
    };

    const handleViewDetails = () => {
        console.log("Ver detalhes do item");
        setIsOpen(false);
    };

    return (
        <div className="action-menu-container" ref={menuRef}>
            <MoreVertIcon onClick={toggleMenu} className="action-button" />

            {isOpen && (
                <div className="action-menu">
                    <button className="action-menu-item" onClick={handleEdit}>
                        <EditIcon /> Editar
                    </button>
                    <button className="action-menu-item" onClick={handleViewDetails}>
                        <VisibilityIcon /> Ver Detalhes
                    </button>
                </div>
            )}
        </div>
    );
};

export default ActionMenu;
