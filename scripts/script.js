
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username);
  console.log(password);
  fetch("https://flask-eomp.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "./home.html";
      }
    });
}

function registration(){
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(first_name);
  console.log(last_name);
  console.log(username);
  console.log(password);
  fetch("https://flask-eomp.herokuapp.com/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
     window.location.href = "login.html";
    });
}


