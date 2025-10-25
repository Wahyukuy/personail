// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
document.getElementById("Galeri").addEventListener("click", function () {
  window.location.href = "halaman2.html";
});
