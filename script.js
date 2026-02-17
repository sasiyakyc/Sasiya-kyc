// ================================
// CONFIG (ඔයාගේ links මෙතන paste කරන්න)
// ================================

// Contact links (tap -> open). UI එකේ links display වෙන්නේ නෑ.
const WHATSAPP_LINK = "https://chat.whatsapp.com/JR9zo49Ufl9GvVRjuUSjBx?mode=gi_t";  // <-- PASTE YOUR WHATSAPP LINK HERE (e.g., https://wa.me/94XXXXXXXXX)
const TELEGRAM_LINK = "https://t.me/Sasi_kyc_1";  // <-- PASTE YOUR TELEGRAM LINK HERE (e.g., https://t.me/yourusername)

// Logo image URLs (optional)
const LOGO_URLS = {
  bybit: "https://ibb.co/F4y1LrXH",
  binance: "https://ibb.co/W4PLxbZB",
  cryptobot: "https://ibb.co/5hKQNvCK",
  bitget: "https://ibb.co/whj3BkxB",
  hetzner: "https://ibb.co/q3kJQNPp",
  oraclecloud: "https://ibb.co/Yvbz10t",
  okx: "https://ibb.co/ksQ0rYbB"
};

// Welcome flash config
const SHOW_WELCOME_FLASH = true;
const WELCOME_FLASH_DURATION_MS = 1400;

// ================================
// APP
// ================================

const modal = document.getElementById('contactModal');
const moreWorkBtn = document.getElementById('moreWorkBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

const whatsappCard = document.getElementById('whatsappCard');
const telegramCard = document.getElementById('telegramCard');

const whatsappHint = document.getElementById('whatsappHint');
const telegramHint = document.getElementById('telegramHint');

const welcome = document.getElementById('welcome');

function openModal(){
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setContactLink(el, hintEl, link){
  const v = (link || '').trim();
  if(!v){
    el.classList.add('disabled');
    el.href = '#';
    hintEl.textContent = 'Not set';
    return;
  }
  el.classList.remove('disabled');
  el.href = v;
  hintEl.textContent = 'Tap to open';
}

function applyLogos(){
  const imgs = document.querySelectorAll('img[data-logo-key]');
  imgs.forEach(img => {
    const key = img.getAttribute('data-logo-key');
    const url = (LOGO_URLS[key] || '').trim();
    if(url){ img.src = url; }
  });
}

function showWelcomeFlash(){
  if(!SHOW_WELCOME_FLASH || !welcome) return;
  welcome.classList.add('show');
  welcome.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => {
    welcome.classList.add('hide');
    welcome.classList.remove('show');
    welcome.setAttribute('aria-hidden', 'true');
  }, WELCOME_FLASH_DURATION_MS);
}

moreWorkBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  const t = e.target;
  if(t && t.dataset && t.dataset.close === 'true') closeModal();
});
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

setContactLink(whatsappCard, whatsappHint, WHATSAPP_LINK);
setContactLink(telegramCard, telegramHint, TELEGRAM_LINK);
applyLogos();
showWelcomeFlash();
