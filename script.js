document.querySelector(".explore-btn").addEventListener("click", () => {
  document.querySelector("#accommodations").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".book-btn").addEventListener("click", () => {
  document.querySelector("#booking-form").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".social-btn").addEventListener("click", () => {
  alert("Don't forget to tag us in your photos on Instagram, Facebook, or Twitter!");
});
function toggleMode() {
  const isDark = confirm("Would you like to switch to Dark Mode?");
  if (isDark) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

  
