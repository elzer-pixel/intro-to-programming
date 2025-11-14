// create days of week array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// define types of weather
var weather = [
  "Sunny",
  "Partly Sunny",
  "Partly Cloudy",
  "Cloudy",
  "Raining",
  "Snowing",
  "Thunderstorm",
  "Foggy",
];

// set min and max temperatures
var maxTemp = 100;
var minTemp = 0;

// cost (to you) of a cup of lemonade
var lemonadeCost = 0.5;

// array for storing daily temps
var dailyTemp = [];

// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// generate weather for the week
function generateWeather() {
  var weatherToday;
  var tempToday;

  for (var i = 0; i < days.length; i++) {
    weatherToday = weather[Math.floor(Math.random() * weather.length)];

    tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

    dailyTemp[i] = tempToday;

    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" +
      days[i] +
      "' class='" +
      weatherToday +
      "'><b>Forecast for " +
      days[i] +
      ":</b><br><br>" +
      weatherToday +
      " and " +
      tempToday +
      " degrees.</div>";
  }
}
generateWeather();

// Calculates glasses of lemonade sold

function openTheStand() {
  var glassesSold = 0; //daily sales
  var totalGlasses = 0; //weekly sales
  var glassesLeft = 0; //remaining glasses

  resetForm(); //clear previous results

  var numGlasses = Number(document.getElementById("numGlasses").value);
  var glassPrice = Number(document.getElementById("glassPrice").value);

  for (var i = 0; i < days.length; i++) {
    // glasses that can be sold in the day
    glassesSold = Math.floor(dailyTemp[i] / glassPrice);

    // current stock available for the week
    glassesLeft = numGlasses - totalGlasses;

    // checks if there is enough stock for that day's sale
    if (glassesSold > glassesLeft) {
      glassesSold = glassesLeft;
    }

    // increase weekly sales/glass sold in the week
    totalGlasses = glassesSold + totalGlasses;

    // display daily sales
    document.getElementById("result").innerHTML +=
      "<p> On " +
      days[i] +
      ", you sold " +
      glassesSold +
      " glasses of lemonade.</p>";
  }

  displayResults(numGlasses, glassPrice, totalGlasses);
}

// Resets game for new order to be placed
function resetForm() {
  document.getElementById("result").innerHTML = "";
}

// Calculate results and display report
function displayResults(weeklyInventory, glassPrice, weeklySales) {
  var revenue = weeklySales * glassPrice;
  var expense = weeklyInventory * lemonadeCost;
  var leftOver = weeklyInventory - weeklySales;
  var profit = revenue - expense;

  document.getElementById("result").innerHTML +=
    "<p> You sold a total of " +
    weeklySales +
    " glasses of lemonade this week.</p>";
  document.getElementById("result").innerHTML +=
    "<p> Total revenue: $" + revenue + ".</p>";
  document.getElementById("result").innerHTML +=
    "<p> You have " + leftOver + " glasses of lemonade leftover.</p>";
  document.getElementById("result").innerHTML +=
    "<p> Each glass costs you $" +
    lemonadeCost +
    ". Your profit was $" +
    profit +
    "...";
}
