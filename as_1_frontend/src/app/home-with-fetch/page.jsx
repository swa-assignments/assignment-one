"use client"
import React, {useEffect, useState} from 'react';

import WeatherPageContainer from '@/components/WeatherPageContainer';

import {Weather} from "@/models/Weather.model";
import {WeatherService} from "@/services/WeatherService";
import {defaultFetch} from "@/utils/fetchers";
import {LOCATIONS} from "@/utils/constants";

function Page() {
    const [measurements, setMeasurements] = useState({
        latestMeasurement: [],
        minimumTemperature: null,
        maximumTemperature: null,
        totalPrecipitation: null,
        averageWindSpeed: null,
    });

    // Function to load the data from the API using different fetching methods
    const weatherService = WeatherService(defaultFetch);

    async function handleLoadData() {
        const [data] = await Promise.all([
            weatherService.getDataByCity(LOCATIONS[0])
        ]);

        // console.log(data)

        const weatherModal =
            Weather(data);

        // console.log(weatherModal._getLastDayData())

        setMeasurements({
            latestMeasurement: weatherModal.getLatestMeasurements(),
            minimumTemperature: weatherModal.getMinimumTemperatureForToday(),
            maximumTemperature: weatherModal.getMaximumTemperatureForToday(),
            totalPrecipitation: weatherModal.getTotalPrecipitation(),
            averageWindSpeed: weatherModal.getAverageWindSpeed(),
        });
    }

    useEffect(() => {
        handleLoadData();
    }, []);

    return (
        <>
            <WeatherPageContainer
                latestMeasurement={measurements.latestMeasurement}
            />
        </>
    );
}

export default Page;