Feature: Is the given student registered?

Scenario: Studend is registered
    Given "leo" is registered
    When I consult "leo"'s data
    Then I should receive "leo"