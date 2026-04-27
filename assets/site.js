// Shared site chrome (header + footer) for quant101-iitb.
// Each page includes <header id="site-header"></header> and <footer id="site-footer"></footer>
// and loads this script. Eliminates copy-pasted nav across pages.

(function () {
  const BASE = "/quant101-iitb";

  const NAV_LINKS = [
    { href: BASE + "/", label: "Home" },
    { href: BASE + "/about/", label: "About" },
    { href: BASE + "/projects/", label: "Projects" },
    { href: BASE + "/resources/", label: "Resources" },
    { href: BASE + "/connect/", label: "Contact" },
  ];

  // Mark the link matching the current page as the active page for a11y.
  function isActive(href) {
    const path = window.location.pathname.replace(/\/+$/, "/");
    const target = href.replace(/\/+$/, "/");
    return path === target || (target !== BASE + "/" && path.startsWith(target));
  }

  function renderHeader(el) {
    const links = NAV_LINKS.map((l) => {
      const active = isActive(l.href);
      return (
        '<a class="text-white text-sm font-medium leading-normal hover:text-[#9dafbe] focus:outline-none focus:ring-2 focus:ring-[#3f85bf] rounded px-1"' +
        (active ? ' aria-current="page"' : "") +
        ' href="' + l.href + '">' + l.label + "</a>"
      );
    }).join("");

    el.outerHTML = [
      '<header class="flex items-center justify-between flex-wrap gap-3 border-b border-solid border-b-[#243747] px-4 sm:px-10 py-3" role="banner">',
      '  <a href="' + BASE + '/" class="flex items-center gap-3 text-white" aria-label="Quant Community IITB home">',
      '    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '      <path d="M42.17 20.17L27.83 5.83c1.31 1.31.57 4.36-1.63 7.94-1.35 2.19-3.24 4.58-5.55 6.89s-4.7 4.2-6.89 5.55c-3.58 2.2-6.63 2.94-7.94 1.63L20.17 42.17c1.31 1.31 4.36.57 7.94-1.63 2.19-1.35 4.58-3.24 6.89-5.55s4.2-4.7 5.55-6.89c2.2-3.58 2.94-6.63 1.63-7.94z" fill="currentColor"/>',
      '    </svg>',
      '    <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Quant Community IITB</h2>',
      '  </a>',
      '  <nav class="flex items-center gap-6 sm:gap-9 flex-wrap" aria-label="Primary">',
      links,
      '    <a href="' + BASE + '/connect/" class="inline-flex items-center justify-center rounded-xl h-10 px-4 bg-[#3f85bf] hover:bg-[#4f95cf] text-white text-sm font-bold leading-normal tracking-[0.015em]">Join Us</a>',
      '  </nav>',
      '</header>',
    ].join("\n");
  }

  function renderFooter(el) {
    const year = new Date().getFullYear();
    el.outerHTML = [
      '<footer class="border-t border-solid border-t-[#243747] px-4 sm:px-10 py-8 text-center text-[#9dafbe] text-sm" role="contentinfo">',
      '  <p>Made with care by the Quant Community at IIT Bombay. © ' + year + '.</p>',
      '  <p class="mt-2">',
      '    <a class="hover:text-white" href="https://github.com/Harry-0318/quant101-iitb">GitHub</a>',
      '    &middot; <a class="hover:text-white" href="' + BASE + '/connect/">Contact</a>',
      '  </p>',
      '</footer>',
    ].join("\n");
  }

  function init() {
    const h = document.getElementById("site-header");
    if (h) renderHeader(h);
    const f = document.getElementById("site-footer");
    if (f) renderFooter(f);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
