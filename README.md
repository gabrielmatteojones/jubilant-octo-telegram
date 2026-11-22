# Sito di Gabriel Jones (Jekyll + Netlify CMS)

Sito statico in **Jekyll** con pannello di amministrazione **Netlify CMS (Decap)** su `/admin`.

## Messa online (una volta sola)

1. Crea un repository su GitHub e carica questa cartella (branch `main`).
2. Su [app.netlify.com](https://app.netlify.com): **Add new site → Import from Git** e scegli il repository. Build command e cartella sono già in `netlify.toml`.
3. Nel sito Netlify: **Site configuration → Identity → Enable Identity**.
   - *Registration*: imposta **Invite only**.
   - *Services → Git Gateway*: **Enable Git Gateway**.
4. Identity → **Invite users** → invita la tua email, apri il link nella mail e scegli la password.
5. Vai su `https://tuosito.netlify.app/admin/` e accedi.
6. In `_config.yml` e `admin/config.yml` sostituisci `https://gabrieljones.netlify.app` con il tuo indirizzo vero.

## Cosa modifichi dall'admin

- **Giochi (anteprima)**, **Libri**, **Film e serie tv**, **Articoli del blog**
- **Pagine e impostazioni**: testi della home, prezzo e link di pagamento, FAQ, social, progetti di grafica, pagina "Chi sono"

Le voci già presenti sono **esempi**: sostituiscile o eliminale.

## Vendita della raccolta

In *Impostazioni → Servizio a pagamento* incolla un **link di pagamento** (Stripe Payment Link, Gumroad, PayPal...) e il prezzo. Finché il link è vuoto, il pulsante porta al modulo contatti.

## Moduli

Contatti e newsletter usano **Netlify Forms** (attivi dopo il primo deploy). Le risposte le vedi in Netlify → Forms.

## Provarlo sul computer

```bash
bundle install
bundle exec jekyll serve        # http://localhost:4000
npx decap-server                # in un altro terminale, poi apri /admin/
```
