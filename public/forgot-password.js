document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgotPasswordForm");
  const otpSection = document.getElementById("otpSection");
  const submitButton = document.getElementById("submitButton");
  const messageDiv = document.getElementById("message");

  let otpSent = false;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!otpSent) {
      // Simulate sending OTP
      otpSent = true;
      otpSection.style.display = "block";
      submitButton.textContent = "Reset Password";
      messageDiv.textContent = "OTP sent to your mobile number or email.";
      messageDiv.className = "success";
    } else {
      // Simulate OTP verification and password reset
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Here you would typically send this data to your server for processing
      console.log("Password reset data:", data);

      // Simulate successful password reset
      messageDiv.textContent =
        "Password reset successful! Redirecting to login...";
      messageDiv.className = "success";

      // Redirect to login page after a short delay
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }
  });
});
