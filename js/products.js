const products = [
  {
    id: 1,
    name: "Lifetime Essential Tee — Black",
    image: "assets/products/tee-black.jpg",
    priceUsd: 30,
    priceNgn: 45000,
    sizes: ["S", "M", "L", "XL"],
    category: "T-Shirt",
    frontDesign: "Logo on front",
    backText: "BUILT DIFFERENT.",
    description:
      "A clean black Lifetime essential tee with front logo identity and bold back message. Designed for premium everyday wear."
  },
  {
    id: 2,
    name: "Lifetime Signature Hoodie — Black",
    image: "assets/products/hoodie-black.jpg",
    priceUsd: 70,
    priceNgn: 105000,
    sizes: ["S", "M", "L", "XL"],
    category: "Hoodie",
    frontDesign: "Logo on front",
    backText: "FOREVER SOLID",
    description:
      "Heavyweight black hoodie with clean Lifetime front branding and strong back slogan. Built for street presence and comfort."
  },
  {
    id: 3,
    name: "Lifetime Essential Tee — White",
    image: "assets/products/tee-white.jpg",
    priceUsd: 35,
    priceNgn: 50000,
    sizes: ["S", "M", "L", "XL"],
    category: "T-Shirt",
    frontDesign: "Logo on front",
    backText: "STAY SOLID. MOVE DIFFERENT.",
    description:
      "White Lifetime tee with minimalist identity in front and signature phrase at the back. Strong, clean, and wearable."
  },
  {
    id: 4,
    name: "Lifetime Essential Hoodie — White",
    image: "assets/products/hoodie-white.jpg",
    priceUsd: 75,
    priceNgn: 112000,
    sizes: ["S", "M", "L", "XL"],
    category: "Hoodie",
    frontDesign: "Logo on front",
    backText: "BUILT DIFFERENT.",
    description:
      "Premium white hoodie made for a clean luxury streetwear direction with bold Lifetime attitude."
  },
  {
    id: 5,
    name: "Lifetime Cap — Black",
    image: "assets/products/cap-black.jpg",
    priceUsd: 20,
    priceNgn: 30000,
    sizes: ["One Size"],
    category: "Cap",
    frontDesign: "Logo on front",
    backText: "Minimal Brand Identity",
    description:
      "A clean black cap featuring Lifetime front branding. Simple, versatile, and easy to style."
  }
];

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

function formatNgn(amount) {
  return `₦${amount.toLocaleString()}`;
}

function formatUsd(amount) {
  return `$${amount.toLocaleString()}`;
}
