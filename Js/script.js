// ===== Prompt untuk Nama User =====
const userName = prompt("Selamat datang di FAL Café! Siapa nama Anda?");
const usernameSpan = document.getElementById("username");
if (userName && usernameSpan) {
  usernameSpan.textContent = userName;
}

// ===== Navbar Toggle untuk Mobile =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Form Handling =====
const form = document.getElementById("messageForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;

  // Tampilkan hasil ke #formResult
  document.getElementById("resultName").textContent = "Nama: " + name;
  document.getElementById("resultDate").textContent = "Tanggal: " + birthdate;
  document.getElementById("resultGender").textContent = "Jenis Kelamin: " + gender;
  document.getElementById("resultMessage").textContent = "Pesan: " + message;

  // Reset form setelah submit
  form.reset();
});
