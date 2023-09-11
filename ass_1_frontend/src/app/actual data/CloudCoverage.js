class CloudCoverage extends WeatherData{
    constructor(time, place, value, type, unit, coverage) {
        super(time, place, value, type, unit);
        this.coverage = coverage;
    }

    getCoverage()
    {
        return this.coverage;
    }
    static createCoverage(time, place, value, type, unit, coverage)
    {
        return new CloudCoverage(time, place, value, type, unit, coverage);
    }
}