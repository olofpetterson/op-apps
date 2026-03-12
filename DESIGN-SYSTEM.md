# OP Apps Design System

Minimalistisk, mörk landing page för app-marknadsföring med flerspråksstöd.

---

## Översikt

- **Typ:** Statisk GitHub Pages-sida
- **Tema:** Dark mode (exklusivt)
- **Språk:** Engelska, Tyska, Spanska, Japanska
- **Dependencies:** Google Fonts (Syne + JetBrains Mono) — laddas asynkront, fungerar utan dem tack vare systemfont-fallbacks

---

## Filstruktur

```
docs/
├── index.html              # Hub-sida (appar-översikt)
├── i18n.js                 # Hub-översättningar
├── shared/
│   ├── styles.css          # Delade stilar (designsystemet)
│   └── i18n-base.js        # i18n-logik
├── probepad/               # App-sidor (samma struktur per app)
│   ├── index.html
│   ├── privacy.html
│   ├── support.html
│   ├── i18n.js
│   └── app-icon.png
├── guardpad/
├── deltapad/
└── beaconpad/
```

---

## Färgpalett

```css
:root {
  /* Bakgrunder */
  --color-background:        #0D0D0D;   /* Huvudbakgrund */
  --color-surface:           #1A1A1A;   /* Sektioner */
  --color-surface-elevated:  #242424;   /* Kort/upphöjda element */

  /* Accent — åsidosätts per app */
  --color-accent:            #5B8FA8;   /* Primär interaktiv färg */
  --color-accent-hover:      #6BA0B9;   /* Hover-state */

  /* Text */
  --color-primary-text:      #F0F0F0;   /* Huvudtext */
  --color-secondary-text:    #A0A0A0;   /* Sekundär text */
  --color-muted-text:        #666666;   /* Tertiär text */
}
```

### Accent-färger per app

| App        | Accent     | Hover     |
|------------|------------|-----------|
| Hub        | `#7C3AED`  | `#8B5CF6` |
| ProbePad   | `#00FF66`  | `#33FF85` |
| GuardPad   | `#FFB000`  | `#FFC233` |
| DeltaPad   | `#00BFFF`  | `#33CCFF` |
| BeaconPad  | `#FF6B6B`  | `#FF8E8E` |

---

## Typografi

```css
:root {
  --font-display: 'Syne', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
}
```

**Syne** — geometrisk display-font för rubriker. Karaktärsfull och distinkt, aldrig generisk.
**JetBrains Mono** — monospace för badges, version-taggar, copyright och kod-liknande element. Lämpligt för ett developer-tools varumärke.
**System fonts** — body-text. Snabb laddning, plattformsnativ känsla.

### Storlekar

| Element      | Storlek                    |
|--------------|----------------------------|
| H1 (Hero)    | `clamp(2.25rem, 5.5vw, 3.5rem)`, vikt 800 |
| H2 (Sektion) | `clamp(1.6rem, 4vw, 2.25rem)`, vikt 700   |
| H3 (Kort)    | `1.25rem` → `1.125rem` (mobil)            |
| Body         | `1.125rem` → `0.875rem` (mobil)           |
| Badges/mono  | `0.75–0.8125rem`, `JetBrains Mono`        |

---

## Spacing

```css
:root {
  --spacing-xs:   0.5rem;
  --spacing-sm:   1rem;
  --spacing-md:   1.5rem;
  --spacing-lg:   2rem;
  --spacing-xl:   3rem;
  --spacing-2xl:  5rem;

  --max-width:     1200px;
  --content-width: 800px;
}
```

---

## Bakgrundseffekter

### Punktraster (global)

Bakat i `body`-bakgrunden — scrollar med innehållet, inga z-index-konflikter:

```css
body {
  background-color: var(--color-background);
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 28px 28px;
}
```

### Ambient orb (hero)

Mjuk radial gradient i sektionens bakgrund — inga pseudo-element behövs:

```css
/* App-sidor: dynamisk accent-färg via color-mix() */
.hero {
  background-image: radial-gradient(
    ellipse 70% 60% at 50% 40%,
    color-mix(in srgb, var(--color-accent) 10%, transparent) 0%,
    transparent 100%
  );
}

/* Hub: hårdkodad lila (matchar #7C3AED) */
.hub-hero {
  background-image: radial-gradient(
    ellipse 70% 70% at 50% 35%,
    rgba(124, 58, 237, 0.13) 0%,
    transparent 100%
  );
}
```

`color-mix()` kräver Chrome 111+, Firefox 113+, Safari 16.2+.

---

## Komponenter

### Navbar

Frosted glass-look med gradientbård istället för solid linje:

```css
.navbar {
  position: fixed;
  background: rgba(13, 13, 13, 0.88);
  backdrop-filter: blur(16px);
}

.navbar::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent);
}
```

### CTA-knapp

Glöd via `box-shadow` med accent-färgen:

```css
.cta-button {
  border-radius: 14px;
  box-shadow: 0 0 32px -8px var(--color-accent);
  transition: transform 0.25s var(--ease-out-quart), box-shadow 0.25s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 48px -4px var(--color-accent);
}
```

### Feature-kort

Accent-färgad topplinje + upphöjning på hover:

```css
.feature-card {
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 50%, transparent);
}

.feature-card:hover {
  transform: translateY(-6px);
  border-top-color: var(--color-accent);
}
```

### App-kort (hub)

Färgad glöd på hover matchar varje apps accent via `--card-accent`:

```css
.app-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.5),
    0 0 60px -15px var(--card-accent, var(--color-accent));
  border-color: var(--card-accent, var(--color-accent));
}
```

### Available-badge

Pulserande grön dot — indikerar live/tillgänglig:

```css
.app-card-badge.available::before {
  content: '';
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #00FF66;
  animation: pulse-dot 2.5s ease infinite;
}
```

### Sektionshuvud

Accent-understruken dekorationslinje:

```css
.section-header h2 {
  position: relative;
  padding-bottom: var(--spacing-sm);
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 32px; height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
}
```

### Version-tagg

Monospace + glöd:

```css
.version-tag {
  font-family: var(--font-mono);
  box-shadow: 0 0 20px -4px var(--color-accent);
}
```

---

## Animationer

```css
:root {
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.3; transform: scale(0.7); }
}
```

**Hero-innehåll** — `fadeInUp 0.85s` vid sidladdning.
**App-kort** — staggered `fadeInUp` med 0.09s delay per kort.
**Hover-effekter** — `0.25–0.3s` med `ease-out-quart` för naturlig känsla.

---

## Flerspråksstöd (i18n)

### Metod 1: Dynamisk (index.html, app landing pages)

```javascript
const translations = {
  en: { "hero.title": "Your App Name", ... },
  de: { "hero.title": "Ihr App-Name", ... },
  es: { "hero.title": "Nombre de la app", ... },
  ja: { "hero.title": "アプリ名", ... }
};
```

### Metod 2: Statisk (support.html, privacy.html)

```html
<div class="lang-content" data-lang="en"><!-- EN-innehåll --></div>
<div class="lang-content" data-lang="de"><!-- DE-innehåll --></div>
```

Logiken finns i `shared/i18n-base.js`. Prioriteringsordning: URL-param → localStorage → webbläsarspråk → engelska.

---

## Responsiv design

### Breakpoints

```css
/* Tablet */
@media (max-width: 768px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
}

/* Mobil */
@media (max-width: 480px) {
  .features-grid { grid-template-columns: 1fr; }
  .hero-badges { flex-direction: column; }
}
```

---

## Checklista för ny app-sida

- [ ] Kopiera filstrukturen (`docs/probepad/` som mall)
- [ ] Sätt accent-färg i `<style>` i `<head>`: `--color-accent` + `--color-accent-hover`
- [ ] Lägg till app-icon shadow-override (se ProbePad som exempel)
- [ ] Uppdatera översättningar i `i18n.js`
- [ ] Ersätt app-ikon och screenshots
- [ ] Uppdatera meta-taggar (title, description, OG-taggar)
- [ ] Lägg till app-kortet i hub `index.html` med `--card-accent`
- [ ] Testa alla fyra språken (EN, DE, ES, JA)
- [ ] Verifiera responsiv design (mobil + tablet)
- [ ] Kontrollera GoatCounter analytics är med

---

## Designprinciper

1. **Mörkt tema** — Minskar visuell stress, passar developer-tools estetik
2. **Generöst whitespace** — Reducerar kognitiv belastning
3. **Karaktärsfull typografi** — Syne ger personlighet utan att vara generisk
4. **Mono-detaljer** — JetBrains Mono på badges/koder stärker developer-identiteten
5. **Subtila effekter** — Glöd, orbs och punktraster är diskreta, aldrig dominerande
6. **Accent-konsekvens** — Varje apps färg används konsekvent i glöd, border, hover
7. **Progressiv förbättring** — Fungerar utan JS; `color-mix()` degraderar gracefully
8. **Minimalt beroende** — Bara Google Fonts som extern resurs (asynkront)
