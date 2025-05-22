// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 6, 2025
// This file contains the JS functions for index.html

"use strict"

async function getWeather() {

  try {
    const weatherJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonWeatherData = await weatherJSON.json()
    const weatherIcon = jsonWeatherData.weather[0].icon
    const kelvinTemperature = jsonWeatherData.main.temp
    const celsuisTemperature = kelvinTemperature - 273.15
    const celsuisTemperatureRounded = Math.round(celsuisTemperature)

    // output
    document.getElementById("weather").innerHTML = "<p> The current temperature is " + celsuisTemperatureRounded + " °C.</p>"
    document.getElementById("image").innerHTML = "<div> weatherIcon <div/>"
  } catch (error) {
    <p> The weather information source is not working at this moment. </p>
  }
}