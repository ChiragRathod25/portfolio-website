import React from "react";
import {
  Hero,
  Navbar,
  Projects,
  Experience,
  Education,
  AchievementsGrid,
  LeadershipGrid,
  
} from "../components/index.js";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />

      <Projects />
      <Experience />
      <Education />
      <AchievementsGrid />
      <LeadershipGrid />
     
    </>
  );
}

export default Home;
