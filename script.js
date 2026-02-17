// CONFIG
const WHATSAPP_LINK = "https://wa.me/message/P52FQIMNSRYUM1"; // <-- paste
const TELEGRAM_LINK = "https://t.me/Sasi_kyc_1"; // <-- paste

// Your ImgBB links added below. They will be auto-resolved to the real image using og:image.
const LOGO_URLS = {
  binance: "https://ibb.co/W4PLxbZB",
  bybit: "https://ibb.co/F4y1LrXH",
  okx: "https://ibb.co/ksQ0rYbB",
  cryptobot: "https://ibb.co/5hKQNvCK",
  hetzner: "https://ibb.co/q3kJQNPp",
  oraclecloud: "https://ibb.co/Yvbz10t",
  bitget: "https://ibb.co/whj3BkxB",
  xm: "https://ibb.co/v2ZPZ5G"
};

const SHOW_WELCOME_FLASH = true;
const WELCOME_FLASH_DURATION_MS = 1400;

// APP
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

// --- ImgBB resolver (works around CORS by using r.jina.ai text proxy) ---
function isImgBBPageUrl(u){
  try{
    const url = new URL(u);
    return url.hostname === 'ibb.co' || url.hostname.endsWith('.ibb.co');
  }catch{ return false; }
}

async function resolveImgBBToDirectImage(pageUrl){
  // r.jina.ai returns the HTML as text with permissive CORS
  const proxyUrl = 'https://r.jina.ai/' + pageUrl;
  const res = await fetch(proxyUrl);
  const txt = await res.text();

  // look for og:image content="..."
  const m = txt.match(/property=\"og:image\" content=\"([^\"]+)\"/i) || txt.match(/property='og:image' content='([^']+)'/i);
  if(m && m[1]) return m[1];

  // fallback: look for https://i.ibb.co/... in text
  const m2 = txt.match(/https:\/\/i\.ibb\.co\/[A-Za-z0-9_\-\/\.]+/);
  if(m2 && m2[0]) return m2[0];

  return '';
}

async function applyLogos(){
  const imgs = document.querySelectorAll('img[data-logo-key]');

  for (const img of imgs){
    const key = img.getAttribute('data-logo-key');
    const placeholder = img.getAttribute('data-placeholder') || img.src;
    const url = (LOGO_URLS[key] || '').trim();

    img.onerror = () => { img.src = placeholder; };

    if(!url){
      img.src = placeholder;
      continue;
    }

    if(isImgBBPageUrl(url)){
      try{
        const direct = await resolveImgBBToDirectImage(url);
        img.src = direct || placeholder;
      }catch{
        img.src = placeholder;
      }
    }else{
      img.src = url;
    }
  }
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
