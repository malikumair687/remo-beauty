import React from "react";
import Hero from "../components/home/Hero";
import Explore from "../components/home/Explore";
import Everyday from "../components/home/Everyday";
import Wicked from "../components/home/Wicked";
import Poppy from "../components/home/Poppy";
import Feed from "../components/home/Feed";

const Home = () => (
  <div className="bg-[#E2E7F1]" >
    <Hero />
    <Explore />
    <Everyday />
    <Wicked/>
    <Poppy/>
    <Feed/>
  </div>
);

export default Home;
