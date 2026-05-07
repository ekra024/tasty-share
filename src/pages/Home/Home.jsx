import React from "react";
import Banner from "./Banner";
import Foods from "../Foods/Foods";
import TopChef from "../../components/TopChef";
import ExploreReceipes from "./ExploreReceipes";
import Contact from "./Contact";
import JoinUs from "./JoinUs";
import FeatureRecipe from "./FeatureRecipe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Foods />
      <ExploreReceipes />
      <TopChef />
      <FeatureRecipe />
      <JoinUs />
      <Contact />
    </div>
  );
};

export default Home;
