---
pid: doc-prim
title: Docenti scuola primaria
descrizione: I docenti delle classi del plesso "Rodari", tempo normale e tempo pieno.
ordine: 5
topics:
- Organizzazione
---

## Di cosa si occupa

I docenti delle classi del plesso "Rodari", tempo normale e tempo pieno.

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
