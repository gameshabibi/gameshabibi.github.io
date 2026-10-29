/* =====================================================================
   Games Habibi — storefront app (vanilla JS, hash router, no build step)
   ===================================================================== */
(function () {
  "use strict";

  const CFG = window.HABIBI_CONFIG;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const session = {
    get(k, d) { try { const v = sessionStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ------------------------------------------------------------------
     Catalog
  ------------------------------------------------------------------- */
  const SERVICES = window.CATALOG.services;
  const GAMES = window.CATALOG.games;
  const ALL = SERVICES.concat(GAMES);
  const BY_ID = {};
  const BY_NAME = {};
  ALL.forEach((x) => {
    BY_ID[x.id] = x;
    BY_NAME[x.n.toLowerCase()] = x;
  });

  const TIER = {
    personal: { label: "Personal", title: "In your Steam account", blurb: "Activated on your own Steam account." },
    shared: { label: "Shared", title: "Shared Steam account", blurb: "Log in with the credentials we send, then play offline." },
    budget: { label: "Budget", title: "Budget Friendly", blurb: "Our lowest price. No coupons or bundle offers." },
    other: { label: "Option", title: "", blurb: "" }
  };
  const TIER_ORDER = ["shared", "personal", "budget"];

  const POP_KEYS = ["grand theft auto", "gta", "red dead", "black myth", "god of war", "forza", "elden ring", "ea sports", "palworld", "cyberpunk", "spider-man", "last of us", "wukong", "fifa", "tekken", "mortal kombat", "call of duty", "assassin's creed", "sekiro", "hogwarts", "witcher", "baldur", "ghost of tsushima", "stellar blade", "resident evil", "days gone", "detroit", "uncharted", "hitman", "dark souls", "beamng", "need for speed", "nfs", "assetto corsa"];
  const TAGS = [
    ["Open World", /open world/], ["Story Rich", /story|cinematic/], ["Horror", /horror/], ["Shooter", /shooter|fps/],
    ["RPG", /rpg/], ["Action", /action/], ["Racing", /racing|driving/], ["Fighting", /fighting|martial/],
    ["Stealth", /stealth/], ["Simulation", /simulation|\bsim\b|strategy/], ["Family & Casual", /casual|family|platformer|co-op/]
  ];
  ALL.forEach((it) => {
    const g = it.g.toLowerCase();
    it.tags = it.s ? [] : TAGS.filter((t) => t[1].test(g)).map((t) => t[0]);
    it.pop = (it.b ? 2 : 0) + (POP_KEYS.some((k) => it.n.toLowerCase().includes(k)) ? 1 : 0);
    it.min = it.v ? Math.min.apply(null, it.v.map((v) => v[1])) : it.p;
    it.q = (it.n + " " + it.g).toLowerCase();
  });
  const byPop = (a, b) => b.pop - a.pop || a.n.localeCompare(b.n, undefined, { sensitivity: "base", numeric: true });

  const ini = (n) => n.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const getTier = () => { const t = store.get("gh_tier", "shared"); return TIER_ORDER.indexOf(t) > -1 ? t : "shared"; };
  const vLabel = (v) => (v[2] === "other" ? v[0] : TIER[v[2]].title);
  const variantFor = (it, tier) => { if (!it.v) return -1; return it.v.findIndex((v) => v[2] === tier); };

  /* ------------------------------------------------------------------
     Cart & pricing
  ------------------------------------------------------------------- */
  function normalizeLine(l) {
    if (!l || typeof l !== "object") return null;
    const it = BY_ID[l.id] || (l.game ? BY_NAME[String(l.game).toLowerCase()] : null);
    if (!it) return null;
    const q = Number(l.q != null ? l.q : l.qty);
    if (!q || q <= 0) return null;
    let v = typeof l.v === "number" && l.v >= 0 ? l.v : 0;
    if (typeof l.v !== "number" && it.v && l.variant) {
      const idx = it.v.findIndex((x) => x[0].toLowerCase() === String(l.variant).toLowerCase());
      if (idx > -1) v = idx;
    }
    const vo = it.v ? it.v[v] || it.v[0] : null;
    const clampedQ = Math.min(10, q);
    return {
      id: it.id,
      v: it.v ? Math.max(0, v) : 0,
      q: clampedQ,
      game: it.n,
      price: vo ? vo[1] : it.p,
      qty: clampedQ,
      variant: vo ? vo[0] : undefined,
      img: "/" + it.i.replace(/^\//, "")
    };
  }

  let cart = store.get("gh_cart", []).map(normalizeLine).filter(Boolean);
  let couponCode = String(store.get("gh_coupon", "") || "").replace(/^"|"$/g, "");
  if (couponCode && !CFG.coupons[couponCode]) couponCode = "";

  function saveCart() {
    cart = cart.map(normalizeLine).filter(Boolean);
    store.set("gh_cart", cart);
    updateCount();
  }
  function updateCount() {
    const n = cart.reduce((s, l) => s + l.q, 0);
    const el = $("#cart-count");
    if (el) { el.textContent = n; el.hidden = n === 0; }
  }
  function addToCart(id, vi, qty) {
    const it = BY_ID[id]; if (!it) return;
    vi = it.v ? Math.max(0, vi) : 0;
    const line = cart.find((l) => l.id === id && l.v === vi);
    if (line) {
      line.q = Math.min(10, line.q + (qty || 1));
      line.qty = line.q;
    } else {
      cart.push(normalizeLine({ id: id, v: vi, q: qty || 1 }));
    }
    saveCart();
    playSound("success");
  }
  function lineKey(l) { return l.id + "|" + l.v; }

  function calc() {
    const lines = cart.map((l) => {
      const it = BY_ID[l.id]; const v = it.v ? it.v[l.v] || it.v[0] : null;
      return { l: l, it: it, key: lineKey(l), qty: l.q, price: v ? v[1] : it.p, tier: v ? v[2] : "service", label: v ? vLabel(v) : "Digital pass" };
    });
    const subtotal = lines.reduce((s, x) => s + x.price * x.qty, 0);
    const personal = lines.filter((x) => x.tier === "personal");
    const personalQty = personal.reduce((s, x) => s + x.qty, 0);
    const personalSum = personal.reduce((s, x) => s + x.price * x.qty, 0);
    const rule = CFG.bundle.find((b) => personalQty >= b.min);
    const bundleRate = rule ? rule.rate : 0;
    const bundle = Math.round(personalSum * bundleRate);
    const eligible = lines.filter((x) => x.tier !== "budget");
    const eligCount = eligible.reduce((s, x) => s + x.qty, 0);
    const eligSub = eligible.reduce((s, x) => s + x.price * x.qty, 0);
    let couponAmt = 0, couponPaused = false;
    if (couponCode && CFG.coupons[couponCode]) {
      if (eligCount > 1) {
        const r = CFG.coupons[couponCode]; const base = Math.max(0, eligSub - bundle);
        couponAmt = r.type === "percent" ? Math.round((base * r.value) / 100) : Math.min(r.value, base);
      } else couponPaused = true;
    }
    const total = Math.max(0, subtotal - bundle - couponAmt);
    const nextRule = CFG.bundle.slice().reverse().find((b) => b.min > personalQty);
    return { lines, subtotal, bundle, bundleRate, personalQty, eligCount, couponAmt, couponPaused, total, count: lines.reduce((s, x) => s + x.qty, 0), nextRule };
  }

  function applyCoupon(raw) {
    const code = String(raw || "").trim().toUpperCase();
    const c = calc();
    if (!code) return { ok: false, msg: "Enter a coupon code." };
    if (!c.count) return { ok: false, msg: "Your cart is empty." };
    if (c.eligCount === 0) return { ok: false, msg: "Coupons don't apply to Budget Friendly items." };
    if (c.eligCount < 2) return { ok: false, msg: "Coupons need 2 or more non-budget items in your cart." };
    if (!CFG.coupons[code]) return { ok: false, msg: "That code isn't valid." };
    couponCode = code; store.set("gh_coupon", code);
    return { ok: true, msg: "Coupon " + code + " applied." };
  }
  function clearCoupon() { couponCode = ""; store.del("gh_coupon"); }

  /* ------------------------------------------------------------------
     Ink illustrations (original SVG artwork)
  ------------------------------------------------------------------- */
  function scene(kind, cls) {
    cls = cls || "ink";
    if (kind === "hero") return `
<svg class="${cls}" viewBox="0 0 600 560" role="img" aria-label="Ink illustration of a lone wanderer on a ridge beneath a red sun">
  <circle cx="395" cy="200" r="170" fill="#c3161c"/>
  <g filter="url(#rough)" fill="#0f0e0d">
    <path d="M0 400 C70 350 120 372 180 330 C240 290 290 330 350 300 C410 272 470 310 600 250 L600 560 L0 560Z" opacity=".14"/>
    <path d="M0 452 C80 410 140 436 210 398 C280 360 330 404 400 384 C470 364 530 392 600 360 L600 560 L0 560Z" opacity=".36"/>
    <path d="M300 470 C350 428 410 410 478 404 C530 400 570 412 600 406 L600 560 L300 560Z"/>
    <path d="M22 560 C30 470 24 410 52 340 M52 340 C70 330 92 336 110 326 M52 372 C36 360 22 362 6 350 M44 420 C64 410 84 412 96 400" stroke="#0f0e0d" stroke-width="7" stroke-linecap="round" fill="none"/>
  </g>
  <g fill="#0f0e0d">
    <path d="M446 234 Q478 196 510 234 Q478 224 446 234Z"/>
    <circle cx="478" cy="246" r="9"/>
    <path d="M461 256 Q478 248 495 256 L522 402 Q478 414 434 402Z"/>
    <path d="M497 300 L560 356" stroke="#0f0e0d" stroke-width="3.6" stroke-linecap="round"/>
  </g>
  <rect y="380" width="600" height="180" fill="url(#mist)"/>
  <g filter="url(#splat)" fill="#0f0e0d">
    <circle cx="120" cy="150" r="5"/><circle cx="146" cy="176" r="3"/><circle cx="96" cy="190" r="2.5"/><circle cx="560" cy="120" r="4"/><circle cx="586" cy="148" r="2.5"/><circle cx="230" cy="96" r="2"/>
  </g>
</svg>`;
    if (kind === "dark") return `
<svg class="${cls}" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ink illustration of a castle above misty mountains">
  <rect width="900" height="300" fill="#0f0e0d"/>
  <circle cx="690" cy="96" r="64" fill="#c3161c" opacity=".92"/>
  <g filter="url(#rough)">
    <path d="M0 210 C100 160 170 190 260 150 C340 114 420 170 520 140 C620 110 720 160 900 120 L900 300 L0 300Z" fill="#2a2724"/>
    <path d="M0 250 C120 214 200 238 300 204 C400 172 500 226 620 200 C730 176 820 214 900 190 L900 300 L0 300Z" fill="#1b1917"/>
    <g fill="#34302c"><path d="M610 156 h70 v-14 h-6 l-29 -24 l-29 24 h-6z"/><rect x="622" y="156" width="46" height="46"/><path d="M628 118 l23 -30 l23 30z"/></g>
  </g>
  <g fill="#0f0e0d"><path d="M772 218 q10 -22 20 0 q-10 -6 -20 0z"/><circle cx="782" cy="204" r="5"/><path d="M774 222 q8 -4 16 0 l4 28 q-12 5 -24 0z"/></g>
  <rect y="190" width="900" height="110" fill="url(#mistDark)"/>
</svg>`;
    return `
<svg class="${cls}" viewBox="0 0 520 220" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
  <circle cx="400" cy="74" r="66" fill="#c3161c"/>
  <g filter="url(#rough)" fill="#0f0e0d">
    <path d="M120 170 C190 120 240 150 300 118 C360 90 420 128 520 96 L520 220 L120 220Z" opacity=".22"/>
    <path d="M200 196 C270 160 330 178 390 156 C440 140 490 150 520 144 L520 220 L200 220Z" opacity=".55"/>
    <path d="M250 200 q70 -46 140 0 l0 8 q-70 -40 -140 0z"/>
    <path d="M232 204 L520 204 L520 220 L232 220Z"/>
  </g>
  <g fill="#0f0e0d"><path d="M340 168 q6 -16 12 0 q-6 -4 -12 0z"/><circle cx="346" cy="156" r="3.4"/><path d="M341 170 q5 -3 10 0 l3 30 q-8 3 -16 0z"/></g>
</svg>`;
  }
  const pageHead = (title, sub) =>
    `<section class="page-head">${scene("strip", "ink ink-abs")}<div class="container"><h1 class="display">${title}</h1>${sub ? `<p>${sub}</p>` : ""}</div></section>`;

  /* ------------------------------------------------------------------
     Shared components
  ------------------------------------------------------------------- */
  const imgSrc = (i) => "/" + String(i || "").replace(/^\//, "");
  const coverImgs = (it) => {
    const src = esc(imgSrc(it.i));
    return `<img class="cover-bg" src="${src}" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()"><img class="cover-img" src="${src}" alt="${esc(it.n)}" loading="lazy" onload="if(this.naturalWidth>this.naturalHeight*1.12)this.parentNode.classList.add('is-wide')" onerror="this.remove()">`;
  };
  const coverEl = (it, extra, tagHtml) =>
    `<span class="cover ${extra || ""}" data-ini="${esc(ini(it.n))}">${coverImgs(it)}${tagHtml || ""}</span>`;

  function card(it) {
    const tier = getTier(); let vi = 0, price, label;
    if (it.s) { price = it.p; label = "Pass"; }
    else {
      vi = variantFor(it, tier);
      if (vi < 0) { vi = 0; label = "from"; price = it.v[0][1]; } else { price = it.v[vi][1]; label = TIER[tier].label; }
    }
    const tag = it.b ? `<span class="tag">${esc(it.b)}</span>` : it.u ? `<span class="tag">Upcoming</span>` : "";
    return `<article class="card">
      <a class="cover" href="#/game/${esc(it.id)}" tabindex="-1" aria-hidden="true" data-ini="${esc(ini(it.n))}">${coverImgs(it)}${tag}</a>
      <a class="card-title" href="#/game/${esc(it.id)}">${esc(it.n)}</a>
      <div class="card-meta">
        <span class="card-price"><small>${esc(label)}</small>${inr(price)}</span>
        <button class="card-add" data-add="${esc(it.id)}|${vi}" aria-label="Add ${esc(it.n)} to cart">+</button>
      </div></article>`;
  }

  let toastTimer;
  function toast(msg, href, linkText) {
    const t = $("#toast");
    t.innerHTML = `<span>${esc(msg)}</span>${href ? `<a href="${href}">${esc(linkText || "View")}</a>` : ""}`;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
  }
  const buzz = () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) {} };
  const playSound = (type) => {
    try {
      const path = type === "error" ? "/audio/error.wav" : type === "order-success" ? "/audio/order-success.wav" : "/audio/succ.wav";
      const a = new Audio(path);
      a.volume = 0.45;
      a.play().catch(() => {});
    } catch (e) {}
  };

  /* ------------------------------------------------------------------
     Pages
  ------------------------------------------------------------------- */
  const app = $("#app");
  let cleanup = null;               // per-page teardown (object URLs etc.)
  let revealObserver = null;

  /* ---------- Home ---------- */
  const SLIDES = [
    { h: "Games worth getting lost in", p: "Curated PC games and digital passes from ₹69. Pay with UPI, get your login on WhatsApp or email.", cta: "Explore games", href: "#/games" },
    { h: "Fear worth feeling", p: "Survival horror and psychological thrillers, ready to download tonight.", cta: "Browse horror", href: "#/games?tag=Horror" },
    { h: "Fight your way through", p: "Blockbuster action, shooters and soulslikes at a fraction of the usual price.", cta: "Browse action", href: "#/games?tag=Action" },
    { h: "Great games, small prices", p: "Budget Friendly access starts at ₹69 for offline single-player.", cta: "See budget picks", href: "#/games?tier=budget" }
  ];
  let heroIdx = 0;

  function heroText() {
    const s = SLIDES[heroIdx];
    return `<div class="hero-slide" key="${heroIdx}">
      <p class="kicker" style="margin-bottom:1rem">Curated PC games &amp; digital passes</p>
      <h1 class="display">${esc(s.h)}<span class="dot">.</span></h1>
      <p class="lead">${esc(s.p)}</p>
      <a class="btn arrow" href="${s.href}">${esc(s.cta)}</a>
    </div>`;
  }

  function pageHome() {
    const want = ["Elden Ring", "Black Myth: Wukong", "Silent Hill 2", "Hades II", "Cyberpunk 2077", "Red Dead Redemption 2", "Baldur's Gate 3", "The Witcher 3: Wild Hunt"];
    let feat = want.map((n) => GAMES.find((g) => g.n === n)).filter(Boolean);
    if (feat.length < 8) feat = feat.concat(GAMES.slice().sort(byPop).filter((g) => feat.indexOf(g) < 0)).slice(0, 8);
    const t = getTier();
    return `
<section class="hero"><div class="container hero-grid">
  <div><div id="hero-text" aria-live="polite" aria-atomic="true">${heroText()}</div>
    <div class="hero-ctl"><span>0<b id="hero-n">${heroIdx + 1}</b> <span class="tot">/ 0${SLIDES.length}</span></span><button id="hero-prev" aria-label="Previous highlight">←</button><button id="hero-next" aria-label="Next highlight">→</button></div>
  </div>
  <div class="hero-art">${scene("hero")}</div>
</div></section>

<section class="section"><div class="container">
  <div class="sec-head"><h2 class="sec-title">Featured titles</h2><a class="link-btn arrow" href="#/games">View all</a></div>
  <div class="grid four">${feat.map(card).join("")}</div>
</div></section>

<section class="section"><div class="container">
  <div class="sec-head"><h2 class="sec-title">Pick how you play</h2><span class="kicker">Every game, three ways</span></div>
  <div class="tiers">
    <div class="tier"><span class="kicker">In your Steam account</span><div class="price">₹299</div><h3>Personal</h3>
      <p>The game is activated on your own Steam profile.</p>
      <ul><li>Lives in your own library</li><li>Bundle discounts up to 47%</li><li>Coupons accepted</li></ul></div>
    <div class="tier featured"><span class="kicker" style="color:#ff8d92">Most popular</span><div class="price">₹149</div><h3>Shared</h3>
      <p>Log in with the account we send, download, then play offline.</p>
      <ul><li>Steam Guard code sent at first login</li><li>Offline campaign &amp; local saves</li><li>Coupons accepted</li></ul></div>
    <div class="tier"><span class="kicker">Cheapest</span><div class="price">₹69</div><h3>Budget Friendly</h3>
      <p>Our lowest price for offline single-player.</p>
      <ul><li>Replacement at 50% off if the password changes</li><li>No coupons or bundle offers</li></ul></div>
  </div>
  <div class="bundle-strip"><span><b>Bundle &amp; save</b> &nbsp;on Personal games</span>
    <div class="steps"><span><b>25%</b> off 2</span><span><b>40%</b> off 3</span><span><b>47%</b> off 4+</span></div>
    <a class="link-btn arrow" href="#/guides/bundles-and-coupons">How it works</a></div>
</div></section>

<section class="section"><div class="container">
  <div class="banner">${scene("dark")}<div class="banner-in">
    <h2 class="display">Discover new worlds</h2><p>Hand-sorted collections for every kind of player — open worlds, horror, racing and more.</p>
    <a class="btn red arrow" href="#/collections">Browse collections</a></div></div>
</div></section>

<section class="section"><div class="container">
  <div class="sec-head"><h2 class="sec-title">Passes &amp; tools</h2><a class="link-btn arrow" href="#/games?type=passes">View all</a></div>
  <div class="grid">${SERVICES.map(card).join("")}</div>
</div></section>

<section class="section"><div class="container">
  <div class="sec-head"><h2 class="sec-title">How it works</h2><span class="kicker">Three steps</span></div>
  <div class="steps3">
    <div class="s"><div class="n">01</div><h3>Choose your access</h3><p>Pick Personal, Shared or Budget on any game. Prices are upfront, in rupees.</p></div>
    <div class="s"><div class="n">02</div><h3>Pay with UPI</h3><p>Scan the QR code or copy the UPI ID. Then attach your payment screenshot (UTR optional).</p></div>
    <div class="s"><div class="n">03</div><h3>Get your login</h3><p>We verify and send credentials to you — usually within 15–30 minutes (${esc(CFG.hours)}).</p></div>
  </div>
</div></section>`;
  }
  function bindHome() {
    const changeSlide = (direction) => {
      heroIdx = (heroIdx + direction + SLIDES.length) % SLIDES.length;
      $("#hero-text").innerHTML = heroText();
      $("#hero-n").textContent = heroIdx + 1;
    };
    $("#hero-prev").addEventListener("click", () => changeSlide(-1));
    $("#hero-next").addEventListener("click", () => changeSlide(1));
  }

  /* ---------- Games listing ---------- */
  const SORTS = { popular: "Most popular", az: "A – Z", low: "Price: low to high", high: "Price: high to low" };

  function pageGames(q) {
    const st = {
      q: q.get("q") || "", tag: q.get("tag") || "", sort: SORTS[q.get("sort")] ? q.get("sort") : "popular",
      type: ["all", "games", "passes"].indexOf(q.get("type")) > -1 ? q.get("type") : "all", shown: 24
    };
    if (TIER_ORDER.indexOf(q.get("tier")) > -1) store.set("gh_tier", q.get("tier"));

    app.innerHTML = `${pageHead("All games", "Discover, filter, get lost.")}
<div class="container"><div class="shop">
  <aside class="filters" id="filters" aria-label="Filters">
    <div class="fgroup"><h4>Search</h4><input class="field" id="f-q" type="search" placeholder="Title or genre" value="${esc(st.q)}"></div>
    <div class="fgroup" id="g-tier"><h4>Show prices for</h4>
      ${TIER_ORDER.map((t) => `<label><input type="radio" name="tier" value="${t}"> ${TIER[t].title}</label>`).join("")}</div>
    <div class="fgroup" id="g-type"><h4>Type</h4>
      <label><input type="radio" name="type" value="all"> Everything</label>
      <label><input type="radio" name="type" value="games"> Games</label>
      <label><input type="radio" name="type" value="passes"> Passes &amp; tools</label></div>
    <div class="fgroup" id="g-tag"><h4>Genre</h4></div>
  </aside>
  <section>
    <div class="shop-top">
      <div><button class="btn ghost sm filter-toggle" id="ft" aria-expanded="false" aria-controls="filters">Filters</button><span class="count" id="count"></span></div>
      <label class="sort">Sort by <select id="f-sort">${Object.keys(SORTS).map((k) => `<option value="${k}">${SORTS[k]}</option>`).join("")}</select></label>
    </div>
    <div id="grid"></div>
    <div class="more-wrap" id="more"></div>
  </section>
</div></div>`;

    const tagCounts = {}; GAMES.forEach((g) => g.tags.forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1)));
    $("#g-tag").insertAdjacentHTML("beforeend",
      `<label><input type="radio" name="tag" value=""> All genres</label>` +
      TAGS.map((t) => `<label><input type="radio" name="tag" value="${esc(t[0])}"> ${esc(t[0])}<span class="cnt">${tagCounts[t[0]] || 0}</span></label>`).join(""));

    const sync = () => {
      $$('input[name=tier]').forEach((r) => (r.checked = r.value === getTier()));
      $$('input[name=type]').forEach((r) => (r.checked = r.value === st.type));
      $$('input[name=tag]').forEach((r) => (r.checked = r.value === st.tag));
      $("#f-sort").value = st.sort;
    };

    const update = (resetShown) => {
      if (resetShown) st.shown = 24;
      const tier = getTier(); const needle = st.q.trim().toLowerCase();
      let list = st.type === "games" ? GAMES : st.type === "passes" ? SERVICES : ALL;
      if (needle) list = list.filter((it) => it.q.indexOf(needle) > -1);
      if (st.tag) list = list.filter((it) => it.tags.indexOf(st.tag) > -1);
      const pr = (it) => { if (it.s) return it.p; const i = variantFor(it, tier); return i < 0 ? it.v[0][1] : it.v[i][1]; };
      list = list.slice();
      if (st.sort === "az") list.sort((a, b) => a.n.localeCompare(b.n, undefined, { sensitivity: "base", numeric: true }));
      else if (st.sort === "low") list.sort((a, b) => pr(a) - pr(b) || byPop(a, b));
      else if (st.sort === "high") list.sort((a, b) => pr(b) - pr(a) || byPop(a, b));
      else list.sort(byPop);

      $("#count").textContent = list.length + (list.length === 1 ? " result" : " results");
      const shown = list.slice(0, st.shown);
      $("#grid").innerHTML = list.length
        ? `<div class="grid">${shown.map(card).join("")}</div>`
        : `<div class="empty"><h3>Nothing matches “${esc(st.q || st.tag)}”.</h3><p>Try a different spelling or clear the filters. Can't find a title? Request it and we'll source it for you.</p>
           <div class="form-actions" style="justify-content:center"><button class="btn" id="reset">Clear filters</button><a class="btn red" href="#/contact?tab=request&game=${encodeURIComponent(st.q || "")}">Request this game</a><a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent("Hi! Do you have this game: " + (st.q || ""))}">Ask on WhatsApp</a></div></div>`;
      $("#more").innerHTML = list.length > st.shown
        ? `<span>Showing ${shown.length} of ${list.length}</span><div class="form-actions" style="justify-content:center"><button class="btn" id="more24">Load 24 more</button><button class="btn ghost" id="moreAll">Show all</button></div>`
        : list.length > 24 ? `<span>All ${list.length} loaded</span>` : "";
      const p = new URLSearchParams();
      if (st.q) p.set("q", st.q); if (st.tag) p.set("tag", st.tag);
      if (st.sort !== "popular") p.set("sort", st.sort); if (st.type !== "all") p.set("type", st.type);
      try { history.replaceState(null, "", "#/games" + (p.toString() ? "?" + p : "")); } catch (e) {}
    };

    const f = $("#filters");
    f.addEventListener("input", (e) => { if (e.target.id === "f-q") { st.q = e.target.value; update(true); } });
    f.addEventListener("change", (e) => {
      const n = e.target.name;
      if (n === "tier") { store.set("gh_tier", e.target.value); update(false); }
      if (n === "type") { st.type = e.target.value; update(true); }
      if (n === "tag") { st.tag = e.target.value; update(true); }
    });
    $("#f-sort").addEventListener("change", (e) => { st.sort = e.target.value; update(true); });
    $("#ft").addEventListener("click", (e) => { const o = f.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); });
    $("#grid").addEventListener("click", (e) => { if (e.target.id === "reset") { st.q = ""; st.tag = ""; st.type = "all"; $("#f-q").value = ""; sync(); update(true); } });
    $("#more").addEventListener("click", (e) => {
      if (e.target.id === "more24") { st.shown += 24; update(false); }
      if (e.target.id === "moreAll") { st.shown = 9999; update(false); }
    });
    sync(); update(true);
  }

  /* ---------- Collections ---------- */
  const COLLS = [
    { t: "Open World", n: "The Open World Selection", d: "Lose a weekend to enormous maps.", big: 1 },
    { t: "Story Rich", n: "Story Driven", d: "Cinematic campaigns worth finishing." },
    { t: "Horror", n: "Horror", d: "Face your fears. Lights optional." },
    { t: "Shooter", n: "Shooters", d: "Tactical and military FPS." },
    { t: "RPG", n: "RPG", d: "Become someone else." },
    { t: "Action", n: "Action", d: "Fast, loud and satisfying." },
    { t: "Racing", n: "Racing", d: "Sim and arcade, wheels or pad." },
    { t: "Fighting", n: "Fighting", d: "Pick a main. Prove it." },
    { t: "Stealth", n: "Stealth", d: "Patience, shadows, perfect timing." },
    { t: "Family & Casual", n: "Cozy &amp; Casual", d: "Calm, co-op and colourful." },
    { href: "#/games?tier=budget", n: "Under ₹100", d: "Every game at Budget Friendly pricing.", img: "png/games/7-days-to-die.webp", c: GAMES.length },
    { href: "#/games?type=passes", n: "Passes &amp; Tools", d: "Streaming and extras.", img: SERVICES[1].i, c: SERVICES.length }
  ];
  function pageCollections() {
    const html = COLLS.map((c) => {
      let href = c.href, count = c.c, img = c.img;
      if (c.t) {
        const items = GAMES.filter((g) => g.tags.indexOf(c.t) > -1).sort(byPop);
        href = "#/games?tag=" + encodeURIComponent(c.t); count = items.length; img = items[0] ? items[0].i : "";
      }
      return `<a class="coll ${c.big ? "big" : ""}" href="${href}"><span class="bg" style="${img ? `background-image:url('${esc(encodeURI(img))}')` : ""}"></span>
        <span class="in"><span><h3>${c.n}</h3><p>${esc(c.d)} · ${count} titles</p></span><span class="go" aria-hidden="true">→</span></span></a>`;
    }).join("");
    return `${pageHead("Collections", "Curated experiences for every kind of player.")}<div class="container"><div class="coll-grid">${html}</div></div>`;
  }

  /* ---------- Game detail ---------- */
  function pageGame(id) {
    const it = BY_ID[id];
    if (!it) return notFound();
    const rec = store.get("gh_recent", []).filter((x) => x !== id); rec.unshift(id); store.set("gh_recent", rec.slice(0, 12));
    document.title = it.n + " — Games Habibi";

    let sel = 0;
    if (it.v) { const i = variantFor(it, getTier()); sel = i < 0 ? 0 : i; }
    const price0 = it.v ? it.v[sel][1] : it.p;
    const similar = ALL.filter((x) => x !== it && !x.s && x.tags.some((t) => it.tags.indexOf(t) > -1)).sort((a, b) => {
      const s = (x) => x.tags.filter((t) => it.tags.indexOf(t) > -1).length;
      return s(b) - s(a) || byPop(a, b);
    }).slice(0, 4);

    const picks = it.v ? `<div class="picks" role="radiogroup" aria-label="Choose access type">${it.v.map((v, i) =>
      `<button class="pick" role="radio" aria-checked="${i === sel}" data-pick="${i}"><small>${esc(v[2] === "other" ? "Option" : TIER[v[2]].label)}</small><b>${inr(v[1])}</b><span>${esc(v[2] === "other" ? v[0] : TIER[v[2]].blurb.split(".")[0])}</span></button>`).join("")}</div>` : "";

    const tagChips = it.tags.map((t) => `<a class="chip" href="#/games?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join("");
    const first = it.v ? it.v[0] : null;

    return `
<section class="d-hero"><div class="d-bg" style="background-image:url('${esc(encodeURI(it.i))}')"></div>
 <div class="container d-grid">
  <div class="d-cover">${coverEl(it)}</div>
  <div>
    <p class="crumbs"><a href="#/games">Games</a> / ${esc(it.s ? "Passes" : it.tags[0] || "PC")}</p>
    <h1 class="display">${esc(it.n)}</h1>
    <div class="chips d-tags">${it.b ? `<span class="chip red">${esc(it.b)}</span>` : ""}${tagChips}${it.s ? `<span class="chip">${esc(it.g)}</span>` : ""}</div>
    ${picks}
    <div class="buy-row">
      <div class="buy-price"><small id="buy-label">${it.v ? esc(TIER[it.v[sel][2]].title || it.v[sel][0]) : "One-time price"}</small><span id="buy-price">${inr(price0)}</span></div>
      <button class="btn red" id="add-btn" data-add="${esc(it.id)}|${sel}">Add to cart</button>
      <button class="btn ghost" id="buy-now" style="color:var(--night-text);border-color:rgba(235,230,218,.5)">Buy now</button>
    </div>
  </div>
 </div>
</section>
<div class="container">
  <div class="tabs" role="tablist">
    <button role="tab" aria-selected="true" data-tab="about">About</button>
    ${it.v ? `<button role="tab" aria-selected="false" data-tab="access">Access types</button>` : ""}
    <button role="tab" aria-selected="false" data-tab="help">Delivery &amp; help</button>
  </div>
  <div class="tab-panel" data-panel="about">
    <div><h3>${it.s ? esc(it.n) : "Play " + esc(it.n) + " on PC"}</h3>
      <p>${it.s ? esc(it.g) + ". Delivered digitally after UPI payment is verified." : "Genre: " + esc(it.g) + ". Available through Steam on PC with the access type you choose above — you'll receive everything you need to download and play."}</p>
      <p>Prices are in Indian rupees with no hidden fees. Add two or more Personal games to your cart and the bundle discount applies automatically.</p>
      <a class="link-btn arrow" href="#/guides">Read the activation guide</a></div>
    <dl class="facts">
      <div><dt>Platform</dt><dd>${it.s ? "Digital" : "PC (Steam)"}</dd></div>
      <div><dt>Genre</dt><dd>${esc(it.g.split(",").slice(0, 2).join(" · "))}</dd></div>
      <div><dt>Delivery</dt><dd>Digital · 15–30 min</dd></div>
      <div><dt>Payment</dt><dd>UPI</dd></div>
      <div><dt>Support hours</dt><dd>${esc(CFG.hours.replace(" IST", ""))}</dd></div>
    </dl>
  </div>
  <div class="tab-panel" data-panel="access" hidden>
    <div><h3>Which one should I pick?</h3>
      <ul class="ticks">
        <li><span><b>Personal.</b> Activated on your own Steam account. Best if you want it in your own library; eligible for bundles and coupons.</span></li>
        <li><span><b>Shared.</b> You log in to an account we provide, download the game, then play in Steam Offline Mode. Our most popular choice.</span></li>
        <li><span><b>Budget Friendly.</b> The lowest price, for offline single-player. Not eligible for coupons or bundles.</span></li>
      </ul><a class="link-btn arrow" href="#/guides/shared-vs-budget-vs-personal">Compare in detail</a></div>
    <dl class="facts">${it.v ? it.v.map((v) => `<div><dt>${esc(vLabel(v))}</dt><dd>${inr(v[1])}</dd></div>`).join("") : ""}</dl>
  </div>
  <div class="tab-panel" data-panel="help" hidden>
    <div><h3>How delivery works</h3>
      <ul class="ticks">
        <li><span>Pay with UPI, then send your 12-digit UTR and a screenshot.</span></li>
        <li><span>We verify the payment and send your credentials by WhatsApp or email, typically within 15–30 minutes during ${esc(CFG.hours)}.</span></li>
        <li><span>Problem logging in? Message us within 24 hours with your Order ID and we'll replace or fix it.</span></li>
      </ul><a class="link-btn arrow" href="#/policy/refunds">Refund &amp; replacement policy</a></div>
    <dl class="facts"><div><dt>WhatsApp</dt><dd>+${esc(CFG.whatsapp)}</dd></div><div><dt>Email</dt><dd>${esc(CFG.email)}</dd></div><div><dt>Instagram</dt><dd>@${esc(CFG.instagram)}</dd></div></dl>
  </div>

  ${similar.length ? `<section class="section"><div class="sec-head"><h2 class="sec-title">Similar games</h2><a class="link-btn arrow" href="#/games?tag=${encodeURIComponent(it.tags[0] || "")}">View more</a></div><div class="grid four">${similar.map(card).join("")}</div></section>` : ""}
</div>`;
  }
  function bindGame(id) {
    const it = BY_ID[id]; if (!it) return;
    $$("[data-pick]").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.pick; const v = it.v[i];
      $$("[data-pick]").forEach((x) => x.setAttribute("aria-checked", x === b));
      $("#buy-price").textContent = inr(v[1]);
      $("#buy-label").textContent = v[2] === "other" ? v[0] : TIER[v[2]].title;
      $("#add-btn").dataset.add = it.id + "|" + i;
      if (TIER_ORDER.indexOf(v[2]) > -1) store.set("gh_tier", v[2]);
    }));
    $("#buy-now").addEventListener("click", () => { const [i, vi] = $("#add-btn").dataset.add.split("|"); addToCart(i, +vi); location.hash = "#/cart"; });
    $$("[data-tab]").forEach((b) => b.addEventListener("click", () => {
      $$("[data-tab]").forEach((x) => x.setAttribute("aria-selected", x === b));
      $$("[data-panel]").forEach((p) => (p.hidden = p.dataset.panel !== b.dataset.tab));
    }));
  }

  /* ---------- Cart ---------- */
  function summaryRows(c) {
    return `<div class="srow"><span>Subtotal</span><span>${inr(c.subtotal)}</span></div>
      ${c.bundle ? `<div class="srow disc"><span>Bundle discount (${Math.round(c.bundleRate * 100)}% off ${c.personalQty} Personal)</span><span>−${inr(c.bundle)}</span></div>` : ""}
      ${c.couponAmt ? `<div class="srow disc"><span>Coupon ${esc(couponCode)}</span><span>−${inr(c.couponAmt)}</span></div>` : ""}
      <div class="srow total"><span>Total</span><span>${inr(c.total)}</span></div>`;
  }
  function pageCart() {
    const c = calc();
    if (!c.count) return `${pageHead("Your cart", "Nothing here yet.")}<div class="container"><div class="empty" style="margin-bottom:3rem"><h3>Your cart is empty</h3><p>Find something to play — most games start at ₹69.</p><a class="btn arrow" href="#/games">Browse games</a></div></div>`;
    const lines = c.lines.map((x) => `<article class="line" data-key="${esc(x.key)}">
        <a class="cover" href="#/game/${esc(x.it.id)}" data-ini="${esc(ini(x.it.n))}"><img src="${esc(x.it.i)}" alt="" onerror="this.remove()"></a>
        <div><h3><a href="#/game/${esc(x.it.id)}">${esc(x.it.n)}</a></h3><p class="sub">${esc(x.label)} · ${inr(x.price)} each</p>
          <div class="stepper" role="group" aria-label="Quantity"><button data-q="-1" aria-label="Decrease quantity">−</button><span>${x.qty}</span><button data-q="1" aria-label="Increase quantity">+</button></div></div>
        <div class="line-r"><span class="lp">${inr(x.price * x.qty)}</span><button class="rm" data-rm>Remove</button></div></article>`).join("");
    let nudge = "";
    if (c.nextRule && c.personalQty >= 1) nudge = `<div class="nudge">Add ${c.nextRule.min - c.personalQty} more <b>Personal</b> game${c.nextRule.min - c.personalQty > 1 ? "s" : ""} to unlock <b>${Math.round(c.nextRule.rate * 100)}% off</b> your Personal games.</div>`;
    else if (c.personalQty === 0 && c.count) nudge = `<div class="nudge">Tip: 2+ <b>Personal</b> games get 25% off, 3 get 40%, 4+ get 47%.</div>`;
    return `${pageHead("Your cart", c.count + (c.count === 1 ? " item" : " items"))}
<div class="container"><div class="two-col">
  <div><div class="lines">${lines}</div><div class="form-actions" style="margin-top:1.2rem"><a class="btn ghost sm arrow" href="#/games">Keep shopping</a><button class="btn ghost sm" id="clear">Clear cart</button></div></div>
  <aside class="summary"><h2>Order summary</h2>
    ${nudge}
    ${couponCode ? `<div class="applied"><span><b>${esc(couponCode)}</b> applied</span><button class="rm" id="rm-coupon">Remove</button></div>` : `<form class="coupon" id="coupon-form"><label class="sr" for="cin">Promo code</label><input class="field" id="cin" placeholder="Promo code" autocomplete="off"><button class="btn sm" type="submit">Apply</button></form>`}
    <p class="msg ${c.couponPaused ? "bad" : ""}" id="cmsg">${c.couponPaused ? "Coupon paused — it needs 2+ non-budget items." : ""}</p>
    ${summaryRows(c)}
    <a class="btn red block arrow" href="#/checkout" style="margin-top:1rem">Proceed to checkout</a>
    <p class="muted" style="font-size:.74rem;margin-top:.8rem;text-align:center">Pay by UPI · Digital delivery · Support on WhatsApp</p>
  </aside>
</div></div>`;
  }
  function bindCart() {
    const rerender = () => { render(); };
    $$(".line").forEach((el) => {
      const key = el.dataset.key;
      el.addEventListener("click", (e) => {
        const l = cart.find((x) => lineKey(x) === key); if (!l) return;
        const qb = e.target.closest("[data-q]");
        if (qb) { l.q += +qb.dataset.q; if (l.q <= 0) cart = cart.filter((x) => x !== l); l.q = Math.min(l.q, 10); saveCart(); rerender(); }
        if (e.target.closest("[data-rm]")) { cart = cart.filter((x) => x !== l); saveCart(); rerender(); toast("Removed from cart"); }
      });
    });
    const cl = $("#clear"); if (cl) cl.addEventListener("click", () => { cart = []; clearCoupon(); saveCart(); rerender(); });
    const cf = $("#coupon-form");
    if (cf) cf.addEventListener("submit", (e) => {
      e.preventDefault(); const r = applyCoupon($("#cin").value);
      if (r.ok) { rerender(); toast(r.msg); } else { const m = $("#cmsg"); m.textContent = r.msg; m.className = "msg bad"; }
    });
    const rc = $("#rm-coupon"); if (rc) rc.addEventListener("click", () => { clearCoupon(); rerender(); });
  }

  /* ---------- Checkout ---------- */
  const draft = session.get("gh_draft", {});
  let ck = { step: 1, name: draft.name || "", email: draft.email || "", phone: draft.phone || "", utr: "", file: null, fileUrl: "", err: {}, placing: false, done: null };

  function upiLink(total) {
    return "upi://pay?pa=" + encodeURIComponent(CFG.upiId) + "&pn=" + encodeURIComponent(CFG.storeName) + "&am=" + total.toFixed(2) + "&cu=INR&tn=" + encodeURIComponent(CFG.storeName + " order");
  }
  function qrSvg(text) {
    try { const q = qrcode(0, "M"); q.addData(text); q.make(); return q.createSvgTag({ cellSize: 4, margin: 0, scalable: true }); } catch (e) { return ""; }
  }
  const newOrderId = () => "GH-" + Date.now().toString(36).slice(-4).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();

  function pageCheckout() {
    if (ck.done) return checkoutDone();
    const c = calc();
    if (!c.count) { location.replace("#/cart"); return ""; }
    return `${pageHead("Checkout")}
<div class="container"><div class="two-col">
  <div><div class="stepbar">${["Details", "Payment", "Review"].map((s, i) => `<div class="${ck.step === i + 1 ? "on" : ck.step > i + 1 ? "done" : ""}"><i>${ck.step > i + 1 ? "✓" : i + 1}</i>${s}</div>`).join("")}</div>
    <div id="ck-main">${ck.step === 1 ? stepDetails() : ck.step === 2 ? stepPayment(c) : stepReview(c)}</div></div>
  <aside class="summary"><h2>Order summary</h2>
    <div class="sum-items">${c.lines.map((x) => `<div class="sum-item">${coverEl(x.it)}<div><b>${esc(x.it.n)}</b><small>${esc(x.label)} × ${x.qty}</small></div><span>${inr(x.price * x.qty)}</span></div>`).join("")}</div>
    ${summaryRows(c)}
    <a class="link-btn" href="#/cart" style="display:inline-block;margin-top:1rem">Edit cart</a>
  </aside>
</div></div>`;
  }
  const fieldErr = (k) => (ck.err[k] ? `<p class="err" id="e-${k}">${esc(ck.err[k])}</p>` : "");
  function stepDetails() {
    return `<form class="form" id="f-details" novalidate>
      <div class="f"><label for="c-name">Full name</label><input class="field ${ck.err.name ? "bad" : ""}" id="c-name" autocomplete="name" value="${esc(ck.name)}">${fieldErr("name")}</div>
      <div class="f"><label for="c-email">Email</label><input class="field ${ck.err.email ? "bad" : ""}" id="c-email" type="email" autocomplete="email" inputmode="email" value="${esc(ck.email)}"><p class="hint">Your game login is delivered here.</p>${fieldErr("email")}</div>
      <div class="f"><label for="c-phone">WhatsApp number <span class="muted">(optional)</span></label><input class="field ${ck.err.phone ? "bad" : ""}" id="c-phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+91 98765 43210" value="${esc(ck.phone)}">${fieldErr("phone")}</div>
      <div class="form-actions"><button class="btn red arrow" type="submit">Continue to payment</button><a class="btn ghost" href="#/cart">Back</a></div></form>`;
  }
  function stepPayment(c) {
    const link = upiLink(c.total); const svg = qrSvg(link);
    return `<form class="form" id="f-pay" novalidate style="max-width:640px">
      <div class="pay-box"><div class="qr" id="qr-box">${svg || `<div class="qr-fallback">QR unavailable — use the UPI ID above.</div>`}</div>
        <div><span class="kicker">Pay exactly</span><div class="pay-amt">${inr(c.total)}</div>
          <span class="kicker">UPI ID</span>
          <div class="upi-id"><span>${esc(CFG.upiId)}</span><button type="button" class="link-btn" id="copy-upi">Copy</button></div>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:.6rem"><button type="button" class="link-btn" id="dl-qr">Download QR for GPay / PhonePe gallery</button></div>
          <p class="muted" style="font-size:.76rem;margin-top:.5rem">Scan the QR code with any UPI app (GPay, PhonePe, Paytm), upload the saved QR from your gallery, or copy the UPI ID above.</p></div></div>
      <div class="f"><label for="c-utr">12-digit UTR / reference number <span class="muted">(optional)</span></label><input class="field ${ck.err.utr ? "bad" : ""}" id="c-utr" inputmode="numeric" maxlength="12" autocomplete="off" placeholder="12-digit UTR (optional)" value="${esc(ck.utr)}"><p class="hint">Optional: Find it in your UPI app under transaction details.</p>${fieldErr("utr")}</div>
      <div class="f"><label for="c-file">Payment screenshot</label>
        <label class="upload" for="c-file"><span id="up-text">${ck.file ? "Change screenshot" : "Tap to choose an image (JPG, PNG, WEBP · max 5 MB)"}</span>${ck.fileUrl ? `<img src="${ck.fileUrl}" alt="Your payment screenshot preview">` : ""}</label>
        <input class="sr" id="c-file" type="file" accept="image/*">${fieldErr("file")}</div>
      <div class="form-actions"><button class="btn red arrow" type="submit">Review order</button><button class="btn ghost" type="button" id="back1">Back</button></div></form>`;
  }
  function downloadQrPng(total) {
    const svgEl = $("#qr-box svg");
    if (!svgEl) { toast("QR not ready"); return; }
    try {
      const xml = new XMLSerializer().serializeToString(svgEl);
      const img = new Image();
      const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 520;
        canvas.height = 600;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f0e0d";
        ctx.font = "bold 24px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAMES HABIBI — PAY " + inr(total), 260, 48);
        ctx.font = "16px monospace";
        ctx.fillStyle = "#4b4740";
        ctx.fillText("UPI ID: " + CFG.upiId, 260, 78);
        ctx.drawImage(img, 50, 100, 420, 420);
        ctx.font = "14px sans-serif";
        ctx.fillText("Open GPay / PhonePe -> Scan QR -> Upload from Gallery", 260, 562);
        URL.revokeObjectURL(url);
        const a = document.createElement("a");
        a.download = "games-habibi-upi-qr.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
        toast("QR saved — upload it in your UPI app");
      };
      img.src = url;
    } catch (e) {
      toast("Could not save QR — copy the UPI ID instead");
    }
  }
  function stepReview(c) {
    return `<div class="review">
        <div class="r"><span>Name</span><b>${esc(ck.name)}</b></div><div class="r"><span>Email</span><b>${esc(ck.email)}</b></div>
        ${ck.phone ? `<div class="r"><span>WhatsApp</span><b>${esc(ck.phone)}</b></div>` : ""}
        <div class="r"><span>UTR</span><b>${esc(ck.utr || "Not provided")}</b></div><div class="r"><span>Screenshot</span><b>${esc(ck.file ? ck.file.name : "—")}</b></div>
        <div class="r"><span>Amount paid</span><b>${inr(c.total)}</b></div></div>
      ${ck.err.submit ? `<p class="err" style="margin-top:1rem;color:var(--red)">${esc(ck.err.submit)}</p>` : ""}
      <p class="muted" style="font-size:.82rem;margin:1rem 0;max-width:560px">By placing this order you confirm you've already paid ${inr(c.total)} by UPI and agree to the <a href="#/policy/terms" style="text-decoration:underline">terms</a>.</p>
      <div class="form-actions"><button class="btn red" id="place" ${ck.placing ? "disabled" : ""}>${ck.placing ? "Placing order…" : "Place order"}</button><button class="btn ghost" id="back2" ${ck.placing ? "disabled" : ""}>Back</button></div>`;
  }
  function waUrl(o) {
    const itemLines = Array.isArray(o.items) && o.items.length
      ? o.items.map((i) => "• " + i.n + " (" + i.label + ") ×" + i.q + " — " + inr(i.price * i.q))
      : ["• " + (o.games || "Digital purchase")];
    const lines = ["Hi Games Habibi! I've placed an order and paid by UPI.", "", "Order ID: " + o.id, "Name: " + (o.name || "Customer"),
      "Items:"].concat(itemLines)
      .concat(["Total paid: " + inr(o.total), "UTR: " + (o.utr || "Attached in screenshot"), "", "I'm attaching my payment screenshot below. Please verify and send my access. Thanks!"]);
    return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
  }
  function checkoutDone() {
    const o = ck.done;
    return `${pageHead("Order placed")}<div class="container"><div class="done-box">
      <div class="check" aria-hidden="true">✓</div><h1 class="display">Thank you${o.name ? ", " + esc(o.name.split(" ")[0]) : ""}</h1>
      <p class="muted">Save your Order ID:</p><div class="oid">${esc(o.id)}</div>
      <ol><li><span>${o.sent ? "Your payment screenshot and order details have been sent to our verification bot." : "Send your payment screenshot on WhatsApp — tap the green button below."}</span></li>
          <li><span>We verify the payment (usually 15–30 minutes, ${esc(CFG.hours)}).</span></li>
          <li><span>Your login is delivered to ${esc(o.email)}${o.phone ? " and WhatsApp" : ""}.</span></li></ol>
      <div class="btns"><a class="btn" style="background:#1f9d55;border-color:#1f9d55;color:#fff" target="_blank" rel="noopener" href="${esc(waUrl(o))}">${o.sent ? "Message on WhatsApp" : "Send proof on WhatsApp"}</a>
        <button class="btn ghost" id="copy-oid">Copy order ID</button><a class="btn ghost" href="#/orders">My orders</a></div></div></div>`;
  }
  function bindCheckout() {
    const main = $("#ck-main");
    if (ck.done) { const b = $("#copy-oid"); if (b) b.addEventListener("click", () => copy(ck.done.id, "Order ID copied")); return; }
    if (!main) return;
    const go = (n) => { ck.step = n; ck.err = {}; render(); window.scrollTo({ top: 0 }); };
    const saveDraft = () => session.set("gh_draft", { name: ck.name, email: ck.email, phone: ck.phone });

    const f1 = $("#f-details");
    if (f1) f1.addEventListener("submit", (e) => {
      e.preventDefault();
      ck.name = $("#c-name").value.trim(); ck.email = $("#c-email").value.trim(); ck.phone = $("#c-phone").value.trim(); saveDraft();
      ck.err = {};
      if (ck.name.length < 2) ck.err.name = "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(ck.email)) ck.err.email = "Enter a valid email address.";
      if (ck.phone && ck.phone.replace(/\D/g, "").length < 10) ck.err.phone = "Enter a valid phone number or leave it blank.";
      if (Object.keys(ck.err).length) { render(); const bad = $(".field.bad"); if (bad) bad.focus(); return; }
      go(2);
    });

    const f2 = $("#f-pay");
    if (f2) {
      $("#copy-upi").addEventListener("click", () => copy(CFG.upiId, "UPI ID copied"));
      const dlBtn = $("#dl-qr");
      if (dlBtn) dlBtn.addEventListener("click", () => downloadQrPng(calc().total));
      $("#back1").addEventListener("click", () => go(1));
      $("#c-utr").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 12);
        ck.utr = e.target.value;
        if (!ck.utr || /^\d{12}$/.test(ck.utr)) delete ck.err.utr;
      });
      $("#c-file").addEventListener("change", (e) => {
        const file = e.target.files[0]; if (!file) return;
        ck.err.file = "";
        if (!/^image\//.test(file.type)) ck.err.file = "Please choose an image file.";
        else if (file.size > 5 * 1024 * 1024) ck.err.file = "Screenshot must be under 5 MB.";
        if (ck.err.file) { ck.file = null; playSound("error"); } else { if (ck.fileUrl) URL.revokeObjectURL(ck.fileUrl); ck.file = file; ck.fileUrl = URL.createObjectURL(file); }
        ck.utr = ($("#c-utr").value || "").trim(); if (!ck.utr || /^\d{12}$/.test(ck.utr)) delete ck.err.utr; render();
      });
      f2.addEventListener("submit", (e) => {
        e.preventDefault(); ck.utr = ($("#c-utr").value || "").trim(); ck.err = {};
        if (ck.utr && !/^\d{12}$/.test(ck.utr)) ck.err.utr = "If provided, UTR must be exactly 12 digits.";
        if (!ck.file) ck.err.file = "Please add your payment screenshot.";
        if (Object.keys(ck.err).length) { playSound("error"); render(); const bad = $(".field.bad"); if (bad) bad.focus(); return; }
        go(3);
      });
    }
    const place = $("#place");
    if (place) {
      $("#back2").addEventListener("click", () => go(2));
      place.addEventListener("click", async () => {
        const c = calc(); ck.placing = true; ck.err = {}; $("#ck-main").innerHTML = stepReview(c); bindCheckout();
        const itemsSummary = c.lines.map((x) => x.it.n + " (" + x.label + ") x" + x.qty).join(", ");
        const order = {
          id: newOrderId(), date: new Date().toISOString(), name: ck.name, email: ck.email, phone: ck.phone, utr: ck.utr,
          games: itemsSummary,
          items: c.lines.map((x) => ({ id: x.it.id, v: x.l.v, n: x.it.n, label: x.label, q: x.qty, price: x.price })),
          subtotal: c.subtotal, bundle: c.bundle, coupon: couponCode, couponAmt: c.couponAmt, total: c.total, sent: false
        };
        if (CFG.orderEndpoint) {
          try {
            const fd = new FormData();
            fd.append("orderId", order.id); fd.append("name", order.name); fd.append("email", order.email); fd.append("phone", order.phone);
            fd.append("items", itemsSummary); fd.append("games", itemsSummary); fd.append("total", String(order.total));
            fd.append("coupon", order.coupon || "None"); fd.append("utr", order.utr || "Not provided"); fd.append("photo", ck.file);
            const res = await fetch(CFG.orderEndpoint, { method: "POST", body: fd });
            const data = await res.json().catch(() => ({}));
            if (res.ok && (data.ok || data.success)) {
              order.sent = true;
            } else if (res.status >= 400 && res.status < 500) {
              playSound("error");
              ck.placing = false;
              ck.err.submit = data.error || "Please verify your payment screenshot and try again.";
              $("#ck-main").innerHTML = stepReview(c); bindCheckout(); return;
            }
          } catch (err) {
            // If backend is unreachable, still record order locally and guide user to send proof via WhatsApp
            order.sent = false;
          }
        }
        playSound("order-success");
        const orders = store.get("gh_orders", []); orders.unshift(order); store.set("gh_orders", orders.slice(0, 50));
        cart = []; clearCoupon(); saveCart();
        if (ck.fileUrl) URL.revokeObjectURL(ck.fileUrl);
        ck = { step: 1, name: ck.name, email: ck.email, phone: ck.phone, utr: "", file: null, fileUrl: "", err: {}, placing: false, done: order };
        render(); window.scrollTo({ top: 0 });
      });
    }
  }
  function copy(text, msg) {
    const ok = () => { toast(msg); buzz(); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, () => toast("Copy failed — select and copy manually"));
    else { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); ok(); } catch (e) {} t.remove(); }
  }

  /* ---------- Orders ---------- */
  function pageOrders() {
    const orders = store.get("gh_orders", []);
    const recent = store.get("gh_recent", []).map((i) => BY_ID[i]).filter(Boolean).slice(0, 6);
    const list = orders.length ? orders.map((o) => {
      const itemsHtml = Array.isArray(o.items) && o.items.length
        ? o.items.map((i) => `<li><span>${esc(i.n)} <span class="muted">· ${esc(i.label)} ×${i.q}</span></span><span>${inr(i.price * i.q)}</span></li>`).join("")
        : `<li><span>${esc(o.games || "Digital purchase")}</span><span>${inr(o.total)}</span></li>`;
      const canReorder = Array.isArray(o.items) && o.items.length > 0;
      return `<article class="order" data-oid="${esc(o.id)}">
        <div class="order-h"><div><b>${esc(o.id)}</b><div class="muted" style="font-size:.76rem">${new Date(o.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}${o.utr && o.utr !== "Not provided" ? " · UTR " + esc(o.utr) : ""}</div></div><span class="badge">${o.sent !== false ? "Submitted" : "Awaiting proof on WhatsApp"}</span></div>
        <ul>${itemsHtml}</ul>
        <div class="order-f"><span class="t">${inr(o.total)}</span><div class="form-actions" style="margin:0"><a class="btn ghost sm" target="_blank" rel="noopener" href="${esc(waUrl(o))}">Message on WhatsApp</a>${canReorder ? `<button class="btn sm" data-reorder>Order again</button>` : ""}</div></div></article>`;
    }).join("")
      : `<div class="empty"><h3>No orders yet</h3><p>Orders you place on this device will show up here.</p><a class="btn arrow" href="#/games">Browse games</a></div>`;
    return `${pageHead("My orders", "Your purchases and recently viewed games.")}
<div class="container"><div class="orders">${list}</div>
  ${orders.length ? `<p class="muted" style="font-size:.78rem;margin-bottom:2rem">Orders are saved in this browser only. <button class="link-btn" id="clear-orders" style="margin-left:.4rem">Clear history</button></p>` : ""}
  ${recent.length ? `<section class="section"><div class="sec-head"><h2 class="sec-title">Recently viewed</h2></div><div class="grid">${recent.map(card).join("")}</div></section>` : ""}</div>`;
  }
  function bindOrders() {
    $$("[data-reorder]").forEach((b) => b.addEventListener("click", () => {
      const o = store.get("gh_orders", []).find((x) => x.id === b.closest(".order").dataset.oid); if (!o || !Array.isArray(o.items)) return;
      o.items.forEach((i) => { if (BY_ID[i.id]) addToCart(i.id, i.v, i.q); });
      toast("Items added to your cart", "#/cart", "View cart");
    }));
    const c = $("#clear-orders"); if (c) c.addEventListener("click", () => { if (confirm("Remove saved orders from this browser?")) { store.del("gh_orders"); render(); } });
  }

  /* ---------- Contact & Game Request ---------- */
  function pageContact(q) {
    const tab = q.get("tab") === "request" || q.get("game") ? "request" : "support";
    const initGame = q.get("game") || "";
    const d = session.get("gh_draft", {});
    return `${pageHead(tab === "request" ? "Request a game" : "Help & support", "Direct line to our team via Telegram & WhatsApp.")}
<div class="container"><div class="two-col">
  <div>
    <div class="tabs" role="tablist" style="margin-top:0;margin-bottom:1.6rem">
      <button role="tab" aria-selected="${tab === "support"}" data-ctab="support">Support &amp; order help</button>
      <button role="tab" aria-selected="${tab === "request"}" data-ctab="request">Request an unlisted game</button>
    </div>

    <div data-cpanel="support" ${tab === "support" ? "" : "hidden"}>
      <form class="form" id="f-support">
        <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
        <div class="f"><label for="s-name">Your name</label><input class="field" id="s-name" required value="${esc(d.name || "")}" placeholder="Rahul Sharma"></div>
        <div class="f"><label for="s-email">Email</label><input class="field" id="s-email" type="email" required value="${esc(d.email || "")}" placeholder="rahul@example.com"></div>
        <div class="f"><label for="s-oid">Order ID <span class="muted">(optional)</span></label><input class="field" id="s-oid" placeholder="GH-... or ORD-..."></div>
        <div class="f"><label for="s-msg">How can we help?</label><textarea class="field" id="s-msg" rows="4" required placeholder="Describe your question or order issue..."></textarea></div>
        <p class="msg" id="s-status"></p>
        <div class="form-actions"><button class="btn red arrow" type="submit" id="s-btn">Send to support</button>
          <a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/${CFG.whatsapp}">Chat on WhatsApp</a></div>
      </form>
    </div>

    <div data-cpanel="request" ${tab === "request" ? "" : "hidden"}>
      <form class="form" id="f-request">
        <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
        <div class="f"><label for="r-game">Game title</label><input class="field" id="r-game" required value="${esc(initGame)}" placeholder="e.g. Call of Duty, Forza, FIFA..."></div>
        <div class="form-row">
          <div class="f"><label for="r-plat">Platform</label>
            <select class="field" id="r-plat"><option>Steam (PC)</option><option>Epic Games</option><option>EA App / Rockstar</option><option>Xbox / PC Game Pass</option></select></div>
          <div class="f"><label for="r-budget">Expected budget (₹) <span class="muted">(optional)</span></label>
            <input class="field" id="r-budget" type="number" placeholder="149"></div>
        </div>
        <div class="f"><label for="r-contact">Your WhatsApp or Email</label><input class="field" id="r-contact" required value="${esc(d.phone || d.email || "")}" placeholder="+91 98765 43210 or email"></div>
        <div class="f"><label for="r-notes">Notes <span class="muted">(optional)</span></label><input class="field" id="r-notes" placeholder="Shared offline or personal Steam activation"></div>
        <p class="msg" id="r-status"></p>
        <div class="form-actions"><button class="btn red arrow" type="submit" id="r-btn">Submit game request</button>
          <a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent("Hi! Can you source this game: " + initGame)}">Ask on WhatsApp</a></div>
      </form>
    </div>
  </div>
  <aside class="summary">
    <h2>Direct contact</h2>
    <p class="muted" style="font-size:.86rem;margin-bottom:1rem">Active hours: <b>${esc(CFG.hours)}</b>. Typical response time is under 15 minutes.</p>
    <div class="srow"><span>WhatsApp</span><a href="https://wa.me/${CFG.whatsapp}" target="_blank" rel="noopener" style="text-decoration:underline">+${esc(CFG.whatsapp)}</a></div>
    <div class="srow"><span>Email</span><a href="mailto:${esc(CFG.email)}" style="text-decoration:underline">${esc(CFG.email)}</a></div>
    <div class="srow"><span>Instagram</span><a href="https://www.instagram.com/${esc(CFG.instagram)}/" target="_blank" rel="noopener" style="text-decoration:underline">@${esc(CFG.instagram)}</a></div>
  </aside>
</div></div>`;
  }
  function bindContact() {
    $$("[data-ctab]").forEach((b) => b.addEventListener("click", () => {
      $$("[data-ctab]").forEach((x) => x.setAttribute("aria-selected", x === b));
      $$("[data-cpanel]").forEach((p) => (p.hidden = p.dataset.cpanel !== b.dataset.ctab));
    }));
    const fs = $("#f-support");
    if (fs) fs.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = $("#s-btn"), st = $("#s-status");
      btn.disabled = true; btn.textContent = "Sending…"; st.textContent = "";
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: $("#s-name").value.trim(),
            email: $("#s-email").value.trim(),
            orderId: $("#s-oid").value.trim(),
            message: $("#s-msg").value.trim()
          })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data.error || "Could not send message.");
        playSound("success");
        st.className = "msg ok";
        st.textContent = data.message || "Sent! We'll reply shortly.";
        $("#s-msg").value = "";
      } catch (err) {
        playSound("error");
        st.className = "msg bad";
        st.textContent = err.message || "Could not reach support server — please message us on WhatsApp.";
      } finally {
        btn.disabled = false; btn.textContent = "Send to support";
      }
    });
    const fr = $("#f-request");
    if (fr) fr.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = $("#r-btn"), st = $("#r-status");
      btn.disabled = true; btn.textContent = "Submitting…"; st.textContent = "";
      try {
        const res = await fetch("/api/request-game", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            gameTitle: $("#r-game").value.trim(),
            platform: $("#r-plat").value,
            budget: $("#r-budget").value.trim(),
            contact: $("#r-contact").value.trim(),
            notes: $("#r-notes").value.trim()
          })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data.error || "Could not submit request.");
        playSound("success");
        st.className = "msg ok";
        st.textContent = data.message || "Request sent! We'll check availability and message you.";
        $("#r-game").value = ""; $("#r-notes").value = "";
      } catch (err) {
        playSound("error");
        st.className = "msg bad";
        st.textContent = err.message || "Could not submit — please ask us on WhatsApp.";
      } finally {
        btn.disabled = false; btn.textContent = "Submit game request";
      }
    });
  }

  /* ---------- Guides ---------- */
  const ARTICLES = [
    { s: "shared-vs-budget-vs-personal", t: "Which access type should you pick?", m: "3 min read", d: "Personal, Shared and Budget Friendly compared.",
      b: `<p>Every game is sold three ways. They all end with you playing the game on your PC — the difference is whose Steam library it lives in and how much you pay.</p>
        <h2>Personal — ₹299</h2><p>The game is activated on <b>your own</b> Steam account. It sits in your library and you don't need to log out of anything. Personal games are also the ones that count toward <a href="#/guides/bundles-and-coupons" style="text-decoration:underline">bundle discounts</a>.</p>
        <h2>Shared — ₹149</h2><p>We send you login details for a Steam account that already owns the game. You sign in, download the game, then switch Steam to Offline Mode and play. Single-player campaigns, achievements and local saves all work offline. This is our most popular choice.</p>
        <h2>Budget Friendly — ₹69</h2><p>The cheapest way in, for offline single-player. Budget items are not eligible for coupons or bundle discounts. If the account password is ever changed later, we replace it at 50% off.</p>
        <div class="callout"><b>Rule of thumb:</b> want it in your own library? Personal. Want the best price for a story game you'll play offline? Shared. Just want to try something for the lowest cost? Budget.</div>` },
    { s: "steam-offline-mode", t: "Play offline after you download", m: "2 min read", d: "Step-by-step for Shared and Budget accounts.",
      b: `<p>Shared and Budget accounts are built for offline play. Follow these steps once and you're done.</p>
        <ol><li><span>Log in to Steam with the account details we send you. When Steam asks for a Steam Guard code, message us and we'll send it.</span></li>
        <li><span>Open the Library, find the game and click <b>Install</b>. Wait for the download to finish completely.</span></li>
        <li><span>In Steam, choose <b>Steam → Go Offline…</b> and confirm.</span></li>
        <li><span>Launch the game. Your progress saves locally on your PC.</span></li></ol>
        <div class="callout"><b>Keep your own account safe:</b> only enter the credentials we send into Steam on the login screen — never merge them with, or use them to sign in to, your personal account.</div>
        <p>Shared and Budget accounts are meant for single-player story modes. Online multiplayer isn't supported on them.</p>` },
    { s: "ordering-with-upi", t: "Paying with UPI: QR, UTR and screenshots", m: "2 min read", d: "Everything you need at checkout.",
      b: `<p>Checkout takes three short steps: your details, payment, and review.</p>
        <ol><li><span>Enter your name, email and (optionally) your WhatsApp number. Your login is delivered to this email.</span></li>
        <li><span>Scan the QR with any UPI app, or tap <b>Pay now</b> on mobile. The amount is filled in for you — pay exactly that amount.</span></li>
        <li><span>Copy the 12-digit <b>UTR</b> (transaction reference) from your UPI app and add a screenshot of the successful payment.</span></li>
        <li><span>Place the order, then tap <b>Send proof on WhatsApp</b> so we can verify and dispatch your access.</span></li></ol>
        <p>Orders are typically fulfilled in 15–30 minutes during ${esc(CFG.hours)}. Orders placed late at night are handled first thing in the morning.</p>` },
    { s: "bundles-and-coupons", t: "How bundle discounts and coupons work", m: "2 min read", d: "Save up to 47% on Personal games.",
      b: `<h2>Bundles</h2><p>Add several <b>Personal</b> games to your cart and the discount applies automatically to those games:</p>
        <ul class="dash"><li>2 Personal games — 25% off</li><li>3 Personal games — 40% off</li><li>4 or more — 47% off</li></ul>
        <h2>Coupons</h2><p>Coupon codes need <b>two or more non-budget items</b> in the cart, and are applied after any bundle discount. Budget Friendly items never receive coupons or bundle offers.</p>
        <div class="callout">Codes are entered in the cart. Follow us on Instagram (@${esc(CFG.instagram)}) for new ones.</div>` }
  ];
  const FAQ = [
    ["Will using a shared account affect my personal Steam account?", "No. You only sign in with the shared details on the Steam login screen. Never enter them into your own account or link the two."],
    ["How does Shared or Budget play work?", "Log in with the account we send, download the game completely, then switch Steam to Offline Mode (Steam → Go Offline). Single-player campaigns and local saves work without interruption."],
    ["Can I play online multiplayer?", "Shared and Budget accounts are optimised for offline single-player. Use Offline Mode after downloading to avoid sign-outs."],
    ["How fast will I get my credentials?", "Usually 15–30 minutes after you submit a valid UTR and screenshot, during " + CFG.hours + ". Message us with your Order ID if you'd like a status update."],
    ["What if my Budget account password changes?", "We'll provide an identical replacement account at 50% off. Shared accounts include support if you run into login problems — message us within 24 hours with your Order ID."]
  ];
  function pageGuides() {
    const [a0, ...rest] = ARTICLES;
    return `${pageHead("Guides", "Stories, setup help and everything in between.")}
<div class="container"><div class="journal">
  <a class="feature" href="#/guides/${a0.s}">${scene("dark")}<div class="in"><span class="kicker" style="color:#ff8d92">Start here</span><h2 class="display">${esc(a0.t)}</h2><p>${esc(a0.d)}</p><span class="btn red sm arrow">Read guide</span></div></a>
  <div class="post-list">${rest.map((a, i) => `<a class="post" href="#/guides/${a.s}"><span class="ph">${i + 2}</span><span><h3>${esc(a.t)}</h3><small>${esc(a.m)}</small></span></a>`).join("")}</div>
</div>
<div class="sec-head"><h2 class="sec-title">Frequently asked</h2></div>
<div class="faq">${FAQ.map((f) => `<details><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("")}</div></div>`;
  }
  function pageArticle(slug) {
    const a = ARTICLES.find((x) => x.s === slug); if (!a) return notFound();
    document.title = a.t + " — Games Habibi";
    return `<div class="container"><article class="article"><p class="crumbs muted" style="margin-top:2rem"><a href="#/guides">Guides</a> · ${esc(a.m)}</p>
      <h1 class="display">${esc(a.t)}</h1>${a.b}<p style="margin-top:2rem"><a class="btn arrow" href="#/games">Shop games</a></p></article></div>`;
  }

  /* ---------- Policies ---------- */
  const POLICIES = {
    refunds: { t: "Refunds & replacements", b: `<p>Last updated: October 2026</p><h2>1. Replacement guarantee</h2><p>If an account or digital key is defective, invalid, or doesn't grant access as described at the time of purchase, we offer an immediate replacement or re-activation within 24 hours of notification.</p>
      <h2>2. Eligible refunds</h2><ul><li>The requested title is out of stock and can't be delivered within 24 hours.</li><li>A technical problem on our end prevents delivery and no suitable replacement is acceptable to you.</li></ul>
      <h2>3. Not eligible</h2><p>Refunds can't be issued once working credentials have been dispatched and redeemed, or if your PC doesn't meet the publisher's minimum system requirements.</p>
      <h2>4. How to ask</h2><p>Email <a href="mailto:${esc(CFG.email)}" style="text-decoration:underline">${esc(CFG.email)}</a> or message us on WhatsApp with your Order ID, proof of payment and a short description of the issue.</p>` },
    shipping: { t: "Digital delivery", b: `<p>Last updated: October 2026</p><h2>1. 100% digital</h2><p>Games Habibi is a digital storefront. Nothing is shipped to your address.</p>
      <h2>2. Timelines</h2><p>After you submit your UPI payment screenshot and UTR, delivery typically takes 15 minutes to 2 hours during ${esc(CFG.hours)}. Orders placed late at night are prioritised first thing the next morning.</p>
      <h2>3. How credentials arrive</h2><p>Delivery is made to the email address you enter at checkout, and on WhatsApp if you provide a number. Message us with your Order ID for a status update.</p>` },
    terms: { t: "Terms of service", b: `<p>Last updated: October 2026</p><h2>1. Digital delivery</h2><p>We deliver digital game credentials, Steam activations and subscription passes by email and private messaging.</p>
      <h2>2. Access types</h2><ul><li><b>In your Steam account:</b> direct activation or gifting to your personal Steam profile.</li><li><b>Shared Steam account:</b> login credentials for individual offline single-player use, as instructed in our guides.</li><li><b>Budget Friendly:</b> offline single-player access at our lowest price, excluded from coupons and bundles.</li></ul>
      <h2>3. Pricing &amp; payment</h2><p>All prices are in Indian rupees (₹). Orders are processed once the UPI payment screenshot and reference are confirmed by our team.</p>
      <h2>4. Support</h2><p>If you have trouble logging in or activating, contact support within 24 hours with your Order ID.</p>` },
    privacy: { t: "Privacy", b: `<p>Last updated: October 2026</p><h2>What we collect</h2><p>Only what's needed to fulfil your order: your name, email, optional WhatsApp number, UPI reference (UTR) and payment screenshot.</p>
      <h2>On your device</h2><p>Your cart, past orders and recently viewed games are stored in this browser (local storage). Clear them anytime from the Orders page or your browser settings.</p>
      <h2>How we use it</h2><p>To verify payment, deliver your purchase and provide support. We don't sell your data.</p>
      <h2>Questions</h2><p>Email <a href="mailto:${esc(CFG.email)}" style="text-decoration:underline">${esc(CFG.email)}</a>.</p>` }
  };
  function pagePolicy(slug) {
    const p = POLICIES[slug]; if (!p) return notFound();
    document.title = p.t + " — Games Habibi";
    return `${pageHead(esc(p.t))}<div class="container"><nav class="policy-nav chips" aria-label="Policies">${Object.keys(POLICIES).map((k) => `<a class="chip ${k === slug ? "on" : ""}" href="#/policy/${k}">${esc(POLICIES[k].t)}</a>`).join("")}</nav><div class="policy">${p.b}</div></div>`;
  }

  function notFound() {
    document.title = "Not found — Games Habibi";
    return `${pageHead("Lost?", "That page doesn't exist.")}<div class="container"><div class="empty" style="margin-bottom:3rem"><h3>We couldn't find that</h3><p>It may have moved or the game isn't in the catalog.</p><a class="btn arrow" href="#/games">Browse games</a></div></div>`;
  }

  /* ------------------------------------------------------------------
     Router
  ------------------------------------------------------------------- */
  const TITLES = { "": "Games Habibi — PC games & digital passes", games: "All games", collections: "Collections", guides: "Guides & FAQ", cart: "Cart", checkout: "Checkout", orders: "My orders", contact: "Help & game requests" };
  let lastKey = "";

  function render() {
    if (revealObserver) { revealObserver.disconnect(); revealObserver = null; }
    if (typeof cleanup === "function") { cleanup(); cleanup = null; }
    cart = store.get("gh_cart", []).map(normalizeLine).filter(Boolean);
    updateCount();
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?"); const parts = path.split("/").filter(Boolean).map(decodeURIComponent);
    const q = new URLSearchParams(qs || ""); const r = parts[0] || "";
    document.title = TITLES[r] ? (r ? TITLES[r] + " — Games Habibi" : TITLES[""]) : "Games Habibi";
    let post = null;
    if (r !== "checkout" && ck.done) ck.done = null;

    if (r === "") { app.innerHTML = pageHome(); post = bindHome; }
    else if (r === "games") { pageGames(q); }
    else if (r === "game") { app.innerHTML = pageGame(parts[1]); post = () => bindGame(parts[1]); }
    else if (r === "collections") app.innerHTML = pageCollections();
    else if (r === "guides") app.innerHTML = parts[1] ? pageArticle(parts[1]) : pageGuides();
    else if (r === "cart") { app.innerHTML = pageCart(); post = bindCart; }
    else if (r === "checkout") { const h = pageCheckout(); if (h) { app.innerHTML = h; post = bindCheckout; } }
    else if (r === "orders") { app.innerHTML = pageOrders(); post = bindOrders; }
    else if (r === "contact") { app.innerHTML = pageContact(q); post = bindContact; }
    else if (r === "policy") app.innerHTML = pagePolicy(parts[1]);
    else app.innerHTML = notFound();

    if (post) post();
    initReveal();
    $$("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === r || (r === "game" && a.dataset.nav === "games")));
    closeMenu();
  }

  function initReveal() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = $$(".hero-grid, .sec-head, .card, .tier, .banner, .steps3 .s, .coll", app);
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    nodes.forEach((node, index) => {
      node.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
      node.classList.add("reveal");
      revealObserver.observe(node);
    });
  }
  function onRoute() {
    const key = location.hash.split("?")[0];
    render();
    if (key !== lastKey || true) window.scrollTo(0, 0);
    lastKey = key;
    closeSearch();
  }

  /* ------------------------------------------------------------------
     Header: menu, search, global click handling
  ------------------------------------------------------------------- */
  const themeToggle = $("#theme-toggle");
  const themeMeta = $('meta[name="theme-color"]');
  function setTheme(theme) {
    const dark = theme === "dark";
    if (dark) document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(dark));
      themeToggle.setAttribute("aria-label", "Switch to " + (dark ? "light" : "dark") + " mode");
    }
    if (themeMeta) themeMeta.content = dark ? "#171614" : "#ebe6da";
    store.set("gh_theme", dark ? "dark" : "light");
  }
  themeToggle.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

  function closeMenu() { $("#main-nav").classList.remove("open"); $("#menu-btn").setAttribute("aria-expanded", "false"); }
  $("#menu-btn").addEventListener("click", () => { const o = $("#main-nav").classList.toggle("open"); $("#menu-btn").setAttribute("aria-expanded", o); });

  const sp = $("#search-panel"), si = $("#search-input"), sr = $("#search-results");
  function openSearch() { sp.hidden = false; $("#open-search").setAttribute("aria-expanded", "true"); si.focus(); }
  function closeSearch() { if (sp.hidden) return; sp.hidden = true; $("#open-search").setAttribute("aria-expanded", "false"); si.value = ""; sr.innerHTML = ""; }
  $("#open-search").addEventListener("click", () => (sp.hidden ? openSearch() : closeSearch()));
  $("#close-search").addEventListener("click", closeSearch);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
    if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  });
  si.addEventListener("input", () => {
    const n = si.value.trim().toLowerCase();
    if (n.length < 2) { sr.innerHTML = ""; return; }
    const hits = ALL.filter((x) => x.q.indexOf(n) > -1).sort((a, b) => (b.n.toLowerCase().indexOf(n) === 0) - (a.n.toLowerCase().indexOf(n) === 0) || byPop(a, b));
    if (!hits.length) { sr.innerHTML = `<li class="search-none">No match for “${esc(si.value)}”. <a href="#/contact?tab=request&game=${encodeURIComponent(si.value)}" style="text-decoration:underline">Request this game</a>.</li>`; return; }
    sr.innerHTML = hits.slice(0, 8).map((x) => `<li><a href="#/game/${esc(x.id)}"><span class="thumb cover" style="width:38px;height:50px;aspect-ratio:auto" data-ini="${esc(ini(x.n))}"><img src="${esc(imgSrc(x.i))}" alt="" onerror="this.remove()"></span><span><b>${esc(x.n)}</b><small>from ${inr(x.min)}</small></span></a></li>`).join("") +
      (hits.length > 8 ? `<li style="grid-column:1/-1"><a class="more" href="#/games?q=${encodeURIComponent(si.value.trim())}">See all ${hits.length} results →</a></li>` : "");
  });
  $("#search-form").addEventListener("submit", (e) => { e.preventDefault(); const v = si.value.trim(); if (v) { location.hash = "#/games?q=" + encodeURIComponent(v); } });

  // Add-to-cart buttons anywhere on the page
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    const [id, vi] = b.dataset.add.split("|"); addToCart(id, +vi); buzz();
    const it = BY_ID[id];
    toast("Added " + it.n, "#/cart", "View cart");
    if (b.classList.contains("card-add")) { b.classList.add("done"); b.textContent = "✓"; setTimeout(() => { b.classList.remove("done"); b.textContent = "+"; }, 1200); }
  });

  // footer links from config
  $("#foot-wa").href = "https://wa.me/" + CFG.whatsapp;
  $("#foot-mail").href = "mailto:" + CFG.email;
  $("#foot-ig").href = "https://www.instagram.com/" + CFG.instagram + "/";

  window.addEventListener("hashchange", onRoute);
  updateCount();
  onRoute();
})();
