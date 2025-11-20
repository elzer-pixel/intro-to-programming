var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    quantities[x]++;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];
    display_all();
}

function remove_selection(x) {
    if (quantities[x] > 0) {
        quantities[x]--;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
    }
    display_all();
}

function display_all() {

    var myTable = "<table><tr>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: white; text-align: right;'>Remove</th>";
    myTable += "</tr>";

    for (let i = 0; i < items.length; i++) {

        myTable += "<tr>";
        myTable += "<td style='text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='text-align: right;'>" + totals[i].toFixed(2) + "</td>";

        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";

        myTable += "</tr>";
    }

    myTable += "</table>";
    myTable += "<br/><br/><p><b>Total Order Amount: R" + totalOrderAmt.toFixed(2) + "</b></p>";

    document.getElementById("demo").innerHTML = myTable;
}

window.onload = function() {
    display_all();
}
