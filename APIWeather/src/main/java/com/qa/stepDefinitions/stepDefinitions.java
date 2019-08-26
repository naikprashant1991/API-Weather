package com.qa.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class stepDefinitions {

	WebDriver driver;
	
	@Given("^User opens a browser$")
	public void user_opens_a_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://openweathermap.org/");
	}

	@Given("^User is on home screen$")
	public void user_is_on_home_screen() throws Throwable {
	  String title = driver.getTitle();
	  Assert.assertEquals("Сurrent weather and forecast - OpenWeatherMap", title);
	  
	  WebElement logo = driver.findElement(By.xpath("//img[@class='img-responsive']"));
	  boolean flag = logo.isDisplayed();
	  Assert.assertTrue(flag);
	}

	@When("^User clicks on sign In link$")
	public void user_clicks_on_sign_In_link() throws Throwable {
	    WebElement SignInLink = driver.findElement(By.xpath("//*[contains(text(),' Sign In')]"));
	    SignInLink.click();
	}

	@Then("^Sign In screen is displayed$")
	public void sign_In_screen_is_displayed() throws Throwable {
	    String title = driver.getTitle();
	    Assert.assertEquals("Members", title);
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String Email, String Password) throws Throwable {
	  WebElement EmailId = driver.findElement(By.id("user_email"));
	  WebElement pwd = driver.findElement(By.id("user_password"));
	 
	  EmailId.sendKeys(Email);
	  pwd.sendKeys(Password);
	   
	}

	@When("^click on Submit button$")
	public void click_on_Submit_button() throws Throwable {
		 WebElement submitBtn = driver.findElement(By.xpath("//input[@type='submit']")); 
		submitBtn.click();
	}

	@Then("^User should be logged into the application$")
	public void user_should_be_logged_into_the_application() throws Throwable {
	    WebElement UserLabel = driver.findElement(By.xpath("//*[contains(text(),'Hello')]"));
	    boolean flag = UserLabel.isDisplayed();
	    Assert.assertTrue(flag);
	}
	//Scenario 2//
	@Then("^Error message should be displayed$")
	public void error_message_should_be_displayed() throws Throwable {
	  WebElement ErrorMsg =   driver.findElement(By.xpath("//div[contains(text(),'Invalid Email or password.')]"));
	  String error = ErrorMsg.getText();
	  Assert.assertEquals("Invalid Email or password.", error);
	}
	
	@When("^User clicks on Weather link$")
	public void user_clicks_on_Weather_link() throws Throwable {
	  driver.findElement(By.linkText("Weather")).click();
	
	}

	@Then("^User should be on weather forecast page$")
	public void user_should_be_on_weather_forecast_page() throws Throwable {
		  String title = driver.getTitle();
		  Assert.assertEquals("Weather forecast - OpenWeatherMap", title);
	}
	
	@When("^User enters cityname in your city name field$")
	public void user_enters_cityname_in_your_city_name_field() throws Throwable {
	 WebElement cityName =  driver.findElement(By.xpath("//div[@class='form-group search-cities__block']//input[@id='q']"));
	 cityName.sendKeys("Kolkata");
	}

	@When("^Click on search button$")
	public void click_on_search_button() throws Throwable {
	   driver.findElement(By.xpath("//button[@class='btn btn-orange']")).click();
	}

	@Then("^System should display correct weather information$")
	public void system_should_display_correct_weather_information() throws Throwable {
	 String title = driver.getTitle();
	 Assert.assertEquals("Find - OpenWeatherMap", title);
	 
	 WebElement WeatherCity = driver.findElement(By.xpath("//a[contains(text(),'IN')]"));
	 String wthrCity = WeatherCity.getText();
	 Assert.assertEquals("Mumbai, IN", wthrCity);
	}


}
