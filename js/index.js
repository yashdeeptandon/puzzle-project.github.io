document.querySelector("a").onclick = function () {
  window.location.href = "signup.html";
};

const firebaseConfig = {
  apiKey: "AIzaSyBd4tHhErnzbmXLhr6DtERZVK7cGsItMkM",
  authDomain: "puzzle-app-new.firebaseapp.com",
  projectId: "puzzle-app-new",
  storageBucket: "puzzle-app-new.appspot.com",
  messagingSenderId: "566229037050",
  appId: "1:566229037050:web:a69f70d19ad80bb2ce3e43",
  databaseURL: "https://puzzle-app-new-default-rtdb.firebaseio.com/",
};
firebase.initializeApp(firebaseConfig);

// Listen for form submit
document.querySelector("button").addEventListener("click", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  var email = document.getElementById("email").value.toString().trim();
  var password = document.getElementById("password").value.toString().trim();

  if (email == "yashdeeptandon007@gmail.com") {
    if (password == "123456") {
      window.location.href = "admin.html";
    } else {
      alert("wrong password");
    }
    return;
  }

  // create user
  loginUser(email, password);
}

// Save message to firebase
function loginUser(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      // Clear form
      document.getElementById("contactForm").reset();

      window.location.href = "start.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}
