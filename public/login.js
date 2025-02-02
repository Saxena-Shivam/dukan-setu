document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Here you would typically send this data to your server for authentication
    console.log("Login data:", data);

    // Simulate successful login
    messageDiv.textContent = "Login successful! Redirecting to dashboard...";
    messageDiv.className = "success";

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      window.location.href = "dashboard.html"; // You'll need to create this page
    }, 2000);
  });
});
