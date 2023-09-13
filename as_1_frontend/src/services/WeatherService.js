import { FormattedWeatherData } from "../models/FormattedWeatherData.model";
import { WeatherForecast } from "../models/WeatherForecast";

// Service to fetch weather data implemented via JS factory functions
export const WeatherService = function (fetcher) {
    // process.env.BASE_URL is set in .env file and is not working properly for some reason
    const BASE_URL="http://localhost:8080"

    return {
        getDataByCity: async (place) => {
            return await fetcher(`${BASE_URL}/data/${place}`)
                .then((data) => data.map(FormattedWeatherData)
            );
        },
        getForecast: async (place) => {
            return fetcher(`${BASE_URL}/forecast/${place}`).then((data) =>
              data.map(WeatherForecast)
            );
          },
        sendData: async (data) => {
            return fetch(`${BASE_URL}/data`, {
              method: "POST",
              body: JSON.stringify(data),
              headers: new Headers({ "content-type": "application/json" }),
            });
          },
    };
};
