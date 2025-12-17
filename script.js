const services = [
  {
    link: "youtube.png",
    img: "youtube.png",
    name: "Youtube Premium",
    p: {
      genre: "background play,PIP",
      price: 59,
    },
  },

  {
    link: "netflix.png",
    img: "netflix.png",
    name: "Netflix Premium",
    p: {
      genre: "4k , 1 month",
      price: 59,
    },
  },
  {
    link: "finding.png",
    img: "finding.png",
    name: "Test Case (for dev)",
    p: {
      genre: "Testing",
      price: 2,
    },
  },
];

const games = [
  {
    link: "https://www.igdb.com/games/the-last-of-us",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.webp",
    name: "The last of us",
    p: {
      genre: "Shooter, Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/marvels-spider-man-miles-morales",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dwe.webp",
    name: "Spider Man Miles Morals",
    p: {
      genre: "Shooter, Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/the-witcher-3-wild-hunt",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
    name: "The Witcher 3: Wild Hunt",
    p: {
      genre: "Role-playing (RPG), Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/god-of-war--1",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png",
    name: "God of War",
    p: {
      genre: "Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/god-of-war-ragnarok",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp",
    name: "God of War Ragnarök",
    p: {
      genre: " Role-playing (RPG), Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/assassins-creed-shadows",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co87cu.webp",
    name: "Assassin's Creed Shadows",
    p: {
      genre: "Role-playing (RPG), Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/mafia-the-old-country",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9s2c.webp",
    name: "Mafia: The Old Country",
    p: {
      genre: "Shooter, Adventure",
      price: 169,
    },
  },
  {
    link: "https://www.igdb.com/games/wuchang-fallen-feathers",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9xif.webp",
    name: "Wuchang: Fallen Feathers",
    p: {
      genre: "Adventure",
      price: 149,
    },
  },
  {
    link: "https://www.igdb.com/games/marvels-spider-man-2",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co79vq.webp",
    name: "Marvel's Spider-Man 2",
    p: {
      genre: "Hack and slash/Beat 'em up, Adventure",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9751.webp",
    name: "Grand Theft Auto V",
    p: {
      genre: "offline only",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
    name: "Red Dead Redemption",
    p: {
      genre: "Adventure, Action",
      price: 99,
    },
  },
  {
    link: "https://www.igdb.com/games/stellar-blade",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9s0t.webp",
    name: "Stellar Blade",
    p: {
      genre: "Role-playing (RPG)",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2a23.webp",
    name: "Sekiro: Shadows Die Twice",
    p: {
      genre: "Action-Adventure",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7lbb.webp",
    name: "Tekken 8",
    p: {
      genre: "Fighting",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
    name: "Elden Ring",
    p: {
      genre: "Action RPG",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co21a6.webp",
    name: "Far Cry 5",
    p: {
      genre: "Adventure, Action",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7n02.webp",
    name: "Palworld",
    p: {
      genre: "Shooter, Role-playing (RPG)",
      price: 80,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9gam.webp",
    name: "Clair Obscur: Expedition 33",
    p: {
      genre: "Role-playing (RPG), (TBS)",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8uu1.webp",
    name: "Resident all variant",
    p: {
      genre: "Companion",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gn3.webp",
    name: "Hogwarts Legacy",
    p: {
      genre: "Role-playing (RPG), Adventure",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2p3j.webp",
    name: "WatchDogs 2",
    p: {
      genre: "Shooter, Adventure",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.webp",
    name: "Cyberpunk 2077",
    p: {
      genre: "Shooter, Role-playing (RPG), Adventure",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wkl.webp",
    name: "Call of Duty: Black Ops",
    p: {
      genre: "First-person shooter",
      price: 139,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3cwt.webp",
    name: "Call of Duty: Modern Warfare 2",
    p: {
      genre: "First-person shooter",
      price: 129,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp",
    name: "The Last of Us Part II",
    p: {
      genre: "Action-Adventure",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofx.webp",
    name: "Forza horizon 5",
    p: {
      genre: "Racing",
      price: 149,
    },
  },
  {
    link: "#",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8h3y.webp",
    name: "Black Myth: Wukong",
    p: {
      genre: "Action RPG",
      price: 149,
    },
  },
];

//mine upwards ;
let cart = [];
let tip = 0;

function addToCart(game, price) {
  console.log("addToCart called with", game, price);
  // Check if game already in cart, increment quantity
  const found = cart.find((item) => item.game === game);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ game, price, qty: 1 });
  }
  updateCartCount();
  showCartToast(`${game} added to cart!`);
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.textContent = count;
}

function renderCart() {
  console.log("renderCart called, cart:", cart);
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const imButton = document.querySelector('a[rel="im-checkout"]');
  if (!cartItems || !cartTotal) return;
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";
    // Disable Instamojo button if cart is empty
    if (imButton) {
      imButton.style.pointerEvents = "none";
      imButton.style.opacity = "0.5";
      imButton.setAttribute("data-text", "Add items to cart");
    }
    return;
  }
  let html = "";
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    html += `<div class="cart-item">${item.game} x ${item.qty} <span>₹${(
      item.price * item.qty
    ).toFixed(
      2
    )}</span> <button class="remove-btn" onclick="removeFromCart(${idx})">Remove</button></div>`;
  });
  cartItems.innerHTML = html;
  cartTotal.textContent = `Total: ₹${(total + tip).toFixed(2)}`;
  // Enable Instamojo button and update label with total
  if (imButton) {
    imButton.style.pointerEvents = "auto";
    imButton.style.opacity = "1";
    imButton.setAttribute("data-text", `Pay ₹${(total + tip).toFixed(2)}`);
  }
  // Generate QR Code for payment
  generateQRCode(total + tip);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
  updateCartCount();
}

function clearCart() {
  cart = [];
  tip = 0;
  renderCart();
  updateCartCount();
}

function applyTip() {
  const tipInput = document.getElementById("tipAmount");
  if (tipInput) {
    tip = parseFloat(tipInput.value) || 0;
    renderCart();
  }
}

function showCartModal() {
  console.log("showCartModal called, cart length:", cart.length);
  renderCart();
  const modal = document.getElementById("cartModal");
  if (modal) {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    console.log("Cart modal shown");
  } else {
    console.error("Cart modal not found in DOM");
  }
}

function hideCartModal() {
  const modal = document.getElementById("cartModal");
  if (modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  }
}

function showCartToast(msg) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (container.contains(toast)) container.removeChild(toast);
    }, 300);
  }, 3000);
}

// Contact form handler and cart modal events
document.addEventListener("DOMContentLoaded", function () {
  let productHTML = "";

  games.forEach((element) => {
    productHTML += `<div class="game-card">
        <a
          target="_blank"
          href= ${element.link}
        >
          <img
            src= ${element.img}
            alt= ${element.name}
          />
        </a>
        <h3>${element.name}</h3>
        <p>${element.p.genre} | &#8377;${element.p.price}</p>
        <button onclick="addToCart('${element.name}', ${element.p.price})">
          Add to Cart
        </button>
      </div>`;
  });

  const htmlGrid = document.querySelector(".games-grid");
  htmlGrid.innerHTML = productHTML;

  let serviceHTML = "";

  services.forEach((element) => {
    serviceHTML += `<div class="game-card">
              <a href="${element.link}"><img src="${element.img}" alt="${element.name}" /></a>
              <h3>${element.name}</h3>
              <p>${element.p.genre} | &#8377;${element.p.price}</p>
              <button onclick="addToCart('${element.name}', ${element.p.price})">
                Add to Cart
              </button>
            </div>`;
  });

  const otherGrid = document.querySelector(".contain");
  otherGrid.innerHTML = serviceHTML;

  // Contact form (no JS handler, handled by Formspree)
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const applyTipBtn = document.getElementById("applyTipBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", function () {
      console.log("Cart button clicked");
      showCartModal();
    });
  }
  if (closeCart) closeCart.addEventListener("click", hideCartModal);
  if (cartModal)
    cartModal.addEventListener("click", function (e) {
      if (e.target === cartModal) hideCartModal();
    });
  if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);
  if (applyTipBtn) applyTipBtn.addEventListener("click", applyTip);
  updateCartCount();

  // Animate fade-in sections on scroll
  const fadeSections = document.querySelectorAll(".fade-section, .fade-in");
  function handleFadeIn() {
    fadeSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        section.classList.add("visible");
      }
    });
  }
  handleFadeIn();
  window.addEventListener("scroll", handleFadeIn);
});
