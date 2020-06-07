import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBIcon,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
} from "mdbreact";
import { RemoveFromFavourites } from "../../../../API/removeFromFavourites-API";

const FavouriteItem = ({ favourite, token }) => {
  console.log(favourite);

  return (
    <MDBRow lg="12" className="component-container favourite">
      <MDBCol lg="3" className="component-image-container">
        <div className="image-container">
          <MDBView hover zoom>
            <img src={favourite && favourite.image} />
          </MDBView>
        </div>
      </MDBCol>
      <MDBCol lg="9" className="info-container">
        <MDBRow lg="12">
          <MDBCol lg="9" className="item-info">
            <h4>{favourite && favourite.name}</h4>
            <p>{favourite && favourite.name}</p>
          </MDBCol>
          <MDBCol lg="3" className="item-price-wrapper">
            <div className="item-price">
              <h4>${favourite && favourite.price}</h4>
            </div>
            <MDBBtn
              href="/profile"
              className="remove-button"
              color="elegant"
              onClick={() => RemoveFromFavourites(token, favourite.name)}
            >
              <MDBIcon icon="minus" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
};
export default FavouriteItem;
