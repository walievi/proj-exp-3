import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal';
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';
// import { useLoan } from '../../providers/LoanContext';
// import { usePatrimony } from '../../providers/PatrimonyContext';
// import { useEquipament } from '../../providers/EquipamentsContext';
// import { usePeople } from '../..providers/PeopleContext';

const Emprestimos = () => {
  const columns = ["Empréstimo", "Patrimônio", "Disponível", "Status"];

  //Serialization dos dados necessário para a page
  // const equipamentsContext = useEquipament();
  // const loansContext = useLoan();
  // const patrimonysContext = usePatrimony();

  // function serializeEquipaments() {
  //   return equipamentsContext.read.equipaments.map(equipament => {
  //     return {
  //       Modelo: equipament.model,
  //       Fabricante: equipament.manufacturer,
  //     }
  //   })
  // }

  // function serializePatrimony() {
  //   return patrimonysContext.read.patrimonys.map(patrimony => {
  //     return {
  //       Patrimônio: patrimony.code,
  //       Equipamento: patrimony.equipament.id,
  //     }
  //   })
  // }

  // function serializeLoan() {
  //   return loansContext.read.loans.map(loan => {
  //     return {
  //       Patrimônio: loan.patrimony.code,
  //       Status: loan.status,
  //     }
  //   })
  // }


  //Funções de contagem de cadastros
  // function getTotalLoans() {
  //   return loansContext.read.loans.length;
  // }

  // function getTotalActiveLoans() {
  //   const activeLoans = new Set();
  
  //   loansContext.read.loans.forEach(loan => {
  //     activeLoans.add(loan.status.active);
  //   });
  
  //   return {
  //     totalActiveLoans: activeLoans.size,
  //   };
  // }

  // function getTotalInactiveLoans() {
  //   const inactiveLoans = new Set();
  
  //   loansContext.read.loans.forEach(loan => {
  //     inactiveLoans.add(loans.status.inactive);
  //   });
  
  //   return {
  //     totalInactiveLoans: inactiveLoans.size,
  //   };
  // }



  const data = [
    { Empréstimo: 1, Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Status: "Ativo" },
    { Empréstimo: 2, Patrimônio: "a1d5b2c9-134b-4c8d-9b82-ef4ac7c1a1c2", Status: "Inativo" },
    { Empréstimo: 3, Patrimônio: "b5ff4e00-2235-4d7f-a5b7-01babc8b4533", Status: "Em Manutenção" },
    { Empréstimo: 4, Patrimônio: "fa3dc2d8-3af4-47a5-b1b1-e9f4bb234d10", Status: "Ativo" },
    { Empréstimo: 5, Patrimônio: "c6aa5d22-16a7-42c8-a987-53c5f3b23445", Status: "Inativo" },
    { Empréstimo: 6, Patrimônio: "ee4dc340-46f4-441f-9654-a32bc6c4d1a3", Status: "Em Manutenção" },
    { Empréstimo: 7, Patrimônio: "dc0ebb0d-87e2-4f10-b4c1-092b9d2c3a60", Status: "Ativo" },
    { Empréstimo: 8, Patrimônio: "fb2a4d55-3456-4b0e-8c7f-d22bcb4f14a7", Status: "Inativo" },
    { Empréstimo: 9, Patrimônio: "ab2f2c11-33c7-4231-897d-f32a1c6b1f65", Status: "Ativo" },
    { Empréstimo: 10, Patrimônio: "c2bb0d1e-9d8e-4f2f-b6c1-12cde7f8c5b4", Status: "Em Manutenção" }
  ];

  return (
    <>
      <div className="equipment-container"> 
        <div className="count-equipment-container d-flex flex-row align-items-center p-3 gap-4 w-100" style={{ maxWidth: '1552px', height: '200px' }}>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Total
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalLoans()} */} 
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Ativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalActiveLoans().totalActiveLoans} */}  
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
            Inativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalInactiveLoans().totalInactiveLoans} */}  
            </div>
          </div>  
        </div>

        <BasicTable 
          title="Empréstimos"
          subtitle="Listagem de Empréstimos" 
          columns={columns}
          data={data}
          // data={serializeLoans()}
          createModal={
            <Modal 
              modalTitle="Cadastro de Empréstimo" 
              // action={loansContext.write.loans} 
            />
          }
        />
      </div>
    </>
  );
};

export default Emprestimos;