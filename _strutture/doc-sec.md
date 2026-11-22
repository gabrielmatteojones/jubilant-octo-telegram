---
pid: doc-sec
title: Docenti scuola secondaria
descrizione: I docenti della scuola secondaria di primo grado "Munari".
ordine: 6
topics:
- Organizzazione
---

## Di cosa si occupa

I docenti della scuola secondaria di primo grado "Munari".

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
