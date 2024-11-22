import { c as createComponent, a as createAstro, r as renderTemplate, b as renderHead, d as addAttribute, m as maybeRenderHead, e as renderComponent, f as renderSlot } from '../chunks/astro/server_D9qR1ReF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BTwz_EhV.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><meta name="description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"><\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Shantell+Sans:ital,wght,BNCE@0,300..800,66;1,300..800,66&display=swap" rel="stylesheet">', "</head>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), renderHead());
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/layouts/Head.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer>Footer content</footer>`;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/layouts/SiteFooter.astro", void 0);

const $$Blobs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="blobs"> <svg width="auto" height="auto" viewBox="0 0 663 421" preserveAspectRatio="xMidYMid meet" class="blob-1"> <path> <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M287.582 15.4279C376.847 23.7403 479.818 -23.1184 542.489 15.4279C602.576 52.3852 623.831 165.744 639.08 216.244C654.818 268.363 486.511 304.509 469.5 359.5C435.511 437.487 297.201 419.953 213.783 419.929C130.409 419.905 105.541 405.479 44.7713 370.589C-15.9982 335.699 42.9371 216.959 44.7713 166.85C46.5703 117.701 -35.9849 66.583 18.8033 29.6471C78.7684 -10.7786 197.818 7.0691 287.582 15.4279Z;
					
									M308.798 11.7818C398.064 20.3349 444.829 29.7731 507.5 69.4355C567.587 107.463 645.048 166.45 660.297 218.412C676.034 272.04 607.228 296.311 590.216 352.894C556.228 433.138 300.5 379.478 235.5 396.102C125 424.364 79.9859 432.003 19.2164 396.102C-41.5531 360.202 64.1536 219.148 65.9877 167.588C67.7868 117.016 19.2164 78.6945 40.0198 26.4127C99.9849 -15.1835 219.034 3.18103 308.798 11.7818Z;
                  
                 M287.582 15.4279C376.847 23.7403 479.818 -23.1184 542.489 15.4279C602.576 52.3852 623.831 165.744 639.08 216.244C654.818 268.363 486.511 304.509 469.5 359.5C435.511 437.487 297.201 419.953 213.783 419.929C130.409 419.905 105.541 405.479 44.7713 370.589C-15.9982 335.699 42.9371 216.959 44.7713 166.85C46.5703 117.701 -35.9849 66.583 18.8033 29.6471C78.7684 -10.7786 197.818 7.0691 287.582 15.4279Z;"></animate> </path> </svg> <svg width="auto" height="auto" viewBox="0 0 611 420" preserveAspectRatio="xMidYMid meet" class="blob-2"> <path> <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M285.802 411.882C405.14 418.313 554.856 444.992 601.87 346.174C656.729 230.868 451.362 85.6419 332.473 20.0351C233.616 -34.5171 120.277 32.6673 29.9186 98.0546C-43.3002 151.039 37.0143 237.699 68.1894 317.415C97.727 392.944 196.906 407.092 285.802 411.882Z;
					
								M273.639 418.682C393.082 425.299 466.99 409.764 514.046 308.073C568.953 189.413 602.512 94.5436 483.52 27.0287C384.577 -29.1102 55.8378 6.24907 17.5337 95.7268C-27.4238 169.369 24.6356 239.433 55.8377 321.467C85.401 399.193 184.666 413.752 273.639 418.682Z;
                  
                 M285.802 411.882C405.14 418.313 554.856 444.992 601.87 346.174C656.729 230.868 451.362 85.6419 332.473 20.0351C233.616 -34.5171 120.277 32.6673 29.9186 98.0546C-43.3002 151.039 37.0143 237.699 68.1894 317.415C97.727 392.944 196.906 407.092 285.802 411.882Z;"></animate> </path> </svg> <svg width="auto" height="auto" viewBox="0 0 600 420" class="blob-3"> <path fill="yellow"> <animate attributeName="d" dur="16s" repeatCount="indefinite" values="M304.57 0.00655161C372.1 -0.539542 400.872 58.7733 448.5 99.5C495.98 140.1 529.5 161.053 564.586 222.346C599.671 283.639 622.569 355.138 564.586 397.07C507.813 438.126 379.067 411.82 304.57 410.38C233.205 409.001 173.719 402.228 116 366.5C52.1886 327.001 -6.35966 289.2 0.796629 222.346C7.60009 158.788 42.2944 98.1936 99.1664 56.5674C149.984 19.3727 237.533 0.548657 304.57 0.00655161Z;
                    
                    M289.5 53.5647C357.03 53.0186 500.372 -28.7268 548 12C595.48 52.6003 529.298 158.051 564.384 219.344C599.469 280.637 622.367 352.136 564.384 394.067C507.611 435.123 378.865 408.817 304.368 407.377C233.003 405.998 173.517 399.225 115.798 363.497C51.9867 323.998 -6.56156 286.198 0.594725 219.344C7.39819 155.786 42.0925 95.1908 98.9645 53.5647C149.782 16.3699 222.463 54.1068 289.5 53.5647Z;

                    M304.57 0.00655161C372.1 -0.539542 400.872 58.7733 448.5 99.5C495.98 140.1 529.5 161.053 564.586 222.346C599.671 283.639 622.569 355.138 564.586 397.07C507.813 438.126 379.067 411.82 304.57 410.38C233.205 409.001 173.719 402.228 116 366.5C52.1886 327.001 -6.35966 289.2 0.796629 222.346C7.60009 158.788 42.2944 98.1936 99.1664 56.5674C149.984 19.3727 237.533 0.548657 304.57 0.00655161Z;
"></animate> </path> </svg> <svg width="auto" height="auto" viewBox="0 0 600 420" class="blob-4"> <path> <animate attributeName="d" dur="9s" repeatCount="indefinite" values="
                    
                    M289.5 53.5647C357.03 53.0186 500.372 -28.7268 548 12C595.48 52.6003 529.298 158.051 564.384 219.344C599.469 280.637 622.367 352.136 564.384 394.067C507.611 435.123 378.865 408.817 304.368 407.377C233.003 405.998 173.517 399.225 115.798 363.497C51.9867 323.998 -6.56156 286.198 0.594725 219.344C7.39819 155.786 42.0925 95.1908 98.9645 53.5647C149.782 16.3699 222.463 54.1068 289.5 53.5647Z;

                    M304.57 0.00655161C372.1 -0.539542 400.872 58.7733 448.5 99.5C495.98 140.1 529.5 161.053 564.586 222.346C599.671 283.639 622.569 355.138 564.586 397.07C507.813 438.126 379.067 411.82 304.57 410.38C233.205 409.001 173.719 402.228 116 366.5C52.1886 327.001 -6.35966 289.2 0.796629 222.346C7.60009 158.788 42.2944 98.1936 99.1664 56.5674C149.984 19.3727 237.533 0.548657 304.57 0.00655161Z;
                    M289.5 53.5647C357.03 53.0186 500.372 -28.7268 548 12C595.48 52.6003 529.298 158.051 564.384 219.344C599.469 280.637 622.367 352.136 564.384 394.067C507.611 435.123 378.865 408.817 304.368 407.377C233.003 405.998 173.517 399.225 115.798 363.497C51.9867 323.998 -6.56156 286.198 0.594725 219.344C7.39819 155.786 42.0925 95.1908 98.9645 53.5647C149.782 16.3699 222.463 54.1068 289.5 53.5647Z;
"></animate> </path> </svg> <svg width="auto" height="auto" viewBox="0 0 663 421" preserveAspectRatio="xMidYMid meet" class="blob-5"> <path> <animate attributeName="d" dur="13s" repeatCount="indefinite" values="
					
									M308.798 11.7818C398.064 20.3349 444.829 29.7731 507.5 69.4355C567.587 107.463 645.048 166.45 660.297 218.412C676.034 272.04 607.228 296.311 590.216 352.894C556.228 433.138 300.5 379.478 235.5 396.102C125 424.364 79.9859 432.003 19.2164 396.102C-41.5531 360.202 64.1536 219.148 65.9877 167.588C67.7868 117.016 19.2164 78.6945 40.0198 26.4127C99.9849 -15.1835 219.034 3.18103 308.798 11.7818Z;
                  
                 M287.582 15.4279C376.847 23.7403 479.818 -23.1184 542.489 15.4279C602.576 52.3852 623.831 165.744 639.08 216.244C654.818 268.363 486.511 304.509 469.5 359.5C435.511 437.487 297.201 419.953 213.783 419.929C130.409 419.905 105.541 405.479 44.7713 370.589C-15.9982 335.699 42.9371 216.959 44.7713 166.85C46.5703 117.701 -35.9849 66.583 18.8033 29.6471C78.7684 -10.7786 197.818 7.0691 287.582 15.4279Z;
                 M308.798 11.7818C398.064 20.3349 444.829 29.7731 507.5 69.4355C567.587 107.463 645.048 166.45 660.297 218.412C676.034 272.04 607.228 296.311 590.216 352.894C556.228 433.138 300.5 379.478 235.5 396.102C125 424.364 79.9859 432.003 19.2164 396.102C-41.5531 360.202 64.1536 219.148 65.9877 167.588C67.7868 117.016 19.2164 78.6945 40.0198 26.4127C99.9849 -15.1835 219.034 3.18103 308.798 11.7818Z;"></animate> </path> </svg> <svg width="auto" height="auto" viewBox="0 0 611 420" preserveAspectRatio="xMidYMid meet" class="blob-6"> <path> <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
					
								M273.639 418.682C393.082 425.299 466.99 409.764 514.046 308.073C568.953 189.413 602.512 94.5436 483.52 27.0287C384.577 -29.1102 55.8378 6.24907 17.5337 95.7268C-27.4238 169.369 24.6356 239.433 55.8377 321.467C85.401 399.193 184.666 413.752 273.639 418.682Z;
                  
                 M285.802 411.882C405.14 418.313 554.856 444.992 601.87 346.174C656.729 230.868 451.362 85.6419 332.473 20.0351C233.616 -34.5171 120.277 32.6673 29.9186 98.0546C-43.3002 151.039 37.0143 237.699 68.1894 317.415C97.727 392.944 196.906 407.092 285.802 411.882Z;
                 M273.639 418.682C393.082 425.299 466.99 409.764 514.046 308.073C568.953 189.413 602.512 94.5436 483.52 27.0287C384.577 -29.1102 55.8378 6.24907 17.5337 95.7268C-27.4238 169.369 24.6356 239.433 55.8377 321.467C85.401 399.193 184.666 413.752 273.639 418.682Z;"></animate> </path> </svg> <svg width="auto" height="auto" viewBox="0 0 611 420" preserveAspectRatio="xMidYMid meet" class="blob-7"> <path> <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
					
								M263.425 419.964C203.211 420.517 103.025 415.165 60.5567 373.897C18.2202 332.758 62.8621 256.779 31.5775 194.672C0.293016 132.565 -20.1245 60.1166 31.5775 17.6283C82.1999 -23.9727 196.999 20.914 263.425 22.3728C327.059 23.7704 395.111 -18.5736 446.576 17.6283C503.475 57.6517 540.671 126.93 534.29 194.672C528.223 259.074 479.526 287.109 428.815 329.288C383.503 366.976 323.2 419.414 263.425 419.964Z;
                  
                 M278.425 417.964C218.21 418.517 118.024 413.165 75.556 371.897C33.2195 330.758 42.2845 315.107 11 253C-20.2845 190.893 23.854 98.9883 75.556 56.5C126.178 14.899 211.998 18.914 278.425 20.3728C342.058 21.7703 410.11 -20.5736 461.576 15.6283C518.474 55.6517 555.67 124.93 549.289 192.672C543.222 257.074 600 311.321 549.289 353.5C503.977 391.189 338.199 417.414 278.425 417.964Z;
                 M263.425 419.964C203.211 420.517 103.025 415.165 60.5567 373.897C18.2202 332.758 62.8621 256.779 31.5775 194.672C0.293016 132.565 -20.1245 60.1166 31.5775 17.6283C82.1999 -23.9727 196.999 20.914 263.425 22.3728C327.059 23.7704 395.111 -18.5736 446.576 17.6283C503.475 57.6517 540.671 126.93 534.29 194.672C528.223 259.074 479.526 287.109 428.815 329.288C383.503 366.976 323.2 419.414 263.425 419.964Z;"></animate> </path> </svg> </div>`;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/components/Blobs.astro", void 0);

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bleed site-header"> ${renderComponent($$result, "Blobs", $$Blobs, {})} <!-- logo image --> <div class="logo"><img src="/images/theme/MCW-logo.svg"></div> <!-- <div class="nav">
    <a
      href="#"
      id="mainNavToggle"
      class="menu-toggle"
      aria-expanded="false"
      aria-controls="mainNavWrapper"
      ><span class="sr-only">Toggle main navigation</span>
      <span></span><span></span><span></span><span></span></a
    >
    <nav>
      <li><a href="#">Home</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </nav>
  </div> --> </header>`;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/layouts/SiteHeader.astro", void 0);

const $$Astro = createAstro();
const $$MainPageWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainPageWrapper;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { ...Astro2.props })}${maybeRenderHead()}<body> <div class="wrapper primary-layout"> ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} <main class="primary-layout bleed"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </div> </body></html>`;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/layouts/MainPageWrapper.astro", void 0);

const GreenmanSideFull = new Proxy({"src":"/_astro/Greenman-frame.CEwXxSNM.jpg","width":5909,"height":3939,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/assets/Greenman-frame.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero m-bottom-3"> ${renderComponent($$result, "Image", $$Image, { "src": GreenmanSideFull, "alt": "Greenman", "width": 1600, ";": true })} <h1 class="fun">Let's make bikes you'll love!</h1> </div>`;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/components/Hero.astro", void 0);

const $$Lede = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/components/Lede.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainPageWrapper", $$MainPageWrapper, { "title": "Marteal Cycle Works" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Lede", $$Lede, {})}    ` })}`;
}, "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/pages/index.astro", void 0);

const $$file = "/Users/rtm9/Documents/Marteal/MCW/sites/mcw-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
