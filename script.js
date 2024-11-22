function calculateDownloadTime() {
  const speed = document.getElementById("speed").value; // kecepatan dalam Mbps
  const fileSize = document.getElementById("fileSize").value; // ukuran file dalam GB

  if (speed > 0 && fileSize > 0) {
    // Konversi ukuran file dari GB ke Megabit (1 GB = 8,000 Megabit)
    const fileSizeInMegabit = fileSize * 8000;

    // Hitung waktu download dalam detik
    const timeInSeconds = fileSizeInMegabit / speed;

    // Konversi waktu ke format jam, menit, dan detik
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    // Tampilkan hasil
    document.getElementById(
      "result"
    ).innerText = `Waktu Download: ${hours} jam, ${minutes} menit, ${seconds} detik`;
  } else {
    document.getElementById("result").innerText =
      "Harap masukkan nilai yang valid.";
  }
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Perbarui setiap detik
updateClock(); // Panggil fungsi pertama kali
