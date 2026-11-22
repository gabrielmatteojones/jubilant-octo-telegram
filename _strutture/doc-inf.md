---
pid: doc-inf
title: Docenti scuola dell'infanzia
descrizione: Le docenti delle tre sezioni del plesso "Arcobaleno".
ordine: 4
topics:
- Organizzazione
---

## Di cosa si occupa

Le docenti delle tre sezioni del plesso "Arcobaleno".

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
