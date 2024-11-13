import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
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

  //Função controladora dos campos da modal de cadastro
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
              modalForm={modalForm}
              // action={loansContext.write.loans} 
            />
          }
        />
      </div>
    </>
  );
};

export default Emprestimos;