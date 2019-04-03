@cardTitle-feature
Feature: See card title
  Display the card title

  @cardTitle-scenario
  Scenario: Card Page
    Given I am on the card page
    When I do nothing
    Then I should see the card title
