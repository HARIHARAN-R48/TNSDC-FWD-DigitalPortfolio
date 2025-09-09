// Animate skills on load
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-fill").forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level;
  });
});

// Contact form validation + mailto
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email.includes("@")) {
    alert("❌ Please enter a valid email address with @");
    return;
  }
  const mailtoLink = 
    "mailto:harishrx48@gmail.com" +
    "?subject=Portfolio Contact from " + encodeURIComponent(name) +
    "&body=From: " + encodeURIComponent(email) + "%0D%0A%0D%0A" + encodeURIComponent(message);
  window.location.href = mailtoLink;
});

// Calculator functions
function appendCalc(value) {
  document.getElementById("calcDisplay").value += value;
}
function clearCalc() {
  document.getElementById("calcDisplay").value = "";
}
function calculate() {
  try {
    document.getElementById("calcDisplay").value = 
      eval(document.getElementById("calcDisplay").value);
  } catch {
    document.getElementById("calcDisplay").value = "Error";
  }
}
