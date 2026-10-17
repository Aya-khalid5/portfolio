export type ServiceIcon = "excel" | "dashboard" | "sql" | "report";

export interface Service {
  slug: string;
  title: string;
  icon: ServiceIcon;
  /** What the client receives. */
  deliverables: string[];
  /** What the client needs to provide. */
  needs: string[];
}

export const services: Service[] = [
  {
    slug: "excel-data-cleaning",
    title: "Excel Data Cleaning",
    icon: "excel",
    deliverables: [
      "Duplicates removed and missing values handled appropriately",
      "Inconsistent formats standardized",
      "A structured, analysis-ready dataset",
      "A cleaned Excel file and a brief summary of changes",
    ],
    needs: [
      "The original file(s)",
      "How missing or conflicting values should be treated, if you have a rule",
    ],
  },
  {
    slug: "power-bi-dashboards",
    title: "Power BI Dashboards",
    icon: "dashboard",
    deliverables: [
      "An interactive dashboard with clear charts and filters",
      "Relevant KPIs and DAX measures",
      "The report file and agreed supporting files",
    ],
    needs: [
      "The data source(s) or an extract",
      "The KPIs and questions the dashboard should answer",
      "Who will use it",
    ],
  },
  {
    slug: "sql-data-analysis",
    title: "SQL Data Analysis",
    icon: "sql",
    deliverables: [
      "Queries that retrieve and aggregate your data",
      "Comparisons of performance indicators and patterns",
      "Plain-language findings",
      "Reusable SQL scripts",
    ],
    needs: [
      "Database access, a sample, or an export",
      "A description of the tables and fields",
      "The business questions to answer",
    ],
  },
  {
    slug: "data-analysis-reporting",
    title: "Data Analysis & Reporting",
    icon: "report",
    deliverables: [
      "Cleaned and explored data with trends and relationships analyzed",
      "Charts, dashboards, and a concise report",
      "Evidence-based recommendations",
    ],
    needs: [
      "The dataset and any context about how it was collected",
      "The decision or question the report should support",
    ],
  },
];
