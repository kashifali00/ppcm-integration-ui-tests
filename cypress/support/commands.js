// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// login to hdsupply portal programatically
Cypress.Commands.add("login", () => {
    cy.visit("https://login.microsoftonline.com", () => {
        cy.get("input[type=email").type("kashif.ali@hdsupply.com")
    })
    
})

// Get EAF TOKEN custom command

Cypress.Commands.add("getEafToken", () => {
    cy.log("running GetEafToken method")
    cy.log(`calling token endpoint at ${Cypress.env('eafUrl')}`)
    cy.request({
        method: 'POST',
        url: Cypress.env('eafURL'),
        form: true,
        body: {
            "client_id": Cypress.env('eafClientId'),
            "client_secret": Cypress.env('eafClientSecret'),
            "grant_type": Cypress.env("eafGrantType"),
            "scope": Cypress.env('eafScope')
        }
        }).then(Response => {
            expect(Response.status).to.equal(200)
            expect(Response.body.access_token).not.to.be.null
            return Response.body.access_token
        })

})

// Get Azzure Token custom command

Cypress.Commands.add("getAzzureToken", () => {

    cy.log("running GetAzzureToken method")
    cy.log(`calling token endpoint at ${Cypress.env('azureUrl')}`)
    cy.request({
        method: 'POST',
        url: Cypress.env('azureUrl'),
        form: true,
        headers: {
            "Authorization": "Basic NjFmODkxMGYtOGE1Ny00MTNjLTk5ODYtNDlkODA2ZjJlODE4OkZMWDdRfmxUYnRWVGdrcUJMVS5SNGdxTENvOWhBREV+LklNV1Q=",
            "Cookie": "fpc=AhyTH7VGCeVGprVd0a9vvJHRIfNiAQAAADuM8tkOAAAA"
        },
        
        body: {
            "grant_type": Cypress.env('azzureGrantType'),
            "scope": Cypress.env('azzureScope')
        }
        }).then(Response => {
            // expect(Response.status).to.equal(200)
            // expect(Response.body.access_token).not.to.be.null
            // return Response.body.access_token
            return Response.body
        })

        // Login to ppcm portal

        Cypress.Commands.add("login", (token) => {
            window.sessionStorage.setItem("oidc.user:https://frameworkidentity.uatcloud.interlinebrands.com/:ppcm",JSON.stringify(token))

        })

})




