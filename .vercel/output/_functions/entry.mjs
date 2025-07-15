import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bd3WiOro.mjs';
import { manifest } from './manifest_DO5zXWsw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/articles/factor-investing-biotech-equities.astro.mjs');
const _page3 = () => import('./pages/articles/trump-tariff-policy-biotech.astro.mjs');
const _page4 = () => import('./pages/articles/unicycive-short-sale.astro.mjs');
const _page5 = () => import('./pages/markets.astro.mjs');
const _page6 = () => import('./pages/research.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/articles/factor-investing-biotech-equities.astro", _page2],
    ["src/pages/articles/trump-tariff-policy-biotech.astro", _page3],
    ["src/pages/articles/unicycive-short-sale.astro", _page4],
    ["src/pages/markets.astro", _page5],
    ["src/pages/research.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "44aaddf0-a2f6-44e5-857a-b8e1b0e27117",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
