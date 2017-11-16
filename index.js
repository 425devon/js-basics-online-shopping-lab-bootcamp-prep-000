var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100) + 1;
    var newItem = {[item]: price};
    cart.push(newItem);
    console.log( item + ' has been added to your cart.');
    return cart;

}

function viewCart() {
  var cartDescription = 'In your cart, you have ';
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
/*  }else{
    for(var i = 0; i < cart.length; i++){
      var currentItemAndPrice = cart[i];
      var item = Object.keys(currentItemAndPrice)[0];
      var price = currentItemAndPrice[item];
      // Handle commas & ands
      if(i && i < cart.length - 1) {
        cartDescription += ', '
      } else if( i == cart.length - 1){
        cartDescription += ' and '
      }
      cartDescription += `${item} at ${price}`
    }
  }
  console.log(cartDescription + ".");
*/
}}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
