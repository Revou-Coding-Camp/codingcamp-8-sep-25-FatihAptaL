// Saat halaman selesai dimuat
window.onload = function() {
  // Minta nama user
  let nama = prompt("Selamat datang di FAL Café! Siapa nama Anda?");
  
  // Tampilkan ke span
  if (nama) {
    document.getElementById("username").textContent = nama;
  } else {
    document.getElementById("username").textContent = "Pengunjung";
  }
};
