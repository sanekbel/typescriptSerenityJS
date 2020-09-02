Feature: Onliner feature

    Just want to check my typescript+serenityjs knowledges

# Scenario: Open onliner and check iframe
#     Given I navigate to onliner page
#     And onliner iframe is loaded
#     When I click on Catalog button in iframe
#     Then I am on Catalog page

# Scenario: Open onliner and check dropdown
#     Given I navigate to onliner page
#     And onliner car dropdown is loaded
#     When I check "Acura" car from dropdown
#     Then dropdown has "Acura" text

Scenario: Open onliner catalog and check checkbox
    Given I navigate to onliner catalog page
    And onliner mobile catalog is loaded
    When I check "Xiaomi" checkbox
    Then Xiaomi filter is selected