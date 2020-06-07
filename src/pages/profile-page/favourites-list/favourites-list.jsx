import React, { useState, useEffect } from "react";
import { GetAllFavourites } from "../../../API/getAllFavourites-API";

const FavouritesList = ({ token }) => {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    GetAllFavourites(token, setFavourites);
  }, [token]);

  console.log(favourites);

  return <div className="favorites-wrapper"></div>;
};

export default FavouritesList;
