// SLIDEBAR START
var firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 2000);
  var pics;
  const img = document.querySelectorAll("img");
  for (pics = 0; pics < img.length; pics++) {
    img[pics].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > img.length) {
    firstIndex = 1;
  }
  img[firstIndex - 1].style.display = "block";
}
automaticSlide();

// SLIDEBAR END

// LOGIN Popup
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const btnClose = document.querySelector(".btn-close");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

btnClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
// LOGIN END

// Verifikasi Login
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "admin@gmail.com" && password === "admin123") {
    // Login berhasil
    alert("Login berhasil!");

    // Refresh halaman setelah 1 detik
    setTimeout(() => {
      window.location.reload(); // Refresh halaman
    }, 1000);
  } else {
    // Login gagal
    alert("Email atau password salah!");
  }
});
// Verifikasi Login END
