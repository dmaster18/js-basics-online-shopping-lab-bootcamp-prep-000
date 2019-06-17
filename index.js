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
      var printOneItem = `In your cart, you have ${Object.keys(cart[0]))} at $${cart[0][Object.keys(cart[0])]}.`
      console.log(printOneItem)
      }
  else if (cart.length === 2) {
      return console.log(`In your cart, you have ${itemsWithPrices[0]}, and ${itemsWithPrices[1]}`);
      }
    else {
       return console.log(`In your cart, you have ${itemsWithPrices.slice(0,-1).join(' , ')}, and ${itemWithPrices.slice(-1)}.`)
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
