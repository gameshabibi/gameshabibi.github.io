let cart = [];
let tip = 0;
let appliedCoupon = null;

function loadCartFromStorage() {
  try {
    const data = localStorage.getItem("gh_cart");
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("gh_cart", JSON.stringify(cart));
  } catch (err) {
    console.warn("Failed to save cart", err);
  }
}

function loadCouponFromStorage() {
  try {
    const code = localStorage.getItem("gh_coupon");
    appliedCoupon = code ? code.trim().toUpperCase() : null;
  } catch {
    appliedCoupon = null;
  }
}

function saveCouponToStorage() {
  try {
    if (appliedCoupon) {
      localStorage.setItem("gh_coupon", appliedCoupon);
    } else {
      localStorage.removeItem("gh_coupon");
    }
  } catch (err) {
    console.warn("Failed to save coupon", err);
  }
}

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

const totalFormatter = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

let revealObserver;
let wasMobileViewport = window.matchMedia("(max-width: 47.99em)").matches;
let lastKnownScrollY = 0;

function setDesktopHeaderVisibility(shouldShow) {
  const header = document.querySelector(".site-header");
  if (!header) return;

  header.classList.toggle("is-hidden", !shouldShow);
}

function getHeaderHideTrigger() {
  const serviceCards = document.querySelectorAll(".contain .game-card");
  const triggerCard =
    serviceCards[3] instanceof HTMLElement ?
      serviceCards[3]
    : serviceCards[serviceCards.length - 1];

  if (!(triggerCard instanceof HTMLElement)) {
    return null;
  }

  return triggerCard;
}

function syncDesktopHeaderOnScroll() {
  const isMobileViewport = window.matchMedia("(max-width: 47.99em)").matches;
  const header = document.querySelector(".site-header");

  if (!(header instanceof HTMLElement)) return;

  if (isMobileViewport) {
    setDesktopHeaderVisibility(true);
    lastKnownScrollY = window.scrollY;
    return;
  }

  if (header.classList.contains("is-menu-open")) {
    setDesktopHeaderVisibility(true);
    lastKnownScrollY = window.scrollY;
    return;
  }

  const currentScrollY = window.scrollY;
  const triggerCard = getHeaderHideTrigger();
  const isScrollingDown = currentScrollY > lastKnownScrollY;
  const triggerRect =
    triggerCard instanceof HTMLElement ?
      triggerCard.getBoundingClientRect()
    : null;
  const hasPassedServicesMenu =
    triggerRect instanceof DOMRect ?
      triggerRect.bottom <= header.offsetHeight + 8
    : false;

  if (!hasPassedServicesMenu || currentScrollY <= 24) {
    setDesktopHeaderVisibility(true);
  } else if (isScrollingDown) {
    setDesktopHeaderVisibility(false);
  } else {
    setDesktopHeaderVisibility(true);
  }

  lastKnownScrollY = currentScrollY;
}

function setMobileHeaderMenuState(shouldOpen) {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("mobileMenuToggle");
  const isMobileViewport = window.matchMedia("(max-width: 47.99em)").matches;

  if (!header || !toggle) return;

  const isOpen = Boolean(shouldOpen) && isMobileViewport;
  header.classList.toggle("is-menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute(
    "aria-label",
    isOpen ? "Close header menu" : "Open header menu",
  );
}

function hideMobileHeaderMenu() {
  setMobileHeaderMenuState(false);
}

function toggleMobileHeaderMenu() {
  const header = document.querySelector(".site-header");
  const isOpen = header?.classList.contains("is-menu-open");
  setMobileHeaderMenuState(!isOpen);
}

function setActiveCartStep(targetId) {
  const stepButtons = document.querySelectorAll(".cart-step-tab");
  stepButtons.forEach((button) => {
    const isActive =
      button instanceof HTMLElement && button.dataset.cartStep === targetId;
    button.classList.toggle("is-active", isActive);
  });
}

function getActiveCartStepId() {
  const activeButton = document.querySelector(".cart-step-tab.is-active");
  if (activeButton instanceof HTMLElement && activeButton.dataset.cartStep) {
    return activeButton.dataset.cartStep;
  }

  const visibleSection = document.querySelector(
    ".cart-panel-group.is-step-visible",
  );
  if (visibleSection instanceof HTMLElement && visibleSection.id) {
    return visibleSection.id;
  }

  return "cartSummaryStep";
}

function showCartStep(targetId) {
  const isMobileViewport = window.matchMedia("(max-width: 47.99em)").matches;
  const stepSections = document.querySelectorAll(".cart-panel-group");

  stepSections.forEach((section) => {
    if (!(section instanceof HTMLElement)) return;
    section.classList.toggle(
      "is-step-visible",
      !isMobileViewport || section.id === targetId,
    );
  });

  setActiveCartStep(targetId);
}

function scrollCartSection(targetId) {
  const modalBody = document.querySelector(".cart-modal-body");
  const targetSection = document.getElementById(targetId);
  const isMobileViewport = window.matchMedia("(max-width: 47.99em)").matches;

  if (
    !(modalBody instanceof HTMLElement) ||
    !(targetSection instanceof HTMLElement)
  ) {
    return;
  }

  if (isMobileViewport) {
    showCartStep(targetId);
    modalBody.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const top = targetSection.offsetTop - modalBody.offsetTop;
  modalBody.scrollTo({
    top,
    behavior: "smooth",
  });
  showCartStep(targetId);
}

function formatPrice(value) {
  return `₹${currencyFormatter.format(Number(value) || 0)}`;
}

function formatTotal(value) {
  return `₹${totalFormatter.format(Number(value) || 0)}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char] || char;
  });
}

function disableSubmit() {
  const btn = document.getElementById("orderSubmitBtn");
  if (btn) btn.disabled = true;
}

function enableSubmit() {
  const btn = document.getElementById("orderSubmitBtn");
  if (btn) btn.disabled = false;
}

function playErrorFeedback() {
  try {
    const isSub = window.location.pathname.includes("/html/");
    const audio = new Audio(isSub ? "../audio/error.wav" : "audio/error.wav");
    audio.volume = 0.3;
    audio.play().catch(() => {});
  } catch (error) {
    console.warn("Error sound failed", error);
  }

  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

function playSuccessFeedback() {
  try {
    const isSub = window.location.pathname.includes("/html/");
    const audio = new Audio(isSub ? "../audio/succ.wav" : "audio/succ.wav");
    audio.volume = 0.3;
    audio.play().catch(() => {});
  } catch (error) {
    console.warn("Success sound failed", error);
  }

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}

function getAssetPath(path) {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("/") ||
    path.startsWith("../")
  ) {
    return path;
  }
  const isSub = window.location.pathname.includes("/html/");
  return (isSub ? "../" : "") + path;
}

function handleImageFallback(imgEl, fallbackUrl) {
  if (!imgEl) return;
  const currentSrc = imgEl.src || "";

  // If .jpg failed, try .png
  if (currentSrc.includes(".jpg") && !imgEl.dataset.triedPng) {
    imgEl.dataset.triedPng = "true";
    imgEl.src = currentSrc.replace(/\.jpg(\?.*)?$/i, (match, query) => ".png" + (query || ""));
    return;
  }

  // If .png failed and not fallback logo, try .jpg
  if (
    currentSrc.includes(".png") &&
    !imgEl.dataset.triedJpg &&
    !currentSrc.includes("apple-touch-icon")
  ) {
    imgEl.dataset.triedJpg = "true";
    imgEl.src = currentSrc.replace(/\.png(\?.*)?$/i, (match, query) => ".jpg" + (query || ""));
    return;
  }

  imgEl.onerror = null;
  imgEl.src = fallbackUrl;
}

function buildGameCardMarkup(item) {
  const name = escapeHTML(item.name);
  const genre = escapeHTML(item.p.genre);
  const link = escapeHTML(item.link);
  const img = escapeHTML(getAssetPath(item.img));
  const fallback = escapeHTML(getAssetPath("png/apple-touch-icon.png"));
  const hasVariants =
    Array.isArray(item.p.variants) && item.p.variants.length > 0;

  if (!hasVariants) {
    return `
      <article class="game-card" data-name="${name}" data-type="game">
        <a class="product-media" target="_blank" rel="noreferrer" href="${link}">
          <img src="${img}" alt="${name}" loading="lazy" onerror="handleImageFallback(this, '${fallback}');" />
        </a>

        <div class="product-copy">
          <span class="product-badge">Featured game</span>
          <h3>${name}</h3>
          <p>${genre}</p>
        </div>

        <div class="product-actions">
          <div class="price-row">
            <span class="price-pill">${formatPrice(item.p.price)}</span>
          </div>

          <button
            class="btn add-to-cart-btn"
            type="button"
            data-name="${name}"
            data-price="${escapeHTML(item.p.price)}"
          >
            Add to Cart
          </button>
        </div>
      </article>
    `;
  }

  const firstVariant = item.p.variants[0];
  const optionMarkup = item.p.variants
    .map(
      (variant) => `
        <option
          value="${escapeHTML(variant.name)}"
          data-price="${escapeHTML(variant.price)}"
        >
          ${escapeHTML(variant.name)} | ${formatPrice(variant.price)}
        </option>
      `,
    )
    .join("");

  return `
    <article class="game-card" data-name="${name}" data-type="game">
      <a class="product-media" target="_blank" rel="noreferrer" href="${link}">
        <img src="${img}" alt="${name}" loading="lazy" onerror="handleImageFallback(this, '${fallback}');" />
      </a>

      <div class="product-copy">
        <span class="product-badge">Account variants</span>
        <h3>${name}</h3>
        <p>${genre}</p>
      </div>

      <div class="product-actions">
        <select class="variant-select" aria-label="Choose ${name} variant">
          ${optionMarkup}
        </select>

        <p class="variant-price">${escapeHTML(firstVariant.name)} | ${formatPrice(firstVariant.price)}</p>

        <button class="btn add-variant-btn" type="button">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function renderGames(gameList) {
  const grid = document.querySelector(".games-grid");
  if (!grid) return;

  grid.innerHTML = gameList.map(buildGameCardMarkup).join("");
}

function buildServiceCardMarkup(item) {
  const name = escapeHTML(item.name);
  const genre = escapeHTML(item.p.genre);
  const link = escapeHTML(item.link);
  const img = escapeHTML(getAssetPath(item.img));
  const fallback = escapeHTML(getAssetPath("png/apple-touch-icon.png"));

  return `
    <article class="game-card" data-name="${name}" data-type="service">
      <a class="product-media" target="_blank" rel="noreferrer" href="${link}">
        <img src="${img}" alt="${name}" loading="lazy" onerror="handleImageFallback(this, '${fallback}');" />
      </a>

      <div class="product-copy">
        <span class="product-badge">Service</span>
        <h3>${name}</h3>
        <p>${genre}</p>
      </div>

      <div class="product-actions">
        <div class="price-row">
          <span class="price-pill">${formatPrice(item.p.price)}</span>
        </div>

        <button
          class="btn add-service-btn"
          type="button"
          data-name="${name}"
          data-price="${escapeHTML(item.p.price)}"
        >
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function buildDonationCardMarkup() {
  const donateImg = escapeHTML(getAssetPath("png/donate2.png"));
  return `
    <article class="game-card" data-name="Donation" data-type="service">
      <div class="product-media">
        <img src="${donateImg}" alt="Donation" loading="lazy" />
      </div>

      <div class="product-copy">
        <span class="product-badge">Support</span>
        <h3>Donation</h3>
        <p>Support the storefront with any custom amount.</p>
      </div>

      <div class="product-actions">
        <div class="donation-field">
          <label for="donateAmount">Donation amount in INR</label>
          <input
            type="number"
            id="donateAmount"
            min="1"
            step="1"
            value="10"
          />
        </div>

        <button class="btn add-donation-btn" type="button">
          Add Donation
        </button>
      </div>
    </article>
  `;
}

function buildXboxCardMarkup() {
  const xboxImg = escapeHTML(getAssetPath("png/xbox.png"));
  const fallback = escapeHTML(getAssetPath("png/apple-touch-icon.png"));
  return `
    <article class="game-card" data-name="Xbox Game Pass" data-type="service">
      <div class="product-media">
        <img
          src="${xboxImg}"
          alt="Xbox Game Pass"
          loading="lazy"
          onerror="handleImageFallback(this, '${fallback}');"
        />
      </div>

      <div class="product-copy">
        <span class="product-badge">Membership</span>
        <h3>Xbox Game Pass</h3>
        <p>Pick the plan that matches your account and play style.</p>
      </div>

      <div class="product-actions">
        <select class="xbox-select" aria-label="Choose Xbox Game Pass plan">
          <option value="Xbox Game Pass" data-price="149">
            Xbox Game Pass | ${formatPrice(149)}
          </option>
          <option value="Xbox Game Pass Ultimate" data-price="199">
            Xbox Game Pass Ultimate | ${formatPrice(199)}
          </option>
        </select>

        <p class="xbox">1 month | ${formatPrice(149)}</p>

        <button class="btn add-xbox-btn" type="button">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function renderServices(serviceList) {
  const grid = document.querySelector(".contain");
  if (!grid) return;

  const markup = [
    buildDonationCardMarkup(),
    ...serviceList.map(buildServiceCardMarkup),
    buildXboxCardMarkup(),
  ].join("");

  grid.innerHTML = markup;
}

function updateVariantPrice(select) {
  const card = select.closest(".game-card");
  const priceLabel = card?.querySelector(".variant-price, .xbox");
  const option = select.options[select.selectedIndex];
  if (!card || !priceLabel || !option) return;

  const price = formatPrice(option.dataset.price);
  const durationPrefix =
    priceLabel.classList.contains("xbox") ? "1 month" : option.value;
  priceLabel.textContent = `${durationPrefix} | ${price}`;
  priceLabel.classList.add("updated");
  window.setTimeout(() => priceLabel.classList.remove("updated"), 220);
}

function highlightGame(name) {
  const target = document.querySelector(`[data-name="${CSS.escape(name)}"]`);
  if (!target) {
    showCartToast(`${name} not found on page`);
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  target.classList.remove("search-highlight");
  void target.offsetWidth;
  target.classList.add("search-highlight");

  window.setTimeout(() => {
    target.classList.remove("search-highlight");
  }, 1400);
}

function addToCart(game, price, isGame = false, isDiscountEligible = false) {
  const found = cart.find((item) => item.game === game);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({ game, price, qty: 1, isGame, isDiscountEligible });
  }

  saveCartToStorage();
  updateCartCount();
  updateGameInputField();
  renderCart();
  showCartToast(`${game} added to cart`);
  openCartDrawer();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const counter = document.getElementById("cartCount");
  if (counter) counter.textContent = count;

  const drawerCounter = document.getElementById("drawerCartCount");
  if (drawerCounter) {
    drawerCounter.textContent = `${count} item${count === 1 ? "" : "s"}`;
  }

  const mobCounter = document.getElementById("mobCartCount");
  if (mobCounter) {
    mobCounter.textContent = count;
  }
}

function updateGameInputField() {
  const field = document.getElementById("gameInput");
  if (!field) return;

  field.value =
    cart.length ?
      cart.map((item) => `${item.game} x ${item.qty}`).join(", ")
    : "";
}

function getDiscountRate(gameCount) {
  if (gameCount >= 4) return 0.47;
  if (gameCount >= 3) return 0.4;
  if (gameCount >= 2) return 0.25;
  return 0;
}

function applyCouponCode(code) {
  const normalized = code.trim().toUpperCase();
  if (!normalized) {
    showCartToast("Please enter a coupon code.");
    return;
  }

  // Coupon functionality is disabled in this release.
  showCartToast("Coupon functionality is currently disabled.");
}

function clearCoupon() {
  appliedCoupon = null;
  saveCouponToStorage();
  renderCart();
}

function hasCoupon() {
  return typeof appliedCoupon === "string" && appliedCoupon.length > 0;
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems || !cartTotal) return;

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        Your cart is empty. Add a game or service to start checkout.
      </div>
    `;
    cartTotal.innerHTML = "";

    const orderDetails = document.getElementById("orderDetails");
    if (orderDetails) {
      orderDetails.innerHTML = "";
    }

    generateQRCode(0);
    updateGameInputField();
    return;
  }

  let subtotal = 0;
  let eligibleGameTotal = 0;
  let eligibleGameCount = 0;

  const itemsMarkup = cart
    .map((item, index) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      if (item.isGame && item.isDiscountEligible) {
        eligibleGameTotal += itemTotal;
        eligibleGameCount += item.qty;
      }

      return `
        <article class="cart-item">
          <div class="cart-line">
            <div class="cart-item-header">
              <strong class="cart-item-title">${escapeHTML(item.game)}</strong>
              <span class="cart-item-meta">${formatPrice(item.price)} each</span>
            </div>
            <div class="cart-item-row">
              <div class="cart-qty-group">
                <button
                  type="button"
                  class="qty-btn"
                  data-qty-action="dec"
                  data-qty-index="${index}"
                  aria-label="Decrease quantity"
                >−</button>
                <span class="qty-number">${item.qty}</span>
                <button
                  type="button"
                  class="qty-btn"
                  data-qty-action="inc"
                  data-qty-index="${index}"
                  aria-label="Increase quantity"
                >+</button>
              </div>
              <strong class="cart-item-subtotal">${formatTotal(itemTotal)}</strong>
              <button
                class="remove-btn"
                type="button"
                data-remove-index="${index}"
                aria-label="Remove ${escapeHTML(item.game)}"
              >
                ✕
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  cartItems.innerHTML = itemsMarkup;

  const discountRate = getDiscountRate(eligibleGameCount);
  const discountAmount = eligibleGameTotal * discountRate;
  const finalTotal = subtotal - discountAmount + tip;

  cartTotal.innerHTML = `
    <div class="cart-total-row">
      <span>Subtotal</span>
      <strong>${formatTotal(subtotal)}</strong>
    </div>
    ${
      discountRate > 0 ?
        `
          <div class="cart-total-row discount-line">
            <span>Steam account discount (${Math.round(discountRate * 100)}%)</span>
            <strong>- ${formatTotal(discountAmount)}</strong>
          </div>
        `
      : ""
    }
    ${
      tip > 0 ?
        `
          <div class="cart-total-row">
            <span>Tip</span>
            <strong>${formatTotal(tip)}</strong>
          </div>
        `
      : ""
    }
    <div class="cart-total-primary">
      <span>Total</span>
      <strong>${formatTotal(finalTotal)}</strong>
    </div>
  `;

  generateQRCode(finalTotal);

  const orderDetails = document.getElementById("orderDetails");
  if (orderDetails) {
    orderDetails.innerHTML = `
      <div class="order-details-card">
        <h3>Order Details</h3>
        <p>${cart.length} item${cart.length === 1 ? "" : "s"} in cart</p>
        <p>Discount: ${formatTotal(discountAmount)}</p>
        <p>Tip: ${formatTotal(tip)}</p>
        <p>Coupon: ${hasCoupon() ? appliedCoupon : "None"}</p>
        <p><strong>Payable: ${formatTotal(finalTotal)}</strong></p>
      </div>
    `;
  }

  updateGameInputField();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  renderCart();
  updateCartCount();
}

function clearCart() {
  cart = [];
  tip = 0;
  appliedCoupon = null;

  const tipInput = document.getElementById("tipAmount");
  if (tipInput) tipInput.value = "0";

  const couponInput = document.getElementById("couponCode");
  if (couponInput) couponInput.value = "";

  saveCartToStorage();
  saveCouponToStorage();
  updateCartCount();
  renderCart();
}

function applyTip() {
  const tipInput = document.getElementById("tipAmount");
  if (!tipInput) return;

  const value = parseFloat(tipInput.value);
  if (!Number.isFinite(value) || value < 0) {
    tip = 0;
    tipInput.value = "0";
    showCartToast("Tip cannot be negative");
  } else {
    tip = value;
  }

  saveCartToStorage();
  renderCart();
}

function showCartModal() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    openCartDrawer();
  } else {
    const isSub = window.location.pathname.includes("/html/");
    window.location.href = isSub ? "cart.html" : "html/cart.html";
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (!drawer) {
    const isSub = window.location.pathname.includes("/html/");
    window.location.href = isSub ? "cart.html" : "html/cart.html";
    return;
  }

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  backdrop?.classList.add("is-open");
  backdrop?.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  renderCart();
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (!drawer) return;

  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop?.classList.remove("is-open");
  backdrop?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

function applyCatalogFilter(filter) {
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach((pill) => {
    const isActive = pill.dataset.filter === filter;
    pill.classList.toggle("active", isActive);
    pill.setAttribute("aria-selected", String(isActive));
  });

  const blocks = document.querySelectorAll(".catalog-block");
  const servicesBlock = blocks[0];
  const gamesBlock = blocks[1];

  if (filter === "services") {
    if (servicesBlock) servicesBlock.style.display = "";
    if (gamesBlock) gamesBlock.style.display = "none";
    return;
  }

  if (filter === "personal") {
    if (servicesBlock) servicesBlock.style.display = "none";
    if (gamesBlock) gamesBlock.style.display = "";
    const filteredGames = games.filter((g) =>
      g.p?.variants?.some((v) =>
        v.name.toLowerCase().includes("in your steam account"),
      ),
    );
    renderGames(filteredGames);
    return;
  }

  if (filter === "shared") {
    if (servicesBlock) servicesBlock.style.display = "none";
    if (gamesBlock) gamesBlock.style.display = "";
    const filteredGames = games.filter((g) =>
      g.p?.variants?.some((v) =>
        v.name.toLowerCase().includes("shared steam account"),
      ),
    );
    renderGames(filteredGames);
    return;
  }

  // filter === 'all'
  if (servicesBlock) servicesBlock.style.display = "";
  if (gamesBlock) gamesBlock.style.display = "";
  renderGames(games);
}

function hideCartModal() {
  closeCartDrawer();
  const modal = document.getElementById("cartModal");
  if (modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.body.classList.remove("is-locked");
}

function addUpsellOption(name, price) {
  const found = cart.find((item) => item.game === name);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({
      game: name,
      price,
      qty: 1,
      isGame: false,
      isDiscountEligible: false,
    });
  }

  updateCartCount();
  renderCart();
  showCartToast(`${name} added to cart`);
}

function showCartToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);

  window.setTimeout(() => toast.classList.add("show"), 10);
  window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => {
      if (container.contains(toast)) container.removeChild(toast);
    }, 240);
  }, 2800);
}

function buildSearchData() {
  const productItems = [
    ...games.map((game) => ({ name: game.name, type: "Game" })),
    ...services.map((service) => ({ name: service.name, type: "Service" })),
  ];

  productItems.push({ name: "Donation", type: "Support" });
  productItems.push({ name: "Xbox Game Pass", type: "Membership" });

  return productItems;
}

function closeSearchResults() {
  const results = document.getElementById("searchResults");
  if (!results) return;

  results.innerHTML = "";
  results.hidden = true;
}

function renderSearchResults(matches) {
  const results = document.getElementById("searchResults");
  if (!results) return;

  if (!matches.length) {
    results.innerHTML = `<div class="empty-cart">No matches found.</div>`;
    results.hidden = false;
    return;
  }

  results.innerHTML = matches
    .map(
      (item) => `
        <button
          class="search-result-btn"
          type="button"
          data-search-name="${escapeHTML(item.name)}"
        >
          <strong>${escapeHTML(item.name)}</strong>
          <span>${escapeHTML(item.type)}</span>
        </button>
      `,
    )
    .join("");

  results.hidden = false;
}

function performSearch(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    closeSearchResults();
    return [];
  }

  const matches = buildSearchData()
    .filter((item) => item.name.toLowerCase().includes(normalized))
    .slice(0, 8);

  renderSearchResults(matches);
  return matches;
}

function initializeRevealAnimations() {
  const items = document.querySelectorAll(".fade-in");
  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  revealObserver?.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0% 0% -10% 0%" },
  );

  items.forEach((item) => revealObserver.observe(item));
}

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  if (target.classList.contains("variant-select")) {
    updateVariantPrice(target);
  }

  if (target.classList.contains("xbox-select")) {
    updateVariantPrice(target);
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const cartCloseTarget = target.closest("[data-cart-close]");
  if (cartCloseTarget) {
    hideCartModal();
    return;
  }

  const addVariantButton = target.closest(".add-variant-btn");
  if (addVariantButton) {
    const card = addVariantButton.closest(".game-card");
    const select = card?.querySelector(".variant-select");
    if (!(select instanceof HTMLSelectElement) || !card) return;

    const option = select.options[select.selectedIndex];
    const selectedName = `${card.dataset.name} (${option.value})`;
    const price = parseFloat(option.dataset.price || "0");
    const isDiscountEligible =
      option.value.toLowerCase() === "in your steam account";

    addToCart(selectedName, price, true, isDiscountEligible);
    return;
  }

  const addStandardButton = target.closest(
    ".add-to-cart-btn, .add-service-btn",
  );
  if (addStandardButton instanceof HTMLButtonElement) {
    addToCart(
      addStandardButton.dataset.name || "",
      parseFloat(addStandardButton.dataset.price || "0"),
      addStandardButton.classList.contains("add-to-cart-btn"),
      false,
    );
    return;
  }

  const donationButton = target.closest(".add-donation-btn");
  if (donationButton) {
    const donationInput = document.getElementById("donateAmount");
    const donationValue =
      donationInput instanceof HTMLInputElement ?
        Math.max(parseFloat(donationInput.value || "10") || 10, 1)
      : 10;

    addToCart("Donation", donationValue, false, false);
    return;
  }

  const xboxButton = target.closest(".add-xbox-btn");
  if (xboxButton) {
    const card = xboxButton.closest(".game-card");
    const select = card?.querySelector(".xbox-select");
    if (!(select instanceof HTMLSelectElement)) return;

    const option = select.options[select.selectedIndex];
    addToCart(
      option.value,
      parseFloat(option.dataset.price || "0"),
      false,
      false,
    );
    return;
  }

  const upsellButton = target.closest(".add-upsell-btn");
  if (upsellButton) {
    const offerName =
      upsellButton.getAttribute("data-offer-name") || "Priority Activation";
    const offerPrice = parseFloat(
      upsellButton.getAttribute("data-offer-price") || "0",
    );
    addUpsellOption(offerName, offerPrice);
    return;
  }

  const qtyButton = target.closest("[data-qty-action]");
  if (qtyButton instanceof HTMLButtonElement) {
    const action = qtyButton.dataset.qtyAction;
    const index = Number(qtyButton.dataset.qtyIndex);
    if (!Number.isNaN(index) && cart[index]) {
      if (action === "inc") {
        cart[index].qty += 1;
      } else if (action === "dec") {
        if (cart[index].qty > 1) {
          cart[index].qty -= 1;
        } else {
          cart.splice(index, 1);
        }
      }
      saveCartToStorage();
      updateCartCount();
      updateGameInputField();
      renderCart();
    }
    return;
  }

  const removeButton = target.closest("[data-remove-index]");
  if (removeButton instanceof HTMLButtonElement) {
    removeFromCart(Number(removeButton.dataset.removeIndex));
    return;
  }

  const searchResult = target.closest("[data-search-name]");
  if (searchResult instanceof HTMLButtonElement) {
    const searchInput = document.getElementById("searchInput");
    const name = searchResult.dataset.searchName || "";
    if (searchInput instanceof HTMLInputElement) searchInput.value = name;
    closeSearchResults();
    highlightGame(name);
    return;
  }

  const insideSearch = target.closest(".search-shell");
  if (!insideSearch) {
    closeSearchResults();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSearchResults();
    closeCartDrawer();
    hideCartModal();
    hideMobileHeaderMenu();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  cart = loadCartFromStorage();
  loadCouponFromStorage();

  renderGames(games);
  renderServices(services);
  initializeRevealAnimations();
  lastKnownScrollY = window.scrollY;

  const cartButton = document.getElementById("cartBtn");
  const clearCartButton = document.getElementById("clearCartBtn");
  const applyTipButton = document.getElementById("applyTipBtn");
  const closeCartButton = document.getElementById("closeCart");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchBtn");
  const copyLastOrderButton = document.getElementById("copyLastOrderBtn");
  const mobileNavLinks = document.querySelectorAll(".site-nav a");
  const cartStepButtons = document.querySelectorAll(".cart-step-tab");

  cartButton?.addEventListener("click", showCartModal);
  clearCartButton?.addEventListener("click", clearCart);
  applyTipButton?.addEventListener("click", applyTip);
  closeCartButton?.addEventListener("click", hideCartModal);

  const closeDrawerBtn = document.getElementById("closeCartDrawerBtn");
  const drawerBackdrop = document.getElementById("cartDrawerBackdrop");
  closeDrawerBtn?.addEventListener("click", closeCartDrawer);
  drawerBackdrop?.addEventListener("click", closeCartDrawer);

  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      if (pill instanceof HTMLElement && pill.dataset.filter) {
        applyCatalogFilter(pill.dataset.filter);
      }
    });
  });

  const mobNavCart = document.getElementById("mobNavCart");
  const mobNavSearch = document.getElementById("mobNavSearch");
  const mobNavCatalog = document.getElementById("mobNavCatalog");
  const mobNavHome = document.getElementById("mobNavHome");

  mobNavCart?.addEventListener("click", () => {
    openCartDrawer();
  });

  mobNavSearch?.addEventListener("click", () => {
    const searchField = document.getElementById("searchInput");
    if (searchField instanceof HTMLInputElement) {
      searchField.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => searchField.focus(), 250);
    }
  });

  mobNavCatalog?.addEventListener("click", () => {
    mobNavHome?.classList.remove("active");
    mobNavCatalog?.classList.add("active");
  });

  mobNavHome?.addEventListener("click", () => {
    mobNavCatalog?.classList.remove("active");
    mobNavHome?.classList.add("active");
  });

  // Coupon controls are currently disabled (will be re-enabled later).
  // const applyCouponButton = document.getElementById("applyCouponBtn");
  // const couponInput = document.getElementById("couponCode");

  // applyCouponButton?.addEventListener("click", () => {
  //   if (!(couponInput instanceof HTMLInputElement)) return;
  //   applyCouponCode(couponInput.value);
  // });

  // if (couponInput instanceof HTMLInputElement && appliedCoupon) {
  //   couponInput.value = appliedCoupon;
  // }
  mobileMenuToggle?.addEventListener("click", toggleMobileHeaderMenu);
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", hideMobileHeaderMenu);
  });
  cartStepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!(button instanceof HTMLElement)) return;
      scrollCartSection(button.dataset.cartStep || "");
    });
  });

  window.addEventListener("resize", () => {
    const isMobileViewport = window.matchMedia("(max-width: 47.99em)").matches;

    if (!isMobileViewport) {
      hideMobileHeaderMenu();
    }

    if (isMobileViewport !== wasMobileViewport) {
      showCartStep(getActiveCartStepId());
      wasMobileViewport = isMobileViewport;
    }

    syncDesktopHeaderOnScroll();
  });

  let isScrollTicking = false;
  const throttledScrollHandler = () => {
    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        syncDesktopHeaderOnScroll();
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  };

  window.addEventListener("scroll", throttledScrollHandler, {
    passive: true,
  });

  if (searchInput instanceof HTMLInputElement) {
    searchInput.addEventListener("input", () => {
      performSearch(searchInput.value);
    });

    searchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;

      const matches = performSearch(searchInput.value);
      if (!matches.length) return;

      event.preventDefault();
      closeSearchResults();
      highlightGame(matches[0].name);
    });
  }

  searchButton?.addEventListener("click", () => {
    if (!(searchInput instanceof HTMLInputElement)) return;

    if (!searchInput.value.trim()) {
      searchInput.focus();
      return;
    }

    const matches = performSearch(searchInput.value);
    if (matches.length === 1) {
      closeSearchResults();
      highlightGame(matches[0].name);
    }
  });

  const lastOrderId = localStorage.getItem("lastOrderId");
  const lastOrderBox = document.getElementById("lastOrderBox");
  const lastOrderText = document.getElementById("lastOrderIdText");

  if (lastOrderId && lastOrderBox && lastOrderText) {
    lastOrderText.textContent = lastOrderId;
    lastOrderBox.hidden = false;
  }

  copyLastOrderButton?.addEventListener("click", async () => {
    if (!lastOrderId) return;

    await navigator.clipboard.writeText(lastOrderId);
    copyLastOrderButton.textContent = "Copied";
  });

  updateCartCount();
  renderCart();
  showCartStep("cartSummaryStep");
  syncDesktopHeaderOnScroll();
});
