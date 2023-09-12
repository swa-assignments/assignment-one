import { FormattedWeatherData } from "../models/FormattedWeatherData.model";

// Service to fetch weather data implemented via JS factory functions
export const WeatherService = function (fetcher) {
    // process.env.BASE_URL is set in .env file and is not working properly for some reason
    const BASE_URL="http://localhost:8080"

    return {
        getDataByCity: async (place) => {
            return await fetcher(`${BASE_URL}/data/${place}`)
                .then((data) => data.map(FormattedWeatherData)
            );
        }
    };
};
