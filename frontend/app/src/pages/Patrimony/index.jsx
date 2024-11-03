
import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';
// import { usePatrimony } from '../../providers/PatrimonyContext';
// import { useEquipament } from '../../providers/EquipamentsContext';

const Patrimonios = () => {
  const columns = ["Patrimônio", "Equipamento", "Disponível", "Status"];

  //Serialization dos dados necessário para a page
  // const equipamentsContext = useEquipament();
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

  //Funções de contagem de cadastros
  // function getTotalPatrimonys() {
  //   return patrimonysContext.read.patrimonys.length;
  // }

  // function getTotalActivePatrimonys() {
  //   const activePatrimonys = new Set();
  
  //   patrimonysContext.read.patrimonys.forEach(patrimonys => {
  //     activePatrimonys.add(patrimonys.status.active);
  //   });
  
  //   return {
  //     totalActivePatrimonys: activePatrimonys.size,
  //   };
  // }

  // function getTotalInactivePatrimonys() {
  //   const inactivePatrimonys = new Set();
  
  //   patrimonysContext.read.patrimonys.forEach(patrimonys => {
  //     inactivePatrimonys.add(patrimonys.status.inactive);
  //   });
  
  //   return {
  //     totalInactivePatrimonys: inactivePatrimonys.size,
  //   };
  // }


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
              {/* {getTotalPatrimonys()} */}
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Patrimônios Ativos
            </div>
            <div className="count-quantity-container">
              {/* {getTotalActivePatrimonys().totalActivePatrimonys} */}
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Patrimonios Inativos
            </div>
            <div className="count-quantity-container">
              {/* {getTotalInactivePatrimonys().totalInactivePatrimonys} */}
            </div>
          </div>
        </div>

        <BasicTable 
          title="Patrimônios"
          subtitle="Listagem de Patrimônios" 
          columns={columns}
          data={data}
          // data={serializePatrimonys()}
          createModal={
            <Modal 
              modalTitle="Cadastro de Patrimônio" 
              modalForm={modalForm} 
              // action={patrimonysContext.write.patrimonys} 
            />
          }
        />
      </div>
    </>
  );
};

export default Patrimonios;