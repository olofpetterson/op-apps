// OP Apps - Shared i18n Base Logic

// Current language
let currentLang = 'en';

// Get translated text - uses app-specific translations object
function t(key) {
  if (typeof translations === 'undefined') return key;
  return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

// Set language
function setLanguage(lang) {
  if (typeof translations === 'undefined' || !translations[lang]) {
    lang = 'en';
  }

  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('preferred-lang', lang);

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Update all elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key);
    if (translation) {
      el.placeholder = translation;
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Show/hide language-specific content sections
  document.querySelectorAll('.lang-content').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

// Get preferred language
function getPreferredLanguage() {
  // 1. Check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && typeof translations !== 'undefined' && translations[urlLang]) {
    return urlLang;
  }

  // 2. Check localStorage
  const storedLang = localStorage.getItem('preferred-lang');
  if (storedLang && typeof translations !== 'undefined' && translations[storedLang]) {
    return storedLang;
  }

  // 3. Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (typeof translations !== 'undefined' && translations[browserLang]) {
    return browserLang;
  }

  // 4. Default to English
  return 'en';
}

// Initialize language on DOM ready
function initI18n() {
  // Set initial language
  setLanguage(getPreferredLanguage());

  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// FAQ toggle functionality
function initFaqToggle() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
      });

      // Toggle this item
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// Initialize all on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initFaqToggle();
});
