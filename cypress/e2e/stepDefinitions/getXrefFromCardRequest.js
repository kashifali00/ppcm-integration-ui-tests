import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
const cardRequst = require("../../fixtures/cardRequestPostSubmitted.json")

var access_token = ""
var response;

//get EAF token before running the tests
beforeEach("Get token", () => {
    cy.getEafToken().then(token => {
        access_token = token
        
    })

})

Given("user has the valid token to make card request api call", () => {
    expect(access_token).not.to.be.null

})

When("user hit card-request-svc-card-request endpoint", () => {

    cy.request({
        method: "POST",
        url: `/${Cypress.env("test-env")}/card-request-svc/card-request`,
        headers: {
            "Authorization": `Bearer ${access_token}`,

        },
        body: cardRequst
    }).then(Response => {
        cy.log(Response)
        response = Response
        

    })
})

Then("reponse should be OK 200", () => {
    expect(response.status).to.equal(201)
    expect(response.body[0].xref).not.to.be.null
    expect(response.body[0].accountNum).to.equal(cardRequst.accountNum)
    expect(response.body[0].cardHolderFirstName).to.equal(cardRequst.cardDetails[0].cardHolderFirstName)
    expect(response.body[0].cardHolderLastName).to.equal(cardRequst.cardDetails[0].cardHolderLastName)
    expect(response.body[0].cardId).not.to.null
    expect(response.body[0].cardStatus).to.equal("active")

})


