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


//  REGISTRATION FORM VALIDATION 

document.addEventListener("DOMContentLoaded", function () {

    // Get the registration form.
    const registerForm = document.getElementById("registerForm");

    // Get the input fields.
    const firstInput = document.getElementById("first");
    const lastInput = document.getElementById("last");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirm");
    const termsInput = document.getElementById("terms");

    // Get the general error message.
    const formError = document.getElementById("formError");


    // ==================== HELPER FUNCTION ====================

    // Display an error or mark a field as valid.
    function setFieldState(input, errorId, isValid, message) {

        const errorElement = document.getElementById(errorId);

        if (!isValid) {

            input.classList.add("is-invalid");
            input.classList.remove("is-valid");

            errorElement.textContent = message;

        } else {

            input.classList.remove("is-invalid");
            input.classList.add("is-valid");

        }

        return isValid;
    }


    // ==================== FIRST NAME VALIDATION ====================

    function validateFirstName() {

        const firstName = firstInput.value.trim();

        if (firstName === "") {

            return setFieldState(
                firstInput,
                "firstError",
                false,
                "First name is required."
            );

        }

        return setFieldState(
            firstInput,
            "firstError",
            true,
            ""
        );
    }


    // ==================== LAST NAME VALIDATION ====================

    function validateLastName() {

        const lastName = lastInput.value.trim();

        if (lastName === "") {

            return setFieldState(
                lastInput,
                "lastError",
                false,
                "Last name is required."
            );

        }

        return setFieldState(
            lastInput,
            "lastError",
            true,
            ""
        );
    }


    // ==================== EMAIL VALIDATION ====================

    function validateEmail() {

        const email = emailInput.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            return setFieldState(
                emailInput,
                "emailError",
                false,
                "Email address is required."
            );

        }

        if (!emailPattern.test(email)) {

            return setFieldState(
                emailInput,
                "emailError",
                false,
                "Please enter a valid email address."
            );

        }

        return setFieldState(
            emailInput,
            "emailError",
            true,
            ""
        );
    }


    // ==================== PHONE NUMBER VALIDATION ====================

    function validatePhone() {

        const phone = phoneInput.value.trim();

        // Accept 09XXXXXXXXX or +639XXXXXXXXX.
        const phonePattern = /^(09\d{9}|\+639\d{9})$/;

        if (phone === "") {

            return setFieldState(
                phoneInput,
                "phoneError",
                false,
                "Mobile number is required."
            );

        }

        if (!phonePattern.test(phone)) {

            return setFieldState(
                phoneInput,
                "phoneError",
                false,
                "Use a valid PH mobile number, like 09171234567 or +639171234567."
            );

        }

        return setFieldState(
            phoneInput,
            "phoneError",
            true,
            ""
        );
    }


    // ==================== PASSWORD VALIDATION ====================

    function validatePassword() {

        const password = passwordInput.value;

        if (password.trim() === "") {

            return setFieldState(
                passwordInput,
                "passwordError",
                false,
                "Password is required."
            );

        }

        if (password.length < 8) {

            return setFieldState(
                passwordInput,
                "passwordError",
                false,
                "Password must be at least 8 characters."
            );

        }

        return setFieldState(
            passwordInput,
            "passwordError",
            true,
            ""
        );
    }


    // ==================== CONFIRM PASSWORD VALIDATION ====================

    function validateConfirmPassword() {

        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        if (confirmPassword === "") {

            return setFieldState(
                confirmInput,
                "confirmError",
                false,
                "Please confirm your password."
            );

        }

        if (password !== confirmPassword) {

            return setFieldState(
                confirmInput,
                "confirmError",
                false,
                "Passwords do not match."
            );

        }

        return setFieldState(
            confirmInput,
            "confirmError",
            true,
            ""
        );
    }


    // ==================== TERMS VALIDATION ====================

    function validateTerms() {

        const isChecked = termsInput.checked;

        if (!isChecked) {

            termsInput.classList.add("is-invalid");
            termsInput.classList.remove("is-valid");

            return false;
        }

        termsInput.classList.remove("is-invalid");
        termsInput.classList.add("is-valid");

        return true;
    }


    // ==================== REAL-TIME VALIDATION ====================

    // Validate names while the user types.
    firstInput.addEventListener("input", function () {

        validateFirstName();
        hideGeneralError();

    });

    lastInput.addEventListener("input", function () {

        validateLastName();
        hideGeneralError();

    });


    // Validate email while the user types.
    emailInput.addEventListener("input", function () {

        validateEmail();
        hideGeneralError();

    });


    // Validate phone number while the user types.
    phoneInput.addEventListener("input", function () {

        validatePhone();
        hideGeneralError();

    });


    // Validate password while the user types.
    passwordInput.addEventListener("input", function () {

        validatePassword();

        // Recheck confirmation when the original password changes.
        if (confirmInput.value !== "") {
            validateConfirmPassword();
        }

        hideGeneralError();

    });


    // Validate confirmation while the user types.
    confirmInput.addEventListener("input", function () {

        validateConfirmPassword();
        hideGeneralError();

    });


    // Validate terms when the checkbox changes.
    termsInput.addEventListener("change", function () {

        validateTerms();
        hideGeneralError();

    });


    // ==================== GENERAL ERROR MESSAGE ====================

    function hideGeneralError() {

        formError.classList.add("d-none");

    }


    // ==================== FORM SUBMISSION ====================

    registerForm.addEventListener("submit", function (event) {

        // Prevent the default form submission.
        event.preventDefault();

        // Validate every field.
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isConfirmValid = validateConfirmPassword();
        const areTermsAccepted = validateTerms();


        // Check whether every field is valid.
        const isFormValid =
            isFirstNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isPhoneValid &&
            isPasswordValid &&
            isConfirmValid &&
            areTermsAccepted;


        if (isFormValid) {

            // Hide the general error message.
            formError.classList.add("d-none");

            // Redirect to the login page.
            window.location.href = "login.html";

        } else {

            // Display a general error message.
            formError.textContent =
                "Please complete all fields correctly before continuing.";

            formError.classList.remove("d-none");

            // Scroll to the first invalid field.
            const firstInvalidField =
                registerForm.querySelector(".is-invalid");

            if (firstInvalidField) {

                firstInvalidField.focus();

                firstInvalidField.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }

    });

});
