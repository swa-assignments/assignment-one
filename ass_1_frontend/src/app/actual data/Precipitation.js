class Precipitation extends WeatherData{
    constructor(time, place, value, type, unit, precipitationInInches, precipitationInMM ) {
        super(time, place, value, type, unit);
        this.precipitationInInches = precipitationInInches;
        this.precipitationInMM = precipitationInMM;
    }

    getPrecipitationType()
    {
        return this.type;
    }

    convertToInches() {
        let precipitation = this.precipitationInMM * 25.4;
        return precipitation;
    }

    convertToMM() {
        let precipitation = this.precipitationInMM / 25.4;
        return precipitation;
    }

    static createPrecipitation(time, place, value, type, unit, precipitationInInches, precipitationInMM) {
        return new Precipitation(time, place, value, type, unit, precipitationInInches, precipitationInMM);
    }
}