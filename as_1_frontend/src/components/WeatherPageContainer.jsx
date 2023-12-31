"use client";

import React, {useEffect, useState} from 'react';
import Header from "@/components/Header";
import SelectLocation from "@/components/SelectLocation";

import { FORECAST_TYPE, LOCATIONS, UNITS } from "../utils/constants";
import {Weather} from "@/models/Weather.model";

function WeatherPageContainer({weatherService}) {
    // Set the city location to Aarhus by default
    const [location, setLocation] = useState(LOCATIONS[0]);
    // Store the measurements for the selected location
    const [forecastData, setForecastData] = useState([]);

    // Store the measurements for the selected location
    const [measurements, setMeasurements] = useState({
        latestMeasurement: [],
        minimumTemperature: null,
        maximumTemperature: null,
        totalPrecipitation: null,
        averageWindSpeed: null,
    });

    async function handleLoadData() {
        const [data, forecastData] = await Promise.all([
            weatherService.getDataByCity(location),
            weatherService.getForecast(location)
        ]);

        const weatherModal =
            Weather(data);

        setMeasurements({
            latestMeasurement: weatherModal.getLatestMeasurements(),
            minimumTemperature: weatherModal.getMinimumTemperatureForToday(),
            maximumTemperature: weatherModal.getMaximumTemperatureForToday(),
            totalPrecipitation: weatherModal.getTotalPrecipitation(),
            averageWindSpeed: weatherModal.getAverageWindSpeed(),
        });
        setForecastData(forecastData);
    }

    // Load the data when the location changes
    useEffect(() => {
        handleLoadData().then();
    }, [location]);

    // Will change the location to the selected one
    function handleChangeLocation(location) {
        setLocation(location);
    }

    return (
        <div>
            <Header />

            <SelectLocation value={location} onChange={handleChangeLocation}/>

            <h2>The hourly forecast for the next 24 hours</h2>
            <table>
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Forecast</th>
                </tr>
                </thead>

                <tbody>
                 {forecastData.map((forecast, index) => (
                    <tr key={index}>
                        <td>{forecast.getFormattedTime()}</td>
                      <td>{forecast.getType()}</td>
                        <td>{forecast.getForecast()}</td>
                    </tr>
                ))} 
                </tbody>
            </table>

            <h2>All data for the latest measurement of each kind</h2>
            <table>
                <thead>
                <tr>
                    <th>Measurement</th>
                    <th>Data</th>
                </tr>
                </thead>

                <tbody>
                {measurements.latestMeasurement.map((item, index) => (
                    <tr key={index}>
                        <td>{item.getType()}</td>
                        <td>{item.getValueWithUnit()}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>About last day</h2>
            <table>
                <thead>
                <tr>
                    <th>Minimum temperature ({UNITS[FORECAST_TYPE.TEMPERATURE]})</th>
                    <th>Maximum temperature ({UNITS[FORECAST_TYPE.TEMPERATURE]})</th>
                    <th>Total precipitation ({UNITS[FORECAST_TYPE.PRECIPITATION]})</th>
                    <th>Average wind speed ({UNITS[FORECAST_TYPE.WIND_SPEED]})</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{measurements.minimumTemperature}</td>
                    <td>{measurements.maximumTemperature}</td>
                    <td>{measurements.totalPrecipitation}</td>
                    <td>{measurements.averageWindSpeed}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WeatherPageContainer;