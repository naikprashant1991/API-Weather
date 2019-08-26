$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Automation Projects 1/APIWeather/src/main/java/com/qa/features/APIWeather.feature");
formatter.feature({
  "line": 1,
  "name": "API Weather Map functionality tests",
  "description": "",
  "id": "api-weather-map-functionality-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "API Weather Map sign up functionality",
  "description": "",
  "id": "api-weather-map-functionality-tests;api-weather-map-sign-up-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User opens a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Sign In screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Weather link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should be on weather forecast page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters cityname in your city name field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "System should display correct weather information",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "api-weather-map-functionality-tests;api-weather-map-sign-up-functionality;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 20,
      "id": "api-weather-map-functionality-tests;api-weather-map-sign-up-functionality;;1"
    },
    {
      "cells": [
        "naik.prashant1991@yahoo.com",
        "WeatherMap@123"
      ],
      "line": 21,
      "id": "api-weather-map-functionality-tests;api-weather-map-sign-up-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "API Weather Map sign up functionality",
  "description": "",
  "id": "api-weather-map-functionality-tests;api-weather-map-sign-up-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User opens a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Sign In screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters \"naik.prashant1991@yahoo.com\" and \"WeatherMap@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Weather link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should be on weather forecast page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters cityname in your city name field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "System should display correct weather information",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_opens_a_browser()"
});
formatter.result({
  "duration": 12412104541,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_is_on_home_screen()"
});
formatter.result({
  "duration": 179728054,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_clicks_on_sign_In_link()"
});
formatter.result({
  "duration": 4091051737,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.sign_In_screen_is_displayed()"
});
formatter.result({
  "duration": 10773961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naik.prashant1991@yahoo.com",
      "offset": 13
    },
    {
      "val": "WeatherMap@123",
      "offset": 47
    }
  ],
  "location": "stepDefinitions.user_enters_and(String,String)"
});
formatter.result({
  "duration": 297580242,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_on_Submit_button()"
});
formatter.result({
  "duration": 6296915156,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_logged_into_the_application()"
});
formatter.result({
  "duration": 130017079,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_clicks_on_Weather_link()"
});
formatter.result({
  "duration": 6708567276,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_on_weather_forecast_page()"
});
formatter.result({
  "duration": 17874356,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_enters_cityname_in_your_city_name_field()"
});
formatter.result({
  "duration": 159716805,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_on_search_button()"
});
formatter.result({
  "duration": 3717577532,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.system_should_display_correct_weather_information()"
});
formatter.result({
  "duration": 112156681,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Mumbai], IN\u003e but was:\u003c[Kolkata], IN\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.qa.stepDefinitions.stepDefinitions.system_should_display_correct_weather_information(stepDefinitions.java:113)\r\n\tat ✽.Then System should display correct weather information(F:/Automation Projects 1/APIWeather/src/main/java/com/qa/features/APIWeather.feature:16)\r\n",
  "status": "failed"
});
});