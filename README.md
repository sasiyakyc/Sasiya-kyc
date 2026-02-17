# SASIYA KYC VERIFICATION

**Static site** (HTML/CSS/JS) for GitHub + Render.com.

## Set your links (hidden in UI)
Edit `script.js`:
- `WHATSAPP_LINK`
- `TELEGRAM_LINK`

## Set real logos (optional)
Edit `script.js` → `LOGO_URLS` (direct image links).

## Render.com Deploy (Recommended: Static Site)
### Option A — Create Static Site manually
1. Push this project to GitHub.
2. Render Dashboard → **New** → **Static Site**
3. Connect your GitHub repo
4. Settings:
   - **Build Command**: (leave empty)
   - **Publish Directory**: `.`
5. Create site.

### Option B — Blueprint (render.yaml)
This repo includes `render.yaml`.
1. Render Dashboard → **New** → **Blueprint**
2. Select your GitHub repo
3. Render will auto-detect and deploy.

## Notes
- Welcome flash shows on every page load.
- Contact links are not displayed in UI; tap cards to open.
- Footer: Power By Sasiya
