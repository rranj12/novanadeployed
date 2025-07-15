import { c as createComponent, a as createAstro, b as addAttribute, f as renderHead, g as renderSlot, r as renderTemplate, m as maybeRenderHead } from './astro/server_nkSBzcqr.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${Astro2.props.title} | Novana</title><meta name="description"${addAttribute(Astro2.props.description || "Deep tech insights and market analysis", "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPath } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <nav class="nav" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <span class="logo-text" data-astro-cid-3ef6ksr2>Novana Insights</span> </a> <div class="nav-links" data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(currentPath === "/" ? "nav-link active" : "nav-link", "class")} data-astro-cid-3ef6ksr2>Home</a> <a href="/research"${addAttribute(currentPath === "/research" ? "nav-link active" : "nav-link", "class")} data-astro-cid-3ef6ksr2>Research</a> <a href="/markets"${addAttribute(currentPath === "/markets" ? "nav-link active" : "nav-link", "class")} data-astro-cid-3ef6ksr2>Markets</a> <a href="/about"${addAttribute(currentPath === "/about" ? "nav-link active" : "nav-link", "class")} data-astro-cid-3ef6ksr2>About</a> </div> </nav> </div> </header> `;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/components/Header.astro", void 0);

export { $$Layout as $, $$Header as a };
