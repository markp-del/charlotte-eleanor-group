/* Clwydian Academy — progressive enhancement (no dependencies) */
(function () {
  "use strict";

  // Sticky header state
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll reveals
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Register-interest form → opens the visitor's email client pre-filled.
  // (Swap for a hosted form service any time — see README.md.)
  var form = document.getElementById("interest-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (n) {
        var el = form.querySelector('[name="' + n + '"]');
        return el ? el.value.trim() : "";
      };
      var subject = "Enquiry — " + (v("interest") || "Charlotte Eleanor Group");
      var body = [
        "Name: " + v("name"),
        "Email: " + v("email"),
        "Phone: " + v("phone"),
        "Interest: " + v("interest"),
        "Location / territory: " + v("location"),
        "",
        "Message:",
        v("message"),
      ].join("\n");
      window.location.href =
        "mailto:markp@charlotteeleanorgroup.uk?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      var ok = document.getElementById("form-ok");
      if (ok) ok.hidden = false;
    });
  }
})();


/* ---- Cookie consent + Meta Pixel (only fires after consent) ---- */
(function () {
  var PIXEL_ID = "2287597405398523";
  var KEY = "ce-consent";

  function readChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function saveChoice(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  function loadPixel() {
    if (window.fbq) return;
    var n = (window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    var t = document.createElement("script");
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t, s);
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function showBanner() {
    if (document.querySelector(".ce-consent")) return;
    var el = document.createElement("div");
    el.className = "ce-consent";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Cookie choices");
    el.innerHTML =
      '<p class="ce-consent__text">We use cookies to measure how well our advertising works. ' +
      'Nothing is set unless you agree. <a href="/privacy/">How we use your data</a>.</p>' +
      '<div class="ce-consent__actions">' +
      '<button type="button" class="ce-consent__btn ce-consent__btn--ghost" data-consent="declined">Decline</button>' +
      '<button type="button" class="ce-consent__btn" data-consent="granted">Accept</button>' +
      "</div>";
    document.body.appendChild(el);
    el.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-consent]") : null;
      if (!btn) return;
      var choice = btn.getAttribute("data-consent");
      saveChoice(choice);
      if (el.parentNode) el.parentNode.removeChild(el);
      if (choice === "granted") loadPixel();
    });
  }

  var choice = readChoice();
  if (choice === "granted") {
    loadPixel();
  } else if (choice !== "declined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  }
})();
