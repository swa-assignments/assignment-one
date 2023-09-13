"use client"
import React from 'react';

import WeatherPageContainer from '@/components/WeatherPageContainer';
import {WeatherService} from "@/services/WeatherService";
import {xmlFetcher} from "@/utils/fetchers";

function Page() {
    const weatherService = WeatherService(xmlFetcher);

    return (
        <>
            <WeatherPageContainer weatherService={weatherService}/>
        </>
    );
}

export default Page;