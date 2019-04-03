@loginTitle-feature
Feature: Go to the login
  Display the title

  @loginTitle-scenario
  Scenario: Login Page
    Given I am on the login page
    When I do nothing
    Then I should see the login title
