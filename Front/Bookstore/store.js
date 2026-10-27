
const bookstoreData = [
  {
    id: 1,
    name: "Watchung Booksellers",
    type: "indie",
    address: "54 Fairfield St",
    city: "Montclair",
    state: "NJ",
    zip: "07042",
    region: "north",
    phone: "(973) 744-7177",
    hours: "Mon-Fri: 10am-7pm | Sat: 9am-6pm | Sun: 9am-5pm",
    description: "Vibrant community bookstore and literary hub in Montclair's Watchung Plaza with strong author events and kids section.",
    features: ["events", "kids"],
    featureLabels: ["Author Events", "Kids Room", "Curated Fiction"]
  },
  {
    id: 2,
    name: "Montclair Book Center",
    type: "indie",
    address: "221 Glenridge Ave",
    city: "Montclair",
    state: "NJ",
    zip: "07042",
    region: "north",
    phone: "(973) 783-3630",
    hours: "Mon-Sat: 10am-7pm | Sun: 11am-6pm",
    description: "One of the largest used and new independent bookshops in NJ with over 10,000 sq ft of books and vintage vinyl.",
    features: ["used", "vinyl"],
    featureLabels: ["10k Sq Ft", "Used & Rare", "Vintage Vinyl"]
  },
  {
    id: 3,
    name: "Labyrinth Books",
    type: "indie",
    address: "122 Nassau St",
    city: "Princeton",
    state: "NJ",
    zip: "08542",
    region: "central",
    phone: "(609) 497-1602",
    hours: "Mon-Sat: 10am-6pm | Sun: 11am-6pm",
    description: "Renowned intellectual bookstore serving Princeton University and the community with scholarly works, literature, and art.",
    features: ["events", "used"],
    featureLabels: ["Scholarly Titles", "Author Readings", "Art & Philosophy"]
  },
  {
    id: 4,
    name: "Little City Books",
    type: "indie",
    address: "100 Bloomfield St",
    city: "Hoboken",
    state: "NJ",
    zip: "07030",
    region: "north",
    phone: "(201) 626-7323",
    hours: "Mon-Sat: 10am-6pm | Sun: 10am-5pm",
    description: "Beloved neighborhood shop in downtown Hoboken hosting literary salons, music performances, and youth programs.",
    features: ["events", "kids"],
    featureLabels: ["Storytime", "Live Music", "Indie Bestsellers"]
  },
  {
    id: 5,
    name: "BookTowne",
    type: "indie",
    address: "171 Main St",
    city: "Manasquan",
    state: "NJ",
    zip: "08736",
    region: "south",
    phone: "(732) 722-7255",
    hours: "Mon-Sat: 10am-5pm | Sun: 11am-4pm",
    description: "Charming Jersey Shore indie bookshop steps from the beach, hosting renowned author signings and active summer book clubs.",
    features: ["events", "kids"],
    featureLabels: ["Jersey Shore", "Author Signings", "Book Clubs"]
  },
  {
    id: 6,
    name: "Words Bookstore",
    type: "indie",
    address: "179 Maplewood Ave",
    city: "Maplewood",
    state: "NJ",
    zip: "07040",
    region: "north",
    phone: "(973) 763-9500",
    hours: "Mon-Sat: 10am-6pm | Sun: 11am-5pm",
    description: "Community bookstore with a mission to welcome everyone and offer vocational training for individuals with autism.",
    features: ["events", "kids"],
    featureLabels: ["Inclusive Mission", "Children's Area", "Local Authors"]
  },
  {
    id: 7,
    name: "Asbury Book Cooperative",
    type: "indie",
    address: "644A Cookman Ave",
    city: "Asbury Park",
    state: "NJ",
    zip: "07712",
    region: "south",
    phone: "(732) 455-5509",
    hours: "Sun-Thu: 10am-6pm | Fri-Sat: 10am-8pm",
    description: "Community-owned, independent cooperative bookshop in the heart of downtown Asbury Park offering inclusive literature and events.",
    features: ["events", "vinyl"],
    featureLabels: ["Cooperative Owned", "Cookman Ave Hub", "Poetry Nights"]
  },
  {
    id: 8,
    name: "The Book Garden",
    type: "indie",
    address: "868 Province Line Rd",
    city: "Cream Ridge",
    state: "NJ",
    zip: "08514",
    region: "central",
    phone: "(609) 758-7770",
    hours: "Wed-Sun: 10am-5pm | Mon-Tue: Closed",
    description: "A treasure trove of over 50,000 gently used, rare, and out-of-print titles housed in a cozy farmhouse setting.",
    features: ["used"],
    featureLabels: ["50,000+ Used Titles", "Rare Finds", "Farmhouse Vibe"]
  },
  {
    id: 9,
    name: "Inkwood Books",
    type: "indie",
    address: "106 Kings Hwy E",
    city: "Haddonfield",
    state: "NJ",
    zip: "08033",
    region: "south",
    phone: "(856) 429-1298",
    hours: "Tue-Sat: 10am-5:30pm | Sun: 12pm-4pm",
    description: "Charming independent bookstore located on historic Kings Highway in Haddonfield with expert staff recommendations.",
    features: ["events", "kids"],
    featureLabels: ["Historic Downtown", "Staff Picks", "Children's Corner"]
  },
  {
    id: 10,
    name: "River Road Books",
    type: "indie",
    address: "759 River Rd",
    city: "Fair Haven",
    state: "NJ",
    zip: "07704",
    region: "central",
    phone: "(732) 747-9455",
    hours: "Mon-Sat: 10am-5pm | Sun: 11am-3pm",
    description: "Monmouth County staple offering curated fiction, children's books, greeting cards, and personal reading concierge services.",
    features: ["kids"],
    featureLabels: ["Curated Fiction", "Monmouth County", "Gift & Stationery"]
  },

  // --- REAL BARNES & NOBLE NJ LOCATIONS ---
  {
    id: 11,
    name: "Barnes & Noble - Paramus",
    type: "bn",
    address: "634 N State Route 17 (Fashion Center)",
    city: "Paramus",
    state: "NJ",
    zip: "07652",
    region: "north",
    phone: "(201) 445-4589",
    hours: "Mon-Sat: 10am-9pm | Sun: 11am-7pm",
    description: "Large two-story flagship retail bookstore featuring an expansive B&N Café with Starbucks brew, music vinyl section, and extensive children's department.",
    features: ["cafe", "vinyl", "kids", "events"],
    featureLabels: ["B&N Café (Starbucks)", "Flagship Store", "Vinyl & Music", "LEGO & Toys"]
  },
  {
    id: 12,
    name: "Barnes & Noble - Clifton Commons",
    type: "bn",
    address: "395 Route 3 East",
    city: "Clifton",
    state: "NJ",
    zip: "07014",
    region: "north",
    phone: "(973) 779-5500",
    hours: "Mon-Sat: 10am-9pm | Sun: 10am-7pm",
    description: "Conveniently located off Route 3 and the Garden State Parkway with a full Starbucks café, huge YA section, and manga hub.",
    features: ["cafe", "kids"],
    featureLabels: ["Route 3 Commons", "Full Café", "Manga & YA Hub", "Kids Storytime"]
  },
  {
    id: 13,
    name: "Barnes & Noble - Princeton MarketFair",
    type: "bn",
    address: "3535 US Highway 1 Suite 400",
    city: "Princeton",
    state: "NJ",
    zip: "08540",
    region: "central",
    phone: "(609) 750-9010",
    hours: "Mon-Sat: 10am-9pm | Sun: 11am-7pm",
    description: "Spacious Route 1 bookstore inside MarketFair featuring regular national author book signings, study seating, and full café.",
    features: ["cafe", "events", "kids"],
    featureLabels: ["MarketFair Mall", "Author Signings", "Study Lounge", "Full Café"]
  },
  {
    id: 14,
    name: "Barnes & Noble - Cherry Hill",
    type: "bn",
    address: "911 Haddonfield Rd (Towne Place)",
    city: "Cherry Hill",
    state: "NJ",
    zip: "08002",
    region: "south",
    phone: "(856) 486-1492",
    hours: "Mon-Sat: 10am-9pm | Sun: 11am-7pm",
    description: "South Jersey premier destination for books, games, and gifts at Towne Place at Garden State Park with dedicated children's reading stage.",
    features: ["cafe", "kids", "vinyl"],
    featureLabels: ["Garden State Park", "B&N Café", "Reading Stage", "Vinyl & Tech"]
  },
  {
    id: 15,
    name: "Barnes & Noble - Edison (Menlo Park)",
    type: "bn",
    address: "55 Parsonage Rd (Menlo Park Mall)",
    city: "Edison",
    state: "NJ",
    zip: "08837",
    region: "central",
    phone: "(732) 548-2120",
    hours: "Mon-Sat: 10am-9pm | Sun: 11am-7pm",
    description: "Anchor bookstore located at Menlo Park Mall featuring an extensive magazine kiosk, café, and broad selection of international fiction.",
    features: ["cafe", "kids"],
    featureLabels: ["Menlo Park Mall", "B&N Café", "Magazine Stand", "Study Desks"]
  },
  {
    id: 16,
    name: "Barnes & Noble - Holmdel",
    type: "bn",
    address: "2130 Route 35 (Commons at Holmdel)",
    city: "Holmdel",
    state: "NJ",
    zip: "07733",
    region: "central",
    phone: "(732) 275-0620",
    hours: "Mon-Sat: 10am-8pm | Sun: 11am-6pm",
    description: "Modern remodeled bookstore with open sunlit seating, curated bestseller tables, and Starbucks coffee bar.",
    features: ["cafe", "kids"],
    featureLabels: ["Commons at Holmdel", "Starbucks Inside", "Curated Fiction", "Gifts & Games"]
  },
  {
    id: 17,
    name: "Barnes & Noble - Livingston",
    type: "bn",
    address: "530 W Mt Pleasant Ave",
    city: "Livingston",
    state: "NJ",
    zip: "07039",
    region: "north",
    phone: "(973) 758-1310",
    hours: "Mon-Sat: 10am-9pm | Sun: 11am-6pm",
    description: "Essex County neighborhood bookstore with a friendly team, strong collection of biographies and history, plus café.",
    features: ["cafe", "kids"],
    featureLabels: ["Essex County", "B&N Café", "History & Bio", "Children's Corner"]
  },
  {
    id: 18,
    name: "Barnes & Noble - Brick",
    type: "bn",
    address: "44 Brick Plaza",
    city: "Brick",
    state: "NJ",
    zip: "08723",
    region: "south",
    phone: "(732) 262-0208",
    hours: "Mon-Sat: 10am-9pm | Sun: 11am-6pm",
    description: "Located in the bustling Brick Plaza near Ocean County beaches, featuring books, toys, collectibles, and full espresso bar.",
    features: ["cafe", "kids", "vinyl"],
    featureLabels: ["Brick Plaza", "Ocean County", "Espresso Bar", "Beach Reads"]
  }
];

// Application State
const state = {
  searchQuery: "",
  storeType: "all",      // 'all' | 'indie' | 'bn'
  region: "all",         // 'all' | 'north' | 'central' | 'south'
  specialty: "all"       // 'all' | 'cafe' | 'used' | 'events' | 'kids' | 'vinyl'
};

// DOM Elements
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const storesGrid = document.getElementById("storesGrid");
const resultsCount = document.getElementById("resultsCount");
const activeQueryLabel = document.getElementById("activeQueryLabel");
const emptyState = document.getElementById("emptyState");
const emptyStateMsg = document.getElementById("emptyStateMsg");
const resetAllBtn = document.getElementById("resetAllBtn");
const emptyResetBtn = document.getElementById("emptyResetBtn");
const storeTypeSwitcher = document.getElementById("storeTypeSwitcher");
const regionPills = document.getElementById("regionPills");
const specialtyFilter = document.getElementById("specialtyFilter");
const quickChips = document.querySelectorAll(".chip");

// Initialize
function initApp() {
  document.querySelectorAll("[data-image-fallback]").forEach(image => {
    const showImage = () => {
      image.hidden = false;
      image.closest(".state-image-placeholder")?.classList.add("has-image");
      const fallbackTarget = image.dataset.fallbackTarget;
      if (fallbackTarget) {
        image.parentElement.classList.add("has-logo");
        document.getElementById(fallbackTarget).hidden = true;
      }
      const placeholderNote = image.parentElement.querySelector(".image-placeholder-note");
      if (placeholderNote) placeholderNote.hidden = true;
    };

    image.addEventListener("load", showImage, { once: true });
    image.addEventListener("error", () => {
      image.hidden = true;
    }, { once: true });
    if (image.complete && image.naturalWidth > 0) showImage();
  });

  const signedInUser = document.getElementById("signedInUser");
  const signedInName = signedInUser.dataset.name.trim();
  if (signedInName) {
    document.getElementById("signedInName").textContent = `Hi ${signedInName}`;
    signedInUser.classList.remove("hidden");
  }

  renderStores();
  bindEvents();
}

// Bind User Interactions
function bindEvents() {
  const accountMenu = document.getElementById("signedInUser");
  const accountMenuButton = document.getElementById("accountMenuButton");

  accountMenuButton.addEventListener("click", () => {
    const isOpen = accountMenu.classList.toggle("open");
    accountMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  accountMenu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      accountMenu.classList.remove("open");
      accountMenuButton.setAttribute("aria-expanded", "false");
      accountMenuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!accountMenu.contains(event.target)) {
      accountMenu.classList.remove("open");
      accountMenuButton.setAttribute("aria-expanded", "false");
    }
  });

  // Real-time search by town name or zip code
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    toggleClearButton();
    renderStores();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    toggleClearButton();
    searchInput.focus();
    renderStores();
  });

  // Quick jump chips
  quickChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query");
      searchInput.value = query;
      state.searchQuery = query.toLowerCase();
      toggleClearButton();
      renderStores();
    });
  });

  // Store Type switcher (All, Indie, Barnes & Noble)
  storeTypeSwitcher.addEventListener("click", (e) => {
    const btn = e.target.closest(".type-btn");
    if (!btn) return;
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.storeType = btn.getAttribute("data-type");
    renderStores();
  });

  // Region filter pills
  regionPills.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    state.region = pill.getAttribute("data-region");
    renderStores();
  });

}

function toggleClearButton() {
  if (state.searchQuery.length > 0) {
    clearSearchBtn.classList.remove("hidden");
  } else {
    clearSearchBtn.classList.add("hidden");
  }
}

function resetAllFilters() {
  state.searchQuery = "";
  state.storeType = "all";
  state.region = "all";
  state.specialty = "all";

  searchInput.value = "";
  clearSearchBtn.classList.add("hidden");
  specialtyFilter.value = "all";

  document.querySelectorAll(".type-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-type") === "all");
  });

  document.querySelectorAll(".pill").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-region") === "all");
  });

  renderStores();
}

// Filter and Render Cards
function renderStores() {
  const filtered = bookstoreData.filter(store => {
    // 1. Store Type Filter
    if (state.storeType !== "all" && store.type !== state.storeType) {
      return false;
    }

    // 2. Region Filter
    if (state.region !== "all" && store.region !== state.region) {
      return false;
    }

    // 3. Specialty / Feature Filter
    if (state.specialty !== "all" && !store.features.includes(state.specialty)) {
      return false;
    }

    // 4. City, Town Name, or ZIP Code Search
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchCity = store.city.toLowerCase().includes(q);
      const matchZip = store.zip.includes(q);
      const matchName = store.name.toLowerCase().includes(q);
      const matchAddress = store.address.toLowerCase().includes(q);

      if (!matchCity && !matchZip && !matchName && !matchAddress) {
        return false;
      }
    }

    return true;
  });

  // Update Status Header
  updateStatus(filtered.length);

  // Render Grid or Empty State
  if (filtered.length === 0) {
    storesGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    
    if (state.searchQuery) {
      emptyStateMsg.textContent = `No bookstore locations found matching "${searchInput.value}". Try searching a nearby town like Montclair, Princeton, Paramus, or an NJ ZIP code.`;
    } else {
      emptyStateMsg.textContent = "No bookstores match the selected region and feature filters.";
    }
  } else {
    emptyState.classList.add("hidden");
    storesGrid.innerHTML = filtered.map(store => createStoreCardHTML(store)).join("");
  }
}

// Card HTML Generator
function createStoreCardHTML(store) {
  const isBn = store.type === "bn";
  const badgeClass = isBn ? "badge-bn" : "badge-indie";
  const badgeLabel = isBn ? "Barnes & Noble" : "Indie Bookshop";
  const regionLabel = store.region === "north" ? "North NJ" : store.region === "central" ? "Central NJ" : "Shore / South NJ";

  // Direct Google Maps Search Link
  const gmapsQuery = encodeURIComponent(`${store.name}, ${store.address}, ${store.city}, NJ ${store.zip}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${gmapsQuery}`;

  const featureTags = store.featureLabels.map(tag => `<span class="feature-tag">${escapeHTML(tag)}</span>`).join("");

  return `
    <article class="store-card" data-id="${store.id}">
      <div class="card-top">
        <h2 class="store-title">${escapeHTML(store.name)}</h2>
        <div class="badge-group">
          <span class="badge ${badgeClass}">${badgeLabel}</span>
          <span class="badge-region">${regionLabel}</span>
        </div>
      </div>
      
      <p class="store-desc">${escapeHTML(store.description)}</p>

      <div class="tag-list">
        ${featureTags}
      </div>

      <div class="store-meta">
        <div class="meta-item">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>${escapeHTML(store.address)}</strong><br>
            <span>${escapeHTML(store.city)}, NJ ${escapeHTML(store.zip)}</span>
          </div>
        </div>
        <div class="meta-item">
          <i class="fa-regular fa-clock"></i>
          <span>${escapeHTML(store.hours)}</span>
        </div>
        <div class="meta-item">
          <i class="fa-solid fa-phone"></i>
          <span>${escapeHTML(store.phone)}</span>
        </div>
      </div>

      <div class="card-actions">
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-directions">
          <i class="fa-solid fa-diamond-turn-right"></i> Directions
        </a>
        <a href="tel:${store.phone.replace(/[^0-9]/g, '')}" class="btn-phone">
          <i class="fa-solid fa-phone"></i> Call
        </a>
      </div>
    </article>
  `;
}

// Update Results Bar
function updateStatus(count) {
  resultsCount.textContent = `Showing ${count} ${count === 1 ? 'bookstore' : 'bookstores'}`;

  const hasFilter = state.searchQuery || state.storeType !== "all" || state.region !== "all" || state.specialty !== "all";

  if (state.searchQuery) {
    activeQueryLabel.textContent = `for "${searchInput.value}"`;
  } else {
    activeQueryLabel.textContent = "";
  }

  if (hasFilter) {
    resetAllBtn.classList.remove("hidden");
  } else {
    resetAllBtn.classList.add("hidden");
  }
}

// Helper to escape output
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Run on load
document.addEventListener("DOMContentLoaded", initApp);
