package com.qa.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		tags= {"@tag"},
		features = "F:\\Automation Projects 1\\APIWeather\\src\\main\\java\\com\\qa\\features\\APIWeather.feature"
		,glue={"com\\qa\\stepDefinitions"},
		plugin= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		dryRun=false,
		monochrome=true
	
		)
public class TestRunner {

}
