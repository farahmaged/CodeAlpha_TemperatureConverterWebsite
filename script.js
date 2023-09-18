var calculateTemperature = document.querySelectorAll(".temperature"),
  backgroundColor = document.getElementById("background-color");

var blue = {
  startTemperature: 20,
  endTemperature: 30,
  hexColor: "#305adb",
  red: 48,
  green: 90,
  blue: 219
};

var darkBlue = {
  startTemperature: 10,
  endTemperature: 20,
  hexColor: "#134b9e",
  red: 19,
  green: 75,
  blue: 158
};

var darkPurple = {
  startTemperature: -10,
  endTemperature: 0,
  hexColor: "#562d58",
  red: 86,
  green: 45,
  blue: 88
};

var darkRed = {
  startTemperature: 100,
  endTemperature: 150,
  hexColor: "#9f0d14",
  red: 159,
  green: 13,
  blue: 20
};

var deepRed = {
  startTemperature: 150,
  endTemperature: 150,
  hexColor: "#581100",
  red: 88,
  green: 17,
  blue: 0
};

var green = {
  startTemperature: 50,
  endTemperature: 60,
  hexColor: "#00bb34",
  red: 0,
  green: 187,
  blue: 52
};

var indigo = {
  startTemperature: 0,
  endTemperature: 10,
  hexColor: "#313b7b",
  red: 49,
  green: 59,
  blue: 123
};

var lightBlue = {
  startTemperature: 30,
  endTemperature: 40,
  hexColor: "#0081d3",
  red: 0,
  green: 129,
  blue: 211
};

var orange = {
  startTemperature: 80,
  endTemperature: 90,
  hexColor: "#ef7600",
  red: 239,
  green: 118,
  blue: 0
};

var purple = {
  startTemperature: -50,
  endTemperature: -10,
  hexColor: "#372a3d",
  red: 55,
  green: 42,
  blue: 61
};

var red = {
  startTemperature: 90,
  endTemperature: 100,
  hexColor: "#cd3400",
  red: 205,
  green: 52,
  blue: 0
};

var turquoise = {
  startTemperature: 40,
  endTemperature: 50,
  hexColor: "#00a39a",
  red: 0,
  green: 163,
  blue: 154
};

var yellow = {
  startTemperature: 70,
  endTemperature: 80,
  hexColor: "#d7c000",
  red: 215,
  green: 192,
  blue: 0
};

var yellowGreen = {
  startTemperature: 60,
  endTemperature: 70,
  hexColor: "#7ac600",
  red: 122,
  green: 198,
  blue: 0
};

function updateBackgroundColor(currentTemperature) {
  if (currentTemperature < -45) {
    start = null;
    end = null;
    red = purple.red;
    blue = purple.blue;
    green = purple.green;
  } else if (currentTemperature >= -45 && currentTemperature < -9) {
    start = -45;
    end = -9;
    red = purple.red;
    blue = purple.blue;
    green = purple.green;
    targetRed = darkPurple.red;
    targetBlue = darkPurple.blue;
    targetGreen = darkPurple.green;
  } else if (currentTemperature >= -9 && currentTemperature < 0) {
    start = -9;
    end = 0;
    red = darkPurple.red;
    blue = darkPurple.blue;
    green = darkPurple.green;
    targetRed = indigo.red;
    targetBlue = indigo.blue;
    targetGreen = indigo.green;
  } else if (currentTemperature >= 0 && currentTemperature < 10) {
    start = 0;
    end = 10;
    red = indigo.red;
    blue = indigo.blue;
    green = indigo.green;
    targetRed = darkBlue.red;
    targetBlue = darkBlue.blue;
    targetGreen = darkBlue.green;
  } else if (currentTemperature >= 10 && currentTemperature < 20) {
    start = 10;
    end = 20;
    red = darkBlue.red;
    blue = darkBlue.blue;
    green = darkBlue.green;
    targetRed = blue.red;
    targetBlue = blue.blue;
    targetGreen = blue.green;
  } else if (currentTemperature >= 20 && currentTemperature < 30) {
    start = 20;
    end = 30;
    red = blue.red;
    blue = blue.blue;
    green = blue.green;
    targetRed = lightBlue.red;
    targetBlue = lightBlue.blue;
    targetGreen = lightBlue.green;
  } else if (currentTemperature >= 30 && currentTemperature < 40) {
    start = 30;
    end = 40;
    red = lightBlue.red;
    blue = lightBlue.blue;
    green = lightBlue.green;
    targetRed = turquoise.red;
    targetBlue = turquoise.blue;
    targetGreen = turquoise.green;
  } else if (currentTemperature >= 40 && currentTemperature < 50) {
    start = 40;
    end = 50;
    red = turquoise.red;
    blue = turquoise.blue;
    green = turquoise.green;
    targetRed = green.red;
    targetBlue = green.blue;
    targetGreen = green.green;
  } else if (currentTemperature >= 50 && currentTemperature < 60) {
    start = 50;
    end = 60;
    red = green.red;
    blue = green.blue;
    green = green.green;
    targetRed = yellowGreen.red;
    targetBlue = yellowGreen.blue;
    targetGreen = yellowGreen.green;
  } else if (currentTemperature >= 60 && currentTemperature < 70) {
    start = 60;
    end = 70;
    red = yellowGreen.red;
    blue = yellowGreen.blue;
    green = yellowGreen.green;
    targetRed = yellow.red;
    targetBlue = yellow.blue;
    targetGreen = yellow.green;
  } else if (currentTemperature >= 70 && currentTemperature < 80) {
    start = 70;
    end = 80;
    red = yellow.red;
    blue = yellow.blue;
    green = yellow.green;
    targetRed = orange.red;
    targetBlue = orange.blue;
    targetGreen = orange.green;
  } else if (currentTemperature >= 80 && currentTemperature < 90) {
    start = 80;
    end = 90;
    red = orange.red;
    blue = orange.blue;
    green = orange.green;
    targetRed = red.red;
    targetBlue = red.blue;
    targetGreen = red.green;
  } else if (currentTemperature >= 90 && currentTemperature < 100) {
    start = 90;
    end = 100;
    red = red.red;
    blue = red.blue;
    green = red.green;
    targetRed = darkRed.red;
    targetBlue = darkRed.blue;
    targetGreen = darkRed.green;
  } else if (currentTemperature >= 100 && currentTemperature <= 150) {
    start = 100;
    end = 150;
    red = darkRed.red;
    blue = darkRed.blue;
    green = darkRed.green;
    targetRed = deepRed.red;
    targetBlue = deepRed.blue;
    targetGreen = deepRed.green;
  } else {
    start = null;
    end = null;
    red = deepRed.red;
    blue = deepRed.blue;
    green = deepRed.green;
    targetRed = deepRed.red;
    targetBlue = deepRed.blue;
    targetGreen = deepRed.green;
  }

  if (start !== null && end !== null) {
    var temperaturePercent = (currentTemperature - start) / (end - start);
    var newRed = Math.round(red + (targetRed - red) * temperaturePercent);
    var newGreen = Math.round(green + (targetGreen - green) * temperaturePercent);
    var newBlue = Math.round(blue + (targetBlue - blue) * temperaturePercent);
    backgroundColor.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
  } else {
    backgroundColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

function getFahrenheit() {
  resultCelsius = document.getElementById("temperature-input").value;
  var fahrenheitTemperature = resultCelsius * (9 / 5) + 32;
  resultFahrenheit = Math.round(fahrenheitTemperature);
  document.getElementById("fahrenheit-temperature").querySelector("p").textContent = resultFahrenheit;
  updateBackgroundColor(resultFahrenheit);
}

calculateTemperature[1].addEventListener("input", function (event) {
  getFahrenheit();
});

var unitSelector = document.getElementById("unit-selector");
var temperatureInput = document.getElementById("temperature-input");

function updateTemperature() {
  var selectedUnit = unitSelector.value;
  var inputValue = parseFloat(temperatureInput.value);
  var fahrenheitTemperature;

  if (selectedUnit === "C") {
    fahrenheitTemperature = (inputValue * 9 / 5) + 32;
  } else if (selectedUnit === "K") {
    fahrenheitTemperature = (inputValue - 273.15) * 9 / 5 + 32;
  } else if (selectedUnit === "R") {
    fahrenheitTemperature = (inputValue - 459.67);
  }

  document.getElementById("fahrenheit-temperature").querySelector("p").textContent = fahrenheitTemperature.toFixed(2);
  updateBackgroundColor(fahrenheitTemperature);
}

temperatureInput.addEventListener("input", updateTemperature);

unitSelector.addEventListener("change", function () {
  updateTemperature();
});

updateTemperature();