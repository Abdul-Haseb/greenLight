const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Grab input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !telephone) {
    alert("Please fill in all fields.");
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // (Optional) Telephone format check
  const phonePattern = /^[0-9+\-\s()]{7,20}$/;
  if (!phonePattern.test(telephone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  // If passed, handle submission (e.g., AJAX or EmailJS)
  alert("Form submitted successfully!");

  // Optional: Clear form
  form.reset();
});
