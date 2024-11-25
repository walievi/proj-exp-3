import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/CreateModal';
import { usePatrimony } from '../../providers/PatrimonyContext';

const Patrimonios = () => {
  const columns = ["Patrimônio", "Equipamento", "Número de Série", "Status"];

  // Serialization dos dados necessário para a page
  const patrimonysContext = usePatrimony();

  function serializePatrimony() {
    return patrimonysContext.read.patrimonys.map(patrimony => {
      const status = patrimony.deletedAt ? "Inativo" : "Ativo";
      return {
        id: patrimony.id,
        Patrimônio: patrimony.patrimonyCode,
        Equipamento: patrimony.equipament.model,
        "Número de Série": patrimony.equipament.serialNumber,
        Status: status,
      }
    })
  }

  // Funções de contagem de cadastros
  function getTotalpatrimonys() {
    return patrimonysContext.read.patrimonys.length;
  }

  // function getTotalActivepatrimonys() {
  //   const activepatrimonys = new Set();
  
  //   patrimonysContext.read.patrimonys.forEach(patrimonys => {
  //     activepatrimonys.add(patrimonys.status.active);
  //   });
  
  //   return {
  //     totalActivepatrimonys: activepatrimonys.size,
  //   };
  // }

  // function getTotalInactivepatrimonys() {
  //   const inactivepatrimonys = new Set();
  
  //   patrimonysContext.read.patrimonys.forEach(patrimonys => {
  //     inactivepatrimonys.add(patrimonys.status.inactive);
  //   });
  
  //   return {
  //     totalInactivepatrimonys: inactivepatrimonys.size,
  //   };
  // }

  return (
    <>
      <div className="equipment-container"> 
        <div className="count-equipment-container d-flex flex-row align-items-center p-3 gap-4 w-100" style={{ maxWidth: '1552px', height: '200px' }}>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Total
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {getTotalpatrimonys()}
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Ativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalActivepatrimonys().totalActivePatrimonys}  */}
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
            Inativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalInactivepatrimonys().totalInactivePatrimonys} */}
            </div>
          </div>  
        </div>

        <BasicTable 
          title="Patrimônios"
          subtitle="Listagem de Patrimônios" 
          columns={columns}
          data={serializePatrimony()}
          createModal={
            <Modal 
              modalTitle="Cadastro de Patrimônio" 
              action={patrimonysContext.write.patrimonys} 
            />
          }
        />
      </div>
    </>
  );
};

export default Patrimonios;