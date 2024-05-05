'use strict';

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;

  if (customerCredits >= totalPrice) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    return "Insufficient funds!";
  }
}

console.log(makeTransaction(5, 3000, 23000));
// makeTransaction(10, 5000, 8000)