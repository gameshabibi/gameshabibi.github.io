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
      price: 149,
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
    link: "https://www.igdb.com/games/life-is-strange-remastered",
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2vfw.webp",
    name: "Life is Strange Remastered",
    p: {
      genre: " Role-playing (RPG), Adventure",
      price: 129,
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

function renderGames(gameList) {
  let productHTML = "";
  gameList.forEach((element) => {
    productHTML += `<div class="game-card" data-name="${element.name}">
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
}

function renderServices(serviceList) {
  let serviceHTML = "";
  serviceList.forEach((element) => {
    serviceHTML += `<div class="game-card" data-name="${element.name}">
              <a href="${element.link}"><img src="${element.img}" alt="${element.name}" /></a>
              <h3>${element.name}</h3>
              <p>${element.p.genre} | &#8377;${element.p.price}</p>
              <button onclick="addToCart('${element.name}', ${element.p.price})">
                Add to Cart
              </button>
            </div>`;
  });
  const otherGrid = document.querySelector(".contain");
  let donateHTML = `<div class="game-card" data-name="Donation">
    <img src="donate2.png" alt="Donate" />
    <h3>Donate | Pay</h3>
    <p> <b>Amount</b> | <input type="number" id="donateAmount" min="1" value="10" style="width: 60px; padding: 2px; border-radius: 4px; border: 1px solid #00bfff; background: #23272a; color: #f3f3f3;"> ₹</p>
    <button onclick="addToCart('Donation', parseFloat(document.getElementById('donateAmount').value) || 10)">
      Donate
    </button>
  </div>`;
  otherGrid.innerHTML = donateHTML + serviceHTML;
}

function highlightGame(name) {
  const element = document.querySelector(`[data-name="${name}"]`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.classList.add("highlight");
    setTimeout(() => {
      element.classList.remove("highlight");
    }, 3000);
  }
}

function addToCart(game, price) {
  // console.log("addToCart called with", game, price);
  // Check if game already in cart, increment quantity
  const found = cart.find((item) => item.game === game);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ game, price, qty: 1 });
  }
  updateCartCount();
  updateGameInputField();
  showCartToast(`${game} added to cart!`);
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.textContent = count;
}

function updateGameInputField() {
  const gameInput = document.getElementById("gameInput");
  if (!gameInput) return;

  if (cart.length === 0) {
    gameInput.value = "";
    return;
  }

  // Format: Game Name x Qty
  const gameNames = cart.map((item) => `${item.game} x ${item.qty}`);
  gameInput.value = gameNames.join(", ");
}

function renderCart() {
  // console.log("renderCart called, cart:", cart);
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const imButton = document.querySelector('a[rel="im-checkout"]');
  if (!cartItems || !cartTotal) return;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";

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
    const newTip = parseFloat(tipInput.value) || 0;
    if (newTip < 0) {
      tip = 0;
      tipInput.value = 0;
      showCartToast("Tip cannot be negative!");
    } else {
      tip = newTip;
    }
    renderCart();
  }
}

function showCartModal() {
  crenderCart();
  const modal = document.getElementById("cartModal");
  if (modal) {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    // console.log("Cart modal shown");
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
  renderGames(games);
  renderServices(services);

  // Contact form (no JS handler, handled by Formspree)
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const applyTipBtn = document.getElementById("applyTipBtn");
  const searchBtn = document.getElementById("searchBtn");
  const searchResults = document.getElementById("searchResults");
  if (cartBtn) {
    cartBtn.addEventListener("click", function () {
      // console.log("Cart button clicked");
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

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase().trim();
      if (query === "") {
        searchResults.style.display = "none";
        return;
      }
      const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(query)
      );
      const filteredServices = services.filter((service) =>
        service.name.toLowerCase().includes(query)
      );
      const allMatches = [...filteredGames, ...filteredServices];
      if ("donation".toLowerCase().includes(query)) {
        allMatches.push({ name: "Donation" });
      }
      if (allMatches.length === 0) {
        searchResults.innerHTML = "<p>No matches found.</p>";
        searchResults.style.display = "block";
        return;
      }
      let html = "<ul>";
      allMatches.forEach((item) => {
        html += `<li onclick="highlightGame('${item.name}'); document.getElementById('searchResults').style.display='none';">${item.name}</li>`;
      });
      html += "</ul>";
      searchResults.innerHTML = html;
      searchResults.style.display = "block";
    });
  }
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
