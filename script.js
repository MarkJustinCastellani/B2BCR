// Code for B2B Marketplace (connecting local cooks-proteges in City-B to local-beloved neighborhood restaurants in City-A)

// Order Validation
function validateOrder(cityBLocation, restaurantLocation, ingredients, certifications, kitchenAccess, microfranchiseOption, orderTime) {
  // If the distance between the customer and the restaurant is greater than 50 mile radius.
  if (calculateDistance(cityBLocation, restaurantLocation) > 50) {
    return false;
  }
  
  // If local cook-protege has ingredients to prepare order.
  if (!hasIngredients(ingredients)) {
    return false;
  }
  
  // If local cook-protege has completed required certifications and trainings.
  if (!hasCertifications(certifications)) {
    return false;
  }
  
  // If local cook-protege has verified access to certified kitchen.
  if (!hasKitchenAccess(kitchenAccess)) {
    return false;
  }
  
  // If local cook-protege paid the premium to purchase the option to manage the microfranchise
  // and the order time is not past the expiration date of the option.
  if (!hasPaidPremium(microfranchiseOption) || isExpired(orderTime, microfranchiseOption.expirationDate)) {
    return false;
  }
  
  return true; // Order is valid
}

// Pricing and Discounts
function calculatePrice(menuItem, customer, microSubscriptionNFT) {
  let price = menuItem.price;
  
  // If the customer has purchased a micro-subscription for priority fulfillment, apply a 10% discount
  // and cap the delivery fee at $2.50.
  if (customer.hasMicroSubscription) {
    price *= 0.9;
    if (menuItem.deliveryFee > 2.50) {
      price -= (menuItem.deliveryFee - 2.50);
    }
  }
  
  // If the customer has purchased the NFT for the menu item, apply an additional 7% discount.
  if (customer.hasNFT(menuItem)) {
    price *= 0.93;
  }
  
  return price;
}

// Availability of Cooks-Proteges
function assignOrder(cityBLocation, cooksProteges) {
  let eligibleCooksProteges = cooksProteges.filter(cookProtege => {
    return (
      cookProtege.hasPaidPremium &&
      !isExpired(cookProtege.optionExpirationDate)
    );
  });
  
  eligibleCooksProteges.sort((a, b) => {
    const ratingWeight = 0.6;
    const distanceWeight = 0.4;
    
    const aPriorityScore = (ratingWeight * a.rating) + (distanceWeight * calculateDistance(a.location, cityBLocation));
    const bPriorityScore = (ratingWeight * b.rating) + (distanceWeight * calculateDistance(b.location, cityBLocation));
    
    return bPriorityScore - aPriorityScore;
  });
  
  const assignedCookProtege = eligibleCooksProteges[0];
  return assignedCookProtege;
}

// Special Requests or Dietary Restrictions
function accommodateSpecialRequest(menuItem, customer, assignedCookProtege) {
  // If the customer's special request is pre-approved by the restaurant, proceed with the order.
  if (menuItem.canAccommodateSpecialRequest(customer.specialRequest)) {
    return true;
  }
  
  // If the customer is a micro-subscriber to the requested menu item, prompt them to subscribe to
  // be able to substitute ingredients.
  if (customer.hasMicroSubscription) {
    return false;
  }
  
  // If the assigned cook-protege has the required training to cook according to the dietary customization
  // requested by the customer, proceed with the order.
  if (assignedCookProtege.hasRequiredTraining(customer.dietaryCustomization)) {
    return true;
  }
  
  // Assign the order to the next eligible cook-protege with the highest priority score.
  const nextEligibleCookProtege = eligibleCooksProteges[1];
  return nextEligibleCookProtege;
}























































