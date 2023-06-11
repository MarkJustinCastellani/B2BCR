// Declare variables
var itemCount = 0;
let maxItemCount = 10;
const minItemCount = 0;

// Add your code for initializing the application here
function initializeApp() {
  addRestaurant("Restaurant 1", "Address 1", "Contact 1");
  addCook("Cook 1", "Specialization 1", "Contact 1");

  displayRestaurants();
  displayCooks();
}

// Add code to add a new restaurant to your application
function addRestaurant(name, address, contact) {
  // Here you can write the code to add a new restaurant to the application
  console.log("Adding a new restaurant:", name, address, contact);
}

// Add code to add a new cook to your application
function addCook(name, specialization, contact) {
  // Here you can write the code to add a new cook to the application
  console.log("Adding a new cook:", name, specialization, contact);
}

// Add code to display the list of restaurants in your application
function displayRestaurants() {
  console.log("Displaying list of restaurants");
  // Here you can write the code to display the list of restaurants
}

// Add code to display the list of cooks in your application
function displayCooks() {
  console.log("Displaying list of cooks");
  // Here you can write the code to display the list of cooks
}

// Call the initializeApp function to start the application
initializeApp();










































