// Enkel to-språks oversettelsesmodul (nb / en). Ingen eksterne kall, ingen sporing.
export const STRINGS = {
  nb: {
    'site.title': 'Sjakk for skolen',
    'site.tagline': 'Et gratis, trygt sjakkspill for barneskoleelever',
    'nav.play': 'Spill',
    'nav.privacy': 'Personvern',
    'nav.about': 'Om spillet',
    'lang.toggle': 'English',
    'controls.newGame': 'Nytt spill',
    'controls.undo': 'Angre trekk',
    'controls.color': 'Velg farge',
    'controls.color.white': 'Hvit',
    'controls.color.black': 'Sort',
    'controls.difficulty': 'Vanskelighetsgrad',
    'difficulty.easy': 'Lett',
    'difficulty.medium': 'Middels',
    'difficulty.hard': 'Vanskelig',
    'controls.sound': 'Lyd',
    'controls.sound.on': 'Lyd på',
    'controls.sound.off': 'Lyd av',
    'controls.showHints': 'Vis mulige trekk',
    'status.yourTurn': 'Din tur.',
    'status.thinking': 'Datamotstanderen tenker …',
    'status.check': 'Sjakk!',
    'status.checkmateWin': 'Sjakkmatt! Du vant. Godt spilt!',
    'status.checkmateLose': 'Sjakkmatt! Datamotstanderen vant denne gangen. Prøv igjen!',
    'status.stalemate': 'Patt – uavgjort. Ingen kan flytte, men ingen er i sjakk.',
    'status.draw': 'Uavgjort.',
    'status.newGameStarted': 'Nytt spill startet. Lykke til!',
    'status.moveUndone': 'Trekket ble angret.',
    'status.selectPiece': 'Velg en brikke å flytte.',
    'status.selectDestination': 'Velg hvor brikken skal flyttes.',
    'status.invalidMove': 'Det trekket er ikke lovlig. Prøv et annet.',
    'promotion.title': 'Velg hvilken brikke bonden skal bli til',
    'promotion.queen': 'Dronning',
    'promotion.rook': 'Tårn',
    'promotion.bishop': 'Løper',
    'promotion.knight': 'Springer',
    'board.empty': 'tom',
    'board.white': 'hvit',
    'board.black': 'sort',
    'piece.p': 'bonde',
    'piece.n': 'springer',
    'piece.b': 'løper',
    'piece.r': 'tårn',
    'piece.q': 'dronning',
    'piece.k': 'konge',
    'footer.noData': 'Ingen personopplysninger samles inn. Ingen innlogging. Ingen reklame.',
    'about.heading': 'Om spillet',
    'about.text': 'Dette sjakkspillet er laget for barneskoleelever. Du kan spille direkte i nettleseren, uten å logge inn eller opprette bruker. Spillet lagrer bare dine egne innstillinger (som språk og vanskelighetsgrad) på din egen enhet.',
    'move.normal': '{color} flyttet {piece} fra {from} til {to}.',
    'move.capture': '{color} flyttet {piece} fra {from} til {to} og slo en {capturedPiece}.',
    'move.promotion': ' Bonden ble forvandlet til en {newPiece}.',
    'move.castleKing': '{color} rokerte på kongesiden.',
    'move.castleQueen': '{color} rokerte på dronningsiden.',
    'skip.link': 'Hopp til spillet',
    'privacy.heading': 'Personvern',
    'privacy.intro': 'Dette sjakkspillet er laget for å være trygt å bruke for barneskoleelever. Under forklarer vi enkelt hva som skjer – og ikke skjer – med informasjon når du bruker siden.',
    'privacy.noAccount.title': 'Ingen innlogging eller brukerkonto',
    'privacy.noAccount.text': 'Du trenger aldri å registrere deg, logge inn, eller skrive inn navn, e-post eller andre personopplysninger for å spille. Spillet kan brukes helt anonymt.',
    'privacy.noTracking.title': 'Ingen sporing eller reklame',
    'privacy.noTracking.text': 'Siden bruker ikke analyseverktøy, sporingspiksler eller reklame. Det sendes ingen informasjon til tredjeparter, og sjakkmotoren kjører helt i din egen nettleser uten nettverkskall.',
    'privacy.localStorage.title': 'Lagring kun på din egen enhet',
    'privacy.localStorage.text': 'Siden lagrer noen få valg – som språk, vanskelighetsgrad, fargevalg og om lyd/hint er på – lokalt i nettleseren din (localStorage). Denne informasjonen forlater aldri enheten din, sendes ikke til noen server, og kan slettes når du vil ved å tømme nettleserdata for denne siden.',
    'privacy.hosting.title': 'Om hosting og tekniske logger',
    'privacy.hosting.text': 'Denne siden er en statisk nettside uten egen server eller database. Hvis siden gjøres tilgjengelig via en ekstern hostingtjeneste (for eksempel GitHub Pages), kan leverandøren likevel føre standard tekniske tilgangslogger (som IP-adresse) av sikkerhets- og feilsøkingshensyn. Dette styres av hostingleverandørens egne vilkår og personvernerklæring, ikke av selve sjakkspillet.',
    'privacy.rights.title': 'Dine rettigheter',
    'privacy.rights.text': 'Siden samler ikke inn personopplysninger, og det finnes derfor normalt ingen personopplysninger om deg å be om innsyn i, retting av eller sletting av, i tråd med personvernforordningen (GDPR). Har du spørsmål, kan du kontakte den som drifter siden for din skole eller organisasjon.',
    'privacy.contact.title': 'Kontakt',
    'privacy.contact.text': 'Kontaktinformasjon for den som drifter denne konkrete versjonen av siden bør fylles inn her av skolen/organisasjonen som publiserer den.',
    'privacy.updated': 'Sist oppdatert:',
  },
  en: {
    'site.title': 'School Chess',
    'site.tagline': 'A free, safe chess game for primary school pupils',
    'nav.play': 'Play',
    'nav.privacy': 'Privacy',
    'nav.about': 'About',
    'lang.toggle': 'Norsk',
    'controls.newGame': 'New game',
    'controls.undo': 'Undo move',
    'controls.color': 'Choose colour',
    'controls.color.white': 'White',
    'controls.color.black': 'Black',
    'controls.difficulty': 'Difficulty',
    'difficulty.easy': 'Easy',
    'difficulty.medium': 'Medium',
    'difficulty.hard': 'Hard',
    'controls.sound': 'Sound',
    'controls.sound.on': 'Sound on',
    'controls.sound.off': 'Sound off',
    'controls.showHints': 'Show legal moves',
    'status.yourTurn': 'Your turn.',
    'status.thinking': 'The computer is thinking …',
    'status.check': 'Check!',
    'status.checkmateWin': 'Checkmate! You won. Well played!',
    'status.checkmateLose': 'Checkmate! The computer won this time. Try again!',
    'status.stalemate': 'Stalemate – a draw. No one can move, but no one is in check.',
    'status.draw': 'Draw.',
    'status.newGameStarted': 'New game started. Good luck!',
    'status.moveUndone': 'The move was undone.',
    'status.selectPiece': 'Select a piece to move.',
    'status.selectDestination': 'Select where to move the piece.',
    'status.invalidMove': 'That move is not allowed. Try another.',
    'promotion.title': 'Choose what the pawn should become',
    'promotion.queen': 'Queen',
    'promotion.rook': 'Rook',
    'promotion.bishop': 'Bishop',
    'promotion.knight': 'Knight',
    'board.empty': 'empty',
    'board.white': 'white',
    'board.black': 'black',
    'piece.p': 'pawn',
    'piece.n': 'knight',
    'piece.b': 'bishop',
    'piece.r': 'rook',
    'piece.q': 'queen',
    'piece.k': 'king',
    'footer.noData': 'No personal data is collected. No login. No ads.',
    'about.heading': 'About the game',
    'about.text': 'This chess game is made for primary school pupils. You can play directly in the browser, without logging in or creating an account. The game only stores your own settings (such as language and difficulty) on your own device.',
    'move.normal': '{color} moved {piece} from {from} to {to}.',
    'move.capture': '{color} moved {piece} from {from} to {to} and captured a {capturedPiece}.',
    'move.promotion': ' The pawn was promoted to a {newPiece}.',
    'move.castleKing': '{color} castled kingside.',
    'move.castleQueen': '{color} castled queenside.',
    'skip.link': 'Skip to the game',
    'privacy.heading': 'Privacy',
    'privacy.intro': 'This chess game is designed to be safe for primary school pupils to use. Below is a simple explanation of what does — and does not — happen with information when you use the site.',
    'privacy.noAccount.title': 'No login or user account',
    'privacy.noAccount.text': 'You never need to register, log in, or enter a name, email address or other personal information to play. The game can be used completely anonymously.',
    'privacy.noTracking.title': 'No tracking or advertising',
    'privacy.noTracking.text': 'The site does not use analytics tools, tracking pixels or advertising. No information is sent to third parties, and the chess engine runs entirely in your own browser without any network calls.',
    'privacy.localStorage.title': 'Storage only on your own device',
    'privacy.localStorage.text': 'The site stores a few choices — such as language, difficulty, colour choice and whether sound/hints are on — locally in your browser (localStorage). This information never leaves your device, is never sent to any server, and can be deleted at any time by clearing your browser data for this site.',
    'privacy.hosting.title': 'About hosting and technical logs',
    'privacy.hosting.text': 'This site is a static website with no server or database of its own. If the site is made available via an external hosting service (for example GitHub Pages), that provider may still keep standard technical access logs (such as IP address) for security and troubleshooting purposes. This is governed by the hosting provider’s own terms and privacy policy, not by the chess game itself.',
    'privacy.rights.title': 'Your rights',
    'privacy.rights.text': 'The site does not collect personal data, so there is normally no personal data about you to request access to, correction of, or deletion of, under the General Data Protection Regulation (GDPR). If you have questions, please contact whoever operates the site for your school or organisation.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.text': 'Contact information for whoever operates this particular deployment of the site should be filled in here by the school/organisation publishing it.',
    'privacy.updated': 'Last updated:',
  },
};

const STORAGE_KEY = 'schoolchess.lang';
const SUPPORTED = Object.keys(STRINGS);

export function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch (_e) {
    // localStorage kan være blokkert (privat modus); fortsetter uten lagring.
  }
  return null;
}

export function detectDefaultLanguage() {
  const stored = getStoredLanguage();
  if (stored) return stored;
  const nav = (navigator.language || 'nb').toLowerCase();
  return nav.startsWith('en') ? 'en' : 'nb';
}

export function setStoredLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_e) {
    // Ingen lagring tilgjengelig – språkvalget gjelder da bare denne siden.
  }
}

export function t(lang, key) {
  return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.nb[key] || key;
}

// Enkel malfyller: bytter ut {navn} med verdier fra params-objektet.
export function tf(lang, key, params = {}) {
  let text = t(lang, key);
  Object.entries(params).forEach(([name, value]) => {
    text = text.replace(new RegExp(`\\{${name}\\}`, 'g'), value);
  });
  return text;
}

// Oppdaterer all tekst i DOM-en basert på data-i18n / data-i18n-attr attributter.
export function applyTranslations(lang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'nb';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(lang, key);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(lang, key));
    });
  });
}
