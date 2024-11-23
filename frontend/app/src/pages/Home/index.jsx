import React, { useEffect, useState } from 'react';
import './index.css'; // Importar estilos

import { useEquipament } from '../../providers/EquipamentsContext';
import { usePatrimony } from '../../providers/PatrimonyContext';
// import { useLoan } from '../../providers/LoanContext';
import { usePeople } from '../../providers/PeopleContext';

const Home = () => {
//Inicialização dos dados necessário para a page
  const equipamentsContext = useEquipament();
  // const loansContext = useLoan();
  const patrimonysContext = usePatrimony();
  const peopleContext = usePeople();

//Funções de contagem de cadastros de equipamentos
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

  // Funções de contagem de cadastros de patrimônios
  function getTotalPatrimonys() {
    return patrimonysContext.read.patrimonys.length;
  }

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

    //Funções de contagem de cadastros de empréstimos
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

    //Funções de contagem de cadastros de pessoas
  function getTotalPeople() {
    return peopleContext.read.people.length;
  }



  return (
    <>
      <div className="dashboard-container d-flex flex-column vh-100">
        {/* Cabeçalho */}
        <header className="header bg-primary text-white p-3">
            <h1 className="text-center">Itens Cadastrados no Sistema</h1>
        </header>
        
        {/* Conteúdo Principal */}
        <main className="flex-grow-1 overflow-auto">
            <div className="container-fluid d-flex justify-content-around align-items-start flex-wrap p-4">
                
              {/* Coluna de Equipamentos */}
              <div className="col-lg-3 col-md-5 col-sm-12 p-2">
                <div className="content-box bg-primary text-white p-3 rounded d-flex flex-column h-100">
                  <h3 className="text-center mb-3">Equipamentos</h3>
                        
                  <div className="count-container bg-light-primary p-3 mb-3 rounded">
                    <p className="fs-5 fw-normal">Total de Equipamentos:</p>
                    <p className="fs-1 fw-bold">{getTotalEquipments()}</p>
                  </div>
                        
                  <div className="count-container bg-light-primary p-3 mb-3 rounded">
                    <p className="fs-5 fw-normal">Total de Fabricantes:</p>
                    <p className="fs-1 fw-bold">{getTotalManufacturers().manufacturersCount}</p>
                  </div>
                        
                  <div className="count-container bg-light-primary p-3 rounded">
                    <p className="fs-5 fw-normal">Total de Categorias:</p>
                    <p className="fs-1 fw-bold">{getTotalCategories().categoriesCount}</p>
                  </div>
                </div>
              </div>

              {/* Coluna de Patrimônios */}
              <div className="col-lg-3 col-md-5 col-sm-12 p-2">
                <div className="content-box bg-primary text-white p-3 rounded d-flex flex-column h-100">
                  <h3 className="text-center mb-3">Patrimônios</h3>
                        
                  <div className="count-container bg-light-primary p-3 mb-3 rounded">
                    <p className="fs-5 fw-normal">Total:</p>
                    <p className="fs-1 fw-bold">{getTotalPatrimonys()}</p>
                  </div>
                        
                  <div className="count-container bg-light-primary p-3 mb-3 rounded">
                    <p className="fs-5 fw-normal">Ativos:</p>
                    <p className="fs-1 fw-bold">{/* {getTotalActivePatrimonys().totalActivePatrimonys} */}</p>
                  </div>
                        
                  <div className="count-container bg-light-primary p-3 rounded">
                    <p className="fs-5 fw-normal">Inativos:</p>
                    <p className="fs-1 fw-bold">{/* {getTotalInactivePatrimonys().totalInactivePatrimonys} */}</p>
                  </div>
                </div>
              </div>

              {/* Coluna de Empréstimos */}
              <div className="col-lg-3 col-md-5 col-sm-12 p-2">
                <div className="content-box bg-primary text-white p-3 rounded d-flex flex-column h-100">
                  <h3 className="text-center mb-3">Empréstimos</h3>
                        
                  <div className="count-container bg-light-primary p-3 mb-3 rounded">
                      <p className="fs-5 fw-normal">Total:</p>
                      <p className="fs-1 fw-bold">{/* {getTotalLoans()} */}</p>
                  </div>
                        
                  <div className="count-container bg-light-primary p-3 mb-3 rounded">
                      <p className="fs-5 fw-normal">Ativos:</p>
                      <p className="fs-1 fw-bold">{/* {getTotalActiveLoans().totalActiveLoans} */}</p>
                  </div>
                        
                  <div className="count-container bg-light-primary p-3 rounded">
                      <p className="fs-5 fw-normal">Inativos:</p>
                      <p className="fs-1 fw-bold">{/* {getTotalInactiveLoans().totalInactiveLoans} */}</p>
                  </div>
              </div>
            </div>

            {/* Coluna de Pessoas */}
            <div className="col-lg-3 col-md-5 col-sm-12 p-2">
              <div className="content-box bg-primary text-white p-3 rounded d-flex flex-column h-100">
                  <h3 className="text-center mb-3">Pessoas</h3>     
                    <div className="count-container bg-light-primary p-3 mb-3 rounded">
                      <p className="fs-5 fw-normal">Total:</p>
                      <p className="fs-1 fw-bold">{getTotalPeople()}</p>
                    </div>
                  </div>
              </div>
            </div>
        </main>
      </div>
    </>
  );
};

export default Home;