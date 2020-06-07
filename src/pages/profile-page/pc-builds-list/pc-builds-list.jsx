import React, { useState, useEffect } from "react";
import { GetAllPcBuilds } from "../../../API/getAllPcBuilds-API";
import { MDBRow } from "mdbreact";
import PCBuild from "./pc-build/pc-build";

const PCBuildsList = ({ token }) => {
  const [pcBuilds, setPcBuilds] = useState(null);
  useEffect(() => {
    GetAllPcBuilds(token, setPcBuilds);
  }, [token]);

  return (
    <div className="pc-builds-list-container">
      <h1>PC Builds</h1>
      <MDBRow className="pc-builds-row">
        {pcBuilds &&
          pcBuilds.map((build) => {
            return <PCBuild build={build.build} token={token} />;
          })}
      </MDBRow>
    </div>
  );
};

export default PCBuildsList;
