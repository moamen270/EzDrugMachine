function goBack() {
  history.back();
}

function exit() {
  window.location.href = "index.html";
  freeCart();
}

function reload() {
  location.reload();
}
function freeCart() {
  sessionStorage.removeItem("cart");
}

function goTo(url) {
  window.location.href = url;
}
