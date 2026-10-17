export interface ExperienceEntry {
  /** Kept distinct so community work is never presented as employment. */
  kind: "Community" | "Training";
  title: string;
  organization: string;
  /** Only dates that are already verified elsewhere on the site. */
  date?: string;
  details?: string[];
  tags?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    kind: "Community",
    title: "Technical Data Analysis Member",
    organization: "SIC Community — Benha University",
    details: [
      "Supported students in implementing data analysis tasks correctly and applying technical concepts in practice.",
      "Explained selected data analysis concepts and helped students understand the practical steps involved.",
      "Assisted community members in troubleshooting implementation issues and improving their understanding of analytical tools.",
    ],
  },
  {
    kind: "Training",
    title: "Advanced Data Analytics (Summer Training)",
    organization: "National Telecommunication Institute (NTI) / ITIDA",
    date: "August – September 2026 · 120 hours",
    tags: [
      "Excel",
      "Power Query",
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Modeling",
      "Dashboard Development",
    ],
  },
];
