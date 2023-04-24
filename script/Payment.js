calcu();
function calcu() {
  var test = document.getElementsByClassName("Total");
  var total = 0;
  for (var i = 0; i < test.length; i++) {
    test[i].value =
      parseInt(document.getElementsByClassName("Price")[i].value) *
      parseInt(document.getElementsByClassName("Quantity")[i].value);
    total += parseInt(test[i].value);
  }
  Total.value = total;
  Subtotal.value = total;
}

function getCart() {
  return JSON.parse(sessionStorage.getItem("cart"));
}

function freeCart() {
  sessionStorage.removeItem("cart");
}

function checkout() {
  // Get a reference to the element you want to click

  const button = document.querySelector("#CheckOut");

  console.log(button);
  button.click();
}

function submit() {
  // Get a reference to the element you want to click

  const form = document.getElementById("myForm");
  form.submit();
}
