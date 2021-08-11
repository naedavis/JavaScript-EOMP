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

// function register(){

// }
