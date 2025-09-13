document.addEventListener("DOMContentLoaded", function () {
  // Prompt nama user
  let username = prompt("Selamat datang di FAL Café! Siapa nama Anda?");
  if (username) {
    document.getElementById("username").textContent = username;
  }

  // Hamburger menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Form handling
  const form = document.getElementById("messageForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    document.getElementById("resultName").textContent = "Nama: " + name;
    document.getElementById("resultDate").textContent = "Tanggal: " + birthdate;
    document.getElementById("resultGender").textContent = "Jenis Kelamin: " + gender;
    document.getElementById("resultMessage").textContent = "Pesan: " + message;

    form.reset();
  });
});
