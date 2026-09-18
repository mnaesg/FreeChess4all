# Sjakk for skolen / School Chess

Et gratis sjakkspill for barneskoleelever – uten innlogging, uten reklame og
uten sporing. Siden er laget for å kunne driftes gratis (statisk nettside)
uten å være avhengig av inntekter fra brukerdata eller reklame.

## Egenskaper

- **Ingen innlogging** – spillet åpnes direkte i nettleseren.
- **Personvern** – ingen personopplysninger samles inn, ingen sporing,
  ingen reklame, ingen nettverkskall til tredjeparter under spill. De få
  innstillingene som lagres (språk, vanskelighetsgrad, fargevalg, lyd/hint)
  ligger kun lokalt i nettleseren din. Se [personvern.html](personvern.html).
- **3 vanskelighetsgrader** – Lett, Middels og Vanskelig, styrt av en enkel
  minimax-motor med alfa-beta-beskjæring (se `js/ai.js`).
- **Universell utforming** – tastaturstyring av brettet (piltaster,
  Enter/Space), ARIA-merking av hver rute og brikke, live-regioner som leser
  opp trekk og status for skjermlesere, tydelig fokusmarkering, støtte for
  `prefers-reduced-motion` og mørk modus, og markering av lovlige trekk som
  ikke er avhengig av farge alene (prikk/ring, ikke bare farge).
- **To språk** – norsk (bokmål) og engelsk, med en enkel bytteknapp.

## Kom i gang

Dette er en helt statisk nettside – ingen bygg-steg, ingen `npm install`.

Åpne `index.html` direkte i en nettleser, eller kjør en enkel lokal server
fra prosjektmappen, f.eks.:

```bash
python3 -m http.server 8080
```

og gå til `http://localhost:8080/`.

## Gratis hosting

Siden kan hostes helt gratis som statiske filer, f.eks. med GitHub Pages:

1. Push innholdet til en GitHub-branch (f.eks. `main`).
2. Gå til repo-innstillinger → **Pages** → velg branch og mappe `/ (root)`.
3. Siden blir tilgjengelig på en `github.io`-adresse uten kostnad.

Andre gratis alternativer (Netlify, Cloudflare Pages, skolens egen
webserver) fungerer også, siden det kun er statiske filer.

## Prosjektstruktur

```
index.html          Selve spillet
personvern.html      Personvernerklæring
css/style.css        Stil, fargekontrast, mørk modus, responsivt design
js/main.js            Spilllogikk, innstillinger, tilgjengelighetsmeldinger
js/board.js           Tegning av brettet + tastatur/pekerinteraksjon
js/ai.js               Sjakkmotor (minimax + alfa-beta), 3 vanskelighetsgrader
js/i18n.js             Norsk/engelsk tekst
js/page-i18n.js        Språkbytte for enkle undersider (personvern.html)
js/vendor/chess.js      Sjakkregler (vendoret bibliotek, se THIRD_PARTY_LICENSES.md)
```

## Justere vanskelighetsgrad

Vanskelighetsgradene er definert i `js/ai.js` (`DIFFICULTIES`):

- **Lett**: ser bare ett trekk fram og gjør ofte tilfeldige trekk – lett å slå.
- **Middels**: ser to trekk fram med litt variasjon.
- **Vanskelig**: ser tre trekk fram med alfa-beta-beskjæring og spiller mer presist.

Verdiene (søkedybde og sjanse for "tilfeldig"/variert trekk) kan justeres
direkte i denne filen uten at det påvirker resten av koden.

## Lisens

Prosjektets egen kode er lisensiert under MIT, se [LICENSE](LICENSE).
Se [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md) for lisensen til det
vendorerte biblioteket chess.js (BSD-2-Clause).
