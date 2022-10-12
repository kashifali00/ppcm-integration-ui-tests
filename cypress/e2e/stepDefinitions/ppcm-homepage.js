import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import {PPCM_HomePage} from "../pages/ppcm-homepage"

const homepage = new PPCM_HomePage()


beforeEach("Get login to ppcm portal through programtically", () => {

    // login to ppcm portal
    cy.getAzzureToken().then(token => {
            cy.login(token)

    })   
    
})

Given("User is on homepage", () => {
    cy.visit(`/${Cypress.env("test-env")}/portal/accounts`)

})

Then("User should be able to see Look Up Account Number", () => {
    homepage.lookup_account_number.should('be.visible')
    homepage.lookup_account_number_inner_text.should('have.text', "Account Number")

})

Then("User should be able to see Look Up Card by xref search field", () => {
    homepage.lookup_card.should('be.visible')
})

Then("User should be able to see Card Lookup inner text Card Xref Number", () => {
    homepage.lookup_card_inner_text.should('have.text', "Card Xref Number")
})

Then("User should be able to see search icon", () => {
    homepage.lookup_card_search_icon.should('be.visible')
})

