"use client"
import React from 'react';

import WeatherPageContainer from '@/components/WeatherPageContainer';
import {WeatherService} from "@/services/WeatherService";
import {defaultFetch} from "@/utils/fetchers";

function Page() {
    // Function to load the data from the API using different fetching methods
    const weatherService = WeatherService(defaultFetch);

    return (
        <>
            <WeatherPageContainer weatherService={weatherService}/>
        </>
    );
}

export default Page;