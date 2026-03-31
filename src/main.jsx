import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Contact, Home } from "./Pages/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Project detail pages
import MoneyMonkPage from "./Pages/projects/MoneyMonkPage.jsx";
import SmartDietPage from "./Pages/projects/SmartDietPage.jsx";
import YouTubeBackendPage from "./Pages/projects/YouTubeBackendPage.jsx";
import SportsInventoryPage from "./Pages/projects/SportsInventoryPage.jsx";
import AnimalClassificationPage from "./Pages/projects/AnimalClassificationPage.jsx";
import BlogWebsitePage from "./Pages/projects/BlogWebsitePage.jsx";
import AgriTechPage from "./Pages/projects/AgriTechPage.jsx";
import HealthPredictionPage from "./Pages/projects/HealthPredictionPage.jsx";
import SatelliteClassificationPage from "./Pages/projects/SatelliteClassificationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      // Project detail pages
      { path: "projects/money-monk", element: <MoneyMonkPage /> },
      { path: "projects/smart-diet", element: <SmartDietPage /> },
      { path: "projects/youtube-backend", element: <YouTubeBackendPage /> },
      { path: "projects/sports-inventory", element: <SportsInventoryPage /> },
      { path: "projects/animal-classification", element: <AnimalClassificationPage /> },
      { path: "projects/blog-website", element: <BlogWebsitePage /> },
      { path: "projects/agri-tech", element: <AgriTechPage /> },
      { path: "projects/health-prediction", element: <HealthPredictionPage /> },
      { path: "projects/satellite-classification", element: <SatelliteClassificationPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
