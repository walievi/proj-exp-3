import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/CreateModal';
// import { useLoan } from '../../providers/LoanContext';
// import { usePatrimony } from '../../providers/PatrimonyContext';
// import { useEquipament } from '../../providers/EquipamentsContext';
// import { usePeople } from '../..providers/PeopleContext';

const Emprestimos = () => {
  const columns = ["Patrimônio", "Número de Série", "Responsável", "Status"];

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
  //       id: load.id,
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
    { Patrimônio: 'P0001', "Número de Série": 'SN2032132', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0002', "Número de Série": 'SN3049238', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0003', "Número de Série": 'SN9273847', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0004', "Número de Série": 'SN3849201', Responsável: 'Maria Oliveira', Status: 'Ativo' },
    { Patrimônio: 'P0005', "Número de Série": 'SN2840193', Responsável: 'João Silva', Status: 'Inativo' },
    { Patrimônio: 'P0006', "Número de Série": 'SN7293940', Responsável: 'Maria Oliveira', Status: 'Ativo' },
    { Patrimônio: 'P0007', "Número de Série": 'SN1827364', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0008', "Número de Série": 'SN3948281', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0009', "Número de Série": 'SN2029384', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0010', "Número de Série": 'SN1938492', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0011', "Número de Série": 'SN2032132', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0012', "Número de Série": 'SN3049238', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0013', "Número de Série": 'SN9273847', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0014', "Número de Série": 'SN3849201', Responsável: 'Maria Oliveira', Status: 'Ativo' },
    { Patrimônio: 'P0015', "Número de Série": 'SN2840193', Responsável: 'João Silva', Status: 'Inativo' },
    { Patrimônio: 'P0016', "Número de Série": 'SN7293940', Responsável: 'Maria Oliveira', Status: 'Ativo' },
    { Patrimônio: 'P0017', "Número de Série": 'SN1827364', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0018', "Número de Série": 'SN3948281', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0019', "Número de Série": 'SN2029384', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0020', "Número de Série": 'SN1938492', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0021', "Número de Série": 'SN2032132', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0022', "Número de Série": 'SN3049238', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0023', "Número de Série": 'SN9273847', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0024', "Número de Série": 'SN3849201', Responsável: 'Maria Oliveira', Status: 'Ativo' },
    { Patrimônio: 'P0025', "Número de Série": 'SN2840193', Responsável: 'João Silva', Status: 'Inativo' },
    { Patrimônio: 'P0026', "Número de Série": 'SN7293940', Responsável: 'Maria Oliveira', Status: 'Ativo' },
    { Patrimônio: 'P0027', "Número de Série": 'SN1827364', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0028', "Número de Série": 'SN3948281', Responsável: 'Maria Oliveira', Status: 'Inativo' },
    { Patrimônio: 'P0029', "Número de Série": 'SN2029384', Responsável: 'João Silva', Status: 'Ativo' },
    { Patrimônio: 'P0030', "Número de Série": 'SN1938492', Responsável: 'Maria Oliveira', Status: 'Inativo' }
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
              30
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Ativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              18  
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
            Inativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              12 
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