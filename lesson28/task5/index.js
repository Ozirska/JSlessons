const shmoment = (initValue) => {
  const dateInit = initValue;
  let result = new Date(dateInit);

  const calculator = {
    add(name, value) {
      if (name === "years") {
        result = new Date(result.setFullYear(result.getFullYear() + value));
        return this;
      }
      if (name === "months") {
        result = new Date(result.setMonth(result.getMonth() + value));
        return this;
      }
      if (name === "days") {
        result = new Date(result.setDate(result.getDate() + value));
        return this;
      }
      if (name === "hours") {
        result = new Date(result.setHours(result.getHours() + value));
        return this;
      }
      if (name === "minutes") {
        result = new Date(result.setMinutes(result.getMinutes() + value));
        return this;
      }
      if (name === "seconds") {
        result = new Date(result.setSeconds(result.getSeconds() + value));
        return this;
      }
      if (name === "milliseconds") {
        result = new Date(
          result.setMilliseconds(result.getMilliseconds() + value)
        );
        return this;
      }
      return this;
    },

    subtract(name, value) {
      if (name === "years") {
        result = new Date(result.setFullYear(result.getFullYear() - value));
        return this;
      }
      if (name === "months") {
        result = new Date(result.setMonth(result.getMonth() - value));
        return this;
      }
      if (name === "days") {
        result = new Date(result.setDate(result.getDate() - value));
        return this;
      }
      if (name === "hours") {
        result = new Date(result.setHours(result.getHours() - value));
        return this;
      }
      if (name === "minutes") {
        result = new Date(result.setMinutes(result.getMinutes() - value));
        return this;
      }
      if (name === "seconds") {
        result = new Date(result.setSeconds(result.getSeconds() - value));
        return this;
      }
      if (name === "milliseconds") {
        result = new Date(
          result.setMilliseconds(result.getMilliseconds() - value)
        );
        return this;
      }
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

const result = shmoment(new Date())
  .add("milliseconds", 3)
  .subtract("years", 1)
  .add("days", 8)
  .result();
