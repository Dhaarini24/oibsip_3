function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unit = document.getElementById("unitSelector").value;
    let result;

    if (isNaN(inputTemperature)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        result = (inputTemperature * 9/5) + 32;
        document.getElementById("result").innerText = `Converted Temperature: ${result.toFixed(2)} °F`;
    } else if (unit === "fahrenheit") {
        result = (inputTemperature - 32) * 5/9;
        document.getElementById("result").innerText = `Converted Temperature: ${result.toFixed(2)} °C`;
    } else if (unit === "kelvin") {
        result = inputTemperature + 273.15;
        document.getElementById("result").innerText = `Converted Temperature: ${result.toFixed(2)} K`;
    }
}
