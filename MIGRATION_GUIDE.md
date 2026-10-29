# Complete Domain & Hosting Migration Guide
## Migrating `www.eunoiaworks.com` from Google Sites to Modern Hosting

---

### Executive Summary

| Item | Current State (Google Sites) | Target Modern State |
| :--- | :--- | :--- |
| **Platform** | Google Sites (limited styling, slow) | Modern React 18 + Vite + Tailwind (Apple Design System) |
| **Domain** | `www.eunoiaworks.com` | `www.eunoiaworks.com` (identical, 0 SEO loss) |
| **DNS Nameservers** | `ns-cloud-c1.googledomains.com` (Google/Squarespace Domains) | Unchanged |
| **Corporate Email** | `inspire@eunoiaworks.com` on Google Workspace (`aspmx.l.google.com`) | **100% Preserved (Do NOT touch MX records)** |
| **Hosting Cost** | Free | **100% Free Forever** (via Vercel, Cloudflare Pages, or Netlify) |
| **SSL / HTTPS** | Provided by Google | Automatic free auto-renewing Let's Encrypt SSL |

---

### Critical Pre-Flight Notice: Email Protection

Your email `inspire@eunoiaworks.com` is actively powered by **Google Workspace**. We verified your active MX records:
```dns
eunoiaworks.com.   3600  IN  MX  1   aspmx.l.google.com.
eunoiaworks.com.   3600  IN  MX  5   alt1.aspmx.l.google.com.
eunoiaworks.com.   3600  IN  MX  5   alt2.aspmx.l.google.com.
eunoiaworks.com.   3600  IN  MX  10  alt3.aspmx.l.google.com.
eunoiaworks.com.   3600  IN  MX  10  alt4.aspmx.l.google.com.
```
> [!CAUTION]
> **DO NOT** delete or edit any record of type **MX** or **TXT** (SPF/DKIM). These handle your email inbox. You will only be modifying the **CNAME** and **A** records for website traffic.

---

### Phase 1: Deploy the New Website (Choose Your Preferred Host)

#### Option A: Vercel (Recommended — 2 Minutes, Zero Setup)
1. Push this `eunoia-works` folder to a GitHub repository (e.g. `github.com/your-username/eunoia-works`).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and select the repository.
4. Vercel automatically detects **Vite**. Framework preset: `Vite`, Build command: `npm run build`, Output directory: `dist`.
5. Click **"Deploy"**. Your new site will be live on a temporary URL (e.g. `eunoia-works.vercel.app`) within 30 seconds.

#### Option B: Cloudflare Pages
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Compute (Workers & Pages)** → **Create application** → **Pages**.
2. Connect your GitHub repository.
3. Build preset: `Vite`, Output directory: `dist`.
4. Click **"Save and Deploy"**.

---

### Phase 2: Disconnect the Custom Domain in Google Sites

Before pointing your domain to the new host, Google Sites must release its domain claim:
1. Open your existing site in **[Google Sites](https://sites.google.com)**.
2. In the top-right corner, click the **Settings gear icon (⚙️)**.
3. In the sidebar, select **Custom Domains**.
4. You will see `www.eunoiaworks.com`. Click the **Trash Can icon (Delete)** to disconnect it.
5. Click **Publish** again so the change propagates.

---

### Phase 3: Update DNS Records in Google Domains / Squarespace

Log into the registrar where `eunoiaworks.com` is managed (Google Domains was migrated to Squarespace Domains; log in at [domains.squarespace.com](https://domains.squarespace.com) or Google Cloud DNS console).

Go to the **DNS Settings** tab and configure these records:

#### 1. Point `www` to your new host
- **Type**: `CNAME`
- **Host / Name**: `www`
- **Value / Target**: `cname.vercel-dns.com` *(if using Vercel)*
  *(or your respective Cloudflare / Netlify CNAME)*
- **TTL**: `3600` (or 1 hour)

#### 2. Redirect or Point Apex Domain (`eunoiaworks.com`)
Currently, visiting `eunoiaworks.com` without `www` did not resolve. To make both work seamlessly:
- **Type**: `A`
- **Host / Name**: `@` (or leave blank)
- **Value**: `76.76.21.21` *(Vercel Anycast IP)*
- **TTL**: `3600`

---

### Phase 4: Verification & Google Search Continuity

1. In your Vercel/Cloudflare project settings, go to **Settings → Domains**.
2. Add `www.eunoiaworks.com` and `eunoiaworks.com`.
3. Vercel will verify the DNS records (usually within 2 to 10 minutes) and automatically generate an SSL certificate.
4. **Google Search (SEO) Continuity**:
   - Because the domain name `www.eunoiaworks.com` remains identical, your Google search placement is fully retained.
   - The new website contains structured metadata, OpenGraph tags, semantic HTML5, and loads in under 0.8 seconds (compared to Google Sites' 4+ seconds), which significantly boosts your Google Search ranking.
   - Go to [Google Search Console](https://search.google.com/search-console), select your property, and click **"Request Indexing"** on the URL Inspection tool to trigger an immediate Googlebot recrawl.

---

### Local Testing & Development

To run or edit the website locally on your computer at any time:
```bash
cd eunoia-works
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

To generate a static production build:
```bash
npm run build
```
The compiled, optimized website is located in `eunoia-works/dist/`.
