import React from "react";

import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';

const InformationModal = ({ open, item, columns, onClose }) => {
    return (
        <Modal open={open} onClose={close}>
            <Box sx={{
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: 400, 
                bgcolor: 'background.paper', 
                borderRadius: 2, 
                boxShadow: 24, 
                p: 4
            }}>
                <Typography variant="h6" component="h2">
                    Detalhes do Item
                </Typography>
                {item && (
                    <Box mt={2}>
                        {columns.map((column, index) => (
                            <Typography key={index} variant="body1">
                                <strong>{column}:</strong> {item[column] || 'N/A'}
                            </Typography>
                        ))}
                    </Box>
                )}
                    <button onClick={onClose} style={{ marginTop: '10px', padding: '5px 15px', border: 'none', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px' }}>
                        Fechar
                    </button>
            </Box>
        </Modal> 
    );
}

export default InformationModal