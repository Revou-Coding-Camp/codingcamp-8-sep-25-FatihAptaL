// Ganti nama user di banner
window.onload = function () {
  let nama = prompt("Selamat datang di FAL Café! Siapa nama Anda?");
  if (nama) {
    document.getElementById("username").textContent = nama;
  } else {
    document.getElementById("username").textContent = "Pengunjung";
  }
};

// Ambil data dari form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const resultNama = document.getElementById("resultNama");
  const resultTanggal = document.getElementById("resultTanggal");
  const resultGender = document.getElementById("resultGender");
  const resultPesan = document.getElementById("resultPesan");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.getElementById("gender").value;
    const pesan = document.getElementById("pesan").value;

    resultNama.textContent = "Nama: " + nama;
    resultTanggal.textContent = "Tanggal: " + tanggal;
    resultGender.textContent = "Jenis Kelamin: " + gender;
    resultPesan.textContent = "Pesan: " + pesan;

    [resultNama, resultTanggal, resultGender, resultPesan].forEach(el => {
      el.classList.remove("fade-in");
      void el.offsetWidth;
      el.classList.add("fade-in");
    });

    // tampilkan alert sukses
    successMsg.classList.remove("hidden");
    successMsg.classList.add("show");

    setTimeout(() => {
      successMsg.classList.remove("show");
      setTimeout(() => successMsg.classList.add("hidden"), 600);
    }, 3000);

    form.reset();
  });
});
