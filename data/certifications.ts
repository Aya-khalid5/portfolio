export interface Certification {
  name: string;
  provider: string;
  /** What the document is, as printed on it. */
  type: string;
  issueDate: string;
  /** Length of the program, when printed on the certificate. */
  hours?: string;
  image: string;
}

/** Every entry below is a completed program backed by a certificate image. */
export const certifications: Certification[] = [
  {
    name: "Advanced Data Analytics (Summer Training)",
    provider: "National Telecommunication Institute (NTI) / ITIDA",
    type: "Certificate of Training",
    issueDate: "August – September 2026",
    hours: "120 hours",
    image: "/certificates/nti-advanced-data-analytics.png",
  },
  {
    name: "Machine Learning & AI Training Program",
    provider: "CREATIVA Innovation Hub, Mansoura",
    type: "Certificate of Completion",
    issueDate: "",
    hours: "120 hours",
    image: "/certificates/creativa-machine-learning-ai.jpeg",
  },
  {
    name: "Data Analysis Training Course",
    provider: "Microsoft Egypt (Tawar & Bayar)",
    type: "Certificate of Completion",
    issueDate: "September 2025",
    image: "/certificates/microsoft-data-analysis.png",
  },
  {
    name: "Data Analysis, Power BI and Power Query",
    provider: "KorsatCode",
    type: "Certificate",
    issueDate: "November 2025",
    image: "/certificates/korsatcode-power-bi.jpg",
  },
  {
    name: "SQL (Basic)",
    provider: "HackerRank",
    type: "Certificate",
    issueDate: "February 2026",
    image: "/certificates/hackerrank-sql-basic.png",
  },
  {
    name: "Programming Training Scholarship (one month)",
    provider: "Semicolon",
    type: "Certificate of Completion",
    issueDate: "",
    image: "/certificates/semicolon-programming-diploma.jpeg",
  },
];
