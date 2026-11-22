(function () {
  "use strict";
  // ---- filtro per argomento (archivi)
  var boxes = document.querySelectorAll("[data-filter-topic]");
  if (boxes.length) {
    var list = document.getElementById("archive-list");
    var apply = function () {
      var on = [].filter.call(boxes, function (b) { return b.checked; }).map(function (b) { return b.value; });
      var shown = 0;
      list.querySelectorAll("article.card").forEach(function (c) {
        var t = (c.getAttribute("data-topics") || "").split("|");
        var ok = !on.length || on.some(function (x) { return t.indexOf(x) > -1; });
        c.hidden = !ok; if (ok) shown++;
      });
      var m = list.querySelector("[data-empty-message]"); if (m) m.hidden = shown > 0;
    };
    boxes.forEach(function (b) { b.addEventListener("change", apply); });
  }

  // ---- mappa dei luoghi (Leaflet + OpenStreetMap)
  var el = document.getElementById("school-map");
  if (el && window.L) {
    L.Icon.Default.imagePath = el.getAttribute("data-leaflet-images");
    var map = L.map(el).setView([+el.dataset.lat, +el.dataset.lng], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "&copy; contributori di <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
    }).addTo(map);
    var pts = [];
    document.querySelectorAll("[data-element=location-link]").forEach(function (a) {
      var lat = parseFloat(a.dataset.lat), lng = parseFloat(a.dataset.lng);
      if (isNaN(lat)) return;
      var mk = L.marker([lat, lng]).addTo(map).bindPopup("<strong>" + a.dataset.title + "</strong><br>" + a.dataset.address);
      pts.push([lat, lng]);
      a.addEventListener("click", function (e) { e.preventDefault(); map.setView([lat, lng], 17); mk.openPopup(); });
    });
    if (pts.length > 1) map.fitBounds(pts, { padding: [40, 40] });
  }

  // ---- ricerca nel sito (indice statico search.json)
  var box = document.getElementById("search-results");
  if (box) {
    var params = new URLSearchParams(location.search);
    var q = (params.get("q") || "").trim(), type = params.get("type") || "any";
    var input = document.querySelector("[data-search-input]"); if (input) input.value = q;
    var norm = function (s) { return (s || "").toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); };
    var themes = { school: "redbrown", news: "greendark", service: "purplelight", education: "bluelectric" };
    var esc = function (s) { return (s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    var summary = document.getElementById("search-summary");
    if (!q) { summary.textContent = "Scrivi una parola da cercare."; }
    else fetch(box.dataset.index).then(function (r) { return r.json(); }).then(function (all) {
      var words = norm(q).split(/\s+/).filter(Boolean);
      var res = all.filter(Boolean).filter(function (d) { return type === "any" || d.type === type; }).map(function (d) {
        var t = norm(d.title), tp = norm((d.topics || []).join(" ")), ds = norm(d.desc), tx = norm(d.text), s = 0, ok = true;
        words.forEach(function (w) {
          var sc = (t.indexOf(w) > -1 ? 5 : 0) + (tp.indexOf(w) > -1 ? 3 : 0) + (ds.indexOf(w) > -1 ? 2 : 0) + (tx.indexOf(w) > -1 ? 1 : 0);
          if (!sc) ok = false; s += sc;
        });
        return { d: d, s: ok ? s : 0 };
      }).filter(function (x) { return x.s > 0; }).sort(function (a, b) { return b.s - a.s; });
      summary.innerHTML = res.length ? "<strong>" + res.length + "</strong> risultati per &laquo;" + esc(q) + "&raquo;" : "Nessun risultato per &laquo;" + esc(q) + "&raquo;. Prova con un&rsquo;altra parola.";
      box.innerHTML = res.map(function (x) {
        var d = x.d, th = themes[d.type] || "redbrown";
        return '<article class="card card-bg card-article card-article-' + th + '"><div class="card-body"><div class="card-article-img"><svg class="icon-' + th + ' svg-newspaper"><use xlink:href="#svg-newspaper"></use></svg></div><div class="card-article-content"><small class="h6 text-' + th + ' search-result-type">' + esc(d.label) + '</small><h2 class="h3"><a href="' + d.url + '">' + esc(d.title) + '</a></h2><p>' + esc(d.desc) + '</p></div></div></article>';
      }).join("");
    }).catch(function () { summary.textContent = "Indice di ricerca non disponibile."; });
  }
})();
