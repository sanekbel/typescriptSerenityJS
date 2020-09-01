Feature: Onliner feature

    Just want to check my typescript+serenityjs knowledges

Scenario: Open onliner and check iframe
    Given I navigate to onliner page
    And onliner iframe is loaded
    When I click on Catalog button in iframe
    Then I am on Catalog page