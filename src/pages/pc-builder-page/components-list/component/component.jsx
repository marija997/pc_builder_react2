import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Component = ({ item }) => {
  console.log(item);
  const [addedComponent, setAddedComponent] = useState("");
  console.log(addedComponent);
  return (
    <MDBRow lg="12" className="component-container">
      <MDBCol lg="4" className="component-image-container">
        <div className="image-container">
          <img src={item.image} />
        </div>
      </MDBCol>
      <MDBCol lg="8" className="info-container">
        <div className="item-info">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
        <div className="item-price">
          <h4>${item.price}</h4>
        </div>
        <MDBBtn
          className="add-button"
          color="success"
          onClick={() => setAddedComponent(item.name)}
        >
          Add
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};

export default Component;
