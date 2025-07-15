import { c as createComponent, m as maybeRenderHead, e as renderScript, r as renderTemplate, a as createAstro, b as addAttribute } from './astro/server_nkSBzcqr.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                     */

const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="table-of-contents" id="toc-container" data-astro-cid-xvrfupwn> <nav class="toc-nav" id="toc-nav" data-astro-cid-xvrfupwn> <!-- TOC items will be dynamically generated --> </nav> </aside> ${renderScript($$result, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/components/TableOfContents.astro", void 0);

const $$Astro = createAstro();
const $$AuthorsSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorsSidebar;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="authors-sidebar" id="authors-container" data-astro-cid-cevcrn4c> <nav class="authors-nav" data-astro-cid-cevcrn4c> <h3 class="authors-title" data-astro-cid-cevcrn4c>Authors</h3> <div class="authors-list" data-astro-cid-cevcrn4c> ${authors.map((author, index) => renderTemplate`<div class="author-item"${addAttribute(index, "key")} data-astro-cid-cevcrn4c> <h4 class="author-name" data-astro-cid-cevcrn4c>${author.name}</h4> <p class="author-role" data-astro-cid-cevcrn4c>${author.title}</p> <a href="/about" class="read-about-link" data-astro-cid-cevcrn4c>
Read More
<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" data-astro-cid-cevcrn4c> <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cevcrn4c></path> </svg> </a> </div>`)} </div> <div class="contact-note" data-astro-cid-cevcrn4c> <p data-astro-cid-cevcrn4c>Have a question or a different opinion on our findings? Want to contribute to future pieces? <a href="mailto:justinwang@stanford.edu,rishabh12ranjan@gmail.com" class="contact-link" data-astro-cid-cevcrn4c>Send our team a note</a>.</p> </div> </nav> </aside> ${renderScript($$result, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/components/AuthorsSidebar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/components/AuthorsSidebar.astro", void 0);

export { $$TableOfContents as $, $$AuthorsSidebar as a };
