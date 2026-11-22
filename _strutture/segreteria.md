---
pid: segreteria
title: Segreteria e personale ATA
descrizione: Gli uffici di segreteria si occupano di alunni, personale, protocollo e contabilità. Il personale collaboratore scolastico garantisce vigilanza, pulizia e accoglienza.
ordine: 2
topics:
- Organizzazione
---

## Di cosa si occupa

Gli uffici di segreteria si occupano di alunni, personale, protocollo e contabilità. Il personale collaboratore scolastico garantisce vigilanza, pulizia e accoglienza.

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
