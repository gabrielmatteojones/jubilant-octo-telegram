---
pid: staff
title: Staff e funzioni strumentali
descrizione: Il gruppo di docenti che affianca il dirigente nel coordinamento di PTOF, inclusione, continuità e innovazione digitale.
ordine: 3
topics:
- Organizzazione
---

## Di cosa si occupa

Il gruppo di docenti che affianca il dirigente nel coordinamento di PTOF, inclusione, continuità e innovazione digitale.

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
