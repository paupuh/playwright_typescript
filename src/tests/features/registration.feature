Feature: User Authentication tests

  @registration
  Scenario:
    Given User opens the login page
    When User clicks on the Login button
    Then User should be redirected to the login page

    Given User goes to the registration page
    When User clicks the First name field
    Then User fills in the First name field with correct values and values are visible

    When User clicks the Last name field
    Then User fills in the Last name field with correct values and values are visible

    When User clicks the Password field
    Then User fills in the Password field with correct values and values are visible

    When User clicks the Confirm Password field 
    Then User fills in the Confirm Password field with correct values and values are visible

    When User selects the Gender checkbox as a Male
    Then User's Gender selected and visible

    When User clicks the Register button
    Then User redirected to the login page and registered successfully
    


