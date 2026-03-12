# GitHub Pages Setup för iOS App Landing Page

Guide för att sätta upp en landing page för en iOS-app med GitHub Pages.

## Repo-struktur

```
repo-name/
├── docs/                    # GitHub Pages source folder
│   ├── index.html          # Huvudsida (landing page)
│   ├── privacy.html        # Privacy policy
│   ├── support.html        # Support/FAQ-sida
│   ├── styles.css          # All styling
│   ├── i18n.js             # Internationalisering (EN/DE/ES/JA)
│   ├── favicon.ico         # Favicon
│   ├── app-icon.png        # App-ikon (används i navbar och hero)
│   └── screenshot-*.png    # App screenshots (1-6)
└── README.md
```

## GitHub Pages Setup

1. Gå till **Settings > Pages** i ditt repo
2. Under "Source", välj **Deploy from a branch**
3. Välj **main** branch och **/docs** folder
4. Klicka Save

Sidan blir tillgänglig på: `https://USERNAME.github.io/REPO-NAME/`

---

## Filer att anpassa

### 1. Grundläggande info (ersätt överallt)

| Placeholder | Ersätt med |
|-------------|------------|
| `APP_NAME` | Ditt app-namn (t.ex. "MyApp") |
| `APP_TAGLINE` | Kort tagline (t.ex. "Track your habits") |
| `APP_DESCRIPTION` | Längre beskrivning för hero section |
| `APP_STORE_URL` | `https://apps.apple.com/app/id123456789` |
| `APP_VERSION` | Nuvarande version (t.ex. "v1.0.0") |
| `DEVELOPER_NAME` | Ditt namn |
| `SUPPORT_EMAIL` | Support-email |
| `CURRENT_YEAR` | 2026 (eller aktuellt år) |

### 2. Features att anpassa

Ändra features i `index.html` och översättningar i `i18n.js`. Varje feature har:
- Emoji-ikon (HTML entity)
- Titel
- Beskrivning

### 3. Screenshots

Lägg till 1-6 screenshots i `docs/`:
- Filnamn: `screenshot-1.png` till `screenshot-6.png`
- Rekommenderad storlek: iPhone-storlek, 2x retina (ca 828×1792 px)
- Uppdatera alt-texter i `index.html`

### 4. App-ikon

- Filnamn: `app-icon.png`
- Storlek: 512×512 px (eller 1024×1024 för retina)
- Används i navbar (32×32) och hero (120×120)

---

## index.html (Landing Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="APP_NAME - APP_TAGLINE. APP_DESCRIPTION">

  <!-- Open Graph -->
  <meta property="og:title" content="APP_NAME - APP_TAGLINE">
  <meta property="og:description" content="APP_DESCRIPTION">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://USERNAME.github.io/REPO-NAME/">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="APP_NAME - APP_TAGLINE">
  <meta name="twitter:description" content="APP_DESCRIPTION">

  <!-- Language alternates -->
  <link rel="alternate" hreflang="en" href="?lang=en">
  <link rel="alternate" hreflang="de" href="?lang=de">
  <link rel="alternate" hreflang="es" href="?lang=es">
  <link rel="alternate" hreflang="ja" href="?lang=ja">

  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="styles.css">
  <title>APP_NAME - APP_TAGLINE</title>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-content">
      <a href="index.html" class="logo" aria-label="APP_NAME Home">
        <img src="app-icon.png" alt="" class="logo-icon" width="32" height="32">
        APP_NAME
      </a>
      <div class="nav-links">
        <a href="support.html" data-i18n="nav.support">Support</a>
        <a href="privacy.html" data-i18n="nav.privacy">Privacy</a>
      </div>
      <div class="language-switcher" role="group" aria-label="Language selection">
        <button class="lang-btn active" data-lang="en" aria-label="English">EN</button>
        <button class="lang-btn" data-lang="de" aria-label="Deutsch">DE</button>
        <button class="lang-btn" data-lang="es" aria-label="Español">ES</button>
        <button class="lang-btn" data-lang="ja" aria-label="日本語">JA</button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-content">
      <img src="app-icon.png" alt="APP_NAME app icon" class="app-icon" width="120" height="120">
      <h1 id="hero-title" data-i18n="hero.title">APP_TAGLINE</h1>
      <p class="hero-subtitle" data-i18n="hero.subtitle">APP_DESCRIPTION</p>
      <div class="hero-badges">
        <span class="badge" data-i18n="hero.badge.1">Badge 1</span>
        <span class="badge" data-i18n="hero.badge.2">Badge 2</span>
        <span class="badge" data-i18n="hero.badge.3">Badge 3</span>
      </div>
      <a href="APP_STORE_URL" class="cta-button" data-i18n="hero.cta" target="_blank" rel="noopener">
        Download on App Store
      </a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features" aria-labelledby="features-title">
    <div class="container">
      <div class="section-header">
        <h2 id="features-title" data-i18n="features.title">Everything You Need</h2>
        <p data-i18n="features.subtitle">Feature subtitle here.</p>
      </div>
      <div class="features-grid">
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">&#128640;</span>
          <h3 data-i18n="features.feature1.title">Feature 1</h3>
          <p data-i18n="features.feature1.desc">Description of feature 1.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">&#128274;</span>
          <h3 data-i18n="features.feature2.title">Feature 2</h3>
          <p data-i18n="features.feature2.desc">Description of feature 2.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">&#127760;</span>
          <h3 data-i18n="features.feature3.title">Feature 3</h3>
          <p data-i18n="features.feature3.desc">Description of feature 3.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">&#128200;</span>
          <h3 data-i18n="features.feature4.title">Feature 4</h3>
          <p data-i18n="features.feature4.desc">Description of feature 4.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">&#128193;</span>
          <h3 data-i18n="features.feature5.title">Feature 5</h3>
          <p data-i18n="features.feature5.desc">Description of feature 5.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">&#128257;</span>
          <h3 data-i18n="features.feature6.title">Feature 6</h3>
          <p data-i18n="features.feature6.desc">Description of feature 6.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Screenshots Section -->
  <section class="screenshots" aria-labelledby="screenshots-title">
    <div class="container">
      <div class="section-header">
        <h2 id="screenshots-title" data-i18n="screenshots.title">See It in Action</h2>
      </div>
      <div class="screenshots-carousel" role="region" aria-label="App screenshots">
        <img src="screenshot-1.png" alt="Screenshot 1" class="screenshot" loading="lazy">
        <img src="screenshot-2.png" alt="Screenshot 2" class="screenshot" loading="lazy">
        <img src="screenshot-3.png" alt="Screenshot 3" class="screenshot" loading="lazy">
        <img src="screenshot-4.png" alt="Screenshot 4" class="screenshot" loading="lazy">
        <img src="screenshot-5.png" alt="Screenshot 5" class="screenshot" loading="lazy">
        <img src="screenshot-6.png" alt="Screenshot 6" class="screenshot" loading="lazy">
      </div>
    </div>
  </section>

  <!-- What's New Section (optional) -->
  <section class="whats-new" aria-labelledby="whatsnew-title">
    <div class="container">
      <div class="section-header">
        <span class="version-tag">APP_VERSION</span>
        <h2 id="whatsnew-title" data-i18n="whatsnew.title">What's New</h2>
      </div>
      <div class="whats-new-list">
        <div class="whats-new-item">
          <span class="whats-new-icon" aria-hidden="true">&#10024;</span>
          <div class="whats-new-content">
            <h3 data-i18n="whatsnew.item1.title">New Feature</h3>
            <p data-i18n="whatsnew.item1.desc">Description of new feature.</p>
          </div>
        </div>
        <!-- Add more items as needed -->
      </div>
    </div>
  </section>

  <!-- Download Section -->
  <section class="download" id="download" aria-labelledby="download-title">
    <div class="container">
      <h2 id="download-title" data-i18n="download.title">Ready to Get Started?</h2>
      <p data-i18n="download.subtitle">Download APP_NAME and get started today.</p>
      <a href="APP_STORE_URL" class="cta-button" target="_blank" rel="noopener">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <span data-i18n="hero.cta">Download on App Store</span>
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer role="contentinfo">
    <div class="container">
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="support.html" data-i18n="footer.support">Support</a>
        <a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a>
      </nav>
      <p class="copyright" data-i18n="footer.copyright">&copy; CURRENT_YEAR DEVELOPER_NAME. All rights reserved.</p>
    </div>
  </footer>

  <script src="i18n.js"></script>
</body>
</html>
```

---

## privacy.html (Privacy Policy)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="APP_NAME Privacy Policy - Your data stays on your device.">

  <meta property="og:title" content="Privacy Policy - APP_NAME">
  <meta property="og:description" content="Your data stays on your device.">
  <meta property="og:type" content="website">

  <link rel="alternate" hreflang="en" href="?lang=en">
  <link rel="alternate" hreflang="de" href="?lang=de">
  <link rel="alternate" hreflang="es" href="?lang=es">
  <link rel="alternate" hreflang="ja" href="?lang=ja">

  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="styles.css">
  <title>Privacy Policy - APP_NAME</title>
</head>
<body>
  <!-- Navigation (samma som index.html) -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-content">
      <a href="index.html" class="logo" aria-label="APP_NAME Home">
        <img src="app-icon.png" alt="" class="logo-icon" width="32" height="32">
        APP_NAME
      </a>
      <div class="nav-links">
        <a href="support.html" data-i18n="nav.support">Support</a>
        <a href="privacy.html" data-i18n="nav.privacy">Privacy</a>
      </div>
      <div class="language-switcher" role="group" aria-label="Language selection">
        <button class="lang-btn active" data-lang="en" aria-label="English">EN</button>
        <button class="lang-btn" data-lang="de" aria-label="Deutsch">DE</button>
        <button class="lang-btn" data-lang="es" aria-label="Español">ES</button>
        <button class="lang-btn" data-lang="ja" aria-label="日本語">JA</button>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="page-header">
    <div class="container">
      <h1 data-i18n="privacy.title">Privacy Policy</h1>
      <p data-i18n="privacy.subtitle">Your data stays on your device</p>
      <p class="text-muted" data-i18n="privacy.updated">Last updated: February CURRENT_YEAR</p>
    </div>
  </header>

  <!-- Page Content -->
  <main class="page-content">
    <div class="container container--narrow">

      <!-- Privacy Highlights -->
      <div class="privacy-highlights" role="list" aria-label="Privacy highlights">
        <div class="privacy-highlight" role="listitem">
          <span class="privacy-highlight-icon" aria-hidden="true">&#128241;</span>
          <p data-i18n="privacy.highlights.local">Local Storage Only</p>
        </div>
        <div class="privacy-highlight" role="listitem">
          <span class="privacy-highlight-icon" aria-hidden="true">&#128683;</span>
          <p data-i18n="privacy.highlights.notrack">No Tracking</p>
        </div>
        <div class="privacy-highlight" role="listitem">
          <span class="privacy-highlight-icon" aria-hidden="true">&#128274;</span>
          <p data-i18n="privacy.highlights.encrypted">Encrypted Data</p>
        </div>
        <div class="privacy-highlight" role="listitem">
          <span class="privacy-highlight-icon" aria-hidden="true">&#9989;</span>
          <p data-i18n="privacy.highlights.control">You're in Control</p>
        </div>
      </div>

      <div class="info-box">
        <p data-i18n="privacy.intro">APP_NAME is designed with privacy as a core principle.</p>
      </div>

      <!-- Data Collection -->
      <section class="content-section" aria-labelledby="collection-title">
        <h2 id="collection-title" data-i18n="privacy.collection.title">Data Collection</h2>
        <p data-i18n="privacy.collection.content">APP_NAME does not collect, transmit, or store any of your data on external servers. All information remains exclusively on your device.</p>
      </section>

      <!-- Data Storage -->
      <section class="content-section" aria-labelledby="storage-title">
        <h2 id="storage-title" data-i18n="privacy.storage.title">Data Storage</h2>
        <p data-i18n="privacy.storage.content">Your data is stored locally using Apple's frameworks.</p>
        <p data-i18n="privacy.storage.icloud">If you enable iCloud Sync, your data is synchronized through your personal iCloud account. This is optional.</p>
      </section>

      <!-- Third-Party Services -->
      <section class="content-section" aria-labelledby="thirdparty-title">
        <h2 id="thirdparty-title" data-i18n="privacy.thirdparty.title">Third-Party Services</h2>
        <p data-i18n="privacy.thirdparty.content">APP_NAME does not integrate any third-party analytics, advertising, or tracking services.</p>
        <p data-i18n="privacy.thirdparty.appstore">We use Apple's App Store for distribution. Apple's privacy policy governs their handling of data.</p>
      </section>

      <!-- User Rights -->
      <section class="content-section" aria-labelledby="rights-title">
        <h2 id="rights-title" data-i18n="privacy.rights.title">Your Rights</h2>
        <p data-i18n="privacy.rights.content">You have complete control over your data:</p>
        <ul>
          <li data-i18n="privacy.rights.item1">Export your data at any time</li>
          <li data-i18n="privacy.rights.item2">Delete individual items</li>
          <li data-i18n="privacy.rights.item3">Delete all app data by uninstalling</li>
          <li data-i18n="privacy.rights.item4">Disable iCloud Sync anytime</li>
        </ul>
      </section>

      <!-- Children's Privacy -->
      <section class="content-section" aria-labelledby="children-title">
        <h2 id="children-title" data-i18n="privacy.children.title">Children's Privacy</h2>
        <p data-i18n="privacy.children.content">APP_NAME is not directed at children under 13.</p>
      </section>

      <!-- Changes -->
      <section class="content-section" aria-labelledby="changes-title">
        <h2 id="changes-title" data-i18n="privacy.changes.title">Changes to This Policy</h2>
        <p data-i18n="privacy.changes.content">We may update this privacy policy from time to time.</p>
      </section>

      <!-- Contact -->
      <section class="content-section" aria-labelledby="contact-title">
        <h2 id="contact-title" data-i18n="privacy.contact.title">Contact Us</h2>
        <p data-i18n="privacy.contact.content">If you have questions about this privacy policy:</p>
        <div class="contact-card mt-lg">
          <p>DEVELOPER_NAME</p>
          <a href="mailto:SUPPORT_EMAIL" class="contact-email">SUPPORT_EMAIL</a>
        </div>
      </section>

    </div>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <div class="container">
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="support.html" data-i18n="footer.support">Support</a>
        <a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a>
      </nav>
      <p class="copyright">&copy; CURRENT_YEAR DEVELOPER_NAME. All rights reserved.</p>
    </div>
  </footer>

  <script src="i18n.js"></script>
</body>
</html>
```

---

## support.html (Support Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="APP_NAME Support - FAQ and contact information.">

  <meta property="og:title" content="Support - APP_NAME">
  <meta property="og:description" content="Get help with APP_NAME.">
  <meta property="og:type" content="website">

  <link rel="alternate" hreflang="en" href="?lang=en">
  <link rel="alternate" hreflang="de" href="?lang=de">
  <link rel="alternate" hreflang="es" href="?lang=es">
  <link rel="alternate" hreflang="ja" href="?lang=ja">

  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="styles.css">
  <title>Support - APP_NAME</title>
</head>
<body>
  <!-- Navigation (samma som index.html) -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-content">
      <a href="index.html" class="logo" aria-label="APP_NAME Home">
        <img src="app-icon.png" alt="" class="logo-icon" width="32" height="32">
        APP_NAME
      </a>
      <div class="nav-links">
        <a href="support.html" data-i18n="nav.support">Support</a>
        <a href="privacy.html" data-i18n="nav.privacy">Privacy</a>
      </div>
      <div class="language-switcher" role="group" aria-label="Language selection">
        <button class="lang-btn active" data-lang="en" aria-label="English">EN</button>
        <button class="lang-btn" data-lang="de" aria-label="Deutsch">DE</button>
        <button class="lang-btn" data-lang="es" aria-label="Español">ES</button>
        <button class="lang-btn" data-lang="ja" aria-label="日本語">JA</button>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="page-header">
    <div class="container">
      <h1 data-i18n="support.title">Support</h1>
      <p data-i18n="support.subtitle">Get help with APP_NAME</p>
    </div>
  </header>

  <!-- Page Content -->
  <main class="page-content">
    <div class="container container--narrow">

      <!-- FAQ Section -->
      <section class="content-section" aria-labelledby="faq-title">
        <h2 id="faq-title" data-i18n="support.faq.title">Frequently Asked Questions</h2>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span data-i18n="support.faq.q1">Question 1?</span>
          </button>
          <div class="faq-answer">
            <p class="faq-answer-content" data-i18n="support.faq.a1">Answer 1.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span data-i18n="support.faq.q2">Question 2?</span>
          </button>
          <div class="faq-answer">
            <p class="faq-answer-content" data-i18n="support.faq.a2">Answer 2.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span data-i18n="support.faq.q3">Question 3?</span>
          </button>
          <div class="faq-answer">
            <p class="faq-answer-content" data-i18n="support.faq.a3">Answer 3.</p>
          </div>
        </div>

        <!-- Add more FAQ items as needed -->
      </section>

      <!-- Troubleshooting Section -->
      <section class="content-section" aria-labelledby="troubleshooting-title">
        <h2 id="troubleshooting-title" data-i18n="support.troubleshooting.title">Troubleshooting</h2>

        <div class="whats-new-list">
          <div class="whats-new-item">
            <span class="whats-new-icon" aria-hidden="true">&#9203;</span>
            <div class="whats-new-content">
              <h3 data-i18n="support.troubleshooting.item1.title">Issue 1</h3>
              <p data-i18n="support.troubleshooting.item1.desc">Solution for issue 1.</p>
            </div>
          </div>
          <!-- Add more troubleshooting items -->
        </div>
      </section>

      <!-- Version Info -->
      <section class="content-section" aria-labelledby="version-title">
        <h2 id="version-title" data-i18n="support.version">Current Version</h2>
        <div class="info-box">
          <p><strong>APP_NAME APP_VERSION</strong></p>
          <p class="text-muted">Requires iOS 17.0 or later. Compatible with iPhone and iPad.</p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="content-section" aria-labelledby="contact-title">
        <h2 id="contact-title" data-i18n="support.contact.title">Still Need Help?</h2>
        <p data-i18n="support.contact.desc">Send us an email and we'll get back to you.</p>

        <div class="contact-card mt-lg">
          <h3 data-i18n="support.contact.email">Contact Support</h3>
          <a href="mailto:SUPPORT_EMAIL" class="contact-email">SUPPORT_EMAIL</a>
          <p class="text-muted mt-lg">We typically respond within 24-48 hours.</p>
        </div>
      </section>

      <!-- Links -->
      <section class="content-section text-center">
        <p><a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a></p>
      </section>

    </div>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <div class="container">
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="support.html" data-i18n="footer.support">Support</a>
        <a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a>
      </nav>
      <p class="copyright">&copy; CURRENT_YEAR DEVELOPER_NAME. All rights reserved.</p>
    </div>
  </footer>

  <script src="i18n.js"></script>
</body>
</html>
```

---

## styles.css

Kopiera `styles.css` från ProbePad-repot. Anpassa dessa CSS-variabler:

```css
:root {
  /* Accent color - ändra till din apps färg */
  --color-accent:            #5B8FA8;
  --color-accent-hover:      #6BA0B9;

  /* Bakgrunder */
  --color-background:        #0D0D0D;
  --color-surface:           #1A1A1A;
  --color-surface-elevated:  #242424;

  /* Text */
  --color-primary-text:      #F0F0F0;
  --color-secondary-text:    #A0A0A0;
  --color-muted-text:        #666666;
}
```

---

## i18n.js (Internationalisering)

Skapa översättningar för alla språk. Grundstruktur:

```javascript
const translations = {
  en: {
    // Navigation
    "nav.support": "Support",
    "nav.privacy": "Privacy",

    // Hero
    "hero.title": "APP_TAGLINE",
    "hero.subtitle": "APP_DESCRIPTION",
    "hero.cta": "Download on App Store",
    "hero.badge.1": "Badge 1",
    "hero.badge.2": "Badge 2",
    "hero.badge.3": "Badge 3",

    // Features
    "features.title": "Everything You Need",
    "features.subtitle": "Feature subtitle.",
    "features.feature1.title": "Feature 1",
    "features.feature1.desc": "Description.",
    // ... fler features

    // Screenshots
    "screenshots.title": "See It in Action",

    // What's New
    "whatsnew.title": "What's New",
    "whatsnew.item1.title": "New Feature",
    "whatsnew.item1.desc": "Description.",

    // Download
    "download.title": "Ready to Get Started?",
    "download.subtitle": "Download APP_NAME today.",

    // Footer
    "footer.support": "Support",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© CURRENT_YEAR DEVELOPER_NAME. All rights reserved.",

    // Support page
    "support.title": "Support",
    "support.subtitle": "Get help with APP_NAME",
    "support.faq.title": "Frequently Asked Questions",
    "support.faq.q1": "Question 1?",
    "support.faq.a1": "Answer 1.",
    // ... fler FAQ
    "support.troubleshooting.title": "Troubleshooting",
    "support.contact.title": "Still Need Help?",
    "support.contact.desc": "Send us an email.",
    "support.contact.email": "Contact Support",
    "support.version": "Current Version",

    // Privacy page
    "privacy.title": "Privacy Policy",
    "privacy.subtitle": "Your data stays on your device",
    "privacy.updated": "Last updated: February CURRENT_YEAR",
    "privacy.highlights.local": "Local Storage Only",
    "privacy.highlights.notrack": "No Tracking",
    "privacy.highlights.encrypted": "Encrypted Data",
    "privacy.highlights.control": "You're in Control",
    // ... fler privacy-texter
  },

  de: {
    // Tyska översättningar
  },

  es: {
    // Spanska översättningar
  },

  ja: {
    // Japanska översättningar
  }
};

// Resten av i18n-logiken - kopiera från ProbePad
```

---

## Checklista

- [ ] Skapa repo och `docs/` mapp
- [ ] Kopiera `styles.css` och anpassa accent-färg
- [ ] Skapa `index.html` med app-info
- [ ] Skapa `privacy.html`
- [ ] Skapa `support.html` med FAQ
- [ ] Skapa `i18n.js` med översättningar
- [ ] Lägg till `app-icon.png` (512×512)
- [ ] Lägg till `favicon.ico`
- [ ] Lägg till screenshots (screenshot-1.png till screenshot-6.png)
- [ ] Aktivera GitHub Pages i repo settings
- [ ] Testa alla språk och sidor
- [ ] Uppdatera App Store Connect med URL:en

---

## Emoji-referens för features

| Emoji | HTML Entity | Användning |
|-------|-------------|------------|
| 🚀 | `&#128640;` | Speed/Launch |
| 🔒 | `&#128274;` | Security |
| 🌐 | `&#127760;` | Global/Web |
| 📈 | `&#128200;` | Analytics |
| 📁 | `&#128193;` | Files/Folders |
| 🔄 | `&#128257;` | Sync/Import |
| ✨ | `&#10024;` | New/Magic |
| 📱 | `&#128241;` | Mobile |
| 🚫 | `&#128683;` | No/Blocked |
| ✅ | `&#9989;` | Check/Done |
| ⏳ | `&#9203;` | Time/Loading |
| 📥 | `&#128229;` | Download |
| 📍 | `&#128205;` | Location |
| 🔍 | `&#128269;` | Search |
| 🌎 | `&#127758;` | World |
