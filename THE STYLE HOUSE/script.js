function openProduct(element) {
    const card = element.closest(".product-card");
    const imgSrc = card.querySelector("img").src;
  
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("productModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("productModal").style.display = "none";
  }
  
  function addToCart() {
    alert("Product added to cart!");
  }
  
  function placeOrder() {
    alert("Order placed successfully!");
  }
  
  function enquire() {
    alert("We'll contact you shortly with more information.");
  }
  const products = {
    'mens-suits': [
        { name: 'Azure Prestige Suit', img: 'Azure Prestige Suit.jpg' },
        { name: 'Classic Authority Set', img: 'Classic Authority Set.jpg' },
        { name: 'Crimson Authority Suit', img: 'Crimson Authority Suit.jpg' },
        { name: 'Midnight Authority ', img: 'Midnight Authority Suit.jpg' },
    ],
    'tuxedos': [
        { name: 'Midnight Prestige Tuxedo', img: 'Midnight Prestige Tuxedo.jpg' },
        { name: 'The Apex Noir Tuxedo', img: 'The Apex Noir Tuxedo.jpg' },
    ],
    'womens-suits': [
        { name: 'Blazer Set Solid Casual', img: 'Blazer set solid casual (2).jpg' },
        { name: 'Blush Power Elegance Suit', img: 'Blush Power Elegance Suit.jpg' },
        { name: 'Ladies Blazer', img: "Ladies' Blazer.jpg" },
        { name: 'Ladies Blazer', img: "V-neck pleated midi suit (2).jpg" },
    ],
};

function openCategory(category) {
    const gallery = document.getElementById('category-gallery');
    gallery.classList.remove('hidden');
    gallery.innerHTML = `
        <h2>${category.replace('-', ' ').toUpperCase()}</h2>
        <div class="tile-grid">
            ${products[category].map(product => `
                <div class="product-tile">
                    <a href="products.html#${product.name.replace(/\s+/g, '-').toLowerCase()}">
                        <img src="${product.img}" alt="${product.name}">
                        <p>${product.name}</p>
                    </a>
                </div>
            `).join('')}
        </div>
    `;
}
  