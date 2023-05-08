let btn = document.getElementById("claimBtn");
btn.onclick = function () {
  document.querySelector("img").src = "assets/gift.jpg";

  setTimeout(function () {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("You have been signed out. Thank you for playing this game");
        window.location.href = "leaderboard.html";
      })
      .catch((error) => {});
  }, 5000);
};
