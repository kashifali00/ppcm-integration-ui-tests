Feature: New card request API 

    As a hdsupply portal admin user, request a new card for user, so to make an order

Scenario: Verify that user is able to create new card xref

Given user has the valid token to make card request api call
When  user hit card-request-svc-card-request endpoint
Then  reponse should be OK 200