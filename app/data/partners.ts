/**
 * partners.ts
 * ───────────
 * Single source of truth for all partner profiles displayed on the site.
 * Each entry has:
 *   name    – display name of the partner / organisation
 *   about   – one-sentence blurb shown on hover in the marquee
 *   logo    – path relative to /public (null = show name pill instead)
 *   links   – labelled URLs (website, instagram, linkedin, etc.)
 */

export interface PartnerProfile {
  name: string;
  about: string;
  logo: string | null;
  links: { label: string; url: string }[];
}

const partners: PartnerProfile[] = [
  {
    name: "Bobbi",
    about: "An inclusive beauty brand championing self-expression and wellbeing for every woman.",
    logo: "/logos/bobbilogo.png",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/wearebobbi/" },
    ],
  },
  {
    name: "Wellbeing Co.",
    about: "Providing evidence-based mental health resources tailored to university students across the UK.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "FemHealth Labs",
    about: "Pioneering accessible femtech solutions that put women's health data in women's hands.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "CycleSupport",
    about: "Helping students track and understand their cycles with free, science-backed educational tools.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "NutritionFirst",
    about: "Partnering with student unions to make nutritional guidance free and accessible on campus.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "MindBridge",
    about: "A student mental health charity connecting young women with peer support networks nationwide.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Endometriosis UK",
    about: "The leading UK charity improving the lives of those affected by endometriosis through support and education.",
    logo: null,
    links: [
      { label: "Website", url: "https://www.endometriosis-uk.org/" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "SheLeads Health",
    about: "Empowering the next generation of female healthcare leaders through mentorship and workshops.",
    logo: null,
    links: [
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "CampusClinic",
    about: "Bringing free sexual health screenings and contraception advice directly to university campuses.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "HerVoice Media",
    about: "An independent media platform amplifying stories of women navigating health in higher education.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "Bloom Wellness",
    about: "Holistic wellness brand creating student-friendly supplements and self-care essentials.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Period Poverty UK",
    about: "Campaigning to eliminate period poverty in UK universities by distributing free period products.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "AwareHealth",
    about: "Driving awareness of under-diagnosed conditions like PCOS and PMDD through campus events.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "UniCare Network",
    about: "A coalition of student health services working together to raise the standard of campus healthcare.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
];

export default partners;
