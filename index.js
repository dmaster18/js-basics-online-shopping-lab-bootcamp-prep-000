var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartItems = [];
    if (cart.length===0) {
      return console.log("Your shopping cart is empty.");
      }
  else if (cart.length.length === 1) {
      var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}`
      console.log(printOneItem);
      }
  else if (cart.length === 2) {
      var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}`}
      
    else {
       
    }
}
    
    
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
