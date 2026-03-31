import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function MoneyMonkPage() {
  return (
    <ProjectDetailLayout
      title="MoneyMonk – Expense Tracker"
      tagline="A full-stack personal finance app for tracking spending, setting budgets, and gaining spending insights."
      category="🌐 Full Stack Web App"
      tech={["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"]}
      github="https://github.com/ChiragRathod25/moneyMonk"
      live="https://moneymonk.vercel.app/"
      image="/ProjectSnapshots/moneyMonk.png"
      gradient="from-green-500/20 to-emerald-500/10"
      overview="MoneyMonk is a comprehensive personal expense tracking application designed to help users take control of their finances. Users can log daily expenses, categorize transactions, set monthly budgets, and view insightful charts to understand their spending patterns over time."
      features={[
        "User authentication with JWT (login/register/logout)",
        "Add, edit, and delete expense transactions",
        "Category-based expense organization",
        "Monthly budget setting per category",
        "Visual charts with spending breakdown",
        "Dashboard with spending summary and trends",
        "Responsive design for mobile and desktop",
        "Secure data storage with MongoDB",
      ]}
      challenges="Building a real-time budget tracking system required careful state management on the frontend and efficient aggregation queries on the backend. Integrating Chart.js with live data updates and ensuring the app remained performant with large transaction histories were the main challenges overcome."
    />
  );
}
