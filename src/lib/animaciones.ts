// Los componentes solo declaran atributos data-*; este módulo los anima.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

const reduced =
  typeof window === "undefined"
    ? { matches: true }
    : window.matchMedia("(prefers-reduced-motion: reduce)");

/* ——— XP bar: progreso de scroll ——— */
function iniciarXpBar() {
  const xpBar = document.getElementById("xp-bar");
  if (!xpBar || reduced.matches) return;

  const setXp = gsap.quickTo(xpBar, "scaleX", {
    duration: 0.15,
    ease: "power2.out",
  });
  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setXp(max > 0 ? window.scrollY / max : 0);
    },
    { passive: true }
  );
}

/* ——— Scrollspy: link activo según sección visible ——— */
function iniciarScrollspy() {
  const navLinks = document.querySelectorAll<HTMLElement>(".nav-link");
  const secciones = ["inicio", "proyectos", "certificaciones", "contacto"]
    .map((id) => document.getElementById(id))
    .filter((s): s is HTMLElement => s !== null);

  const setActivo = (id: string) => {
    navLinks.forEach((link) => {
      const activo = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", activo);
      if (activo) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  secciones.forEach((seccion) => {
    ScrollTrigger.create({
      trigger: seccion,
      start: "top 40%",
      end: "bottom 40%",
      onEnter: () => setActivo(seccion.id),
      onEnterBack: () => setActivo(seccion.id),
    });
  });

  // Vuelve a "inicio" al llegar arriba del todo
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY < 100) setActivo("inicio");
    },
    { passive: true }
  );
}

/* ——— Reveal genérico: [data-reveal] ——— */
function iniciarReveals() {
  if (reduced.matches) return;

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}

/* ——— Timeline del hero ——— */
function animarHero() {
  if (reduced.matches) {
    return;
  }

  gsap.set("[data-hero-content]", { opacity: 0, y: -32 });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to("[data-hero-content]", { opacity: 1, y: 0, duration: 0.8 }, 0)
    .to("[data-typewriter]", { text: { value: "whoami" }, duration: 0.75, ease: "none" }, 0)
    .to("[data-scramble]", {
      duration: 1.05,
      scrambleText: { text: "{original}", chars: "upperCase", speed: 0.6 },
      ease: "none",
    }, 0);
}

/* ——— Terminal JSON: líneas en cascada ——— */
function animarTerminal() {
  const terminal = document.querySelector("[data-terminal]");
  if (!terminal || reduced.matches) return;

  gsap.set("[data-terminal-line]", { opacity: 0, x: -10 });
  ScrollTrigger.create({
    trigger: terminal,
    start: "top 75%",
    once: true,
    onEnter: () => {
      gsap.to("[data-terminal-line]", {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
  });
}

/* ——— Rutas de sección: se teclean al entrar en viewport ——— */
function animarRutas() {
  if (reduced.matches) return;

  document.querySelectorAll<HTMLElement>("[data-typewriter-route]").forEach((el) => {
    const textoFinal = el.dataset.routeText ?? el.textContent ?? "";
    if (!textoFinal) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          text: { value: textoFinal },
          duration: 0.5,
          ease: "none",
        });
      },
    });
  });
}

/* ——— Tarjetas: reparto de cartas (stagger) ——— */
function animarTarjetas() {
  const grid = document.querySelector("[data-cards-grid]");
  if (!grid || reduced.matches) return;

  gsap.from(grid.children, {
    opacity: 0,
    y: 40,
    rotate: 2,
    duration: 0.55,
    stagger: 0.12,
    ease: "power2.out",
    scrollTrigger: { trigger: grid, start: "top 80%", once: true },
  });
}

/* ——— Tilt 3D sutil en tarjetas de proyecto (solo puntero fino) ——— */
function animarTilt() {
  if (reduced.matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
    // Pivote al centro de la tarjeta
    gsap.set(card, { transformPerspective: 800, transformOrigin: "center" });

    const qrx = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power2.out" });
    const qry = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power2.out" });

    card.addEventListener(
      "mousemove",
      (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        qrx(-py * 4); // inclinación vertical máxima ±2°
        qry(px * 4); // giro horizontal máximo ±4°
      },
      { passive: true }
    );

    card.addEventListener("mouseleave", () => {
      qrx(0);
      qry(0);
    });
  });
}

/* ——— Certificaciones: filas tipo log ——— */
function animarCredenciales() {
  const rows = document.querySelector("[data-cert-rows]");
  if (!rows || reduced.matches) return;

  gsap.from(rows.children, {
    opacity: 0,
    x: -18,
    duration: 0.4,
    stagger: 0.18,
    ease: "power2.out",
    scrollTrigger: { trigger: rows, start: "top 82%", once: true },
  });
}

/* ——— Pulso del CTA de contacto ——— */
function animarCtaContacto() {
  const cta = document.querySelector("[data-cta-email]");
  if (!cta || reduced.matches) return;

  gsap.fromTo(
    cta,
    { scale: 1 },
    {
      keyframes: [
        { scale: 1.04, duration: 0.22, ease: "power2.out" },
        { scale: 1, duration: 0.3, ease: "power2.inOut" },
      ],
      scrollTrigger: { trigger: cta, start: "top 80%", once: true },
    }
  );
}

function iniciarAnimaciones() {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrambleTextPlugin);

  iniciarScrollspy();
  iniciarXpBar();
  iniciarReveals();
  animarHero();
  animarTerminal();
  animarRutas();
  animarTarjetas();
  animarTilt();
  animarCredenciales();
  animarCtaContacto();
}

if (typeof document !== "undefined" && document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarAnimaciones, { once: true });
} else if (typeof document !== "undefined") {
  iniciarAnimaciones();
}
