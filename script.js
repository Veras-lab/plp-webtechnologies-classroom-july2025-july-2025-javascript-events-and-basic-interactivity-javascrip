// =============================
// 🎉 PART 1: Event Handling
// =============================

// When you click the "Toggle" button, switch between dark and light mode
document.getElementById("themeToggle").addEventListener("click", () => {
  // This adds/removes a class from the body to change its color
  document.body.classList.toggle("dark-mode");
});

// =============================
// 🎮 PART 2: Interactive Features
// =============================

// ---- Counter Game ----
let count = 0; // start at 0
const countDisplay = document.getElementById("countDisplay");

// When the + button is clicked, add 1
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// When the reset button is clicked, go back to 0
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// ---- FAQ Section ----
// Get all the questions
const faqQuestions = document.querySelectorAll(".faq-question");

// For each question, add a click event
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling; // this is the answer under the question
    // Show the answer if it’s hidden, or hide it if it’s showing
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =============================
// 📋 PART 3: Form Validation
// =============================

// When the form is submitted, check if the answers are correct
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop the page from refreshing

  let valid = true; // assume everything is good

  // ---- Name validation ----
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // ---- Email validation ----
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // simple check for email
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // ---- Password validation ----
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // ---- Final check ----
  const formMessage = document.getElementById("formMessage");
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
