(function () {
  // Testo grande (accessibilità)
  var html = document.documentElement;
  var fontBtn = document.getElementById("fontToggle");
  try { if (localStorage.getItem("gj-big") === "1") { html.classList.add("big"); fontBtn && fontBtn.setAttribute("aria-pressed", "true"); } } catch (e) {}
  if (fontBtn) fontBtn.addEventListener("click", function () {
    var on = html.classList.toggle("big");
    fontBtn.setAttribute("aria-pressed", on ? "true" : "false");
    try { localStorage.setItem("gj-big", on ? "1" : "0"); } catch (e) {}
  });

  // Menu mobile
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav__burger");
  if (burger) burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Sottomenu (click/tap + tastiera)
  document.querySelectorAll(".has-sub > .nav__link").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var item = btn.parentElement;
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.querySelectorAll(".has-sub.open").forEach(function (o) { if (o !== item) { o.classList.remove("open"); o.firstElementChild.setAttribute("aria-expanded", "false"); } });
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".has-sub.open").forEach(function (o) { o.classList.remove("open"); o.firstElementChild.setAttribute("aria-expanded", "false"); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".has-sub.open").forEach(function (o) { o.classList.remove("open"); });
      var r = document.getElementById("results"); if (r) r.hidden = true;
    }
  });

  // Ricerca nel sito
  var q = document.getElementById("q");
  var box = document.getElementById("results");
  var index = null, loading = false;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function load(cb) {
    if (index) return cb();
    if (loading) return;
    loading = true;
    fetch(window.SEARCH_URL).then(function (r) { return r.json(); }).then(function (d) { index = d; cb(); }).catch(function () { loading = false; });
  }
  function run() {
    var term = q.value.trim().toLowerCase();
    if (term.length < 2) { box.hidden = true; return; }
    var hits = index.filter(function (p) { return (p.title + " " + p.text).toLowerCase().indexOf(term) !== -1; }).slice(0, 8);
    box.innerHTML = hits.length
      ? hits.map(function (p) { return '<li><a href="' + esc(p.url) + '"><em>' + esc(p.type) + '</em><br><strong>' + esc(p.title) + '</strong><small>' + esc(p.text) + '</small></a></li>'; }).join("")
      : '<li><a href="#" onclick="return false">Nessun risultato</a></li>';
    box.hidden = false;
  }
  if (q) {
    q.addEventListener("input", function () { load(run); });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search")) box.hidden = true; });
  }
})();
