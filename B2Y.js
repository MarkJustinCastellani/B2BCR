// Code for the B2C Rating Platform
// Allows aficionados of local-beloved neighborhood restaurants to rate local cooks-proteges

// Function to rate a local cook
function rateLocalCook(cook, rating) {
  // Rating logic goes here
  console.log("Rating for", cook, "is", rating);
}

// Function to handle ratings
function handleRatings(ratings) {
  // Iterate over each rating and rate the local cook
  for (let i = 0; i < ratings.length; i++) {
    let rating = ratings[i];
    rateLocalCook(rating.cook, rating.rating);
  }
}

// Sample ratings
let ratings = [
  { cook: "Cook A", rating: 4.5 },
  { cook: "Cook B", rating: 3.8 },
  { cook: "Cook C", rating: 5.0 }
];

// Call the function to handle ratings
handleRatings(ratings);
