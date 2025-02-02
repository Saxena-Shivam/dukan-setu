document.addEventListener("DOMContentLoaded", () => {
  // Simulated data - in a real application, this would come from a server
  const storeData = {
    storeLink: "https://mystore.dukaansetu.com",
    catalogStatus: "Active (25 products)",
    recentOrders: "5 new orders in the last 24 hours",
  };

  const notifications = [
    "Your store verification is pending. Please complete KYC.",
    "New feature: AI-based product image enhancement is now available!",
    "You have 2 orders awaiting shipment.",
  ];

  // Update store overview
  document.getElementById("storeLink").textContent = storeData.storeLink;
  document.getElementById("storeLink").href = storeData.storeLink;
  document.getElementById("catalogStatus").textContent =
    storeData.catalogStatus;
  document.getElementById("recentOrders").textContent = storeData.recentOrders;

  // Update notifications
  const notificationList = document.getElementById("notificationList");
  notificationList.innerHTML = "";
  notifications.forEach((notification) => {
    const li = document.createElement("li");
    li.textContent = notification;
    notificationList.appendChild(li);
  });
});
