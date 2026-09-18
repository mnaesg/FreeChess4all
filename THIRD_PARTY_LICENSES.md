# Tredjepartslisenser / Third-party licenses

Dette prosjektet leveres helt uten byggeverktøy. Én ekstern kodebibliotek er
vendoret (kopiert inn) i `js/vendor/` slik at siden fungerer helt uten
nettverkskall til CDN-er:

## chess.js

- Versjon: 1.4.0
- Kilde: https://github.com/jhlywa/chess.js
- Lisens: BSD-2-Clause (se `js/vendor/chess.js.LICENSE.txt`)
- Brukes til: sjakkregler (lovlige trekk, sjakk/sjakkmatt/patt-oppdagelse osv.).
  Selve grensesnittet, tegningen av brettet og AI-motoren (`js/board.js`,
  `js/ai.js`, `js/main.js`, `js/i18n.js`) er skrevet for dette prosjektet.

Ingen andre eksterne biblioteker, skrifttyper, ikoner eller bilder er brukt.
