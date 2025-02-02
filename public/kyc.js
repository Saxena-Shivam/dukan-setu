document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kycForm");
  const gstInput = document.getElementById("gstCertificate");
  const idInput = document.getElementById("idProof");

  function previewFile(input, previewId) {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const preview = document.getElementById(previewId);
        preview.innerHTML = file.name;
      };
      reader.readAsDataURL(file);
    }
  }

  gstInput.addEventListener("change", () =>
    previewFile(gstInput, "gstPreview")
  );
  idInput.addEventListener("change", () => previewFile(idInput, "idPreview"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Here you would typically send this data to your server
    // For demonstration, we'll just log it to the console
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Simulate successful submission
    alert(
      "KYC documents submitted successfully! Your verification is in progress."
    );
    document.getElementById("verificationStatus").value = "In Progress";
  });
});
