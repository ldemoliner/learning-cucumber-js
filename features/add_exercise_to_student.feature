Feature: Add a new exercise to a student

Scenario: Add a new exercise
    Given the student "leo" is registered
    When I associate the exercise "burpee"
    Then "leo" should have the following exercise: 
    """
    ["burpee"]
    """