@paragraphRegister-feature
Feature: See first paragraph in /register
  Display the paragraph

  @paragraphRegister-scenario
  Scenario: Register Page
    Given I am on the register page
    When I do nothing
    Then I should see the first paragraph

