document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");

  // Simulated product data - in a real application, this would come from a server
  const products = [
    { id: 1, name: "Product 1", price: 19.99, stock: "In Stock" },
    { id: 2, name: "Product 2", price: 29.99, stock: "Low Stock" },
    { id: 3, name: "Product 3", price: 39.99, stock: "Out of Stock" },
  ];

  function renderProducts() {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";
      productItem.innerHTML = `
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Stock: ${product.stock}</p>
                </div>
                <div class="product-actions">
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            `;
      productList.appendChild(productItem);
    });
  }

  renderProducts();

  // These functions would typically interact with a server
  window.editProduct = (id) => {
    window.location.href = `add-edit-product.html?id=${id}`;
  };

  window.deleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      // Here you would typically send a delete request to your server
      console.log(`Deleting product with id ${id}`);
      // For demonstration, we'll just remove it from the array
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products.splice(index, 1);
        renderProducts();
      }
    }
  };
});
