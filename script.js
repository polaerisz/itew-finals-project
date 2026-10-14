// ==================== LOGIN FORM VALIDATION ====================

// Wait until the HTML document has loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Get the form elements.
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Get the validation message elements.
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formError = document.getElementById("formError");

  // ==================== EMAIL VALIDATION ====================

  function validateEmail() {
    // Remove unnecessary spaces at the beginning and end.
    const email = emailInput.value.trim();

    // Basic email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email field is empty.
    if (email === "") {
      emailError.textContent = "Email address is required.";

      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");

      return false;
    }

    // Check if the email format is invalid.
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";

      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");

      return false;
    }

    // The email is valid.
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");

    return true;
  }

  // ==================== PASSWORD VALIDATION ====================

  function validatePassword() {
    const password = passwordInput.value;

    // Check if the password is empty or contains only whitespace.
    if (password.trim() === "") {
      passwordError.textContent = "Password is required.";

      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");

      return false;
    }

    // Check whether the password has at least 8 characters.
    if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";

      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");

      return false;
    }

    // The password meets the length requirement.
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.add("is-valid");

    return true;
  }

  // ==================== REAL-TIME VALIDATION ====================

  // Validate the email when the user types.
  emailInput.addEventListener("input", function () {
    validateEmail();

    // Hide the general error while the user corrects the fields.
    formError.classList.add("d-none");
  });

  // Validate the password when the user types.
  passwordInput.addEventListener("input", function () {
    validatePassword();

    // Hide the general error while the user corrects the fields.
    formError.classList.add("d-none");
  });

  // ==================== FORM SUBMISSION ====================

  loginForm.addEventListener("submit", function (event) {
    // Prevent the browser from submitting the form immediately.
    event.preventDefault();

    // Validate both fields.
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Check whether both fields are valid.
    if (isEmailValid && isPasswordValid) {
      // Hide any previous general error.
      formError.classList.add("d-none");

      // Redirect to the homepage.
      window.location.href = "homepage.html";
    } else {
      // Show the general error message.
      formError.textContent = "Please correct the errors above.";

      formError.classList.remove("d-none");
    }
  });
});
