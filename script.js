let homeScore = 0;
let guestScore = 0;

function addScore(team, points) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("home-score").textContent = homeScore;
  } else {
    guestScore += points;
    document.getElementById("guest-score").textContent = guestScore;
  }
  updateLeader();
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").textContent = 0;
  document.getElementById("guest-score").textContent = 0;
  document.getElementById("leader-message").textContent = "Game On!";
}

function updateLeader() {
  const message = document.getElementById("leader-message");
  if (homeScore > guestScore) {
    message.textContent = "HOME is leading!";
  } else if (guestScore > homeScore) {
    message.textContent = "GUEST is leading!";
  } else {
    message.textContent = "It's a tie!";
  }
}
