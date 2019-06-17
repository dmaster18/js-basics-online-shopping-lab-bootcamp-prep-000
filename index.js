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
  const itemWithPrices = [];
  for(var i = 0; i < cart.length; i++)
    {
      var itemNames = Object.keys(cart[i]);
      var itemName = itemNames[0];
      var itemPrice = cart[i][itemName];
      itemsWithPrices.push(`${itemName} at $${itemPrice}`);
    }
  if (!cart.length) {
      return console.log("Your shopping cart is empty.");
      }
  else if (itemsWithPrices.length === 1) {
      return console.log(`In your cart, you have ${itemsWithPrices.join()}`);
      }
  else if (itemsWithPrices.length === 2) {
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
