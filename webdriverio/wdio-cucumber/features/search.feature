@search
Feature: Search Feature
  As a customer
  I want to search for products
  So that I can add the desired products to basket

  @high
  Scenario: Anonymous search for a product
    Given I am on home page
    When I search for "apples"
    Then I should see results for "apples"
