// Code for the B2B Marketplace
// Connects local cooks-proteges in City-B to local-beloved neighborhood restaurants in City-A

// Function to process and fulfill orders
function processOrder(order) {
  // Order processing logic goes here
  console.log("Order processed:", order);
}

// Function to handle incoming orders
function handleIncomingOrders(orders) {
  // Iterate over each order and process them
  for (let i = 0; i < orders.length; i++) {
    processOrder(orders[i]);
  }
}

// Sample orders
let orders = ["Order 1", "Order 2", "Order 3"];

// Call the function to handle incoming orders
handleIncomingOrders(orders);
