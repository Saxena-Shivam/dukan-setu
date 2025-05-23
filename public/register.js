document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const otpSection = document.getElementById("otpSection");
  const submitButton = document.getElementById("submitButton");
  const messageDiv = document.getElementById("message");

  let otpSent = false;
  let otpCode = ""; // Placeholder for OTP code

  // Function to generate and log a random OTP
  const generateOtp = () => {
    otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // Random 6-digit OTP
    console.log(`Generated OTP: ${otpCode}`); // Log OTP to the console
  };

  // Function to verify the OTP entered by the user
  const verifyOtp = (inputOtp) => {
    return inputOtp === otpCode;
  };

  // Function to send an email using EmailJS
  const sendEmail = (email, otp) => {
    console.log(`Sending OTP to: ${email}`); // Log email for debugging
    emailjs
      .send(
        "service_8t6uzrs",
        "template_6yzlwqd",
        {
          to_email: email,
          otp_code: otp,
        },
        "krK8aMcCialHJq2x2"
      )
      .then(
        (response) => {
          // Successfully sent the email
          console.log("Email sent successfully:", response);
          messageDiv.textContent = "OTP sent to your email address.";
          messageDiv.className = "success";
        },
        (error) => {
          // Error occurred in sending email
          console.error("Error sending email:", error);
          messageDiv.textContent = "Failed to send OTP. Please try again.";
          messageDiv.className = "error";
        }
      )
      .catch((error) => {
        // Log any uncaught errors
        console.error("Unexpected error:", error);
        messageDiv.textContent =
          "An unexpected error occurred. Please try again.";
        messageDiv.className = "error";
      });
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector("#email");
    const otpInput = form.querySelector("#otpInput");

    if (!otpSent) {
      // Generate OTP and log it to the console
      generateOtp();

      // Send OTP to the email
      const email = emailInput.value; // Get the email from the form
      sendEmail(email, otpCode); // Call the function to send the OTP to the provided email

      // Simulate sending OTP (this part is where you would actually send it to a mobile number)
      otpSent = true;
      otpSection.style.display = "block";

      // Dynamically add the 'required' attribute to OTP input
      otpInput.setAttribute("required", "true");

      submitButton.textContent = "Verify OTP & Register";
      messageDiv.textContent = "OTP sent to your email address.";
      messageDiv.className = "success";
    } else {
      // If OTP has been sent, validate OTP input
      if (!verifyOtp(otpInput.value)) {
        messageDiv.textContent = "Invalid OTP. Please try again.";
        messageDiv.className = "error";
        return;
      }

      // Simulate registration process
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Send registration data to server (simulated here)
      console.log("Registration data:", data);

      // Simulate successful registration
      messageDiv.textContent =
        "Registration successful! Redirecting to login...";
      messageDiv.className = "success";

      // Redirect to login page after a short delay
      setTimeout(() => {
        window.location.href = "login.html";
      }, 500);
    }
  });
});
