import React, { useEffect, useState } from "react";
import Receipe from "../../components/Receipe";
import axios from "axios";

const ExploreReceipes = () => {
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    axios.get("/receipes.json")     
    .then((res) => {
      setReceipes(res.data)
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto text-center mt-20">
      <h1 className="text-4xl font-semibold nunito mb-5"> EXPLORE RECEIPE </h1>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
        { receipes.map((receipe) => (
          <Receipe receipe={receipe} key={receipe.id} />
        ))}
      </div>
    </div>
  );
};

export default ExploreReceipes;
