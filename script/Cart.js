setCart();
getCount();

async function addToCart(id) {
  console.log("add to cart working ");

  var drug = await getData(parseInt(id));
  console.log("drug");
  console.log(drug);

  // Get the existing cart data from session storage
  var cartData = JSON.parse(sessionStorage.getItem("cart"));
  console.log("cartData");

  console.log(cartData);

  var flag = false;
  cartData.forEach((item) => {
    if (item.id == id) flag = true;
  });
  console.log(flag);
  if (!flag) {
    cartData.push(drug.drug);
    // Store the updated cart data back in session storage
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    // Add a new product to the cart
    console.log("after");

    console.log(cartData);
    getCount();
    window.location.href = "Categories.html";
  }
}

function setCart() {
  if (!sessionStorage.getItem("cart")) {
    console.log("ceate cart");
    // If session doesn't exist, create one with an empty array
    var drugs = [];
    sessionStorage.setItem("cart", JSON.stringify(drugs));
  }
  console.log("cart exist");
}

function getCount() {
  var cartData = JSON.parse(sessionStorage.getItem("cart"));
  count.innerHTML = cartData.length;
  if (cartData.length > 0) {
    document.getElementById("cart").setAttribute("onclick", "goCart()");
    document.getElementById("dot").classList.remove("d-none");
  }
}

function goCart() {
  window.location.href = "Cart.html";
}

async function getData(id) {
  try {
    const response = await fetch("https://api.ezdrug.tech/Drug/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function addPrescription(id) {
  await fetch(
    `https://api.ezdrug.tech/Prescription/GetPrescriptionDetails/${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.order.forEach((item) => {
        addPrescriptionToCart(item.drugId);
      });
    });
}

async function addPrescriptionToCart(id) {
  console.log("add to cart working ");

  var drug = await getData(parseInt(id));
  console.log("drug");
  console.log(drug);

  // Get the existing cart data from session storage
  var cartData = JSON.parse(sessionStorage.getItem("cart"));
  console.log("cartData");

  console.log(cartData);
  cartData.push(drug.drug);
  // Store the updated cart data back in session storage
  sessionStorage.setItem("cart", JSON.stringify(cartData));
  // Add a new product to the cart
  console.log("after");

  console.log(cartData);
  getCount();

  setTimeout(goCart, 150);
}
