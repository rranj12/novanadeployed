import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_nkSBzcqr.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_CDs6HL6l.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Footer } from '../chunks/Footer_DGXmjOo7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="author-card" data-astro-cid-32rj7774> <div class="author-header" data-astro-cid-32rj7774> <div class="author-left" data-astro-cid-32rj7774> <div class="author-info" data-astro-cid-32rj7774> <h3 class="author-name" data-astro-cid-32rj7774>${author.name}</h3> <p class="author-title" data-astro-cid-32rj7774>${author.title}</p> <p class="author-education" data-astro-cid-32rj7774>${author.education}</p> </div> <p class="author-bio" data-astro-cid-32rj7774>${author.bio}</p> </div> <div class="author-image" data-astro-cid-32rj7774> <img${addAttribute(author.image, "src")}${addAttribute(author.name, "alt")} data-astro-cid-32rj7774> </div> </div> <div class="author-expertise" data-astro-cid-32rj7774> ${author.expertise.map((skill) => renderTemplate`<span class="tag" data-astro-cid-32rj7774>${skill}</span>`)} </div> <div class="author-contact" data-astro-cid-32rj7774> <a${addAttribute(`mailto:${author.email}`, "href")} class="contact-link" data-astro-cid-32rj7774> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-32rj7774> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-32rj7774></path> <polyline points="22,6 12,13 2,6" data-astro-cid-32rj7774></polyline> </svg> <span data-astro-cid-32rj7774>${author.email}</span> </a> <a${addAttribute(author.linkedin, "href")} class="contact-link" target="_blank" rel="noopener noreferrer" data-astro-cid-32rj7774> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-32rj7774> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-astro-cid-32rj7774></path> <rect x="2" y="9" width="4" height="12" data-astro-cid-32rj7774></rect> <circle cx="4" cy="4" r="2" data-astro-cid-32rj7774></circle> </svg> <span data-astro-cid-32rj7774>LinkedIn</span> </a> </div> </div> `;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/components/AuthorCard.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const authors = [
    {
      name: "Justin Wang",
      title: "Co-Founder & Principal Researcher",
      education: "CS & Math, Stanford University",
      bio: "Previous experiences as an Equity Trading intern in Invesco Global Capital Markets Group and as a sponsorships organizer for Stanford TreeHacks. Brings domain knowledge about capital markets and ongoing developments in applied AI.",
      expertise: ["AI", "Biotechnology", "Investment Management"],
      email: "justinwang@stanford.edu",
      linkedin: "https://www.linkedin.com/in/jstwng/",
      image: "/justin.jpeg"
    },
    {
      name: "Rishabh Ranjan",
      title: "Co-Founder & Principal Researcher",
      education: "Bioengineering & CS, Stanford University",
      bio: "Longevity Biotech and AI Fellow at the R42 group and nanoparticle drug delivery research at Stanford Medicine. Brings domain expertise in translational biotech, emerging therapeutics, and AI applications in life sciences.",
      expertise: ["Biotechnology", "Equity Research", "AI"],
      email: "rishabh12ranjan@gmail.com",
      linkedin: "https://www.linkedin.com/in/rishabhranj/",
      image: "/rishabh.jpeg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "description": "Meet the research team behind Novana", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPath": "/about", "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<main class="main" data-astro-cid-kh7btl4r> <section class="about-hero" data-astro-cid-kh7btl4r> <div class="container-narrow" data-astro-cid-kh7btl4r> <h1 class="about-title" data-astro-cid-kh7btl4r>About Novana Insights</h1> <p class="about-description" data-astro-cid-kh7btl4r>
We are a research-focused analysis firm specializing in deep technology opportunities. Our team combines academic rigor with industry experience to provide institutional-grade insights on emerging technology investments and market trends.
</p> </div> </section> <section class="authors-section" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Our Team</h2> <div class="authors-grid" data-astro-cid-kh7btl4r> ${authors.map((author) => renderTemplate`${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "author": author, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> </section> <section class="mission" data-astro-cid-kh7btl4r> <div class="container-narrow" data-astro-cid-kh7btl4r> <div class="mission-content" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Our Mission</h2> <p class="mission-text" data-astro-cid-kh7btl4r>
We bridge the gap between cutting-edge scientific research and investment analysis, providing institutional investors with the technical depth needed to evaluate complex deep technology opportunities. Our research focuses on identifying companies positioned for long-term success in quantum computing, synthetic biology, advanced materials, and other frontier technologies.
</p> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/pages/about.astro", void 0);

const $$file = "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
