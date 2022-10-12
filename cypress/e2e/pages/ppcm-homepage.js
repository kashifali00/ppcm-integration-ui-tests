export class PPCM_HomePage{
    get accounts_transaction() {
        return cy.get("button[class='mat-focus-indicator mat-button mat-button-base active-nav'] span[class='nav-text']")
    }

    get lookup_account_number() {
        return cy.get("#mat-input-0")
    }

    get lookup_account_number_inner_text() {
        return cy.get("mat-label[class='ng-tns-c111-1 ng-star-inserted']")
    }

    get lookup_card() {
        return cy.get("#mat-input-1")
    }

    get lookup_account_number_search_icon() {
        return cy.get("form[id='account-lookup'] button mat-icon[role='img']")
    }

    get lookup_card_inner_text() {
        return cy.get("mat-label[class='ng-tns-c111-2 ng-star-inserted']")
    }

    get lookup_card_search_icon() {
        return cy.get("form[id='card-lookup'] button")
    }


}