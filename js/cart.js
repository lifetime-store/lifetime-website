
function getCart() {
  return JSON.parse(localStorage.getItem("lifetimeCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("lifetimeCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const countEls = document.querySelectorAll("#cart-count");
  countEls.forEach((el) => {
    el.textContent = cart.length;
  });
}

function addToCart(productId, selectedSize = null) {
  const cart = getCart();
  const product = getProductById(productId);

  if (!product) return;

  if (!selectedSize) {
    const sizeSelect = document.getElementById(`size-${productId}`);
    selectedSize = sizeSelect ? sizeSelect.value : product.sizes[0];
  }

  cart.push({
    productId: product.id,
    size: selectedSize
  });

  saveCart(cart);
  alert(`${product.name} added to cart.`);
}

function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartItems();
}

function clearCart() {
  localStorage.removeItem("lifetimeCart");
  updateCartCount();
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  const totalUsdEl = document.getElementById("cart-total-usd");
  const totalNgnEl = document.getElementById("cart-total-ngn");

  if (!container || !totalUsdEl || !totalNgnEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>Your cart is empty</h2>
        <p>Add products from the shop to continue.</p>
        <a class="btn btn-light" href="shop.html">Go to Shop</a>
      </div>
    `;
    totalUsdEl.textContent = "$0";
    totalNgnEl.textContent = "₦0";
    return;
  }

  let totalUsd = 0;
  let totalNgn = 0;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    const product = getProductById(item.productId);
    if (!product) return;

    totalUsd += product.priceUsd;
    totalNgn += product.priceNgn;

    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
      <img class="cart-item-image" src="${product.image}" alt="${product.name}" />

      <div>
        <h3>${product.name}</h3>
        <p><strong>Size:</strong> ${item.size}</p>
        <p><strong>USD:</strong> ${formatUsd(product.priceUsd)}</p>
        <p><strong>NGN:</strong> ${formatNgn(product.priceNgn)}</p>
      </div>

      <div>
        <button class="small-btn" onclick="removeCartItem(${index})">Remove</button>
      </div>
    `;

    container.appendChild(row);
  });

  totalUsdEl.textContent = formatUsd(totalUsd);
  totalNgnEl.textContent = formatNgn(totalNgn);
}

updateCartCount();
renderCartItems();
