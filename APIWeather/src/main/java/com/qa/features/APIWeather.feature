Feature: API Weather Map functionality tests

@tag
Scenario Outline: API Weather Map sign up functionality
Given User opens a browser
And User is on home screen
When User clicks on sign In link
Then Sign In screen is displayed
When User enters "<Email>" and "<Password>"
And click on Submit button
Then User should be logged into the application
When User clicks on Weather link
Then User should be on weather forecast page
When User enters cityname in your city name field
And Click on search button
Then System should display correct weather information


Examples:
| Email | Password |
|naik.prashant1991@yahoo.com|WeatherMap@123|


Scenario Outline: API Weather Map sign up functionality
Given User opens a browser
And User is on home screen
When User clicks on sign In link
Then Sign In screen is displayed
When User enters "<Email>" and "<Password>"
Then click on Submit button
And Error message should be displayed
Examples:
| Email | Password |
|test@yahoo.com|test@123|
