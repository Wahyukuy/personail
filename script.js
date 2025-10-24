// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Admin toggle
const adminToggle = document.getElementById('adminToggle');
const adminPanel = document.getElementById('adminPanel');

adminToggle.addEventListener('click', () => {
  adminPanel.style.display = adminPanel.style.display === 'none' ? 'block' : 'none';
});

// Simpan perubahan
function simpanPerubahan() {
  const judulBaru = document.getElementById('judulBaru').value;
  const deskripsiBaru = document.getElementById('deskripsiBaru').value;
  const gambarBaru = document.getElementById('gambarBaru').value;

  // Ubah kegiatan pertama
  const kegiatanPertama = document.querySelector('.kegiatan-item h3');
  const deskripsiPertama = document.querySelector('.kegiatan-item p');
  if (judulBaru) kegiatanPertama.textContent = judulBaru;
  if (deskripsiBaru) deskripsiPertama.textContent = deskripsiBaru;

  // Ganti gambar pertama di galeri
  const gambarGaleri = document.querySelector('#galeri img');
  if (gambarBaru) gambarGaleri.src = gambarBaru;

  alert("Perubahan berhasil disimpan!");
}
