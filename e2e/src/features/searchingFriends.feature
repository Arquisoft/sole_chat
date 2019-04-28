@searchFriends-feature
Feature: Writing friend's name
  Clicking on search

  @searchFriends-scenario
  Scenario: Chat Page
    Given I am on the chat page
    When I click on create a new chat
    Then I click on new friend button
    Then I click on new friend field
    Then I introduce my friend's WebId
    Then It should happen anything