import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nkSBzcqr.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_BipSNua-.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CYBSMTwN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DGXmjOo7.mjs';
export { renderers } from '../renderers.mjs';

const $$Markets = createComponent(($$result, $$props, $$slots) => {
  const marketArticles = [
    {
      slug: "unicycive-short-sale",
      title: "Our Unicycive (NASDAQ: UNCY) Short Sale",
      excerpt: "Overview of Novana's beta-neutral short sale of Unicycive (UNCY) ahead of its FDA decision, betting the market had mispriced regulatory risk.",
      tags: ["Short Sale", "Biotechology", "FDA Regulation"],
      authors: "Justin Wang, Rishabh Ranjan",
      date: "June 30, 2025",
      readingTime: "5 min read"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Markets", "description": "Market analysis and investment trends in deep tech" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPath": "/markets" })} ${maybeRenderHead()}<main class="main"> <section class="hero"> <div class="container-narrow"> <div class="hero-content"> <h1 class="hero-title">Market Activities</h1> <p class="hero-subtitle">We trade markets, driven by theses derived from our in-house deep technology research and supported by our unique asset management approach.</p> </div> </div> </section> <section class="articles"> <div class="container-narrow"> <h2>Latest Trades</h2> <div class="articles-list"> ${marketArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/pages/markets.astro", void 0);

const $$file = "/Users/justinwang/Downloads/coding-projects/novanadeployed/src/pages/markets.astro";
const $$url = "/markets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Markets,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
