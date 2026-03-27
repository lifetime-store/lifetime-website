function renderProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" />
      </div>

      <h3>${product.name}</h3>

      <div class="product-meta">
        <div class="product-price">
          ${formatUsd(product.priceUsd)}
          <small>${formatNgn(product.priceNgn)}</small>
        </div>
        <span class="badge">${product.category}</span>
      </div>

      <p class="product-slogan">${product.backText}</p>

      <select class="size-select" id="size-${product.id}">
        ${product.sizes
          .map((size) => `<option value="${size}">Size: ${size}</option>`)
          .join("")}
      </select>

      <div class="product-actions">
        <a class="btn btn-outline" href="product.html?id=${product.id}">View</a>
        <button class="btn btn-light" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderProductDetail() {
  const detailContainer = document.getElementById("product-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = getProductById(productId);

  if (!product) {
    detailContainer.innerHTML = `
      <div class="empty-state">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <a class="btn btn-light" href="shop.html">Back to Shop</a>
      </div>
    `;
    return;
  }

  detailContainer.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>

    <div class="product-detail-info">
      <span class="badge">${product.category}</span>
      <h1>${product.name}</h1>
      <p><strong>USD:</strong> ${formatUsd(product.priceUsd)}</p>
      <p><strong>NGN:</strong> ${formatNgn(product.priceNgn)}</p>
      <p><strong>Front:</strong> ${product.frontDesign}</p>
      <p><strong>Back:</strong> ${product.backText}</p>
      <p>${product.description}</p>

      <div class="form-group">
        <label for="detail-size">Select Size</label>
        <select id="detail-size" class="size-select">
          ${product.sizes
            .map((size) => `<option value="${size}">${size}</option>`)
            .join("")}
        </select>
      </div>

      <div class="product-actions">
        <button class="btn btn-light" onclick="addToCart(${product.id}, document.getElementById('detail-size').value)">Add to Cart</button>
        <a class="btn btn-outline" href="shop.html">Continue Shopping</a>
      </div>
    </div>
  `;
}

function submitOrder() {
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const address = document.getElementById("address")?.value.trim();

  if (!name || !email || !phone || !address) {
    alert("Please fill in all checkout fields.");
    return;
  }

  alert("Order submitted successfully. Live payment integration will be added next.");
  localStorage.removeItem("lifetimeCart");
  window.location.href = "index.html";
}

renderProducts();
renderProductDetail();
