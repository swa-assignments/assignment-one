"use client";

import React, {useState} from 'react';
import Header from "@/components/Header";
import SelectLocation from "@/components/SelectLocation";

import { FORECAST_TYPE, LOCATIONS, UNITS } from "../utils/constants";

function WeatherPageContainer({latestMeasurement}) {
    // Set the city location to Aarhus by default
    const [location, setLocation] = useState("Aarhus");
    // Store the measurements for the selected location
    const [forecastData, setForecastData] = useState([]);

    // Store the measurements for the selected location
    // const [measurements, setMeasurements] = useState({
    //     latestMeasurement: [],
    //     minimumTemperature: null,
    //     maximumTemperature: null,
    //     totalPrecipitation: null,
    //     averageWindSpeed: null,
    // });

    // Will change the location to the selected one
    function handleChangeLocation(location) {
        setLocation(location);
    }


    return (
        <div>
            <Header />

            <SelectLocation value={location} onChange={handleChangeLocation}/>

            <hr />
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
                <tr>
                    <td>asdas</td>
                    <td>asdas</td>
                    <td>asdas</td>
                </tr>
                {/*{forecastData.map((forecast, index) => (*/}
                {/*    <tr key={index}>*/}
                {/*        <td>{forecast.getFormattedTime()}</td>*/}
                {/*        <td>{forecast.getType()}</td>*/}
                {/*        <td>{forecast.getForecast()}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
            </table>

            <hr />

            <h2>All data for the latest measurement of each kind</h2>
            <table>
                <thead>
                <tr>
                    <th>Measurement</th>
                    <th>Data</th>
                </tr>
                </thead>

                <tbody>
                {latestMeasurement.map((item, index) => (
                    <tr key={index}>
                        <td>{item.getType()}</td>
                        <td>{item.getValueWithUnit()}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <hr />

            <h2>About last day</h2>
            <table>
                <thead>
                <tr>
                    <th>Minimum temperature: Celsius</th>
                    <th>Maximum temperature: Celsius</th>
                    <th>Maximum temperature: Celsius</th>
                </tr>
                {/*<tr>*/}
                {/*    <th>Minimum temperature ({UNITS[FORECAST_TYPE.TEMPERATURE]})</th>*/}
                {/*    <th>Maximum temperature ({UNITS[FORECAST_TYPE.TEMPERATURE]})</th>*/}
                {/*    <th>Total precipitation ({UNITS[FORECAST_TYPE.PRECIPITATION]})</th>*/}
                {/*    <th>Average wind speed ({UNITS[FORECAST_TYPE.WIND_SPEED]})</th>*/}
                {/*</tr>*/}
                </thead>

                <tbody>
                <tr>
                    <td>20C</td>
                    <td>40C</td>
                    <td>222</td>
                    <td>22 Km/H</td>
                </tr>
                {/*<tr>*/}
                {/*    <td>{measurements.minimumTemperature}</td>*/}
                {/*    <td>{measurements.maximumTemperature}</td>*/}
                {/*    <td>{measurements.totalPrecipitation}</td>*/}
                {/*    <td>{measurements.averageWindSpeed}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>{measurements.minimumTemperature}</td>*/}
                {/*    <td>{measurements.maximumTemperature}</td>*/}
                {/*    <td>{measurements.totalPrecipitation}</td>*/}
                {/*    <td>{measurements.averageWindSpeed}</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </div>
    );
}

export default WeatherPageContainer;