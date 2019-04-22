@sendingMessage-feature
Feature: Create a chat
  Send a message

  @sendingMessage-scenario
  Scenario: Chat Page
    Given I am on the chat page
    When I click on create a new chat
    Then I click on new chat
    Then I write a message
    Then It should happen anything
