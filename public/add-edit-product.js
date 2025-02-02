document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  const imageInput = document.getElementById("productImage");
  const imagePreview = document.getElementById("imagePreview");
  const pageTitle = document.getElementById("pageTitle");

  // Check if we're editing an existing product
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    pageTitle.textContent = "Edit Product";
    // TODO: Fetch product data and populate form
    // For demonstration, we'll use mock data
    populateForm({
      id: productId,
      name: "Sample Product",
      description: "This is a sample product description.",
      price: 19.99,
      category: "electronics",
      inventory: 100,
      sku: "SAMPLE-001",
    });
  }

  function populateForm(product) {
    document.getElementById("productName").value = product.name;
    document.getElementById("productDescription").value = product.description;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productInventory").value = product.inventory;
    document.getElementById("productSKU").value = product.sku;
  }

  imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        imagePreview.innerHTML = "";
        imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

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
      productId
        ? "Product updated successfully!"
        : "Product added successfully!"
    );
    window.location.href = "catalog.html";
  });
});
