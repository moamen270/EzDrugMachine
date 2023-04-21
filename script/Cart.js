
setCart()
getCount()
async function addToCart(id){ 

  console.log('add to cart working ')

var drug = await getData(parseInt(id));
console.log("drug")
console.log(drug)


  // Get the existing cart data from session storage
  var cartData = JSON.parse(sessionStorage.getItem("cart"));
  console.log("cartData")

  console.log(cartData)
    cartData.push(drug.drug)
  // Store the updated cart data back in session storage
  sessionStorage.setItem("cart", JSON.stringify(cartData));
  // Add a new product to the cart
  console.log("after")

  console.log(cartData)
  getCount()
  window.location.href='Categories.html'
  
}


function setCart(){
  if (!sessionStorage.getItem("cart")) {
    console.log('ceate cart')
    // If session doesn't exist, create one with an empty array
    var drugs = [];
    sessionStorage.setItem("cart", JSON.stringify(drugs));
  }
  console.log('cart exist')

}

function getCount(){
  var cartData = JSON.parse(sessionStorage.getItem("cart"));
  count.innerHTML = cartData.length
  if(cartData.length >0){
    const myDiv = document.getElementById('dot');
    myDiv.classList.remove('text-white');
    myDiv.classList.add('text-danger');  
  }
}

function goCart(){  
  window.location.href = "Cart.html";
}

async function getData(id) {

  try {
    const response = await fetch('http://api.ezdrug.tech/Drug/'+id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function freeCart(){
  sessionStorage.removeItem("cart");
}


function getCart(){

  return JSON.parse(sessionStorage.getItem("cart"));
}


function calcu(){
  var test = document.getElementsByClassName("Total"); 
  var total = 0;
  for(var i =0; i< test.length;i++){      
    test[i].value  = parseInt( document.getElementsByClassName("Price")[i].value)*parseInt( document.getElementsByClassName("Quantity")[i].value); 
    total+=parseInt(test[i].value)
  }
  Total.value = total
  Subtotal.value = total

}   

