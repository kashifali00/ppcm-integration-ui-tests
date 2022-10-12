import {Given} from "@badeball/cypress-cucumber-preprocessor"

import {TransactionHat} from "../helpers/TransactionHat.js"

const hatObj = new TransactionHat()

beforeEach("running before", () => {
    cy.log("kashifali")
    cy.log(hatObj.transactionDateTime)
    cy.log(hatObj.storeNumber)
    cy.log(hatObj.registerNumber)
    cy.log(hatObj.transactionNumber)
})


Given("generate random hat", () => {
   cy.log("kashifali")
   
})