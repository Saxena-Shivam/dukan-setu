document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("storeSetupForm");
  const logoInput = document.getElementById("storeLogo");
  const bannerInput = document.getElementById("storeBanner");

  function previewImage(input, previewId) {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.className = "preview-image";
        const previewContainer = document.getElementById(previewId);
        previewContainer.innerHTML = "";
        previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }

  logoInput.addEventListener("change", () =>
    previewImage(logoInput, "logoPreview")
  );
  bannerInput.addEventListener("change", () =>
    previewImage(bannerInput, "bannerPreview")
  );

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Here you would typically send this data to your server
    // For demonstration, we'll just log it to the console
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Simulate successful submission
    alert("Store setup completed successfully! Redirecting to KYC page...");
    // In a real application, you would redirect to the KYC page here
    window.location.href = "kyc.html";
  });
});
