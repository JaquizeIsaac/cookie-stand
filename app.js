'use strict';

// Salmon Cookie Stand constructor function
function SalmonCookieStand(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];
}

SalmonCookieStand.prototype.generateRandomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

SalmonCookieStand.prototype.calculateCookiesPerHour = function () {
  for (let hour = 6; hour <= 19; hour++) {
    const randomCustomers = this.generateRandomCustomers();
    const cookies = Math.round(randomCustomers * this.avgCookies);
    this.cookiesPerHour.push(cookies);
  }
};

SalmonCookieStand.prototype.render = function () {
  const tableBody = document.querySelector("#sales-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `<td>${this.name}</td>`;

  this.cookiesPerHour.forEach((cookies) => {
    row.innerHTML += `<td>${cookies}</td>`;
  });

  const dailyTotal = this.cookiesPerHour.reduce((total, cookies) => total + cookies, 0);
  row.innerHTML += `<td>${dailyTotal}</td>`;

  tableBody.appendChild(row);
};

// Create instances for each store
const seattle = new SalmonCookieStand('Seattle', 23, 65, 6.3);
const tokyo = new SalmonCookieStand('Tokyo', 3, 24, 1.2);
const dubai = new SalmonCookieStand('Dubai', 11, 38, 3.7);
const paris = new SalmonCookieStand('Paris', 20, 38, 2.3);
const lima = new SalmonCookieStand('Lima', 2, 16, 4.6);

const stores = [seattle, tokyo, dubai, paris, lima];

// Render header row with hours
function renderHeaderRow() {
  const table = document.getElementById("sales-table");
  const thead = table.querySelector("thead tr");

  for (let hour = 6; hour <= 19; hour++) {
    const time = hour < 12 ? hour + "am" : hour === 12 ? "12pm" : hour - 12 + "pm";
    thead.innerHTML += `<th>${time}</th>`;
  }
}

// Render footer row with totals
function renderFooterRow() {
  const table = document.getElementById("sales-table");
  const tfoot = table.querySelector("tfoot tr");

  for (let hour = 6; hour <= 19; hour++) {
    let hourlyTotal = 0;
    stores.forEach((store) => {
      hourlyTotal += store.cookiesPerHour[hour - 6];
    });
    tfoot.innerHTML += `<td>${hourlyTotal}</td>`;
  }

  let grandTotal = stores.reduce((total, store) => total + store.cookiesPerHour.reduce((sum, cookies) => sum + cookies, 0), 0);
  tfoot.querySelector("#total-daily").textContent = grandTotal;
}

// Render all store rows
