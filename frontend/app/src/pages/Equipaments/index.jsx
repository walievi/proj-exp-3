import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'

const Equipamentos = () => {
  const columns = ["Equipamento", "Tipo", "Quantidade", "Disponível", "Status"];
  const data = [
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
  ];

  const [showCreateModal, setShowCreateModal] = useState(true)

  return (
    <>
    <div className="equipment-container">
        
        <div className="count-equipment-container">
          <div className="count-container">
            <div className="count-name-container"> 
              Total Equipamentos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Equipamentos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Equipamentos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
        </div>

        <BasicTable 
          title="Equipamentos"
          subtitle="Listagem de Equipamentos" 
          columns={columns}
          data={data} 
        />
    </div>
    {
      showCreateModal ? <Modal /> : null
    }
    </>
  );
};

export default Equipamentos;