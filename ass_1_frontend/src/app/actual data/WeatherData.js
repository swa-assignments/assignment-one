class WeatherData extends Events {
    constructor(time, place, value, type, unit) {
        super(time, place);
        this.value = value;
        this.type = type;
        this.unit = unit;
    }

    getValue() {
        return this.value;
    }

    getType() {
        return this.type;
    }

    getUnit() {
        return this.unit;
    }

    static createWeatherDate(time, place, value, type, unit) {
        return new WeatherData(time, place, value, type, unit);
    }
}