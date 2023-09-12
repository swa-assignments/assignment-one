// Function that returns an object with methods to get the formatted data from the API using factory functions
export const FormattedWeatherData = function ({type, time, place, value, unit}) {
  return {
    getType: () => type,
    getTime: () => time,
    getPlace: () => place,
    getValue: () => value,
    getUnit: () => unit,
    getDate: function () {
      return new Date(this.getTime());
    },
    getValueWithUnit: function () {
      return `${this.getValue()} ${this.getUnit()}`;
    },
    getFormattedDate: function () {
      return this.getDate().toLocaleDateString();
    },
    getFormattedTime: function () {
      return this.getDate().toLocaleString();
    },
  };
};
