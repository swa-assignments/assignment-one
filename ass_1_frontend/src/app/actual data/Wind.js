class Wind extends WeatherData {
    constructor(time, place, value, type, unit, direction, speedMPH, speedSec) {
        super(time, place, value, type, unit);
        this.direction = direction;
        this.speedMPH = speedMPH;
        this.speedSec = speedSec;
    }

    getDirection() {
        return this.direction;
    }

    convertToMPH() {
        return  3600 / (this.speedSec * 1609.344);
    }

    convertToMPS()
    {
        return this.speedMPH * 0.44704;
    }
    static createWind(time, place, value, type, unit, direction, speedMPH, speedSec) {
        return new Wind(time, place, value, type, unit, direction, speedMPH, speedSec);
    }
}