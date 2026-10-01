# Tredjepartslisenser / Third-party licenses

Dette prosjektet leveres helt uten byggeverktøy. Eksterne ressurser er
vendoret (kopiert inn lokalt) slik at siden fungerer helt uten nettverkskall
til CDN-er:

## chess.js

- Versjon: 1.4.0
- Kilde: https://github.com/jhlywa/chess.js
- Lisens: BSD-2-Clause (se `js/vendor/chess.js.LICENSE.txt`)
- Brukes til: sjakkregler (lovlige trekk, sjakk/sjakkmatt/patt-oppdagelse osv.).
  Selve grensesnittet, tegningen av brettet og AI-motoren (`js/board.js`,
  `js/ai.js`, `js/main.js`, `js/i18n.js`) er skrevet for dette prosjektet.

## Sjakkbrikke-ikoner (Cburnett-settet)

- Kilde: Wikimedia Commons, "SVG chess pieces/Standard"
  (hentet via npm-pakken `react-chess-pieces`, som bunter de samme filene)
- Opphavspersoner: Colin M.L. Burnett (Cburnett), mindre bidrag fra Robert C. (Rfc1394)
- Lisens: CC BY-SA 3.0 (trippel-lisensiert, også tilgjengelig under GFDL/BSD)
  (se `assets/pieces/LICENSE.txt`)
- Brukes til: de 12 brikke-ikonene (`assets/pieces/*.svg`) som tegnes på brettet.

Ingen andre eksterne biblioteker, skrifttyper eller bilder er brukt.
