import React from "react";
import {
  Header,
  Hero,
  Navbar,
  Projects,
  Experience,
  Education,
  AchievementsGrid,
  LeadershipGrid,
  Footer,
} from "./components/index.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-blue-50 min-h-screen min-h-screen font-poppins text-gray-900">
        <Header />
        {/* <Navbar /> */}
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <AchievementsGrid />
        <LeadershipGrid />

        <Footer />
      </div>
    </>
  );
}

export default App;
