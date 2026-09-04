// ===============================
// MOBILE MENU
// ===============================

const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();

  navbarNav.classList.toggle("active");
});

// ===============================
// CLOSE MENU WHEN CLICK LINK
// ===============================

document.querySelectorAll(".navbar-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    navbarNav.classList.remove("active");
  });
});

// ===============================
// FORM TO WHATSAPP
// ===============================

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.querySelector("#nama").value.trim();
  const nomor = document.querySelector("#nomor").value.trim();
  const lokasi = document.querySelector("#lokasi").value.trim();
  const pesan = document.querySelector("#pesan").value.trim();

  if (!nama || !nomor || !pesan) {
    alert("Mohon lengkapi nama, nomor WhatsApp dan kebutuhan Anda.");

    return;
  }

  const whatsappNumber = "6281288836104";

  const message =
    `Halo SURYA TEKNIK,%0A%0A` +
    `Saya ingin konsultasi mengenai water heater.%0A%0A` +
    `Nama: ${nama}%0A` +
    `No. WhatsApp: ${nomor}%0A` +
    `Lokasi: ${lokasi || "-"}%0A` +
    `Kebutuhan: ${pesan}%0A%0A` +
    `Mohon informasi dan estimasi untuk kebutuhannya. Terima kasih.`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 30px rgba(0,0,0,0.10)";
  } else {
    navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";
  }
});
