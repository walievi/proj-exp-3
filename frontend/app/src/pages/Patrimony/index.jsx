
import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';

const Patrimonios = () => {
  const columns = ["Patrimônio", "Equipamento", "Disponível", "Status"];
  const data = [
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cadeira de Rodas", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Muleta", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cama Hospitalar", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Tubo Oxigênio", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cadeira de Rodas", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Muleta", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cama Hospitalar", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Tubo Oxigênio", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cadeira de Rodas", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Muleta", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cama Hospitalar", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Tubo Oxigênio", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cadeira de Rodas", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Muleta", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cama Hospitalar", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Tubo Oxigênio", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cadeira de Rodas", Status: "Ativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Muleta", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Cama Hospitalar", Status: "Inativo" },
    {Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60" , Equipamento: "Tubo Oxigênio", Status: "Ativo" },
  ];
  const modalForm = [
    {
      id: 1,
      field: <InputText label='Código' description='Obrigatório' identifier='codEquipament' required={true} />
    },
    {
      id: 2,
      field: <Dropdown label='Equipamento' description='Obrigatório' identifier='categEquipament' required={true} data={[{value: 1, description: 'Teclado'}]} />
    },
    {
      id: 4,
      field: <TextArea label='Comentários' description='Obrigatório' identifier='descEquipament' required={true} />
    }
  ]

  return (
    <>
    <div className="equipment-container">
        
        <div className="count-equipment-container">
          <div className="count-container">
            <div className="count-name-container"> 
              Total Patrimônios
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Patrimônios
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Patrimonios
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
        </div>

        <BasicTable 
          title="Patrimônios"
          subtitle="Listagem de Patrimônios" 
          columns={columns}
          data={data}
          createModal={
            <Modal 
              modalTitle="Cadastro de Patrimônio" 
              modalForm={modalForm} 
            />
          }
        />
    </div>
    </>
  );
};

export default Patrimonios;