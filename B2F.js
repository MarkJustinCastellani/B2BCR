// Code for the B2B Marketplace
// Connects local cooks-proteges in City-B with local farmers and regional food hubs

// Function to source ingredients
function sourceIngredients(ingredient) {
  // Ingredient sourcing logic goes here
  console.log("Sourcing ingredient:", ingredient);
}

// Function to handle ingredient sourcing
function handleIngredientSourcing(ingredients) {
  // Iterate over each ingredient and source them
  for (let i = 0; i < ingredients.length; i++) {
    sourceIngredients(ingredients[i]);
  }
}

// Sample ingredients
let ingredients = ["Tomatoes", "Lettuce", "Cheese"];

// Call the function to handle ingredient sourcing
handleIngredientSourcing(ingredients);
