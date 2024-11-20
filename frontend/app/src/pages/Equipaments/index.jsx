import React, { useEffect, useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/CreateModal';
import { useEquipament } from '../../providers/EquipamentsContext';

const Equipamentos = () => {
  const columns = ["Modelo", "Número de Série","Fabricante", "Categoria"];
  const equipamentsContext = useEquipament();

  function serializeEquipaments() {
    return equipamentsContext.read.equipaments.map(equipament => {
      return {
        id: equipament.id,
        Modelo: equipament.model,
        "Número de Série": equipament.serialNumber,
        Fabricante: equipament.manufacturer,
        Categoria: equipament.category.name,
      }
    })
  }

//Funções de contagem de cadastros
  function getTotalEquipments() {
    return equipamentsContext.read.equipaments.length;
  }

  function getTotalCategories() {
    const uniqueCategories = new Set();
  
    equipamentsContext.read.equipaments.forEach(equipament => {
      uniqueCategories.add(equipament.category.name);
    });
  
    return {
      categoriesCount: uniqueCategories.size,
    };
  }

  function getTotalManufacturers() {
    const uniqueManufacturers = new Set();
  
    equipamentsContext.read.equipaments.forEach(equipament => {
      uniqueManufacturers.add(equipament.manufacturer);
    });
  
    return {
      manufacturersCount: uniqueManufacturers.size,
    };
  }

  return (
    <>
      <div className="equipment-container"> 
        <div className="count-equipment-container d-flex flex-row align-items-center p-3 gap-4 w-100" style={{ maxWidth: '1552px', height: '200px' }}>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Equipamentos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {getTotalEquipments()}  
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Fabricantes
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {getTotalManufacturers().manufacturersCount}  
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Categorias
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {getTotalCategories().categoriesCount}  
            </div>
          </div>  
        </div>

        <BasicTable
          title="Equipamentos"
          subtitle="Listagem de Equipamentos"
          columns={columns}
          data={serializeEquipaments()}
          createModal={
            <Modal
              modalTitle="Cadastro de Equipamento"
              dialogModal={{
                title: "Deseja continuar com o cadastro de Patrimônio desse Equipamento?",
                description: "Se continuar com o cadastro de Patrimônio todos os dados do Equipamento serão carregados automaticamente no formulário."
              }}
              action={equipamentsContext.write.equipaments} // Aqui estamos passando a função corretamente
            />
          }
        />
      </div>
    </>
  );
};

export default Equipamentos;