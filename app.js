// =======================
// CONTACT LINKS (PUT YOUR REAL LINKS HERE)
// Leave "" to hide that contact button.
// =======================
const CONTACT_LINKS = {
  WHATSAPP_GROUP: "https://chat.whatsapp.com/JR9zo49Ufl9GvVRjuUSjBx?mode=gi_t",     // EX: "https://chat.whatsapp.com/XXXXXXXXXXXX"
  WHATSAPP_CONTACT: "https://wa.me/message/P52FQIMNSRYUM1",   // EX: "https://wa.me/94771234567"
  TELEGRAM_CONTACT: "https://t.me/Sasi_kyc_1"    // EX: "https://t.me/YOUR_USERNAME"
};

// =======================
// LOGO LINKS (ADDED AS YOU SENT)
// =======================
const LOGO_LINKS = {
  BINANCE: "https://i.ibb.co/W4PLxbZB/binance-logo-free-download-free-vector.jpg",
  BYBIT: "https://i.ibb.co/F4y1LrXH/w9-AEc-EL8-400x400.jpg",
  OKX: "https://i.ibb.co/ksQ0rYbB/Logo-OKX.png",
  CRYPTO_BOT: "https://i.ibb.co/5hKQNvCK/312af9235aadad69655688eaee97eabf.jpg",
  HATZNER: "https://i.ibb.co/q3kJQNPp/Fahim-AI-7-22.png",
  ORACAL_CLOUD: "https://i.ibb.co/Yvbz10t/oracle-erp-cloud-logo-png-seeklogo-430989.png",
  BITGET: "https://i.ibb.co/whj3BkxB/2197889f8020488480eeaeef0eced58c.png",
  XM: "https://i.ibb.co/v2ZPZ5G/xm-logo-design-1172241-3953.jpg",
  KAST: "https://i.ibb.co/V0QrBKpf/unnamed.png",
  TG_WALLET: "https://i.ibb.co/5hKQNvCK/312af9235aadad69655688eaee97eabf.jpg",  // SAME AS CRYPTO_BOT (AS YOU SENT)
  AVITO: "https://i.ibb.co/7dJgRJss/avito-logo-png-seeklogo-398096.png",
  DIGITAL_OCEAN: "https://i.ibb.co/sJQLHzSG/download.jpg",
  VULTRA: "https://i.ibb.co/DgwY2jRh/6a35fd143876c911b4d0dc219295edd9.jpg",
  ATLANTIC: "https://i.ibb.co/QvgYMzw3/anet-pci-logo.png",
  AZURE: "https://i.ibb.co/fGZ7Rqf5/microsoft-azure-logo-png-seeklogo-326269.png",
  GOOGLE_CLOUD: "https://i.ibb.co/r2d45gwc/images.png",
  AWS: "https://i.ibb.co/CpqhYL4f/images.jpg"
};

// =======================
// OFFERS
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

function isHttpUrl(s){
  const t = (s || "").trim();
  return t.startsWith("http://") || t.startsWith("https://");
}
function getLogoUrl(logoKey){
  const url = (LOGO_LINKS[logoKey] || "").trim();
  return isHttpUrl(url) ? url : "";
}

// FLASH TOAST
let toastTimer = null;
function flash(text){
  const toast = document.getElementById("toast");
  const title = toast.querySelector(".toast-title");
  title.textContent = text || "WELCOME TO SASIYA KYC VERIFICATION";
  toast.hidden = false;

  if(toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 1500);
}

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
  a1.href = "javascript:void(0)";
  a1.dataset.flash = "WELCOME TO SASIYA KYC VERIFICATION";
  a1.textContent = "CONTACT";
  a1.addEventListener("click", (e) => { e.preventDefault(); openContactModal(); });

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

// CONTACT MODAL
const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");

const waGroup = document.getElementById("waGroup");
const waContact = document.getElementById("waContact");
const tgContact = document.getElementById("tgContact");
const contactHint = document.getElementById("contactHint");

function setContactLink(el, url){
  if(isHttpUrl(url)){
    el.href = url.trim();
    el.hidden = false;
    return true;
  }
  el.hidden = true;
  return false;
}

function openContactModal(){
  const ok1 = setContactLink(waGroup, CONTACT_LINKS.WHATSAPP_GROUP);
  const ok2 = setContactLink(waContact, CONTACT_LINKS.WHATSAPP_CONTACT);
  const ok3 = setContactLink(tgContact, CONTACT_LINKS.TELEGRAM_CONTACT);

  contactHint.hidden = (ok1 || ok2 || ok3);

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  flash("WELCOME TO SASIYA KYC VERIFICATION");
}

function closeContactModal(){
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
}

contactBtn.addEventListener("click", openContactModal);
modalBackdrop.addEventListener("click", closeContactModal);
modalCloseBtn.addEventListener("click", closeContactModal);

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && !modal.hidden) closeContactModal();
});

// FLASH ON ANY LINK CLICK
document.addEventListener("click", (e) => {
  const el = e.target.closest(".flash-link");
  if(!el) return;
  flash(el.dataset.flash || "WELCOME TO SASIYA KYC VERIFICATION");
});
