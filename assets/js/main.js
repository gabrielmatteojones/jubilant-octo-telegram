(function () {
  var html = document.documentElement;
  var gh = document.getElementById("gh");

  // Header: diventa nero quando si scorre (come GatesNotes)
  function onScroll() { if (gh) gh.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Testo grande (accessibilità)
  var fontBtn = document.getElementById("fontToggle");
  try { if (localStorage.getItem("gj-big") === "1") { html.classList.add("big"); fontBtn && fontBtn.setAttribute("aria-pressed", "true"); } } catch (e) {}
  if (fontBtn) fontBtn.addEventListener("click", function () {
    var on = html.classList.toggle("big");
    fontBtn.setAttribute("aria-pressed", on ? "true" : "false");
    try { localStorage.setItem("gj-big", on ? "1" : "0"); } catch (e) {}
  });

  // Menu a tutto schermo
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function setMenu(open) {
    menu.hidden = !open;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.classList.toggle("is-open", open);
    document.body.classList.toggle("no-scroll", open);
    if (open && gh) gh.classList.add("scrolled");
    else onScroll();
  }
  if (burger && menu) burger.addEventListener("click", function () { setMenu(menu.hidden); });

  // Sottomenu desktop
  var subs = document.querySelectorAll(".has-sub > .gh__link");
  function closeSubs(except) {
    document.querySelectorAll(".has-sub.open").forEach(function (o) {
      if (o !== except) { o.classList.remove("open"); o.firstElementChild.setAttribute("aria-expanded", "false"); }
    });
  }
  subs.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var item = btn.parentElement;
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      closeSubs(item);
    });
  });
  document.addEventListener("click", function () { closeSubs(); });

  // Ricerca
  var sBtn = document.getElementById("searchBtn");
  var sPanel = document.getElementById("gsearch");
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
      ? hits.map(function (p) { return '<li><a href="' + esc(p.url) + '"><em>' + esc(p.type) + '</em><strong>' + esc(p.title) + '</strong><small>' + esc(p.text) + '</small></a></li>'; }).join("")
      : '<li><span class="search__none">Nessun risultato</span></li>';
    box.hidden = false;
  }
  if (sBtn && sPanel) sBtn.addEventListener("click", function () {
    var open = sPanel.hidden;
    sPanel.hidden = !open;
    sBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) { if (gh) gh.classList.add("scrolled"); q.focus(); } else { box.hidden = true; onScroll(); }
  });
  if (q) q.addEventListener("input", function () { load(run); });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeSubs();
    if (menu && !menu.hidden) setMenu(false);
    if (sPanel && !sPanel.hidden) { sPanel.hidden = true; box.hidden = true; sBtn.setAttribute("aria-expanded", "false"); onScroll(); }
  });
})();
