@paragraphRegister2-feature
Feature: See second paragraph in /register
  Display the paragraph

  @paragraphRegister2-scenario
  Scenario: Register Page
    Given I am on the register page
    When I do nothing
    Then I should see the second paragraph

