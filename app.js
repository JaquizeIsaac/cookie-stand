'use strict';

// Cookie stand locations
const locations = [
  {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
  },
  {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
  },
  {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
  },
  {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
  },
  {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
  },
];

// Function to calculate random number of customers
function getRandomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to calculate the total cookies sold for a location
function calculateCookiesSold(location) {
  const cookiesPerHour = [];
  let totalCookies = 0;

  for (let i = 0; i < 14; i++) { // 14 hours of operation
    const customers = getRandomCustomers(location.minCustomers, location.maxCustomers);
    const cookies = Math.round(customers * location.avgCookies);
    cookiesPerHour.push(cookies);
    totalCookies += cookies;
  }

  return { cookiesPerHour, totalCookies };
}

// Render sales data for each location
function renderSalesData() {
  const salesTable = document.getElementById('sales-table');

  locations.forEach((location) => {
    const { cookiesPerHour, totalCookies } = calculateCookiesSold(location);
    const row = salesTable.insertRow();

    // Location name cell
    const nameCell = row.insertCell(0);
    nameCell.textContent = location.name;

    // Hourly sales cells
    cookiesPerHour.forEach((cookies, index) => {
      const cell = row.insertCell(index + 1);
      cell.textContent = cookies;
    });

    // Daily total cell
    const totalCell = row.insertCell(cookiesPerHour.length + 1);
    totalCell.textContent = totalCookies;
  });
}

// Initialize the sales data table
renderSalesData();
