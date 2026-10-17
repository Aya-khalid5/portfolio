export interface SkillGroup {
  title: string;
  items: string[];
  /** Where the skills appear in the projects above (only what the projects show). */
  usedIn?: string;
}

/** Core tools, shown as a quick row above the categories. */
export const coreTools = ["Excel", "SQL", "Power BI", "Python", "Tableau"];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Analysis",
    items: [
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "KPI Analysis",
      "Statistical Analysis",
      "Data Modeling",
      "Business Insights",
      "Dashboard Development",
    ],
    usedIn: "Blinkit, Diabetes, Social Media, Sales & Operations",
  },
  {
    title: "Excel",
    items: [
      "Pivot Tables",
      "XLOOKUP",
      "Power Query",
      "Power Pivot",
      "Data Cleaning",
      "Reporting",
    ],
    usedIn: "Social Media, Digital Marketing Campaign",
  },
  {
    title: "Power BI",
    items: [
      "Interactive Dashboards",
      "DAX",
      "Power Query",
      "Data Modeling",
      "KPI Tracking",
    ],
    usedIn: "Blinkit, Diabetes, Sales & Operations, Social Media",
  },
  {
    title: "SQL",
    items: ["Joins", "Aggregations", "CTEs", "Data Cleaning", "Data Analysis"],
    usedIn: "Blinkit",
  },
  {
    title: "Python",
    items: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
    usedIn: "Diabetes, Food Waste, Smart Recruitment",
  },
  {
    title: "Tableau",
    items: ["Data Visualization", "Interactive Dashboards"],
  },
  {
    title: "Machine Learning",
    items: [
      "Data Preprocessing",
      "Feature Engineering",
      "Classification",
      "Model Evaluation",
    ],
    usedIn: "Diabetes, Food Waste, Smart Recruitment",
  },
];
