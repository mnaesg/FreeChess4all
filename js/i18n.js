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
    'privacy.about.title': 'Kort om tjenesten',
    'privacy.about.text': 'Sjakk for skolen er et gratis sjakkspill for barneskoleelever i Bærum kommune. Tjenesten er laget for at elever skal kunne øve på og lære sjakk direkte i nettleseren, uten innlogging eller brukerkonto. Denne personvernerklæringen gjelder for alle som bruker nettsiden – elever, lærere, foresatte og andre besøkende.',
    'privacy.controller.title': 'Behandlingsansvarlig',
    'privacy.controller.text': 'Bærum kommune (org.nr. 935 478 715) er behandlingsansvarlig for tjenesten.',
    'privacy.dpo.title': 'Personvernombud',
    'privacy.dpo.text': 'Bærum kommune har eget personvernombud: Anette Engum.',
    'privacy.purpose.title': 'Formål med eventuell behandling av personopplysninger',
    'privacy.purpose.text': 'Selve sjakkspillet er laget for å kreve minst mulig informasjon: det ber deg aldri om navn, e-postadresse, fødselsdato eller annen identifiserende informasjon, og krever ingen innlogging. Innstillingene dine (språk, vanskelighetsgrad, fargevalg, av/på for lyd og hint) lagres kun lokalt i din egen nettleser og sendes aldri til Bærum kommune eller noen tredjepart. Den eneste behandlingen som kan forekomme, er standard tekniske tilgangslogger som genereres automatisk av den som drifter nettsiden – se «Hosting og databehandler» under.',
    'privacy.legalBasis.title': 'Rettslig grunnlag',
    'privacy.legalBasis.text': 'For eventuelle tekniske tilgangslogger er det rettslige grunnlaget berettiget interesse (personvernforordningen artikkel 6 nr. 1 bokstav f) – nødvendig for sikker drift av nettsiden. Det innhentes ikke samtykke, siden det ikke behandles personopplysninger utover dette.',
    'privacy.dataTypes.title': 'Hvilke personopplysninger behandles?',
    'privacy.dataTypes.text': 'Ingen personopplysninger registreres av selve sjakkspillet. Driftsleverandøren av nettsiden kan registrere standard tilgangslogger (som IP-adresse, tidspunkt og nettleserinformasjon) ved besøk, slik det er vanlig for alle nettsteder av sikkerhetshensyn.',
    'privacy.dataSource.title': 'Kilde til opplysningene',
    'privacy.dataSource.text': 'Eventuelle tilgangslogger genereres automatisk av driftsinfrastrukturen når siden åpnes. Du oppgir aldri opplysninger selv.',
    'privacy.sharing.title': 'Deling av personopplysninger',
    'privacy.sharing.text': 'Bærum kommune deler ikke opplysninger fra denne tjenesten med noen. Det finnes ingen analyseverktøy, reklamenettverk eller sporingsteknologi på siden.',
    'privacy.hosting.title': 'Hosting og databehandler',
    'privacy.hosting.text': 'Per i dag hostes nettsiden på GitHub Pages, en tjeneste levert av GitHub, Inc. (eid av Microsoft) i USA. Dette er en midlertidig løsning i en tidlig fase av prosjektet. GitHub kan i denne perioden opptre som databehandler for de tekniske tilgangsloggene som genereres ved bruk av siden, og overføringen til USA skjer innenfor rammene av EU-US Data Privacy Framework og GitHubs egne standard personvernbestemmelser (se GitHubs personvernerklæring på docs.github.com/site-policy/privacy-policies/github-privacy-statement).',
    'privacy.hosting.textPlan': 'Bærum kommune har som fast praksis at personopplysninger skal behandles og lagres på servere i Norge, med mindre unntak er skriftlig godkjent på forhånd. Det er derfor planlagt å flytte tjenesten til kommunens egen serverinfrastruktur i Norge. Denne personvernerklæringen oppdateres når flyttingen er gjennomført.',
    'privacy.storage.title': 'Lagring',
    'privacy.storage.text': 'Dine egne innstillinger lagres kun på din egen enhet (i nettleserens «localStorage») og kan slettes av deg når som helst ved å tømme nettleserdata for denne siden. Eventuelle tekniske tilgangslogger hos driftsleverandøren lagres i en begrenset periode i tråd med leverandørens egne rutiner for sikker drift.',
    'privacy.security.title': 'Sikkerhet',
    'privacy.security.text': 'Ettersom tjenesten ikke behandler personopplysninger utover automatiske tekniske tilgangslogger, er standard sikkerhetspraksis hos driftsleverandøren tilstrekkelig for denne behandlingen.',
    'privacy.rights.title': 'Dine rettigheter',
    'privacy.rights.text': 'Siden det normalt ikke finnes personopplysninger om deg knyttet til bruk av denne tjenesten, er det vanligvis ingenting å be om innsyn i, retting av eller sletting av. Du har uansett alltid rett til å:',
    'privacy.rights.item1': 'be om innsyn i eventuelle opplysninger vi har om deg',
    'privacy.rights.item2': 'be om retting eller sletting av uriktige opplysninger',
    'privacy.rights.item3': 'be om begrensning av behandlingen',
    'privacy.rights.item4': 'protestere på behandlingen',
    'privacy.rights.item5': 'klage til Datatilsynet (datatilsynet.no)',
    'privacy.children.title': 'Barn som brukere',
    'privacy.children.text': 'Tjenesten er laget spesielt for barneskoleelever, og er derfor bevisst utformet for å samle inn færrest mulig opplysninger – ingen konto, ingen skjema, og ingen behov for samtykke fra foresatte, siden det ikke behandles personopplysninger som krever det.',
    'privacy.contact.title': 'Kontaktinformasjon',
    'privacy.contact.item1': 'Behandlingsansvarlig: Bærum kommune',
    'privacy.contact.item2': 'Kontaktperson for denne tjenesten: martin.nasgaard@baerum.kommune.no',
    'privacy.contact.item3': 'Personvernombud: Anette Engum',
    'privacy.changes.title': 'Endringer i personvernerklæringen',
    'privacy.changes.text': 'Denne erklæringen oppdateres ved endringer som påvirker behandlingen, for eksempel bytte av driftsleverandør eller nye funksjoner i tjenesten.',
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
    'privacy.about.title': 'About the service',
    'privacy.about.text': 'School Chess is a free chess game for primary school pupils in Bærum municipality (Bærum kommune). The service lets pupils practise and learn chess directly in the browser, without logging in or creating an account. This privacy notice applies to everyone who uses the site – pupils, teachers, parents/guardians and other visitors.',
    'privacy.controller.title': 'Data controller',
    'privacy.controller.text': 'Bærum municipality (Bærum kommune), org. no. 935 478 715, is the data controller for the service.',
    'privacy.dpo.title': 'Data protection officer',
    'privacy.dpo.text': 'Bærum municipality has its own data protection officer: Anette Engum.',
    'privacy.purpose.title': 'Purpose of any processing of personal data',
    'privacy.purpose.text': 'The chess game itself is designed to require as little information as possible: it never asks for your name, email address, date of birth or other identifying information, and requires no login. Your settings (language, difficulty, colour choice, sound/hints on or off) are stored only locally in your own browser and are never sent to Bærum municipality or any third party. The only processing that may occur is standard technical access logs automatically generated by whoever hosts the site – see "Hosting and data processor" below.',
    'privacy.legalBasis.title': 'Legal basis',
    'privacy.legalBasis.text': 'For any technical access logs, the legal basis is legitimate interest (GDPR Article 6(1)(f)) – necessary for the secure operation of the site. No consent is collected, since no personal data is processed beyond this.',
    'privacy.dataTypes.title': 'What personal data is processed?',
    'privacy.dataTypes.text': 'No personal data is registered by the chess game itself. The hosting provider may record standard access logs (such as IP address, timestamp and browser information) for each visit, as is standard practice for all websites for security reasons.',
    'privacy.dataSource.title': 'Source of the information',
    'privacy.dataSource.text': 'Any access logs are generated automatically by the hosting infrastructure when the page is opened. You never provide information yourself.',
    'privacy.sharing.title': 'Sharing of personal data',
    'privacy.sharing.text': 'Bærum municipality does not share information from this service with anyone. There are no analytics tools, advertising networks or tracking technology on the site.',
    'privacy.hosting.title': 'Hosting and data processor',
    'privacy.hosting.text': 'The site is currently hosted on GitHub Pages, a service provided by GitHub, Inc. (owned by Microsoft) in the USA. This is a temporary solution in an early phase of the project. During this period, GitHub may act as a data processor for the technical access logs generated when the site is used, and the transfer to the USA takes place within the framework of the EU-US Data Privacy Framework and GitHub’s own standard privacy terms (see GitHub’s privacy statement at docs.github.com/site-policy/privacy-policies/github-privacy-statement).',
    'privacy.hosting.textPlan': 'Bærum municipality’s standard practice is that personal data must be processed and stored on servers in Norway, unless an exception has been approved in writing in advance. The service is therefore planned to be moved to the municipality’s own server infrastructure in Norway. This privacy notice will be updated once that move has taken place.',
    'privacy.storage.title': 'Storage',
    'privacy.storage.text': 'Your own settings are stored only on your own device (in the browser’s "localStorage") and can be deleted by you at any time by clearing browser data for this site. Any technical access logs held by the hosting provider are stored for a limited period in line with the provider’s own routines for secure operation.',
    'privacy.security.title': 'Security',
    'privacy.security.text': 'Since the service does not process personal data beyond automatic technical access logs, the hosting provider’s standard security practices are sufficient for this processing.',
    'privacy.rights.title': 'Your rights',
    'privacy.rights.text': 'Since there is normally no personal data about you linked to your use of this service, there is usually nothing to request access to, correction of, or deletion of. You nonetheless always have the right to:',
    'privacy.rights.item1': 'request access to any information we hold about you',
    'privacy.rights.item2': 'request correction or deletion of inaccurate information',
    'privacy.rights.item3': 'request restriction of the processing',
    'privacy.rights.item4': 'object to the processing',
    'privacy.rights.item5': 'lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet, datatilsynet.no)',
    'privacy.children.title': 'Children as users',
    'privacy.children.text': 'The service is designed specifically for primary school pupils, and is therefore deliberately built to collect as little information as possible – no account, no forms, and no need for parental consent, since no personal data requiring it is processed.',
    'privacy.contact.title': 'Contact information',
    'privacy.contact.item1': 'Data controller: Bærum municipality (Bærum kommune)',
    'privacy.contact.item2': 'Contact person for this service: martin.nasgaard@baerum.kommune.no',
    'privacy.contact.item3': 'Data protection officer: Anette Engum',
    'privacy.changes.title': 'Changes to this privacy notice',
    'privacy.changes.text': 'This notice is updated when changes affect the processing, for example a change of hosting provider or new features in the service.',
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
