// =======================
// 1) CONTACT LINKS (REPLACE THESE)
// =======================
const CONTACT_LINKS = {
  WHATSAPP_GROUP: "PASTE_WHATSAPP_GROUP_LINK_HERE",
  WHATSAPP_CONTACT: "PASTE_WHATSAPP_CONTACT_LINK_HERE",
  TELEGRAM_CONTACT: "PASTE_TELEGRAM_CONTACT_LINK_HERE"
};

// =======================
// 2) LOGO LINKS SPACE (PASTE DIRECT IMAGE LINKS HERE)
// IMPORTANT: USE DIRECT IMAGE URL (EX: https://i.ibb.co/.../logo.png)
// DO NOT USE: https://ibb.co/xxxx (THAT IS A PAGE LINK)
// =======================
const LOGO_LINKS = {
  BINANCE: "PASTE_BINANCE_DIRECT_IMAGE_LINK_HERE",
  BYBIT: "PASTE_BYBIT_DIRECT_IMAGE_LINK_HERE",
  OKX: "PASTE_OKX_DIRECT_IMAGE_LINK_HERE",
  CRYPTO_BOT: "PASTE_CRYPTO_BOT_DIRECT_IMAGE_LINK_HERE",
  HATZNER: "PASTE_HATZNER_DIRECT_IMAGE_LINK_HERE",
  ORACAL_CLOUD: "PASTE_ORACAL_CLOUD_DIRECT_IMAGE_LINK_HERE",
  BITGET: "PASTE_BITGET_DIRECT_IMAGE_LINK_HERE",
  XM: "PASTE_XM_DIRECT_IMAGE_LINK_HERE",
  KAST: "PASTE_KAST_DIRECT_IMAGE_LINK_HERE",
  TG_WALLET: "PASTE_TG_WALLET_DIRECT_IMAGE_LINK_HERE",
  AVITO: "PASTE_AVITO_DIRECT_IMAGE_LINK_HERE",
  DIGITAL_OCEAN: "PASTE_DIGITAL_OCEAN_DIRECT_IMAGE_LINK_HERE",
  VULTRA: "PASTE_VULTRA_DIRECT_IMAGE_LINK_HERE",
  ATLANTIC: "PASTE_ATLANTIC_DIRECT_IMAGE_LINK_HERE",
  AZURE: "PASTE_AZURE_DIRECT_IMAGE_LINK_HERE",
  GOOGLE_CLOUD: "PASTE_GOOGLE_CLOUD_DIRECT_IMAGE_LINK_HERE",
  AWS: "PASTE_AWS_DIRECT_IMAGE_LINK_HERE",

  // OPTIONAL: IF YOU WANT A DEFAULT LOGO WHEN MISSING
  DEFAULT: ""
};

// =======================
// 3) OFFERS
// =======================
const OFFERS = [
  { name: "BYBIT", price: "3$-4$", summary: "KYC VERIFICATION PACKAGE FOR BYBIT. FAST PROCESSING.", logoKey: "BYBIT" },
  { name: "BINANCE", price: "3$", summary: "BINANCE KYC SUPPORT. QUICK AND RELIABLE.", logoKey: "BINANCE" },
  { name: "CRYPTO BOT", price: "1$", summary: "BASIC CRYPTO BOT RELATED SETUP / ACCESS PACKAGE.", logoKey: "CRYPTO_BOT" },
  { name: "BITGET", price: "3$", summary: "BITGET KYC VERIFICATION PACKAGE.", logoKey: "BITGET" },
  { name: "HATZNER", price: "6$", summary: "CLOUD SERVER ACCOUNT PACKAGE (HATZNER).", logoKey: "HATZNER" },
  { name: "ORACAL CLOUD", price: "7$-8$", summary: "ORACAL CLOUD ACCOUNT / ACCESS PACKAGE.", logoKey: "ORACAL_CLOUD" },
  { name: "OKX", price: "3$", summary: "OKX KYC VERIFICATION PACKAGE.", logoKey: "OKX" },
  { name: "AWS", price: "2$", summary: "AMAZON WEB SERVICES ACCOUNT PACKAGE.", logoKey: "AWS" },
  { name: "GOOGLE CLOUD", price: "9$", summary: "GOOGLE CLOUD PLATFORM PACKAGE.", logoKey: "GOOGLE_CLOUD" },
  { name: "AZURE PAY AS GO", price: "4$", summary: "MICROSOFT AZURE PAY-AS-YOU-GO PACKAGE.", logoKey: "AZURE" },
  { name: "ATLANTIC CLOUD", price: "3.5$", summary: "ATLANTIC CLOUD ACCOUNT PACKAGE.", logoKey: "ATLANTIC" },
  { name: "AZURE FREE", price: "3$", summary: "MICROSOFT AZURE FREE TIER PACKAGE.", logoKey: "AZURE" },
  { name: "VULTRA", price: "2$", summary: "VULTRA / VULTR TYPE CLOUD PACKAGE.", logoKey: "VULTRA" },
  { name: "DIGITAL OCEAN", price: "2$", summary: "DIGITAL OCEAN CLOUD ACCOUNT PACKAGE.", logoKey: "DIGITAL_OCEAN" },
  { name: "AVITO", price: "3$", summary: "AVITO RELATED PACKAGE.", logoKey: "AVITO" },
  { name: "SRI LANKA OLD XM", price: "5$-6$", summary: "XM RELATED PACKAGE (SRI LANKA OLD).", logoKey: "XM" },
  { name: "TG WALLET", price: "1$", summary: "TELEGRAM WALLET RELATED PACKAGE.", logoKey: "TG_WALLET" },
  { name: "KAST", price: "2$", summary: "KAST RELATED PACKAGE.", logoKey: "KAST" }
];

// =======================
// HELPERS
// =======================
function fallbackSvg(letter){
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <defs>
      <radialGradient id="g" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stop-color="rgba(255,27,58,0.55)"/>
        <stop offset="70%" stop-color="rgba(255,27,58,0.08)"/>
        <stop offset="100%" stop-color="rgba(255,27,58,0.02)"/>
      </radialGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#g)" stroke="rgba(255,27,58,0.45)" />
    <text x="32" y="38" text-anchor="middle" font-size="22" font-weight="900"
          fill="rgba(244,244,255,0.92)" font-family="Arial, Helvetica, sans-serif">${letter}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function getLogoUrl(logoKey){
  const url = LOGO_LINKS[logoKey];
  if(url && url.startsWith("http")) return url;
  if(LOGO_LINKS.DEFAULT && LOGO_LINKS.DEFAULT.startsWith("http")) return LOGO_LINKS.DEFAULT;
  return "";
}

// =======================
// FLASH TOAST
// =======================
let toastTimer = null;
function flash(text){
  const toast = document.getElementById("toast");
  const title = toast.querySelector(".toast-title");
  title.textContent = text || "WELCOME TO SASIYA KYC VERIFICATION";
  toast.hidden = false;

  if(toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 1500);
}

// =======================
// UI BUILD
// =======================
function buildCard(offer){
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("tabindex", "0");

  const img = document.createElement("img");
  const logo = getLogoUrl(offer.logoKey);

  img.src = logo || fallbackSvg(offer.name.slice(0,1));
  img.alt = `${offer.name} LOGO`;
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => { img.src = fallbackSvg(offer.name.slice(0,1)); };

  const logoBox = document.createElement("div");
  logoBox.className = "logo";
  logoBox.appendChild(img);

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = offer.name;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = offer.price;

  const top = document.createElement("div");
  top.className = "card-top";
  top.appendChild(logoBox);

  const mid = document.createElement("div");
  mid.style.flex = "1";
  mid.appendChild(title);

  top.appendChild(mid);
  top.appendChild(price);

  const summary = document.createElement("div");
  summary.className = "summary";
  summary.textContent = offer.summary;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const a1 = document.createElement("a");
  a1.className = "btn small btn-ghost flash-link";
  a1.href = "#contact";
  a1.dataset.flash = "WELCOME TO SASIYA KYC VERIFICATION";
  a1.textContent = "CONTACT";

  const a2 = document.createElement("a");
  a2.className = "btn small btn-primary flash-link";
  a2.href = "#offers";
  a2.dataset.flash = "WELCOME TO SASIYA KYC VERIFICATION";
  a2.textContent = "SELECT";

  actions.appendChild(a1);
  actions.appendChild(a2);

  card.appendChild(top);
  card.appendChild(summary);
  card.appendChild(actions);

  card.addEventListener("click", () => flash("WELCOME TO SASIYA KYC VERIFICATION"));
  card.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      flash("WELCOME TO SASIYA KYC VERIFICATION");
    }
  });

  return card;
}

// INIT OFFERS
const grid = document.getElementById("offersGrid");
OFFERS.forEach(o => grid.appendChild(buildCard(o)));

// CONTACT TOGGLE
const contactBtn = document.getElementById("contactBtn");
const contactCard = document.getElementById("contactCard");

contactBtn.addEventListener("click", () => {
  contactCard.hidden = !contactCard.hidden;
  flash("WELCOME TO SASIYA KYC VERIFICATION");
  if(!contactCard.hidden){
    contactCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// SET CONTACT LINKS
document.getElementById("waGroup").href = CONTACT_LINKS.WHATSAPP_GROUP;
document.getElementById("waContact").href = CONTACT_LINKS.WHATSAPP_CONTACT;
document.getElementById("tgContact").href = CONTACT_LINKS.TELEGRAM_CONTACT;

// FLASH ON ANY LINK CLICK
document.addEventListener("click", (e) => {
  const el = e.target.closest(".flash-link");
  if(!el) return;
  flash(el.dataset.flash || "WELCOME TO SASIYA KYC VERIFICATION");
});
