// Prompt untuk nama user
document.addEventListener("DOMContentLoaded", function () {
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
  const form = document.querySelector("form");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = form.querySelector("input[type='text']").value;
    const tanggal = form.querySelector("input[type='date']").value;
    const gender = form.querySelector("select").value;
    const pesan = form.querySelector("textarea").value;

    result.innerHTML = `
      <h3>Data Input</h3>
      <p>Nama: ${nama}</p>
      <p>Tanggal: ${tanggal}</p>
      <p>Jenis Kelamin: ${gender}</p>
      <p>Pesan: ${pesan}</p>
    `;
  });
});

//Form Message Us
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    // Update hasil
    document.getElementById("resultName").textContent = "Nama: " + name;
    document.getElementById("resultDate").textContent = "Tanggal: " + birthdate;
    document.getElementById("resultGender").textContent = "Jenis Kelamin: " + gender;
    document.getElementById("resultMessage").textContent = "Pesan: " + message;
    form.reset();
  });
});
