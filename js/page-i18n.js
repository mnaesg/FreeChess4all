// Minimal oppsett for statiske sider (uten spillogikk) som bare trenger språkbytte.
import { applyTranslations, detectDefaultLanguage, setStoredLanguage, t } from './i18n.js';

let lang = detectDefaultLanguage();
const toggleBtn = document.getElementById('lang-toggle');

function render() {
  applyTranslations(lang);
  if (toggleBtn) toggleBtn.textContent = t(lang, 'lang.toggle');
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    lang = lang === 'nb' ? 'en' : 'nb';
    setStoredLanguage(lang);
    render();
  });
}

render();
