Feature: Add a new exercise to a student

Scenario: Add a new exercise
    Given the student "leo" is registered
    When I assign the exercise "burpee" to "leo"
    Then "leo" should have the following exercise: 
    """
    ["burpee"]
    """