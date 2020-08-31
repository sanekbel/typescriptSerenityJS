Feature: My first feature

    Just want to check my typescript+serenityjs knowledges

Scenario: Open site
    Given I navigate to habr page
    And I am on habr page
    When  I click on Development button
    Then I am on Development page

# Scenario: Find an element with text
#     Given I navigate to 'site' page
#     When I find an 'element' element
#     Then that element has 'text' text

# Scenario: Check dropdown
#     Given I navigate to 'site' site
#     When I find an 'element' dropdown element
#     And I choose 'field' field
#     Then the 'field' field is choosen