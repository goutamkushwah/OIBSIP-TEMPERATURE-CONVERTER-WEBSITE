function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unitSelect = document.getElementById("unit");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    const resultDisplay = document.getElementById("result");

    // Validate input is a number
    if (isNaN(temperatureInput)) {
      resultDisplay.innerHTML = "Please enter a valid number.";
      return;
    }

    const temperature = parseFloat(temperatureInput);

    // Perform the conversion
    let convertedTemperature, resultUnit;

    if (selectedUnit === "celsius") {
      convertedTemperature = (temperature - 32) * (5/9);
      resultUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
      resultUnit = "Fahrenheit";
    } else if (selectedUnit === "kelvin") {
      convertedTemperature = temperature + 273.15;
      resultUnit = "Kelvin";
    }

    // Display the result
    resultDisplay.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
  }