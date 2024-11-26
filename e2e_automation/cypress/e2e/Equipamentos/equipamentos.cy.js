/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Equipamentos', () => {
    const username = 'daniel'
    const password = '123'
    const model = Cypress._.uniqueId()
    const modelUpdated = Cypress._.uniqueId()
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/')
      cy.get('#username').type(username)
      cy.get('#passwordUser').type(password)
      cy.get('#login').click()
      cy.get('#EquipamentosLink').click()
    })
  
    it('Cadastro de Equipamento com Sucesso', () => {
        cy.get('#AddItem', { timeout: 10000 }).should('be.visible').click()
        cy.get('#model').type(model)
        cy.get('#serialNumber').type(Cypress._.uniqueId())
        cy.get('#manufacturer').type('SpaceX')
        cy.get('#categoryId').select('Muleta')
        cy.get('#save').click()
        cy.get('#refuseDialog', { timeout: 10000 }).should('be.visible').click()
        cy.get('#search', { timeout: 5000 }).should('be.visible').type(model)
        cy.xpath(`//table[@id='table-data']//tr/td[text()='${model}']`, { timeout: 10000 }).should('be.visible')
    })

    it('Editar Equipamento com Sucesso', () => {
        cy.get('#search', { timeout: 5000 }).should('be.visible').type(model)
        cy.xpath(`//table[@id='table-data']//tr[contains(., '${model}')]//button[text()='Visualizar']`, { timeout: 10000 }).click()
        cy.get('#enabledEdit').click()
        cy.get('#model').clear().type(modelUpdated)
        cy.get('#serialNumber').clear().type(Cypress._.uniqueId())
        cy.get('#manufacturer').clear().type('Hyundai')
        cy.xpath("//button[text()='Atualizar']").click()
        cy.get('#search', { timeout: 5000 }).should('be.visible').clear().type(modelUpdated)
        cy.xpath(`//table[@id='table-data']//tr/td[text()='${modelUpdated}']`, { timeout: 10000 }).should('be.visible')
    })

    it('Desativar Equipamento com Sucesso', () => {
        cy.get('#search', { timeout: 5000 }).should('be.visible').type(modelUpdated)
        cy.xpath(`//table[@id='table-data']//tr[contains(., '${modelUpdated}')]//button[text()='Desativar']`, { timeout: 10000 }).click()
        cy.xpath(`//table[@id='table-data']//tr[contains(., '${modelUpdated}')]//span[text()='Inativo']`, { timeout: 10000 }).should('be.visible')
    })
})
  