Feature: PPCM HomePage functionality

    Account & Transaction

    Background: common step for each scenarios
    Given User is on homepage

    Scenario: verify Look Up Account Number is visible on homepage   
    Then User should be able to see Look Up Account Number

    Scenario: verify that Look Up Card by xref is visible on homepage
    Then User should be able to see Look Up Card by xref search field

    Scenario: verify that Card Xref Number inner text for Card lookup field is visible
    Then User should be able to see Card Lookup inner text Card Xref Number

    Scenario: verify that search icon is present for field Card Lookup with Xref number
    Then User should be able to see search icon
