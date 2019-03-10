Feature: Login/logout in SPORK
  In order to work with SPORK
  As an admin
  I want to be able to login and logout

  Background:
    Given I open login page
    Given I enter username "atbela123@gmail.com"
    And I enter password "abcdef"
    When I login
    Then I should see name "Joe Autotest" in user menu 

  Scenario: Login

  Scenario: Logout
    When I logout from "Joe Autotest"
    Then I should see login screen 