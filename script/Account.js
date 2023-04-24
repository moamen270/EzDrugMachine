// const loginForm = document.getElementById("login-form");

// loginForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const formData = new FormData(loginForm);
//   const loginData = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//     rememberMe: formData.get("remember-me"),
//   };
//   login(loginData);
// });

// function login(loginData) {
//   fetch("https://localhost:44332/Account/Login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       loginData,
//     }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log(response);
//         //window.location.href = '/home';
//       } else {
//         throw new Error("Login failed.");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// const form = document.getElementById("login-form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   // Get the username and password from the form
//   const email = form.querySelector('input[name="email"]').value;
//   const password = form.querySelector('input[name="password"]').value;
//   const rememberMe = false;
//   // Send an HTTP POST request to the login API
//   const response = await fetch("https://api.ezdrug.tech/Account/Login", {
//     method: "POST",
//     body: JSON.stringify({
//       email,
//       password,
//       rememberMe,
//     }),
//   });

//   // Check the response status code
//   if (response.status === 200) {
//     // The login was successful, get the JWT token from the response
//     const token = await response.json();

//     // Save the JWT token in the browser's local storage
//     window.localStorage.setItem("jwt", token);

//     // Redirect the user to the home page
//     window.location.href = "options.html";
//   } else {
//     // The login failed, display an error message
//     const error = await response.json();
//     alert(error.message);
//   }
// });

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get the username and password from the form
  const email = form.querySelector('input[name="email"]').value;
  const password = form.querySelector('input[name="password"]').value;

  // Create a form data object
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  // Send an HTTP POST request to the login API
  const response = await fetch("https://localhost:44332/Account/Login", {
    method: "POST",
    body: formData,
  });

  // Check the response status code
  if (response.status === 200) {
    // The login was successful, get the JWT token from the response
    const token = await response.json();
    // Save the JWT token in the browser's local storage
    setCookie("jwt", token.token, 60 * 60 * 24 * 365);
    window.localStorage.setItem("jwt", token.token);

    // Redirect the user to the home page
    window.location.href = "options.html";
  } else {
    const alert = document.getElementById("alert");
    alert.innerHTML = "Email Or Password is incorrect";
    alert.classList.add("text-danger");
    // The login failed, display an error message
    const error = await response.json();
    alert(error.message);
  }
});

// async function login(username, password) {
//   await fetch("https://localhost:44332/Account/Login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: username,
//       password: password,
//       rememberMe: false,
//     }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log(response);
//         //window.location.href = '/home';
//       } else {
//         throw new Error("Login failed.");
//       }
//     })
//     .then(async (response) => {
//       const json = await response.json();
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// login("moamen@ezdrug.tech", "Anawebs1");
