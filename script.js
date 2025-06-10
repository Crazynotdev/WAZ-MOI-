function generateLink() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  if (username) {
    window.location.href = `u-${username}.html`;
  } else {
    alert("Entre un pseudo !");
  }
}

function sendMessage(username) {
  const message = document.getElementById("message").value.trim();
  if (message.length === 0) return alert("Écris quelque chose !");
  const key = `inbox_${username}`;
  const inbox = JSON.parse(localStorage.getItem(key) || "[]");
  inbox.push(message);
  localStorage.setItem(key, JSON.stringify(inbox));
  alert("Message envoyé anonymement !");
  document.getElementById("message").value = "";
}
