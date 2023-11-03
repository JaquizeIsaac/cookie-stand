const rootElement = document.getElementById("root");

const seattle = {
  name: "Seattle",
  hours: "6am - 7pm",
  phoneNumber: "123-456-7890",
  location: "2901 3rd Ave #300, Seattle, WA 98121",
  render: function() {

// Create a new, empty section for a store
    const storeSection = document.createElement("section");
    // storeSection.textContent = ;
    rootElement.appendChild(storeSection);

// Put the Name on the page in the new section
    const firstTitle = document.createElement("h2");
    firstTitle.textContent = this.name;
    storeSection.appendChild(firstTitle);

// Put the Hours Open in the UL
    const hoursLabel = document.createElement("ul");
    hoursLabel.textContent = `Hours Open: ${this.hours}`;
    storeSection.appendChild(hoursLabel);

    // Put the phone numbers in the UL
    const phoneItem = document.createElement("ul");
    phoneItem.textContent = `Contact Info: ${this.phoneNumber}`;
    storeSection.appendChild(phoneItem);


    // Put the location/Address in the UL
    const storeAddress = document.createElement("ul");
    storeAddress.textContent = `Location: ${this.location}`;
    storeSection.appendChild(storeAddress);

  }
}

const tokyo = {
  name: "Tokyo",
  hours: "6am - 7pm",
  phoneNumber: "222-222-2222",
  location: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634",
  render: function() {

// Create a new, empty section for a store
    const storeSection = document.createElement("section");
    // storeSection.textContent = ;
    rootElement.appendChild(storeSection);

// Put the Name on the page in the new section
    const firstTitle = document.createElement("h2");
    firstTitle.textContent = this.name;
    storeSection.appendChild(firstTitle);

// Put the Hours Open in the UL
    const hoursLabel = document.createElement("ul");
    hoursLabel.textContent = `Hours Open: ${this.hours}`;
    storeSection.appendChild(hoursLabel);

    // Put the phone numbers in the UL
    const phoneItem = document.createElement("ul");
    phoneItem.textContent = `Contact Info: ${this.phoneNumber}`;
    storeSection.appendChild(phoneItem);


    // Put the location/Address in the UL
    const storeAddress = document.createElement("ul");
    storeAddress.textContent = `Location: ${this.location}`;
    storeSection.appendChild(storeAddress);

  }
}

const dubai = {
  name: "Dubai",
  hours: "6am - 7pm",
  phoneNumber: "333-333-3333",
  location: "1 Sheikh Mohammed bin Rashid Blvd - Dubai",
  render: function() {

// Create a new, empty section for a store
    const storeSection = document.createElement("section");
    // storeSection.textContent = ;
    rootElement.appendChild(storeSection);

// Put the Name on the page in the new section
    const firstTitle = document.createElement("h2");
    firstTitle.textContent = this.name;
    storeSection.appendChild(firstTitle);

// Put the Hours Open in the UL
    const hoursLabel = document.createElement("ul");
    hoursLabel.textContent = `Hours Open: ${this.hours}`;
    storeSection.appendChild(hoursLabel);

    // Put the phone numbers in the UL
    const phoneItem = document.createElement("ul");
    phoneItem.textContent = `Contact Info: ${this.phoneNumber}`;
    storeSection.appendChild(phoneItem);


    // Put the location/Address in the UL
    const storeAddress = document.createElement("ul");
    storeAddress.textContent = `Location: ${this.location}`;
    storeSection.appendChild(storeAddress);

  }
}

const paris = {
  name: "Paris",
  hours: "6am - 7pm",
  phoneNumber: "444-444-4444",
  location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
  render: function() {

// Create a new, empty section for a store
    const storeSection = document.createElement("section");
    // storeSection.textContent = ;
    rootElement.appendChild(storeSection);

// Put the Name on the page in the new section
    const firstTitle = document.createElement("h2");
    firstTitle.textContent = this.name;
    storeSection.appendChild(firstTitle);

// Put the Hours Open in the UL
    const hoursLabel = document.createElement("ul");
    hoursLabel.textContent = `Hours Open: ${this.hours}`;
    storeSection.appendChild(hoursLabel);

    // Put the phone numbers in the UL
    const phoneItem = document.createElement("ul");
    phoneItem.textContent = `Contact Info: ${this.phoneNumber}`;
    storeSection.appendChild(phoneItem);


    // Put the location/Address in the UL
    const storeAddress = document.createElement("ul");
    storeAddress.textContent = `Location: ${this.location}`;
    storeSection.appendChild(storeAddress);

  }
}

const lima = {
  name: "Lima",
  hours: "6am - 7pm",
  phoneNumber: "555-555-5555",
  location: "Ca. Gral. Borgono Cuadra 8, Miraflores 15074",
  render: function() {

// Create a new, empty section for a store
    const storeSection = document.createElement("section");
    // storeSection.textContent = ;
    rootElement.appendChild(storeSection);

// Put the Name on the page in the new section
    const firstTitle = document.createElement("h2");
    firstTitle.textContent = this.name;
    storeSection.appendChild(firstTitle);

// Put the Hours Open in the UL
    const hoursLabel = document.createElement("ul");
    hoursLabel.textContent = `Hours Open: ${this.hours}`;
    storeSection.appendChild(hoursLabel);

    // Put the phone numbers in the UL
    const phoneItem = document.createElement("ul");
    phoneItem.textContent = `Contact Info: ${this.phoneNumber}`;
    storeSection.appendChild(phoneItem);


    // Put the location/Address in the UL
    const storeAddress = document.createElement("ul");
    storeAddress.textContent = `Location: ${this.location}`;
    storeSection.appendChild(storeAddress);

  }
}


