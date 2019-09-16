Feature: List all students of the day

Scenario: Studends for today
    Given today is "monday"
    Given this is the cronogram of the week
    """
        {
            "monday": [
                "leo",
                "aline"
            ],
            "friday": [
                "john"
            ]
        }
    """
    When I list all the students of today
    Then I should receive
    """
    ["leo", "aline"]
    """