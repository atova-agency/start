// Define language configuration
const languages = {
  en: { elements: document.getElementsByClassName('en'), buttonId: 'select_en' },
  mg: { elements: document.getElementsByClassName('mg'), buttonId: 'select_mg' },
  fr: { elements: document.getElementsByClassName('fr'), buttonId: 'select_fr' }
};

// Toggle visibility of elements
function toggleElements(lang, displayStyle) {
  for (let i = 0; i < lang.elements.length; i++) {
    lang.elements[i].style.display = displayStyle;
  }
}

// Set active language
function setActiveLanguage(activeLang) {
  Object.entries(languages).forEach(([langCode, langData]) => {
    toggleElements(langData, langCode === activeLang ? 'block' : 'none');
  });
}

// Attach event listeners
Object.entries(languages).forEach(([langCode, langData]) => {
  document.getElementById(langData.buttonId).addEventListener('click', () => {
    setActiveLanguage(langCode);
  });
});

