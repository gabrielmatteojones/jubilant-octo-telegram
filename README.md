# Sito d'esempio - IC "Bruno Munari"

Sito Jekyll per un istituto comprensivo **fittizio**, costruito sul modello *Design Scuole Italia*
(`design-scuole-pagine-statiche`) sopra la struttura Jekyll del tuo `template-master`.
Tutti i nomi, gli indirizzi, i codici e i contenuti sono inventati.

## Avvio in locale

```bash
bundle install
bundle exec jekyll serve      # http://127.0.0.1:4000/bel/
```
`baseurl` in `_config.yml` è `/bel` (come nel tuo template). Con un dominio proprio mettilo a `""`.

## Struttura

| Cartella | Contenuto |
|---|---|
| `_layouts/` | un layout per ogni tipo di pagina del modello (home, scuola, notizia, circolare, scheda, persona, archivio...) |
| `_includes/` | header, footer, menu, card, breadcrumb (menu e footer sono generati da `_data/`) |
| `_data/` | `school.yml` (dati scuola), `menu.yml`, `topics.yml`, `links.yml`, `storia.yml`, `numeri.yml`, `ordini.yml` |
| `_notizie`, `_circolari`, `_eventi` | contenuti di Novità |
| `_persone`, `_strutture`, `_luoghi`, `_documenti` | contenuti di Scuola |
| `_servizi` | contenuti di Servizi |
| `_progetti`, `_schede` | contenuti di Didattica |
| `assets/` | CSS/JS/font del modello; `assets/img/gen` e `assets/avatars` sono immagini generate |
| `search.json` + `assets/js/site.js` | ricerca interna lato browser |

## Aggiungere contenuti
Crea un file `.md` nella cartella della collezione, ad esempio `_notizie/mia-notizia.md`:

```yaml
---
title: Titolo
date: 2026-12-01
autore: marchetto-elena     # pid di una persona in _persone
descrizione: Riassunto breve
image: /assets/img/gen/news-1.jpg
topics: [Sport]
---
Testo in Markdown.
```
Nelle schede i titoli `## ...` generano automaticamente l'indice laterale.

Per cambiare scuola modifica `_data/school.yml`, `_data/menu.yml` e i contenuti.
