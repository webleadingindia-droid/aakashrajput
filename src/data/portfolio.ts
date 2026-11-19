/**
 * ============================================================
 *  CENTRAL CONTENT FILE — edit everything about the site here.
 *  Every value below is an editable PLACEHOLDER. Replace it with
 *  your real details. Nothing here is a real credit or claim.
 * ============================================================
 */

export type Orientation = "portrait" | "landscape" | "square";

export interface PhotoItem {
  src: string;
  alt: string;
  category: string;
  orientation: Orientation;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumb: string;
  url: string;
  uploadDate?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  role: string;
  productionHouse: string;
  director: string;
  year: string;
  poster: string;
  link: string;
  isSample?: boolean;
}

/* ============================================================
   IMAGE URLS — replace ANY one of these individually.
   Every page/section has its own key so they never clash.
   ============================================================ */
const DEFAULT = "https://plain-apac-prod-public.komododecks.com/202611/19/KmIgNmCUVJKhLkrEnTHf/image.webp";

export const IMAGES = {
  // --- Site / Hero ---
  hero:         DEFAULT,   // home hero
  og:           DEFAULT,   // social share image

  // --- Profile (About / Intro) ---
  portraitMain: DEFAULT,   // main portrait on Intro
  portrait02:   DEFAULT,   // secondary portrait
  portrait03:   DEFAULT,   // secondary portrait

  // --- Modeling page (12 slots) ---
  modelingFashion01:    "https://plain-apac-prod-public.komododecks.com/202611/19/z95kPToDmJuCiFsjfwtH/image.webp",
  modelingFashion02:    DEFAULT,
  modelingCommercial01: DEFAULT,
  modelingCommercial02: DEFAULT,
  modelingLifestyle01:  DEFAULT,
  modelingEthnic01:     DEFAULT,
  modelingEthnic02:     DEFAULT,
  modelingFitness01:    DEFAULT,
  modelingPortrait01:   DEFAULT,
  modelingPortrait02:   DEFAULT,
  modelingFullBody01:   DEFAULT,
  modelingFullBody02:   DEFAULT,

  // --- Acting page (6 category thumbs) ---
  actingEmotional: DEFAULT,
  actingRomantic:  DEFAULT,
  actingDramatic:  DEFAULT,
  actingComedy:    DEFAULT,
  actingCharacter: DEFAULT,
  actingIntense:   DEFAULT,

  // --- Showreel page (5 videos) ---
  showreelMain:        DEFAULT,
  showreelWalk:        DEFAULT,
  showreelIntro:       DEFAULT,
  showreelAudition01:  DEFAULT,
  showreelAudition02:  DEFAULT,
  showreelHighlights:  DEFAULT,

  // --- Projects page (7 posters) ---
  projectFilm:            DEFAULT,
  projectWebSeries:       DEFAULT,
  projectAdvertisement:   DEFAULT,
  projectMusicVideo:      DEFAULT,
  projectFashionCampaign: DEFAULT,
  projectPhotoshoot:      DEFAULT,
  projectShortFilm:       DEFAULT,

  // --- Gallery page (10 slots) ---
  galleryPortrait01:  DEFAULT,
  galleryPortrait02:  DEFAULT,
  galleryFashion01:   DEFAULT,
  galleryFashion02:   DEFAULT,
  galleryLifestyle01: DEFAULT,
  galleryLifestyle02: DEFAULT,
  galleryBts01:       DEFAULT,
  galleryBts02:       DEFAULT,
  galleryShoot01:     DEFAULT,
  galleryShoot02:     DEFAULT,
};

/* ---------------------------- SITE ---------------------------- */
export const site = {
  name: "Aakash Rajput",
  designation: "Actor | Model | Performer",
  tagline: "Beyond the frame.",
  intro: "An artist. A performer. A storyteller.",
  heroImage: {
    src: IMAGES.hero,
    alt: "Placeholder cinematic portrait — replace with your hero photograph",
  },
  ogImage: IMAGES.og,
  url: "https://www.yourname.com",
  locale: "en_IN",
  showSampleBadges: true,
};

/* ---------------------------- PROFILE ---------------------------- */
export const profile = {
  shortIntro:
    "Replace this with two or three sentences that tell casting directors who you are, what you bring to a set and what kind of roles you are looking for.",
  bio: [
    "Write your biography here. Start with where you are from and how you came to acting and modelling.",
    "Add a paragraph about your training, your approach to a character and the kind of stories you want to tell.",
    "Close with what you are currently working on or looking for. Only include facts that are true.",
  ],
  age: "00",
  height: `5'11" / 180 cm`,
  location: "City, Country",
  languages: ["Language 1", "Language 2", "Language 3"],
  skinTone: "",
  hairColour: "",
  eyeColour: "",
  actingAbilities: ["Ability one", "Ability two", "Ability three"],
  modelingCategories: [
    "Fashion",
    "Commercial",
    "Lifestyle",
    "Traditional / Ethnic",
    "Fitness",
  ],
  skills: ["Skill one", "Skill two", "Skill three", "Skill four"],
  journey: [
    { year: "Year", title: "Milestone title", text: "Describe a real step in your journey." },
    { year: "Year", title: "Milestone title", text: "Describe a real step in your journey." },
    { year: "Year", title: "Milestone title", text: "Describe a real step in your journey." },
  ],
  portrait: {
    src: IMAGES.portraitMain,
    alt: "Placeholder portrait — replace with your portrait photograph",
  },
  portraits: [
    { src: IMAGES.portrait02, alt: "Placeholder portrait two" },
    { src: IMAGES.portrait03, alt: "Placeholder portrait three" },
  ],
};

/* ---------------------------- CONTACT ---------------------------- */
export const contact = {
  email: "aakashrajpootofficial@gmail.com",
  phone: "+91 96548 47442",
  whatsapp: "+919654847442",
  instagram: "https://www.instagram.com/iaakashrajpoot/",
  facebook: "https://www.facebook.com/iaakashrajpoot",
  youtube: "https://youtube.com/@yourchannel",
  representation: "",
};

export const projectTypes = [
  "Film", "Web Series", "Advertisement", "Music Video",
  "Fashion Campaign", "Photoshoot", "Short Film", "Other",
];

/* ---------------------------- MODELING ---------------------------- */
export const modelingCategories = [
  "Fashion", "Commercial", "Lifestyle", "Traditional / Ethnic",
  "Fitness", "Portrait", "Full Body",
];

export const modeling: PhotoItem[] = [
  { src: IMAGES.modelingFashion01,    alt: "Fashion editorial placeholder one",        category: "Fashion",            orientation: "portrait" },
  { src: IMAGES.modelingFashion02,    alt: "Fashion editorial placeholder two",         category: "Fashion",            orientation: "landscape" },
  { src: IMAGES.modelingCommercial01, alt: "Commercial modelling placeholder one",      category: "Commercial",         orientation: "portrait" },
  { src: IMAGES.modelingCommercial02, alt: "Commercial modelling placeholder two",      category: "Commercial",         orientation: "square" },
  { src: IMAGES.modelingLifestyle01,  alt: "Lifestyle modelling placeholder",           category: "Lifestyle",          orientation: "landscape" },
  { src: IMAGES.modelingEthnic01,     alt: "Traditional wear placeholder one",          category: "Traditional / Ethnic", orientation: "portrait" },
  { src: IMAGES.modelingEthnic02,     alt: "Traditional wear placeholder two",          category: "Traditional / Ethnic", orientation: "portrait" },
  { src: IMAGES.modelingFitness01,    alt: "Fitness modelling placeholder",             category: "Fitness",            orientation: "portrait" },
  { src: IMAGES.modelingPortrait01,   alt: "Portrait placeholder one",                  category: "Portrait",           orientation: "portrait" },
  { src: IMAGES.modelingPortrait02,   alt: "Portrait placeholder two",                  category: "Portrait",           orientation: "square" },
  { src: IMAGES.modelingFullBody01,   alt: "Full body placeholder one",                 category: "Full Body",          orientation: "portrait" },
  { src: IMAGES.modelingFullBody02,   alt: "Full body placeholder two",                 category: "Full Body",          orientation: "portrait" },
];

/* ---------------------------- ACTING ---------------------------- */
export const actingCategories = [
  { name: "Emotional", blurb: "Quiet, honest, close-up work." },
  { name: "Romantic", blurb: "Warmth, chemistry and restraint." },
  { name: "Dramatic", blurb: "Weight, conflict and stillness." },
  { name: "Comedy", blurb: "Timing, play and surprise." },
  { name: "Character", blurb: "Voice, physicality and transformation." },
  { name: "Intense", blurb: "Negative and high-intensity characters." },
];

export const actingVideos: VideoItem[] = [
  { id: "emotional", title: "Emotional scene (sample)", category: "Emotional", description: "Placeholder — add your own scene.", thumb: IMAGES.actingEmotional, url: "" },
  { id: "romantic",  title: "Romantic scene (sample)",  category: "Romantic",  description: "Placeholder — add your own scene.", thumb: IMAGES.actingRomantic,  url: "" },
  { id: "dramatic",  title: "Dramatic scene (sample)",  category: "Dramatic",  description: "Placeholder — add your own scene.", thumb: IMAGES.actingDramatic,  url: "" },
  { id: "comedy",    title: "Comedy scene (sample)",    category: "Comedy",    description: "Placeholder — add your own scene.", thumb: IMAGES.actingComedy,    url: "" },
  { id: "character", title: "Character piece (sample)", category: "Character", description: "Placeholder — add your own scene.", thumb: IMAGES.actingCharacter, url: "" },
  { id: "intense",   title: "Intense scene (sample)",   category: "Intense",   description: "Placeholder — add your own scene.", thumb: IMAGES.actingIntense,   url: "" },
];

/* ---------------------------- SHOWREEL ---------------------------- */
export const showreelMain: VideoItem = {
  id: "showreel-main",
  title: "Acting showreel (sample)",
  category: "Showreel",
  description: "Placeholder — paste your YouTube or Vimeo link in the url field.",
  thumb: IMAGES.showreelMain,
  url: "",
};

export const showreelSections: { title: string; blurb: string; videos: VideoItem[] }[] = [
  {
    title: "Modeling walk",
    blurb: "Runway or ramp footage.",
    videos: [{ id: "walk", title: "Modeling walk (sample)", category: "Modeling Walk", description: "Placeholder", thumb: IMAGES.showreelWalk, url: "" }],
  },
  {
    title: "Introduction video",
    blurb: "A short self-introduction for casting teams.",
    videos: [{ id: "intro", title: "Introduction (sample)", category: "Introduction", description: "Placeholder", thumb: IMAGES.showreelIntro, url: "" }],
  },
  {
    title: "Audition clips",
    blurb: "Self-tapes and audition scenes.",
    videos: [
      { id: "aud1", title: "Audition clip one (sample)", category: "Audition", description: "Placeholder", thumb: IMAGES.showreelAudition01, url: "" },
      { id: "aud2", title: "Audition clip two (sample)", category: "Audition", description: "Placeholder", thumb: IMAGES.showreelAudition02, url: "" },
    ],
  },
  {
    title: "Performance highlights",
    blurb: "Short moments from your best work.",
    videos: [{ id: "high", title: "Highlights (sample)", category: "Highlights", description: "Placeholder", thumb: IMAGES.showreelHighlights, url: "" }],
  },
];

/* ---------------------------- PROJECTS ---------------------------- */
export const projectCategories = [
  "Films", "Web Series", "Advertisements", "Music Videos",
  "Fashion Campaigns", "Photoshoots", "Short Films",
];

export const projects: ProjectItem[] = [
  { title: "Sample film title",           category: "Films",             role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectFilm,            link: "", isSample: true },
  { title: "Sample web series title",     category: "Web Series",        role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectWebSeries,       link: "", isSample: true },
  { title: "Sample advertisement title",  category: "Advertisements",    role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectAdvertisement,   link: "", isSample: true },
  { title: "Sample music video title",    category: "Music Videos",      role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectMusicVideo,      link: "", isSample: true },
  { title: "Sample fashion campaign",     category: "Fashion Campaigns", role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectFashionCampaign, link: "", isSample: true },
  { title: "Sample photoshoot",           category: "Photoshoots",       role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectPhotoshoot,      link: "", isSample: true },
  { title: "Sample short film title",     category: "Short Films",       role: "Role name", productionHouse: "Production house", director: "Director name", year: "Year", poster: IMAGES.projectShortFilm,       link: "", isSample: true },
];

/* ---------------------------- GALLERY ---------------------------- */
export const galleryCategories = [
  "Portraits", "Fashion", "Lifestyle", "Behind the scenes", "Professional shoots",
];

export const gallery: PhotoItem[] = [
  { src: IMAGES.galleryPortrait01,  alt: "Portrait placeholder one",                     category: "Portraits",            orientation: "portrait" },
  { src: IMAGES.galleryPortrait02,  alt: "Portrait placeholder two",                     category: "Portraits",            orientation: "portrait" },
  { src: IMAGES.galleryFashion01,   alt: "Fashion photograph placeholder one",           category: "Fashion",              orientation: "landscape" },
  { src: IMAGES.galleryFashion02,   alt: "Fashion photograph placeholder two",           category: "Fashion",              orientation: "portrait" },
  { src: IMAGES.galleryLifestyle01, alt: "Lifestyle photograph placeholder one",         category: "Lifestyle",            orientation: "landscape" },
  { src: IMAGES.galleryLifestyle02, alt: "Lifestyle photograph placeholder two",         category: "Lifestyle",            orientation: "square" },
  { src: IMAGES.galleryBts01,       alt: "Behind the scenes placeholder one",            category: "Behind the scenes",    orientation: "landscape" },
  { src: IMAGES.galleryBts02,       alt: "Behind the scenes placeholder two",            category: "Behind the scenes",    orientation: "portrait" },
  { src: IMAGES.galleryShoot01,     alt: "Professional shoot placeholder one",           category: "Professional shoots",  orientation: "landscape" },
  { src: IMAGES.galleryShoot02,     alt: "Professional shoot placeholder two",           category: "Professional shoots",  orientation: "portrait" },
];