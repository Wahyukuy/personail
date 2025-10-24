// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
header {
  background: #e74c3c;
  color: white;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo-kiri img,
.logo-kanan img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.judul {
  text-align: center;
  flex: 1;
}

.judul h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}
