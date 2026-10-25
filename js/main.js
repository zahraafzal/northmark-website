// Simple Add to Cart
const addButtons = document.querySelectorAll(".add-btn");
addButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Product added to bag!");
  });
});

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    alert("Thank you for subscribing! Check your email for 10% off code.");
    this.reset();
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Connect frontend to Node.js backend (Production)
const API_URL = "https://northmark-api.onrender.com/api";

async function loadProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();

    console.log("✅ Products from Node.js backend:", data.products);
    console.log(`📦 Total products: ${data.count}`);
  } catch (error) {
    console.error("❌ Backend connection failed:", error);
  }
}

loadProducts();
