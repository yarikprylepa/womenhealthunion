export type Chapter = {
  slug: string;
  university: string;
  city: string;
  region: string;
  description: string;
  memberCount: number;
  status: "Active" | "Launching soon";
  colour: string;
};

export const chapters: Chapter[] = [
  {
    slug: "university-of-reading",
    university: "University of Reading",
    city: "Reading",
    region: "South East",
    description:
      "A student-led community creating open, informed conversations around women’s health.",
    memberCount: 180,
    status: "Active",
    colour: "bg-rose-100 text-rose-900",
  },
  {
    slug: "university-of-oxford",
    university: "University of Oxford",
    city: "Oxford",
    region: "South East",
    description:
      "Events, peer-led discussion and campaigns improving awareness across the university.",
    memberCount: 125,
    status: "Active",
    colour: "bg-violet-100 text-violet-900",
  },
  {
    slug: "university-of-bristol",
    university: "University of Bristol",
    city: "Bristol",
    region: "South West",
    description:
      "Connecting students through inclusive health education and local action.",
    memberCount: 96,
    status: "Active",
    colour: "bg-orange-100 text-orange-900",
  },
  {
    slug: "university-of-manchester",
    university: "University of Manchester",
    city: "Manchester",
    region: "North West",
    description:
      "A growing student network focused on education, support and advocacy.",
    memberCount: 140,
    status: "Active",
    colour: "bg-pink-100 text-pink-900",
  },
  {
    slug: "university-of-leeds",
    university: "University of Leeds",
    city: "Leeds",
    region: "Yorkshire and the Humber",
    description:
      "Building a supportive community for students to learn, share and lead change.",
    memberCount: 88,
    status: "Launching soon",
    colour: "bg-amber-100 text-amber-900",
  },
  {
    slug: "university-of-edinburgh",
    university: "University of Edinburgh",
    city: "Edinburgh",
    region: "Scotland",
    description:
      "A new chapter bringing students together around better women’s health outcomes.",
    memberCount: 64,
    status: "Launching soon",
    colour: "bg-sky-100 text-sky-900",
  },
];