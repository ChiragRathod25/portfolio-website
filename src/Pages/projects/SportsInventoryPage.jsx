import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function SportsInventoryPage() {
  return (
    <ProjectDetailLayout
      title="Sports Inventory Management"
      tagline="Full-featured inventory and e-commerce system for sports equipment with user and admin dashboards."
      category="🌐 Web Application"
      tech={["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"]}
      github="https://github.com/ChiragRathod25/sports-inventory-management"
      live={null}
      image="/ProjectSnapshots/sportsInventory.png"
      gradient="from-blue-500/20 to-sky-500/10"
      overview="A comprehensive sports e-commerce and inventory management system built with PHP and MySQL. The system includes separate user and admin panels, allowing customers to browse, cart, and purchase sports equipment while admins manage inventory, track orders, and generate reports."
      features={[
        "User registration, login, and profile management",
        "Product browsing with search and category filters",
        "Shopping cart and secure checkout flow",
        "Order tracking and order history",
        "Admin panel for product/inventory management",
        "Stock level alerts and inventory reports",
        "PDF order invoice generation",
        "Responsive layout with Bootstrap",
      ]}
      challenges="This project was a Webathon'24 competition submission where I ranked 1st out of 90 participants. The primary challenge was building a complete, feature-rich system under time pressure, balancing both user experience and admin functionality with clean PHP architecture."
    />
  );
}
