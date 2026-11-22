---
pid: consiglio
title: Consiglio d'Istituto
descrizione: 'Organo collegiale composto da docenti, genitori e personale ATA: delibera il bilancio e gli indirizzi generali dell''istituto. Si riunisce, di norma, una volta al mese.'
ordine: 7
topics:
- Organizzazione
---

## Di cosa si occupa

Organo collegiale composto da docenti, genitori e personale ATA: delibera il bilancio e gli indirizzi generali dell'istituto. Si riunisce, di norma, una volta al mese.

## Componenti

{% assign ppl = site.persone | where: "struttura", page.pid %}{% if ppl.size > 0 %}{% for p in ppl %}
- [{{ p.title }}]({{ p.url | relative_url }}) - {{ p.ruolo }}
{% endfor %}{% else %}
L'elenco dei componenti è pubblicato nell'area documenti al termine di ogni elezione.
{% endif %}

## Contatti

Telefono {{ site.data.school.telefono }} - email [{{ site.data.school.email }}](mailto:{{ site.data.school.email }})
