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
    name: "Katy Jackson",
    about: "Katy is currently the Clinical Director of Women’s Health at Voy. She has served as Chief Clinical Officer and Operations Director at Newson Health, a menopause care provider. She also previously held senior NHS roles, including Director of Systems Resilience at Sussex Health and Care Partnership. Alongside being a women’s health advocate, Katy also mentors young women in leadership.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Imogen Clarke",
    about: "Working across women's health for 5+ years. With a strong qualitative research background (MRes Security, Conflict and Human Rights & BA Anthropology), Imogen’s goal is to use these ethical research skills to help close the gender data gap across a whole range of sectors, starting with healthCurrently, Imogen is the Partnerships & Growth Manager at Micrima. Focused on relationship building across the Bristol healthcare landscape for a CE marked medical device. Previously, she led high-value partners for W Group's global Women's Health Week conferences and accelerators. Building a valuable network across the UK, Europe, USA and Asia all focused on accelerating Femtech. ",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "HerSay",
    about: "HerSay is focused on reducing the gender health gap.We do this through community based events, education and research which is fed back into products, spaces and businesses who want to design with women in mind. We host health focused activities to tackle some of the biggest gaps in women's health and lived experiences. ",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Anya Sizer",
    about: "Anya is a longstanding women’s health campaigner with decades of experience in fertility, reproductive health and family policy. A former Fertility Network UK regional representative and fertility-in-the-workplace lead, she has championed equitable access to fertility treatment and supported people experiencing infertility. She is a board member of the Human Fertilisation and Embryology Authority (HFEA) and Vice Chair of the Fabian Women’s Network Executive Committee, working to influence policy and improve outcomes in women’s health.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "Nina Larsen",
    about: "Nina Elisabeth Larsen is a women’s health advocate and entrepreneur committed to improving maternal health and closing the gender health gap. Her work focuses on raising awareness of women’s unmet health needs, championing innovation in healthcare, and driving greater recognition of maternal mental health and perinatal wellbeing.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Omaia",
    about: "Omaia is a women’s health technology company focused on transforming maternal mental health. Its personalised digital platform provides evidence-informed emotional and practical support throughout the family-building journey, from fertility and pregnancy to birth and early parenthood. By combining technology with clinical expertise, Omaia aims to make maternal wellbeing an integral part of maternity care, ensuring families feel supported, understood and less alone.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "Dr Maureen Emeagi",
    about: "Dr Maureen Emeagi is an NHS GP and Lead Medical Advisor at Juno, a women’s health-focused digital health company. She provides clinical leadership to ensure Juno’s platform is safe, evidence-based and responsive to women’s health needs. With over 20 years of medical experience, including in gynaecology and obstetrics, she brings extensive clinical expertise to improving women’s healthcare.",
    logo: null,
    links: [
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "Laura Sullivan",
    about: "Laura Sullivan is a women’s health advocate and researcher with an MSc in Psychology, specialising in women’s experiences of identity across the menstrual cycle. She is co-founder and lead researcher of We Are Together, an app in development supporting couples through miscarriage and early pregnancy loss. Her work centres on lived experience, inclusive support and addressing gaps in care for women and their families.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "Noshina Kiani",
    about: "Noshina Kiani is a women’s health advocate and community health leader, co-leading the Health and Wellbeing directorate at Yorkshire Women’s Forum CIC. Her work focuses on improving health equity for underserved women, particularly South Asian communities, through culturally sensitive education and community-led support. She has developed initiatives addressing menopause awareness, preventative health and access to care, championing women’s voices and lived experiences to improve health outcomes.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Sophie Sulehria",
    about: "Sophie Sulehria is a journalist, presenter and women’s health advocate with over 20 years of experience in media, including a decade at the BBC. She champions women’s health through journalism, podcasting and digital storytelling, with a particular focus on menopause, fertility and women’s rights in the workplace. She creates video content and presents The Heat Seat podcast for Menopause Mandate, helping to raise awareness, amplify women’s voices and make expert insights accessible.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "Dimple Khatiri",
    about: "Dimple Khatiri is a women’s health advocate and Mental Health Pharmacist with over 12 years’ clinical experience. She is passionate about improving understanding of women’s hormonal and mental health, particularly Premenstrual Dysphoric Disorder (PMDD), and championing greater awareness, education and more inclusive, evidence-based care for women.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "Instagram", url: "#" },
    ],
  },
  {
    name: "Ceri Cashell",
    about: "Dr Ceri Cashell is an Irish GP with over 25 years of medical experience, specialising in hormonal health, particularly perimenopause, menopause, PMS and PMDD. She is co-founder of Healthy Hormones, a free, evidence-based online community dedicated to improving hormonal health education for both healthcare professionals and the public. Through medical education and public speaking, she works to raise awareness and make women’s hormonal health better understood.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "Claire Phipps",
    about: "Dr Claire Phipps is a GP and menopause specialist, and co-founder of The Menopause Sisters. She is dedicated to raising awareness of menopause and improving women’s access to evidence-based information, support and care. Through her clinical work and education, she helps empower women to better understand and manage their health through perimenopause and menopause.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  },
  {
    name: "Anna O’Sullivan",
    about: "Anna O’Sullivan is a women’s health advocate and communications specialist, co-founder of CensHERship and founder of FutureFemHealth. She works to address barriers facing women’s health organisations, particularly online censorship and restrictions on health information. Through research, advocacy and industry analysis, she champions greater visibility for women’s health and supports the growth of the women’s health innovation sector.",
    logo: null,
    links: [
      { label: "Website", url: "#" },
    ],
  }
];

export default partners;
