import type {
  NavItem,
  StatItem,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
  HeroContent,
  ImprintData,
} from './types';
import { t } from './get-ui-text';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const HERO: HeroContent = {
  title: 'TOP AUTO SERVIS',
  subtitle: 'Profesionálny autoservis v Trenčíne. Komplexná starostlivosť o motorové vozidlá — diagnostika, opravy, pneuservis, geometria, karosárske práce. Skúsení mechanici, kvalitné náhradné diely, férové ceny. Zavolajte alebo príďte osobne.',
  layout: 'full',
};

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: '/images/hero.webp',
  about: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  gallery: [
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
    '/images/gallery-5.webp',
    '/images/gallery-6.webp',
  ],
  logo: '',
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: t().nav.home,     href: '#hero'     },
  { label: t().nav.services, href: '#services' },
  { label: t().nav.reviews,  href: '#reviews'  },
  { label: t().nav.contact,  href: '#contact'  },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  { id: '1', icon: '⭐', title: t().whyUs.q1Title, description: t().whyUs.q1Desc },
  { id: '2', icon: '⚡', title: t().whyUs.q2Title, description: t().whyUs.q2Desc },
  { id: '3', icon: '💰', title: t().whyUs.q3Title, description: t().whyUs.q3Desc },
  { id: '4', icon: '🛡️', title: t().whyUs.q4Title, description: t().whyUs.q4Desc },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: '1',
    name: 'Diagnostika a opravy',
    items: [
      {
        id: '1-1',
        name: 'Počítačová diagnostika',
        description: 'Profesionálna elektronická diagnostika všetkých systémov vozidla.',
        price: 'Od 30 €',
        icon: '🔍',
      },
      {
        id: '1-2',
        name: 'Oprava motora',
        description: 'Komplexné opravy motora vrátane výmeny dielov a tesnení.',
        price: 'Na dopyt',
        icon: '🔧',
      },
      {
        id: '1-3',
        name: 'Oprava prevodovky',
        description: 'Servis a oprava manuálnych aj automatických prevodoviek.',
        price: 'Na dopyt',
        icon: '⚙️',
      },
      {
        id: '1-4',
        name: 'Oprava bŕzd',
        description: 'Výmena brzdových platničiek, kotúčov a kontrola brzdového systému.',
        price: 'Od 40 €',
        icon: '🛑',
      },
    ],
  },
  {
    id: '2',
    name: 'Pneuservis a geometria',
    items: [
      {
        id: '2-1',
        name: 'Prezutie pneumatík',
        description: 'Rýchle a spoľahlivé prezutie letných a zimných pneumatík.',
        price: 'Od 20 €',
        icon: '🔄',
      },
      {
        id: '2-2',
        name: 'Vyváženie kolies',
        description: 'Presné vyváženie kolies pre bezpečnú a plynulú jazdu.',
        price: 'Od 15 €',
        icon: '⚖️',
      },
      {
        id: '2-3',
        name: 'Nastavenie geometrie',
        description: 'Profesionálne nastavenie geometrie podvozku pre správne vedenie vozidla.',
        price: 'Od 35 €',
        icon: '📐',
      },
    ],
  },
  {
    id: '3',
    name: 'Karosárske práce a údržba',
    items: [
      {
        id: '3-1',
        name: 'Karosárske opravy',
        description: 'Opravy po havárii, vyrovnanie karosérie a práca s plechom.',
        price: 'Na dopyt',
        icon: '🚗',
      },
      {
        id: '3-2',
        name: 'Výmena oleja a filtrov',
        description: 'Výmena motorového oleja a všetkých filtrov podľa servisného plánu.',
        price: 'Od 25 €',
        icon: '🛢️',
      },
      {
        id: '3-3',
        name: 'Kontrola pred STK',
        description: 'Kompletná prehliadka vozidla a odstránenie závad pred technickou kontrolou.',
        price: 'Od 20 €',
        icon: '✅',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu')
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  { icon: '📍', title: t().contact.address, lines: ['Ľ. Stárka 1868, Trenčín 911 05'] },
  { icon: '📞', title: t().contact.phone,   lines: ['+421 903 263 626'] },
  { icon: '✉️', title: t().contact.email,   lines: ['topservisauto@centrum.sk'] },
  { icon: '🕐', title: t().contact.hours,   lines: ['Pondelok – Piatok: 09:00 – 18:00', 'Sobota – Nedeľa: Zatvorené'] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Aké služby poskytuje TOP AUTO SERVIS?',
    answer: 'Poskytujeme komplexný servis motorových vozidiel — počítačovú diagnostiku, opravy motora a prevodovky, pneuservis, nastavenie geometrie podvozku, karosárske práce a bežnú údržbu vrátane výmeny oleja a filtrov.',
  },
  {
    id: '2',
    question: 'Potrebujem si vopred dohodnúť termín?',
    answer: 'Odporúčame dohodnúť si termín vopred telefonicky na čísle +421 903 263 626 alebo e-mailom, aby sme vám mohli venovať dostatok času. V prípade jednoduchších servisných úkonov je možné prísť aj bez rezervácie.',
  },
  {
    id: '3',
    question: 'Ako dlho trvá bežný servis vozidla?',
    answer: 'Doba servisu závisí od rozsahu prác. Jednoduchšie úkony ako výmena oleja alebo prezutie pneumatík zvyčajne trvajú do hodiny. Zložitejšie opravy si môžu vyžadovať viac dní — o presnom termíne vás vždy vopred informujeme.',
  },
  {
    id: '4',
    question: 'Používate originálne náhradné diely?',
    answer: 'Používame kvalitné náhradné diely od overených dodávateľov. Na požiadanie vieme zabezpečiť originálne diely od výrobcu vozidla. Vždy sa snažíme nájsť optimálny pomer kvality a ceny pre vášho zákazníka.',
  },
  {
    id: '5',
    question: 'Kde sa nachádzate a kedy ste otvorení?',
    answer: 'Nájdete nás na adrese Ľ. Stárka 1868, Trenčín 911 05. Sme otvorení od pondelka do piatku od 09:00 do 18:00. Cez víkend je prevádzka zatvorená.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Dobrý deň! Vitajte v TOP AUTO SERVIS. Ako vám môžeme pomôcť?',
  quickReplies: [
    {
      id: '1',
      label: 'Otváracie hodiny',
      response: 'Sme otvorení od pondelka do piatku od 09:00 do 18:00. Cez sobotu a nedeľu je prevádzka zatvorená.',
    },
    {
      id: '2',
      label: 'Dohodnúť termín',
      response: 'Termín si môžete dohodnúť telefonicky na čísle +421 903 263 626 alebo e-mailom na topservisauto@centrum.sk. Radi vám nájdeme vhodný čas!',
    },
    {
      id: '3',
      label: 'Kde sa nachádzate?',
      response: 'Nájdete nás na adrese Ľ. Stárka 1868, Trenčín 911 05. Tešíme sa na vašu návštevu!',
    },
    {
      id: '4',
      label: 'Cenník služieb',
      response: 'Ceny sa líšia podľa rozsahu prác a typu vozidla. Pre presnú cenovú ponuku nás prosím kontaktujte na +421 903 263 626 alebo príďte osobne na diagnostiku.',
    },
  ],
  fallbackResponse: 'Ďakujeme za vašu správu. Pre podrobnejšie informácie nás prosím kontaktujte telefonicky na +421 903 263 626 alebo e-mailom na topservisauto@centrum.sk.',
};

// ---------------------------------------------------------------------------
// IMPRINT
// ---------------------------------------------------------------------------
export const IMPRINT: ImprintData | null = null;