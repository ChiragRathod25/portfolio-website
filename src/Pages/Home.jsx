import React from "react";
import {
  Hero,
  Skills,
  Projects,
  Experience,
  Education,
  AchievementsGrid,
  LeadershipGrid,
} from "../components/index.js";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <AchievementsGrid />
      <LeadershipGrid />
    </>
  );
}

export default Home;
