document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    document.getElementById('confirmation').textContent = "Merci pour votre message, " + name + " !";
    this.reset();
  } else {
    document.getElementById('confirmation').textContent = "Veuillez remplir tous les champs.";
  }
});