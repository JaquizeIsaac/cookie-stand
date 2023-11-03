"use strict";

let tableBody = document.getElementById("tableBody");
let tableFooter = document.getElementById("tableFoot");
let form = document.getElementById("newStoreForm")
// Get all the inputs as an array
let inputs = document.querySelectorAll("input");
let newStore = {};

let stores = [];
let totals = new Array(14);
totals.fill(0);

function City(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCust = [];
  // total cookies for hour
  this.hourCookies = [];
  this.completeCookies = [];
  // total cookies for city
  this.totalCookies = [];
  this.totalSales = 0;
}

let seattle = new City('Seattle',23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

City.prototype.cookieTime = function(){
  for(let i = 0; i<14;i++){
    let randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.randomCust.push(randCust);
    let estimate = (Math.floor(randCust * this.avgCookie));
    this.hourCookies.push(estimate);
    this.totalSales += estimate;
    totals[i] += estimate;
  }

};

City.prototype.render = function(){
  let body = document.getElementById("tableBody");
  let cityRow = document.createElement('tr');
  body.appendChild(cityRow);


  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  cityRow.appendChild(cityName);


  for(let i = 0; i < this.hourCookies.length; i ++){
    let cell = document.createElement('td');
    cell.textContent = (this.hourCookies[i]);
    cityRow.appendChild(cell)
  }
  let cityTotal = document.createElement('td');
  cityTotal.textContent = this.totalSales;
  cityRow.appendChild(cityTotal);

};

let renderTotals = function(){
  tableFooter.innerHTML="";

  let bottomTotal = document.createElement('tr');
  bottomTotal.textContent = 'Hourly Totals for all Locations';
  tableFooter.appendChild(bottomTotal);


  for(let i = 0; i < totals.length; i++){
    let footCell;
    footCell = document.createElement('td');
    footCell.textContent = totals[i];
    bottomTotal.appendChild(footCell);
  }

  let dailyTotal = (seattle.totalSales + tokyo.totalSales + dubai.totalSales + paris.totalSales + lima.totalSales);

  let totalAll = document.createElement("td");
  totalAll.textContent = dailyTotal;
  bottomTotal.appendChild(totalAll);
};

seattle.cookieTime();
tokyo.cookieTime();
dubai.cookieTime();
paris.cookieTime();
lima.cookieTime();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderTotals();


console.log(totals);
// -----------------------------------------------------------------------------new code 11/2/23 help from TA Kjell
//Added event listener to retrieve the data that was entered
// document.querySelectorAll (listed above as global variable) gives an array/list of the elements that match
for(let i = 0; i < inputs.length; i++ ) {
  inputs[i].addEventListener("change", function(event){
    console.log(event.target.name, event.target.value);
    newStore[event.target.name] = event.target.value
  })

}

///Create event handler function that stores the values to display in the browser without going to server.
form.addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission
  form.reset();

let store = new City(newStore.cityName, parseInt(newStore.minCust), parseInt(newStore.maxCust), parseFloat(newStore.avgCookie));
stores.push(store)
store.cookieTime()
store.render()
renderTotals();
})