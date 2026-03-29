import React from "react";
import Slidebar from "./Sidebar";
import RoadMap from "../components/tables/RoadMap";
const RoadMapLayout = () => {
  return (
    <div className="flex  h-screen ">
      <Slidebar></Slidebar>
      <RoadMap></RoadMap>
    </div>
  );
};

export default RoadMapLayout;
