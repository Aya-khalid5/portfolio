export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE = {
  name: "Aya Khaled Abdelhamid Abdelaziz",
  shortName: "Aya Khaled",
  title: "Data Analyst",
  headline: "Data Analyst | Excel • SQL • Power BI | Turning Data into Insights",
  positioning:
    "I clean, model, and visualize data so teams can see what is happening and make better decisions: clear KPIs, readable dashboards, and analysis that answers the actual question.",
  description:
    "Data Analyst working with Excel, SQL, Power BI, and Python. Data cleaning, exploratory analysis, KPI reporting, and interactive dashboards for freelance clients and teams.",
  location: "Egypt",
  photo: "/images/aya-photo.jpg",
  photoAlt: "Portrait of Aya Khaled",
  url: "https://portfolio-aya-khaled.vercel.app",
  email: "ayak48710@gmail.com",
  linkedin: "https://www.linkedin.com/in/aya-khaled5/",
  github: "https://github.com/Aya-khalid5/",
};
