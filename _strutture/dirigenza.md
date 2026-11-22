---
pid: dirigenza
title: Dirigenza
descrizione: 'La dirigenza guida l''istituto: definisce gli indirizzi dell''offerta formativa, rappresenta la scuola e ne garantisce la gestione unitaria.'
ordine: 1
topics:
- Organizzazione
---

## Di cosa si occupa

La dirigenza guida l'istituto: definisce gli indirizzi dell'offerta formativa, rappresenta la scuola e ne garantisce la gestione unitaria.

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
