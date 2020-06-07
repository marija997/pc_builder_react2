import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { GetUserInfo } from "../../API/getUserInfo-API";
import EditProfile from "./editProfile/editProfile";
import PCBuildsList from "./pc-builds-list/pc-builds-list";
import FavouritesList from "./favourites-list/favourites-list";

const Profile = (props) => {
  const [userInfo, setUserInfo] = useState("");
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [showData, setShowData] = useState("favourites");
  useEffect(() => {
    GetUserInfo(props.token, setUserInfo);
  }, [props.token]);

  return (
    <MDBContainer className="profile-page">
      <MDBRow lg="12" className="user-page-container">
        <MDBCol lg="2" className="user-info-column">
          <MDBIcon icon="user-circle" size="10x" className="white-text" />
          <div className="info-wrapper">
            <div className="info-row">
              <h5>
                <MDBIcon icon="signature" className="white-text" />
                Name:
              </h5>{" "}
              <p>{userInfo.first_name + " " + userInfo.last_name}</p>
            </div>
            <div className="info-row">
              <h5>
                <MDBIcon icon="envelope" className="white-text" />
                Email:
              </h5>{" "}
              <p>{userInfo.email}</p>
            </div>
            <div className="info-row">
              <h5>
                <MDBIcon icon="at" className="white-text" />
                Username:
              </h5>{" "}
              <p>{userInfo.username}</p>
            </div>
          </div>
          <MDBBtn
            color="dark-green"
            onClick={() => setToggleEditModal(!toggleEditModal)}
          >
            Edit profile
          </MDBBtn>
          <MDBInput
            label="Radio"
            type="radio"
            name="show-data"
            checked={showData === "pc-builds" ? true : false}
            onChange={() => setShowData("pc-builds")}
          />
          <MDBInput
            label="da"
            type="radio"
            name="show-data"
            checked={showData === "favourites" ? true : false}
            onChange={() => setShowData("favourites")}
          />
        </MDBCol>
        <MDBCol lg="10">
          <MDBRow lg="12">
            {showData === "pc-builds" ? (
              <PCBuildsList token={props.token} />
            ) : (
              showData === "favourites" && (
                <FavouritesList token={props.token} />
              )
            )}
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <EditProfile
        toggleEditModal={toggleEditModal}
        setToggleEditModal={setToggleEditModal}
        userInfo={userInfo}
        token={props.token}
      />
    </MDBContainer>
  );
};

export default Profile;
