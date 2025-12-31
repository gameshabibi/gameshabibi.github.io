let cart = [];
let tip = 0;

function disableSubmit() {
  const btn = document.getElementById("orderSubmitBtn");
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.pointerEvents = "none";
  }
}

function playErrorFeedback() {
  try {
    const audio = new Audio("/audio/error.wav");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  } catch (e) {
    console.warn("Error sound failed");
  }

  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

function enableSubmit() {
  const btn = document.getElementById("orderSubmitBtn");
  if (btn) {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  }
}

function playSuccessFeedback() {
  try {
    const audio = new Audio("/audio/succ.wav");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  } catch (e) {
    console.warn("Success sound failed");
  }

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}

function renderGames(gameList) {
  let productHTML = "";

  gameList.forEach((element) => {
    const hasVariants = element.p.variants && element.p.variants.length > 0;

    productHTML += `
    <div class="game-card" data-name="${element.name}">
      <a target="_blank" href="${element.link}">
        <img src="${element.img}" alt="${element.name}" />
      </a>

      <h3>${element.name}</h3>

      ${
        hasVariants
          ? `
        <select class="variant-select">
          ${element.p.variants
            .map(
              (v) =>
                `<option value="${v.name}" data-price="${v.price}">
                  ${v.name} | ₹${v.price}
                </option>`
            )
            .join("")}
        </select>

        <p class="variant-price">${element.p.genre} | ₹${
              element.p.variants[0].price
            }</p>

        <button class="add-variant-btn">Add to Cart</button>
        `
          : `
        <p>${element.p.genre} | ₹${element.p.price}</p>
        <button 
          class="add-to-cart-btn"
          data-name="${element.name}"
          data-price="${element.p.price}">
          Add to Cart
        </button>
        `
      }
    </div>`;
  });

  document.querySelector(".games-grid").innerHTML = productHTML;
}

document.addEventListener("change", function (e) {
  if (e.target.classList.contains("variant-select")) {
    const card = e.target.closest(".game-card");
    const para = card.querySelector(".variant-price");

    const option = e.target.options[e.target.selectedIndex];
    const price = option.dataset.price;

    para.innerHTML = `${para.innerHTML.split("|")[0]} | ₹${price}`;
    para.classList.add("updated");
    setTimeout(() => para.classList.remove("updated"), 200);
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-variant-btn")) {
    const card = e.target.closest(".game-card");
    const select = card.querySelector(".variant-select");
    const option = select.options[select.selectedIndex];

    const gameName = card.dataset.name + " (" + option.value + ")";
    const price = parseFloat(option.dataset.price);

    const isEligibleVariant = option.value === "In your steam account";

    addToCart(gameName, price, true, isEligibleVariant);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);
    addToCart(name, price, true);
  }
});

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
            <img src="png/donate2.png" alt="Donate" />
            <h3>Donate | Pay</h3>
            <p> <b>Amount</b> | <input type="number" id="donateAmount" min="1" value="10" style="width: 60px; padding: 2px; border-radius: 4px; border: 1px solid #00bfff; background: #23272a; color: #f3f3f3;"> ₹</p>
    <button onclick="addToCart('Donation', parseFloat(document.getElementById('donateAmount').value) || 10)">
    Donate
    </button>
    </div>`;

  let dropdown = `
  <div class="game-card">
  <img src="https://sm.pcmag.com/t/pcmag_uk/review/x/xbox/xbox_rmuk.3840.jpg" alt="Xbox" />

  <h3>Xbox Game Pass</h3>

  <select onchange="change(this)" class="xbox-select">
    <option value="Xbox Game Pass" data-price="149">
      Xbox Game Pass | ₹149
    </option>
    <option value="Xbox Game Pass Ultimate" data-price="199">
      Xbox Game Pass Ultimate | ₹199
    </option>
  </select>

  <p class="xbox">1 month | ₹149</p>

  <button class="add-xbox-btn">Add to Cart</button>
</div>
`;

  otherGrid.innerHTML = donateHTML + serviceHTML + dropdown;
}

function change(select) {
  const card = select.closest(".game-card");
  const para = card.querySelector(".xbox");

  const option = select.options[select.selectedIndex];
  const price = parseFloat(option.dataset.price);

  para.innerHTML = `1 month | ₹${price}`;

  para.classList.add("updated");
  setTimeout(() => para.classList.remove("updated"), 200);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-xbox-btn")) {
    const card = e.target.closest(".game-card");
    const select = card.querySelector(".xbox-select");
    const option = select.options[select.selectedIndex];

    const name = option.value;
    const price = parseFloat(option.dataset.price);

    addToCart(name, price, true);
  }
});

function highlightGame(name) {
  const element = document.querySelector(`[data-name="${CSS.escape(name)}"]`);

  if (!element) {
    console.warn("highlightGame: element not found →", name);
    showCartToast(`${name} not found on page`);
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  element.classList.add("highlight");

  setTimeout(() => {
    element.classList.remove("highlight");
  }, 3000);
}

function addToCart(game, price, isGame = false, isDiscountEligible = false) {
  const found = cart.find((item) => item.game === game);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ game, price, qty: 1, isGame, isDiscountEligible });
  }

  updateCartCount();
  updateGameInputField();
  showCartToast(`${game} added to cart!`);
  renderCart();
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

function getDiscountRate(gameCount) {
  if (gameCount >= 5) return 0.15;
  if (gameCount >= 3) return 0.1;
  if (gameCount >= 2) return 0.05;
  return 0;
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
  let eligibleGameTotal = 0;
  let eligibleGameCount = 0;

  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    if (item.isGame && item.isDiscountEligible) {
      eligibleGameTotal += itemTotal;
      eligibleGameCount += item.qty;
    }

    html += `<div class="cart-item">
    ${item.game} x ${item.qty}
    <span>₹${itemTotal.toFixed(2)}</span>
    <button class="remove-btn" onclick="removeFromCart(${idx})">Remove</button>
  </div>`;
  });

  cartItems.innerHTML = html;

  const discountRate = getDiscountRate(eligibleGameCount);
  const discountAmount = eligibleGameTotal * discountRate;
  const finalTotal = total - discountAmount + tip;

  cartTotal.innerHTML = `
  <div>Subtotal: ₹${total.toFixed(2)}</div>
  ${
    discountRate > 0
      ? `<div style="color:#00ff88;">
          Discount on Steam Account Games (${discountRate * 100}%):
          −₹${discountAmount.toFixed(2)}
        </div>`
      : ""
  }
  <strong>Total: ₹${finalTotal.toFixed(2)}</strong>
`;

  // Enable Instamojo button and update label with total
  if (imButton) {
    imButton.style.pointerEvents = "auto";
    imButton.style.opacity = "1";
    imButton.setAttribute("data-text", `Pay ₹${finalTotal.toFixed(2)}`);
  }

  generateQRCode(finalTotal);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
  updateCartCount();
  updateGameInputField();
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
  renderCart();
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
document.addEventListener("DOMContentLoaded", () => {
  renderGames(games);
  renderServices(services);

  // Contact form (no JS handler, handled by Formspree)
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const applyTipBtn = document.getElementById("applyTipBtn");

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
  const lastOrderId = localStorage.getItem("lastOrderId");

  if (lastOrderId) {
    const box = document.getElementById("lastOrderBox");
    const text = document.getElementById("lastOrderIdText");
    const copyBtn = document.getElementById("copyLastOrderBtn");

    if (box && text && copyBtn) {
      text.textContent = lastOrderId;
      box.style.display = "block";

      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(lastOrderId);
        copyBtn.textContent = "Copied ✔";
      });
    }
  }
});
