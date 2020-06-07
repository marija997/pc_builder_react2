import React, { useState, useEffect } from "react";
import { GetAllFavourites } from "../../../API/getAllFavourites-API";
import FavouriteItem from "./favouriteItem/favouriteItem";
import { MDBRow } from "mdbreact";

const FavouritesList = ({ token }) => {
  const [favourites, setFavourites] = useState(null);
  useEffect(() => {
    GetAllFavourites(token, setFavourites);
  }, [token]);

  console.log(favourites);

  return (
    <div className="favourites-wrapper">
      <h1>Favourites</h1>
      <MDBRow className="favourites-row-wrapper">
        {favourites &&
          favourites.map((favourite) => {
            return (
              <FavouriteItem favourite={favourite.component} token={token} />
            );
          })}
      </MDBRow>
    </div>
  );
};

export default FavouritesList;
