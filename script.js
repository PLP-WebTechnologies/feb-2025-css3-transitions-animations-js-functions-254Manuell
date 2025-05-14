// Apply saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Toggle theme and save to localStorage
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Trigger animation on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const btn = document.getElementById("animateBtn");
  btn.classList.add("animate");

  // Remove animation class after it completes
  btn.addEventListener("animationend", () => {
    btn.classList.remove("animate");
  }, { once: true });
});
