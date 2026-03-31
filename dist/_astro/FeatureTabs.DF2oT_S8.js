import{a as c,j as e}from"./cn.CvDa8Z21.js";import{r as l}from"./index.B02hbnpo.js";const V=(...n)=>n.filter((s,i,p)=>!!s&&s.trim()!==""&&p.indexOf(s)===i).join(" ").trim();const F=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const P=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,i,p)=>p?p.toUpperCase():i.toLowerCase());const R=n=>{const s=P(n);return s.charAt(0).toUpperCase()+s.slice(1)};var W={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Z=n=>{for(const s in n)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};const K=l.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:p,className:x="",children:h,iconNode:r,...g},o)=>l.createElement("svg",{ref:o,...W,width:s,height:s,stroke:n,strokeWidth:p?Number(i)*24/Number(s):i,className:V("lucide",x),...!h&&!Z(g)&&{"aria-hidden":"true"},...g},[...r.map(([d,v])=>l.createElement(d,v)),...Array.isArray(h)?h:[h]]));const C=(n,s)=>{const i=l.forwardRef(({className:p,...x},h)=>l.createElement(K,{ref:h,iconNode:s,className:V(`lucide-${F(R(n))}`,`lucide-${n}`,p),...x}));return i.displayName=R(n),i};const J=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],G=C("check",J);const q=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],X=C("chevron-down",q);const Q=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Y=C("copy",Q);const ee=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],te=C("globe",ee);const re=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],ne=C("layout-grid",re);const oe=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],ae=C("newspaper",oe);const se=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ie=C("palette",se);const ce=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],le=C("search",ce);const de=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ue=C("zap",de);function me({tabs:n,defaultValue:s,value:i,onChange:p,className:x,children:h,mobileVariant:r="dropdown"}){const g=l.useId(),o=i!==void 0,[d,v]=l.useState(s??n[0]?.id??""),[f,D]=l.useState(!1),[b,T]=l.useState(!1),[w,k]=l.useState(-1),E=l.useRef(null),S=l.useRef(null),y=o?i:d,j=n.find(t=>t.id===y),L=j?.icon,N=l.useCallback(()=>{!f||b||(T(!0),setTimeout(()=>{D(!1),T(!1)},200))},[f,b]),M=l.useCallback(t=>{o||v(t),p?.(t),N()},[o,p,N]);l.useEffect(()=>{if(!f)return;const t=u=>{E.current&&!E.current.contains(u.target)&&N()},a=u=>{u.key==="Escape"&&(N(),S.current?.focus())};return document.addEventListener("mousedown",t),document.addEventListener("keydown",a),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",a)}},[f,N]),l.useEffect(()=>{if(!f)k(-1);else{const t=n.findIndex(a=>a.id===y);k(t>=0?t:0)}},[f,n,y]);const $=l.useCallback(t=>{if(!f){(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),D(!0));return}switch(t.key){case"ArrowDown":t.preventDefault(),k(a=>a<n.length-1?a+1:0);break;case"ArrowUp":t.preventDefault(),k(a=>a>0?a-1:n.length-1);break;case"Home":t.preventDefault(),k(0);break;case"End":t.preventDefault(),k(n.length-1);break;case"Enter":case" ":t.preventDefault(),w>=0&&n[w]&&(M(n[w].id),S.current?.focus());break;case"Tab":N();break}},[f,n,w,M,N]),H=l.useCallback((t,a)=>{let u=a;switch(t.key){case"ArrowUp":t.preventDefault(),u=a>0?a-1:n.length-1;break;case"ArrowDown":t.preventDefault(),u=a<n.length-1?a+1:0;break;case"Home":t.preventDefault(),u=0;break;case"End":t.preventDefault(),u=n.length-1;break;default:return}const m=n[u];m&&(o||v(m.id),p?.(m.id),document.getElementById(`vtab-${g}-${m.id}`)?.focus())},[n,g,o,p]),U=l.Children.map(h,t=>{if(!l.isValidElement(t))return null;const a=t.props?.["data-tab-content"];if(!a)return t;const u=a===y;return l.cloneElement(t,{role:"tabpanel",id:`vtab-panel-${g}-${a}`,"aria-labelledby":`vtab-${g}-${a}`,tabIndex:0,hidden:u?void 0:!0,className:c(t.props?.className,"outline-none rounded-md","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2")})}),I=(t,a,u)=>{const m=t.id===y,A=a===w,z=t.icon;return e.jsxs("button",{type:"button",role:"option","aria-selected":m,onClick:()=>M(t.id),className:c("group relative w-full flex items-center gap-3 p-4 text-left","transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1",u?"rounded-xl":"rounded-lg",m?c("bg-secondary/80","shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]","dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]"):c("hover:bg-background-secondary","hover:translate-x-0.5",A&&"bg-background-secondary/60")),children:[z&&e.jsx("div",{className:c("relative flex items-center justify-center","w-10 h-10 rounded-xl shrink-0","transition-all duration-200",m?c("bg-brand-100 dark:bg-brand-900/40","ring-1 ring-brand-200 dark:ring-brand-800"):c("bg-secondary","group-hover:bg-secondary-hover","group-hover:scale-105","scale-[0.97]")),children:e.jsx(z,{className:c("h-5 w-5 transition-all duration-200",m?"text-brand-600 dark:text-brand-400 scale-105":"text-foreground-muted group-hover:text-foreground-secondary"),strokeWidth:m?2.25:1.75})}),!z&&e.jsx("div",{className:c("w-10 h-10 rounded-xl shrink-0 flex items-center justify-center","transition-all duration-200",m?"bg-brand-100 dark:bg-brand-900/40":"bg-secondary"),children:e.jsx("div",{className:c("rounded-full transition-all duration-200",m?"w-2.5 h-2.5 bg-brand-500":"w-1.5 h-1.5 bg-foreground-subtle group-hover:w-2 group-hover:h-2")})}),e.jsxs("div",{className:"flex-1 min-w-0 py-0.5",children:[e.jsx("span",{className:c("block font-medium transition-colors duration-150",m?"text-foreground":"text-foreground-secondary group-hover:text-foreground"),children:t.label}),t.description&&e.jsx("span",{className:c("block text-sm mt-0.5 transition-colors duration-150",m?"text-foreground-muted":"text-foreground-subtle group-hover:text-foreground-muted"),children:t.description})]}),e.jsx("div",{className:c("w-1 rounded-full transition-all duration-200 shrink-0",m?"h-8 bg-brand-500":"h-0 group-hover:h-4 group-hover:bg-brand-500/25")})]},t.id)};return e.jsxs("div",{className:c("w-full",x),children:[e.jsxs("div",{className:"lg:hidden mb-[var(--space-heading-gap)]",ref:E,children:[e.jsxs("div",{className:"relative",children:[e.jsxs("button",{ref:S,type:"button",onClick:()=>D(!f),onKeyDown:$,"aria-expanded":f,"aria-haspopup":"listbox","aria-controls":`vtab-dropdown-${g}`,className:c("w-full flex items-center gap-3 p-4 rounded-xl","border-2 border-border bg-gradient-to-b from-background to-background-secondary","shadow-sm hover:shadow-md hover:border-brand-300/50 dark:hover:border-brand-700/50","transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 focus-visible:ring-offset-2",f&&"shadow-md border-brand-300/50 dark:border-brand-700/50"),children:[L&&e.jsx(L,{className:"h-5 w-5 text-brand-500 shrink-0",strokeWidth:2}),e.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[e.jsx("span",{className:"font-semibold text-foreground block",children:j?.label}),j?.description&&e.jsx("span",{className:"text-foreground-muted text-xs truncate block",children:j.description})]}),e.jsx(X,{className:c("h-5 w-5 text-foreground-muted transition-transform duration-200",f&&"rotate-180"),strokeWidth:2})]}),(f||b)&&r==="dropdown"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:N,"aria-hidden":"true"}),e.jsx("div",{id:`vtab-dropdown-${g}`,role:"listbox","aria-labelledby":`vtab-trigger-${g}`,onKeyDown:$,className:c("absolute z-50 w-full mt-2 p-1.5","rounded-xl border border-border bg-background/95 backdrop-blur-sm shadow-xl",b?"animate-dropdown-out":"animate-dropdown-in","flex flex-col gap-0.5"),children:n.map((t,a)=>I(t,a,!1))})]})]}),(f||b)&&r==="sheet"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:c("fixed inset-0 z-40 bg-background/60 backdrop-blur-sm",b?"animate-backdrop-out":"animate-backdrop"),onClick:N,"aria-hidden":"true"}),e.jsxs("div",{id:`vtab-dropdown-${g}`,role:"listbox","aria-labelledby":`vtab-trigger-${g}`,onKeyDown:$,className:c("fixed inset-x-0 bottom-0 z-50 max-h-[70vh] overflow-auto","rounded-t-2xl border-t border-border bg-background shadow-2xl",b?"animate-sheet-down":"animate-sheet-up","pb-safe"),children:[e.jsx("div",{className:"sticky top-0 flex justify-center py-3 bg-background z-10",children:e.jsx("div",{className:"w-10 h-1 rounded-full bg-border"})}),e.jsx("div",{className:"px-4 pb-2",children:e.jsx("h3",{className:"text-sm font-medium text-foreground-muted",children:"Select Tab"})}),e.jsx("div",{className:"px-2 pb-4 flex flex-col gap-1",children:n.map((t,a)=>I(t,a,!0))})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 lg:gap-[var(--space-stack-lg)]",children:[e.jsx("div",{className:"hidden lg:flex lg:col-span-4 flex-col gap-1",role:"tablist","aria-orientation":"vertical","aria-label":"Vertical tabs",children:n.map((t,a)=>{const u=t.id===y,m=t.icon;return e.jsxs("button",{id:`vtab-${g}-${t.id}`,type:"button",role:"tab","aria-selected":u,"aria-controls":`vtab-panel-${g}-${t.id}`,tabIndex:u?0:-1,onClick:()=>M(t.id),onKeyDown:A=>H(A,a),className:c("group flex flex-col items-start rounded-md p-4 text-left transition-all","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",u?"bg-secondary ring-border shadow-sm ring-1":"hover:bg-background-secondary hover:pl-5"),children:[e.jsxs("span",{className:c("font-display flex items-center gap-2 text-base font-bold",u?"text-brand-600 dark:text-brand-400":"text-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400"),children:[m&&e.jsx(m,{className:c("h-5 w-5",u?"text-brand-500":"text-foreground-subtle group-hover:text-brand-500"),strokeWidth:2}),t.label]}),t.description&&e.jsx("span",{className:c("text-foreground-muted mt-1 text-sm",m?"pl-7":""),children:t.description})]},t.id)})}),e.jsx("div",{className:"col-span-1 lg:col-span-8",children:U})]})]})}const B={theming:{title:"Design Tokens & Dark Mode",content:"Complete design system using Tailwind v4's CSS-first configuration with built-in dark mode. Semantic color tokens, system preference detection, and localStorage persistence."},seo:{title:"Automated SEO Handling",content:"Strictly typed metadata injection for every page with automatic OG image generation. Includes sitemap, robots.txt, and JSON-LD structured data."},perf:{title:"Zero JS by Default",content:"Astro's island architecture ensures your pages ship 0kb of JavaScript unless explicitly interactive. Optimized for Core Web Vitals."},components:{title:"Type-Safe Components",content:"TypeScript-first UI primitives with full prop validation and IDE autocompletion. Includes buttons, inputs, cards, modals, and more."},i18n:{title:"i18n Ready",content:"Add multi-language support with the --i18n flag. Includes type-safe translations, automatic locale detection, and SEO-friendly URL structures."},content:{title:"Content & Search",content:"Type-safe content collections with Zod schemas, MDX support, RSS feeds, and Pagefind integration for lightning-fast static search."}},_={theming:{lang:"css",code:`/* src/styles/themes/default.css — swap this file to re-theme */
:root {
  /* Semantic Tokens - Light Mode */
  --background: var(--gray-0);
  --foreground: var(--gray-900);
  --border: var(--gray-200);
  --primary: var(--gray-900);
  --primary-foreground: var(--gray-0);
  --accent: var(--brand-500);
  --card: var(--gray-0);
  --ring: var(--gray-900);
}

/* Dark Mode */
.dark {
  --background: var(--gray-950);
  --foreground: var(--gray-50);
  --border: var(--gray-800);
  --primary: var(--gray-0);
  --primary-foreground: var(--gray-900);
}`,filename:"src/styles/themes/default.css"},seo:{lang:"astro",code:`---
// src/components/seo/SEO.astro
import siteConfig from '@/config/site.config';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const { title, description, image } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

// Auto-generate OG image if none provided
const ogImage = image || \`/og/\${Astro.url.pathname}.png\`;
---

<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL.toString()} />
<meta property="og:title" content={title} />
<meta property="og:image" content={ogImage} />`,filename:"src/components/seo/SEO.astro"},perf:{lang:"astro",code:`---
// src/pages/index.astro
import LandingLayout from '@/layouts/LandingLayout.astro';
import { Hero } from '@/components/hero';
import { TerminalDemo } from '@/components/ui/marketing/TerminalDemo';
import FeatureTabs from '@/components/landing/FeatureTabs.tsx';
import TechStack from '@/components/landing/TechStack.astro';
---

<!-- Static Astro components - ships 0kb JS -->
<Hero layout="split" size="lg">
  <!-- React component - hydrates immediately -->
  <TerminalDemo slot="aside" client:load />
</Hero>

<!-- Static HTML, no JS -->
<TechStack />

<!-- React component - hydrates when scrolled into view -->
<FeatureTabs client:visible />`,filename:"src/pages/index.astro"},components:{lang:"typescript",code:`// src/components/ui/form/Button/Button.tsx
import { type Ref } from 'react';
import { cn } from '@/lib/cn';
import { isExternalUrl } from '@/lib/utils';
import { buttonVariants, type ButtonVariants } from './button.variants';

interface BaseProps {
  ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function Button({ ref, variant = 'primary', size = 'md', href, ...rest }: BaseProps) {
  const classes = cn(buttonVariants({ variant, size }), rest.className);
  const isExternal = href ? isExternalUrl(href) : false;

  if (href) {
    return <a ref={ref} href={href} className={classes} target={isExternal ? '_blank' : undefined} />;
  }
  return <button ref={ref} className={classes} {...rest} />;
}`,filename:"src/components/ui/form/Button/Button.tsx"},i18n:{lang:"typescript",code:`// src/i18n/config.ts (with --i18n flag)
export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
} as const;

export const defaultLang = 'en';

// src/i18n/translations/en.ts
export default {
  'nav.home': 'Home',
  'nav.about': 'About',
  'hero.title': 'Ship faster with Velocity',
  'hero.subtitle': 'The modern Astro starter',
} as const;

// Usage in components
import { t } from '@/i18n';
const title = t('hero.title'); // "Ship faster..."`,filename:"src/i18n/config.ts"},content:{lang:"typescript",code:`// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default('Team'),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      locale: z.enum(['en', 'es', 'fr']).default('en'),
    }),
});

export const collections = { blog, pages, authors, faqs };
// + Pagefind indexes all content at build time`,filename:"src/content.config.ts"}};function pe(n,s){return n.split(`
`).map((p,x)=>{const h=[];let r=p,g=0;const o=(d,v)=>{d&&h.push(e.jsx("span",{className:v,children:d},`${x}-${g++}`))};for(;r.length>0;){let d=!1;const v=r.match(/^(\/\/.*|\/\*[\s\S]*?\*\/)/);if(v){o(v[0],"text-foreground-muted italic"),r=r.slice(v[0].length),d=!0;continue}const f=r.match(/^(<!--[\s\S]*?-->)/);if(f){o(f[0],"text-foreground-muted italic"),r=r.slice(f[0].length),d=!0;continue}const D=r.match(/^(['"`])(?:(?!\1)[^\\]|\\.)*\1/);if(D){o(D[0],"text-green-600 dark:text-green-400"),r=r.slice(D[0].length),d=!0;continue}if(r.startsWith("---")){o("---","text-purple-600 dark:text-purple-400 font-semibold"),r=r.slice(3),d=!0;continue}const b=r.match(/^(<\/?[\w-]+|>|\/>)/);if(b){o(b[0],"text-pink-600 dark:text-pink-400"),r=r.slice(b[0].length),d=!0;continue}const T=r.match(/^(@[\w-]+)/);if(T){o(T[0],"text-purple-600 dark:text-purple-400 font-semibold"),r=r.slice(T[0].length),d=!0;continue}const w=r.match(/^(const|let|var|function|return|import|export|from|interface|type|class|extends|implements|new|async|await|if|else|for|while|switch|case|break|default|try|catch|finally|throw|typeof|instanceof|in|of|as|readonly|public|private|protected)\b/);if(w){o(w[0],"text-purple-600 dark:text-purple-400 font-semibold"),r=r.slice(w[0].length),d=!0;continue}const k=r.match(/^(true|false|null|undefined)\b/);if(k){o(k[0],"text-orange-700 dark:text-orange-300"),r=r.slice(k[0].length),d=!0;continue}const E=r.match(/^(\d+\.?\d*)/);if(E){o(E[0],"text-orange-700 dark:text-orange-300"),r=r.slice(E[0].length),d=!0;continue}const S=r.match(/^([\w-]+)(:)/);if(S&&(s==="css"||p.includes("{"))){o(S[1],"text-blue-600 dark:text-blue-400"),o(S[2],"text-foreground-secondary"),r=r.slice(S[0].length),d=!0;continue}const y=r.match(/^(var|oklch|rgb|rgba|hsl|hsla|calc|url|clamp|min|max)(\()/);if(y){o(y[1],"text-amber-700 dark:text-amber-300"),o(y[2],"text-foreground-secondary"),r=r.slice(y[0].length),d=!0;continue}const j=r.match(/^([\w]+)(\()/);if(j){o(j[1],"text-amber-700 dark:text-amber-300"),o(j[2],"text-foreground-secondary"),r=r.slice(j[0].length),d=!0;continue}const L=r.match(/^(:\s*)([\w<>[\]|&]+)/);if(L){o(L[1],"text-foreground-secondary"),o(L[2],"text-cyan-700 dark:text-cyan-300"),r=r.slice(L[0].length),d=!0;continue}d||(o(r[0],"text-foreground-secondary"),r=r.slice(1))}return h.length>0?h:[e.jsx("span",{children:" "},x)]})}function ge({code:n,filename:s,lang:i}){const[p,x]=l.useState(!1),h=pe(n.trim(),i),r=async()=>{await navigator.clipboard.writeText(n),x(!0),setTimeout(()=>x(!1),2e3)};return e.jsxs("div",{className:"group border-border bg-background-secondary relative w-full overflow-hidden rounded-md border font-mono text-xs shadow-sm",children:[e.jsxs("div",{className:"border-border bg-background flex items-center justify-between border-b px-4 py-2",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"bg-border-strong h-2 w-2 rounded-full"}),e.jsx("div",{className:"bg-border-strong h-2 w-2 rounded-full"}),e.jsx("div",{className:"bg-border-strong h-2 w-2 rounded-full"})]}),e.jsx("span",{className:"text-foreground-muted font-sans text-[10px] font-medium",children:s})]}),e.jsx("button",{onClick:r,className:"text-foreground-muted hover:bg-secondary hover:text-foreground flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-medium transition-colors",children:p?e.jsxs(e.Fragment,{children:[e.jsx(G,{className:"h-3 w-3 text-green-600",strokeWidth:2}),e.jsx("span",{className:"text-green-600",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{className:"h-3 w-3",strokeWidth:2}),e.jsx("span",{children:"Copy"})]})})]}),e.jsx("div",{className:"bg-background overflow-x-auto p-3",children:e.jsx("pre",{className:"flex flex-col leading-5",children:h.map((g,o)=>e.jsxs("div",{className:"table-row",children:[e.jsx("span",{className:"text-foreground-subtle table-cell w-6 pr-3 text-right text-[10px] select-none",children:o+1}),e.jsx("span",{className:"table-cell whitespace-pre",children:g})]},o))})})]})}const O=[{id:"theming",label:"Theming",description:"Design tokens & dark mode",icon:ie},{id:"seo",label:"SEO & Meta",description:"OG images & structured data",icon:le},{id:"perf",label:"Performance",description:"Zero JS by default",icon:ue},{id:"components",label:"Components",description:"Type-safe UI primitives",icon:ne},{id:"i18n",label:"i18n Ready",description:"Optional multi-language",icon:te},{id:"content",label:"Content",description:"Blog, MDX & search",icon:ae}];function xe(){const[n,s]=l.useState("theming");return e.jsxs("section",{id:"features",className:"bg-background relative overflow-hidden py-[var(--space-section)]",children:[e.jsx("div",{className:"pointer-events-none absolute -top-8 right-8 hidden h-[28rem] w-[28rem] opacity-[0.04] grayscale md:block lg:top-10 lg:right-24 lg:h-[44rem] lg:w-[44rem] dark:opacity-[0.06]","aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 90 101",fill:"none",className:"h-full w-full",children:[e.jsx("path",{d:"M35.1288 23.8398L45.1667 49.4151L56.2482 23.8398H87.1082C86.5647 23.3764 85.9776 22.9637 85.3616 22.5944L48.6165 0.704798C46.377 -0.0699896 43.4273 -0.439281 41.2675 0.842377L3.36286 23.3692C3.13819 23.5067 2.92801 23.666 2.72508 23.8326H35.1288V23.8398Z",fill:"currentColor"}),e.jsx("path",{d:"M0.144951 28.8578C0.079723 29.2851 0.0434853 29.7123 0.0434853 30.1323L0 72.036C0 76.1778 1.95684 78.3936 5.26172 80.3631L39.4919 100.703L0.144951 28.8578Z",fill:"currentColor"}),e.jsx("path",{d:"M89.9203 28.7058L50.0588 101L86.6661 79.1539C88.7027 77.9374 90 75.0265 90 72.6442L89.9783 29.6037C89.9783 29.2923 89.9493 28.9954 89.913 28.6985L89.9203 28.7058Z",fill:"currentColor"})]})}),e.jsxs("div",{className:"relative mx-auto max-w-6xl px-6",children:[e.jsxs("div",{className:"mb-[var(--space-section-header)]",children:[e.jsxs("h2",{className:"font-display text-foreground text-3xl font-bold md:text-4xl",children:["Everything you need.",e.jsx("br",{}),e.jsx("span",{className:"text-brand-500",children:"Nothing you don't."})]}),e.jsx("p",{className:"text-foreground-muted mt-4 max-w-2xl text-lg",children:"We stripped away the bloat and kept the primitives that actually speed up development for agencies and freelancers."})]}),e.jsx(me,{tabs:O,value:n,onChange:s,mobileVariant:"sheet",children:O.map(i=>e.jsxs("div",{"data-tab-content":i.id,children:[e.jsxs("div",{className:"mb-[var(--space-heading-gap)]",children:[e.jsx("h3",{className:"text-foreground text-xl font-bold",children:B[i.id].title}),e.jsx("p",{className:"text-foreground-muted mt-2",children:B[i.id].content})]}),e.jsx(ge,{code:_[i.id].code,filename:_[i.id].filename,lang:_[i.id].lang})]},i.id))})]})]})}export{xe as FeatureTabs,xe as default};
