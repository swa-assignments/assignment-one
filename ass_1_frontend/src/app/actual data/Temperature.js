class Temperature extends WeatherData {
    constructor(time, place, value, type, unit, temperatureInFahrenheit, temperatureInCelcius)
    {
        super(time, place, value, type, unit);
        this.temperatureInCelcius = temperatureInCelcius;
        this.temperatureInFahrenheit = temperatureInFahrenheit;
    }

    convertToFahrenheit() {
        let  temperature = this.temperatureInCelcius* 9/5 +32;
         return temperature;
    }

    convertToCelcius()
    {
        let  temperature = (this.temperatureInFahrenheit - 32) * 5/9;
         return temperature;
    }
    static createTemperature(time, place, value, type, unit, temperatureInFahrenheit, temperatureInCelsius) {
        return new Temperature(time, place, value, type, unit, temperatureInFahrenheit, temperatureInCelsius);
      }
}