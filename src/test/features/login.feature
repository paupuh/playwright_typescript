Feature: User Authentication tests

  @registration
  Scenario:
    Given User opens the login page
    When User clicks on the "Login" button
    Then User should be redirected to the login page
    Given User goes to the registration page
    Given User fills in field with correct details
    


