// Listing 17-1
// for (var i = 10; i > 0; i--) {
//   alert(i);
// }
// alert("Blast Off!!!");

// Listing 17-2
// var myFriends = ["Jabu", "Sbusiso", "Abel", "Mohato"];

// for (var i = 0; i < myFriends.length; i++) {
//   alert(myFriends[i] + " is my friend...");
// }

// Listing 17-3
// alert(Math.random());
// alert(Math.floor(Math.random() * 11));

// Listing 17-4
// var myFriends = ["Jabu", "Sbusiso", "Abel", "Mohato"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);

// alert(myFriends[randomFriend]);

// ====================================================

// WEATHER FORECAST APP

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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

var minTemp = 5; //8
var maxTemp = 101; //

function generateWeather() {
  for (var i = 0; i < days.length; i++) {
    var weatherToday = weather[Math.floor(Math.random() * weather.length)]; //0 - 7

    var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" + days[i] + "' class='" + weatherToday + "'>" + 
      "<b>Forecast for " + days[i] + ":</b>" + 
      "<br><br>" +
      weatherToday + " and " + tempToday + " degrees." + 
      "</div>";
  };
};
generateWeather();

