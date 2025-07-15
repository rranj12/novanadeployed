import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nkSBzcqr.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_BipSNua-.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CYBSMTwN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DGXmjOo7.mjs';
export { renderers } from '../renderers.mjs';

const $$Research = createComponent(($$result, $$props, $$slots) => {
  const researchArticles = [
    {
      slug: "trump-tariff-policy-biotech",
      title: "What Trump's Tariff Policy means for Biotech",
      excerpt: "Analysis of how proposed tariff policies could impact the biotechnology sector, from supply chain costs to international market access and competitive dynamics.",
      tags: ["Trade Policy", "Biotechnology", "Tariffs"],
      authors: "Justin Wang, Rishabh Ranjan",
      date: "June 18, 2025",
      readingTime: "8 min read"
    },
    {
      slug: "factor-investing-biotech-equities",
      title: "On Factor Investing for U.S. Biotechnology Equities",
      excerpt: "We backtest three factor investing-frameworks for U.S. biotech equities against a 15 year period, finding that none produced statistically significant alpha.",
      tags: ["Factor Investing", "Biotechnology", "Equities"],
      authors: "Justin Wang, Rishabh Ranjan",
      date: "June 13, 2025",
      readingTime: "10 min read"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Research", "description": "Deep tech investment research and analysis" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPath": "/research" })} ${maybeRenderHead()}<main class="main"> <section class="hero"> <div class="container-narrow"> <div class="hero-content"> <h1 class="hero-title">Thematic Research</h1> <p class="hero-subtitle">In-depth investment research and technical analysis on emerging deep technology investment opportunities.</p> </div> </div> </section> <section class="articles"> <div class="container-narrow"> <h2>Latest Research</h2> <div class="articles-list"> ${researchArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/pages/research.astro", void 0);

const $$file = "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/pages/research.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Research,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
