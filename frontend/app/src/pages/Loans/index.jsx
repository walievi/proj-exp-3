
import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';

const Emprestimos = () => {
  const columns = ["Empréstimo", "Patrimônio", "Disponível", "Status"];
  const data = [
    {Empréstimo: "1" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "2" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "3" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "4" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "5" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "6" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "7" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "8" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "9" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "10" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "11" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "12" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "13" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "14" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "15" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "16" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "17" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    {Empréstimo: "18" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "19" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Inativo" },
    {Empréstimo: "20" , Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
  ];
  const modalForm = [
    {
      id: 1,
      field: <Dropdown label='Patrimônio' description='Obrigatório' identifier='categEquipament' required={true} data={[{value: 1, description: 'dd4ebb0d-2352-4105-b502-092bc9c2ac60'}, {value: 2, description: 'dd4ebb0d-2352-4105-b502-092bc9c2ac60'}]} />
    },
    {
      id: 2,
      field: <Dropdown label='Paciente Responsável' description='Obrigatório' identifier='categEquipament' required={true} data={[{value: 1, description: 'Juliana'}, {value: 2, description: 'William'}, {value: 3, description: 'Daniel'}]} />
    },
    {
      id: 4,
      field: <InputText label='Data de Empréstimo' description='Obrigatório' identifier='descEquipament' required={true} />
    },
    {
      id: 5,
      field: <InputText label='Data de Vencimento' description='Obrigatório' identifier='descEquipament' required={true} />
    },
    {
      id: 6,
      field: <TextArea label='Comentários' description='Obrigatório' identifier='descEquipament' required={true} />
    }
  ]

  return (
    <>
    <div className="equipment-container">
        
        <div className="count-equipment-container">
          <div className="count-container">
            <div className="count-name-container"> 
              Total Empréstimos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Empréstimos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Emprestimos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
        </div>

        <BasicTable 
          title="Empréstimos"
          subtitle="Listagem de Empréstimos" 
          columns={columns}
          data={data}
          createModal={
            <Modal 
              modalTitle="Cadastro de Empréstimo" 
              modalForm={modalForm} 
            />
          }
        />
    </div>
    </>
  );
};

export default Emprestimos;