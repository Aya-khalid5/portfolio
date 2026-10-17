export interface Metric {
  value: string;
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
  /** Intrinsic pixel size, when known. Helps the browser reserve space. */
  width?: number;
  height?: number;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  /** The question or problem the project set out to answer. */
  objective?: string;
  /** Short, ordered description of the analytical process. */
  process?: string[];
  tools: string[];
  datasetSize?: string;
  metrics: Metric[];
  insights?: string[];
  /** Context shown under the insights (for example how to read a figure). */
  note?: string;
  /** Honest limits of the work, shown on the project page. */
  limitations?: string;
  mainWork: string[];
  /** First image is the thumbnail; the rest form the gallery. */
  images: ProjectScreenshot[];
  githubUrl: string;
  /** Published Power BI report (or similar). Leave empty to hide the button. */
  projectUrl: string;
  /** Deployed application, e.g. Streamlit. Leave empty to hide the button. */
  appUrl?: string;
}

export interface ProjectLink {
  kind: "app" | "report" | "github";
  label: string;
  url: string;
}

/** Only links that actually exist are returned, so no dead buttons render. */
export function getProjectLinks(project: Project): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (project.appUrl) {
    links.push({ kind: "app", label: "Live App", url: project.appUrl });
  }
  if (project.projectUrl) {
    links.push({ kind: "report", label: "Power BI Report", url: project.projectUrl });
  }
  if (project.githubUrl) {
    links.push({ kind: "github", label: "GitHub Repository", url: project.githubUrl });
  }
  return links;
}

export const projects: Project[] = [
  {
    slug: "blinkit-quick-commerce-analytics-dashboard",
    objective:
      "Understand order volume, delivery performance, customer feedback, and marketing spend for a quick-commerce business, from raw tables to a decision-ready dashboard.",
    process: [
      "Cleaned and prepared the raw tables in SQL: duplicate checks on key IDs, data type conversion, and splitting dates and times",
      "Calculated order totals with CTEs and update joins",
      "Built a calendar table with a recursive CTE",
      "Modeled the tables in Power BI and wrote DAX measures for the KPIs",
      "Designed a four-page dashboard with interactive navigation",
    ],
    title: "Blinkit Quick-Commerce Analytics — SQL & Power BI",
    summary:
      "An end-to-end analysis of Blinkit quick-commerce data: raw tables were cleaned and prepared in SQL, then modeled and visualized in a four-page Power BI dashboard covering overview, orders, customers & feedback, and marketing performance.",
    tools: ["SQL", "Power BI", "DAX", "Data Modeling"],
    datasetSize: "50K orders · 22K customers",
    metrics: [
      { value: "232.27M", label: "Total Sales" },
      { value: "50K", label: "Total Orders" },
      { value: "22K", label: "Total Customers" },
      { value: "1.10K", label: "Avg Order Value" },
      { value: "70.23%", label: "On-Time Deliveries" },
      { value: "4.05", label: "Avg Rating" },
      { value: "15.16", label: "NPS" },
      { value: "741.08K", label: "Marketing Spend" },
    ],
    insights: [
      "70.23% of orders were delivered on time, 19.79% slightly delayed, and 9.98% significantly delayed",
      "59.63% of customers gave positive feedback, versus 14.4% negative",
      "Monthly order volume trends downward from August to February",
      "Baby Care and Instant & Frozen Food are the top categories by number of orders",
      "Orders are split almost evenly across Wallet, UPI, Card, and Cash payments",
    ],
    mainWork: [
      "SQL Data Cleaning",
      "Duplicate Checks on Key IDs",
      "Data Type Conversion",
      "Date & Time Splitting",
      "CTEs & Update Joins",
      "Calculated Order Totals",
      "Calendar Table (Recursive CTE)",
      "Data Modeling",
      "DAX Measures",
      "Multi-Page Dashboard",
      "Interactive Navigation Buttons",
    ],
    images: [
      { src: "/projects/blinkit-overview.png", caption: "Overview" },
      { src: "/projects/blinkit-orders.png", caption: "Orders" },
      { src: "/projects/blinkit-customers-feedback.png", caption: "Customers & Feedback" },
      { src: "/projects/blinkit-marketing.png", caption: "Marketing Performance" },
      { src: "/projects/blinkit-home.png", caption: "Dashboard Navigation Page" },
      { src: "/projects/blinkit-datamodel.png", caption: "Data Model" },
      { src: "/projects/blinkit-sql-cleaning-1.png", caption: "SQL — Duplicate Checks & Order Totals (CTE)" },
      { src: "/projects/blinkit-sql-cleaning-2.png", caption: "SQL — Splitting Dates & Times" },
      { src: "/projects/blinkit-sql-date-range.png", caption: "SQL — Date Range Checks & Recursive Calendar Table" },
      { src: "/projects/blinkit-sql-calendar.png", caption: "SQL — Calendar Table Columns" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Blinkit.git",
    projectUrl: "https://app.powerbi.com/links/ePkV01Dg60?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "diabetes-analysis-prediction",
    title: "Diabetes Analysis & Prediction",
    summary:
      "An end-to-end health data project: a six-page Power BI report exploring how lifestyle, demographics, and healthcare access relate to health outcomes across 254K people, paired with a Python prediction app deployed on Streamlit.",
    objective:
      "Explore how lifestyle habits, healthcare access, and demographics relate to general health and diabetes-related indicators, and package a trained prediction model in an app anyone can try.",
    process: [
      "Prepared the dataset and grouped raw values into readable categories such as age group, income level, education level, BMI category, and diet type",
      "Explored general, mental, and physical health against diet, alcohol use, and physical activity",
      "Compared healthcare coverage and doctor access across income and education levels",
      "Built comparison measures such as the Fruit Effect and Alcohol Effect (in days), broken down by gender and education",
      "Designed a six-page Power BI report with gender, age, education, and income filters",
      "Built a Python prediction app and deployed it on Streamlit",
    ],
    tools: ["Power BI", "Python", "Streamlit", "Machine Learning"],
    datasetSize: "254K people",
    metrics: [
      { value: "254K", label: "People in the Dataset" },
      { value: "13.93%", label: "Diabetes Rate" },
      { value: "28.38", label: "Average BMI" },
      { value: "42.90%", label: "High BP Rate" },
      { value: "75.65%", label: "Physically Active" },
      { value: "56%", label: "Healthy Diet" },
      { value: "95%", label: "Healthcare Coverage" },
      { value: "36.88%", label: "Uninsured Who Skipped a Doctor Visit Due to Cost" },
    ],
    insights: [
      "Healthcare coverage rises with income: 89% for low income, 93% for middle income, and 98% for high income",
      "Coverage also rises with education, from 79% for people with no schooling to 98% for college graduates",
      "36.88% of uninsured people skipped a doctor visit because of cost",
      "People who eat vegetables report 1.43 fewer sick days on average",
      "Average physical health days increase with age group, from 2.25 for young adults to 4.88 for older adults",
    ],
    note:
      "These are descriptive comparisons within the dataset. They show how groups differ, not what causes the differences.",
    limitations:
      "The Power BI report is statistical analysis of the dataset. The Streamlit app is a model-based prediction tool for exploration only: it is not a medical diagnosis and does not replace professional medical evaluation. Model evaluation metrics are not shown here.",
    mainWork: [
      "Data Preparation",
      "Exploratory Data Analysis",
      "Health Data Visualization",
      "Interactive Filters",
      "Six-Page Power BI Report",
      "Python Prediction App",
      "Streamlit Deployment",
    ],
    images: [
      {
        src: "/projects/diabetes-overview.webp",
        caption: "Overview: headline KPIs, average general health by age group, and the split by diet type",
        width: 1327,
        height: 739,
      },
      {
        src: "/projects/diabetes-cover.webp",
        caption: "Report cover and navigation: the six pages of the Health & Lifestyle Dashboard",
        width: 1323,
        height: 743,
      },
      {
        src: "/projects/diabetes-healthy-lifestyle.webp",
        caption: "Healthy Lifestyle: diet type and alcohol use compared with mental and physical health days",
        width: 1314,
        height: 738,
      },
      {
        src: "/projects/diabetes-healthcare-access.webp",
        caption: "Healthcare Access: coverage by income and education level, with doctor visits and general health by coverage status",
        width: 1320,
        height: 733,
      },
      {
        src: "/projects/diabetes-demographics-health.webp",
        caption: "Demographics & Health: physical activity, diabetes rate, BMI, and blood pressure, with breakdowns by education and income",
        width: 1313,
        height: 731,
      },
      {
        src: "/projects/diabetes-health-relationships.webp",
        caption: "Health Relationships: vegetable habits, mental health days, and doctor access across income, coverage, and age",
        width: 1323,
        height: 736,
      },
      {
        src: "/projects/diabetes-interactions-indirect-effects.webp",
        caption: "Interactions & Indirect Effects: income and education against coverage, vegetable habit, and sick days, plus fruit and alcohol effects by gender",
        width: 1326,
        height: 725,
      },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Diabetes",
    // TODO: add the published Power BI report link here (projectUrl) when available.
    projectUrl: "",
    appUrl: "https://diabetes-janrfdzee4fjrsgdolyjf6.streamlit.app",
  },
  {
    slug: "global-food-waste-economic-impact",
    title: "Global Food Waste & Economic Impact",
    summary:
      "A global food waste analysis: a Power BI report on waste volume, food categories, countries, and economic loss from 2018 to 2024, plus Python regression models and a Streamlit app.",
    objective:
      "Show how much food is wasted, which categories and countries drive it, and what it costs economically.",
    tools: ["Power BI", "Python", "Pandas", "Scikit-learn", "Streamlit", "Machine Learning"],
    datasetSize: "2018 to 2024",
    metrics: [
      { value: "124.12M", label: "Tons of Food Waste" },
      { value: "$125.20M", label: "Economic Loss" },
      { value: "109.49 kg", label: "Per Person" },
      { value: "50.16%", label: "Household Waste Share" },
      { value: "3.55M", label: "Sample Population" },
    ],
    insights: [
      "Prepared Food is the largest waste category at 24.05M tons, well ahead of the next category, Beverages (15.34M)",
      "Both food waste and economic loss dipped in 2022 and rebounded in 2023",
      "Average household share of food waste is 50.16%, within a range of 30.02% to 70.00%",
      "Linear Regression: MAE 6734.7, RMSE 10302.6, R² 0.533",
    ],
    limitations:
      "The Power BI figures describe the dataset only. The regression model explains roughly half of the variance (R² 0.533), so treat its output as indicative, not precise.",
    mainWork: [
      "Data Preprocessing",
      "Feature Engineering",
      "Linear Regression",
      "Logistic Regression",
      "Streamlit App Development",
    ],
    images: [
      { src: "/projects/food-waste-overview.png", caption: "Waste Overview" },
      { src: "/projects/food-waste-country.png", caption: "Country Analysis" },
      { src: "/projects/food-waste-map.png", caption: "Map" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Graduation-Project-NTI-",
    projectUrl: "https://app.powerbi.com/links/TUl7JQkVUv?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "sales-operations-analytics-power-bi",
    title: "Sales & Operations Analytics — Power BI",
    summary:
      "A multi-page Power BI report covering inventory and supply chain health, operations and profitability, and executive sales performance.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    datasetSize: "Monthly data for 2024 (per the profit trend chart)",
    metrics: [
      { value: "103M", label: "Total Profit (before operating expenses)" },
      { value: "110M", label: "Operating Expenses" },
      { value: "-7M", label: "Net Profit" },
      { value: "43.85%", label: "Gross Margin" },
      { value: "52.12%", label: "Delayed Purchase Orders" },
      { value: "900K", label: "Total Damaged Stock" },
      { value: "261.44M", label: "Total Sales" },
      { value: "94K", label: "Transactions" },
    ],
    objective:
      "Show where operations lose value (inventory risk, waste, delayed purchase orders, and profitability) in one executive-ready report.",
    process: [
      "Modeled the data and wrote DAX measures",
      "Analyzed inventory and supply chain health",
      "Analyzed operations and profitability",
      "Built an executive sales view",
    ],
    insights: [
      "Operating expenses of 110M exceed total profit of 103M, which leaves net profit at -7M",
      "Salaries are the largest expense at 56M, ahead of rent (17M), logistics (16M), utilities (12M), and marketing (9M)",
      "52.12% of purchase orders (13.03K) were delayed, 39.41% arrived on time, and 8.47% were flagged invalid",
      "Inventory expiry risk peaks at 2.3K in April and drops sharply in May",
      "Frozen, Electronics, and Beverage are the highest-waste categories, at 31K to 33K each",
    ],
    note:
      "The dashboard's Total Profit is profit before operating expenses; net profit is that figure minus operating expenses (103M - 110M = -7M). These are observations from the report, not measured business outcomes.",
    mainWork: [
      "Data Modeling",
      "DAX Measures",
      "Inventory & Supply Chain Analysis",
      "Operations & Profitability Analysis",
      "Executive Sales Reporting",
    ],
    images: [
      { src: "/projects/sales-executive.png", caption: "Executive Sales" },
      { src: "/projects/sales-operations-profitability.png", caption: "Operations & Profitability" },
      { src: "/projects/sales-inventory-supply.png", caption: "Inventory & Supply Chain" },
      { src: "/projects/sales-datamodel.png", caption: "Data Model" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Sales-Analysis2.git",
    projectUrl: "https://app.powerbi.com/links/Crlp_L_-UM?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "social-media-performance-analytics-dashboard",
    objective:
      "Understand how engagement, reach, and impressions moved over a year of posts, and how sponsored content compares with organic.",
    process: [
      "Cleaned the data and handled missing values in Power Query and Excel",
      "Transformed dates and built a star schema",
      "Wrote DAX measures for month-over-month and year-over-year analysis, plus RANKX rankings",
      "Compared sponsored and organic performance",
      "Built an interactive report with bookmarks and buttons",
    ],
    title: "Social Media Performance Analytics Dashboard",
    summary:
      "A Power BI dashboard analyzing engagement, reach, and impressions across a year of social media activity, comparing sponsored vs. organic performance.",
    tools: ["Power BI", "Power Query", "Excel", "DAX"],
    datasetSize: "3,850 posts",
    metrics: [
      { value: "3.93M", label: "Likes" },
      { value: "129.43M", label: "Impressions" },
      { value: "80.37M", label: "Reach" },
      { value: "3.83%", label: "Engagement Rate" },
      { value: "3,850", label: "Posts" },
      { value: "404.39K", label: "Shares" },
      { value: "240.86K", label: "Comments" },
    ],
    insights: [
      "The five platforms contribute near-equal shares of average engagement rate, about 20% each, with Instagram highest at 20.34%",
      "Reach by weekday is highest on Thursday and Friday and lowest on Monday",
      "Monthly total engagement is highest in March",
    ],
    note:
      "The report itself is written in Arabic. Figures are as shown on its overview page.",
    mainWork: [
      "Data Cleaning",
      "Missing Value Handling",
      "Data Transformation",
      "Date Transformation",
      "Star Schema",
      "DAX Measures",
      "MoM Analysis",
      "YoY Analysis",
      "Sponsored vs Organic Analysis",
      "RANKX",
      "Interactive Bookmarks and Buttons",
    ],
    images: [
      { src: "/projects/social-media-overview.png", caption: "Overview" },
      { src: "/projects/social-media-engagement.png", caption: "Engagement Performance" },
      { src: "/projects/social-media-details.png", caption: "Post-Level Detail" },
      { src: "/projects/social-media-datamodel.png", caption: "Data Model — Star Schema" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Social-Media.git",
    projectUrl: "https://app.powerbi.com/links/SlgmLg2pm5?ctid=ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e&pbi_source=linkShare",
  },
  {
    slug: "smart-recruitment-assistant",
    title: "Smart Recruitment Assistant",
    summary:
      "A machine learning prototype that predicts employee job-change risk from recruitment data and compares several classification models.",
    objective:
      "Compare classification models on a recruitment dataset and identify which predicts job-change risk most accurately.",
    tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Machine Learning"],
    datasetSize: "19,158 records",
    metrics: [
      { value: "79.75%", label: "Gradient Boosting Accuracy (best)" },
      { value: "79.62%", label: "XGBoost Accuracy" },
      { value: "78.58%", label: "Random Forest Accuracy" },
      { value: "77.14%", label: "Logistic Regression Accuracy" },
      { value: "78.22%", label: "Logistic Regression Recall" },
    ],
    limitations:
      "This is a prototype for exploring the data, not a production hiring system. Model fairness and bias have not been evaluated, so it should not be used to make hiring decisions.",
    mainWork: [
      "Data Preprocessing",
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "XGBoost",
      "Decision Tree",
      "Model Evaluation",
    ],
    images: [
      { src: "/projects/smart-recruitment-accuracy.png", caption: "Model Accuracy Comparison" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/SMART-RECRUITMENT-ASSISTANT_ITI",
    projectUrl: "",
  },
  {
    slug: "digital-marketing-campaign-performance-dashboard",
    title: "Digital Marketing Campaign Performance Dashboard",
    summary:
      "An Excel dashboard comparing campaign performance across five channels — TikTok, Facebook, Instagram, Google Ads, and Email.",
    tools: ["Excel", "Pivot Tables", "Slicers", "Data Modeling"],
    metrics: [
      { value: "$106,116.29", label: "Spend" },
      { value: "3,357,656", label: "Impressions" },
      { value: "132,052", label: "Clicks" },
      { value: "14,258", label: "Conversions" },
      { value: "4%", label: "CTR" },
      { value: "11%", label: "Conversion Rate" },
    ],
    insights: ["TikTok", "Facebook", "Instagram", "Google Ads", "Email"],
    mainWork: [
      "Pivot Tables",
      "Slicers",
      "Data Modeling",
      "Cross-Channel Comparison",
    ],
    images: [
      { src: "/projects/digital-marketing-channel.png", caption: "Channel Performance" },
      { src: "/projects/digital-marketing-campaign.png", caption: "Campaign Performance" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Marketing.git",
    projectUrl: "",
  },
  {
    slug: "sales-analysis-report",
    title: "Sales Analysis Report — Power BI",
    summary:
      "A Power BI report analyzing sales performance across products, territories, and time, with a dedicated map view and a detailed product-level breakdown.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    metrics: [
      { value: "33.9M", label: "Total Sales" },
      { value: "85.9K", label: "Total Quantity" },
      { value: "916.0K", label: "Total Freight" },
      { value: "23.6K", label: "Total Orders" },
      { value: "2.9M", label: "Total TaxAmt" },
    ],
    insights: [
      "North America 58.42% of total sales",
      "Europe 36.26% of total sales",
      "Pacific 5.31% of total sales",
    ],
    mainWork: [
      "Data Modeling",
      "DAX Measures",
      "Sales Trend Analysis",
      "Territory Mapping",
      "Product-Level Detail Table",
    ],
    images: [
      { src: "/projects/sales-analysis-dashboard.png", caption: "Dashboard" },
      { src: "/projects/sales-analysis-map.png", caption: "Map" },
      { src: "/projects/sales-analysis-details.png", caption: "Details" },
      { src: "/projects/sales-analysis-datamodel.png", caption: "Data Model" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Sales-Analysis",
    projectUrl: "",
  },
  {
    slug: "asd-screening-project",
    title: "ASD Screening Project",
    summary:
      "A classification project screening for Autism Spectrum Disorder indicators, comparing five machine learning models after preprocessing and oversampling.",
    tools: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    metrics: [],
    insights: [
      "Data Preprocessing",
      "One-Hot Encoding",
      "Feature Scaling",
      "Oversampling",
    ],
    mainWork: [
      "Data Preprocessing",
      "One-Hot Encoding",
      "Feature Scaling",
      "Oversampling",
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "XGBoost",
      "Decision Tree",
      "Model Evaluation",
    ],
    images: [
      { src: "/projects/asd-screening-models.png", caption: "Model Comparison" },
    ],
    githubUrl: "https://github.com/Aya-khalid5/Final_ASD",
    projectUrl: "",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** The projects shown in the Featured projects section on the home page. */
export const FEATURED_COUNT = 6;
