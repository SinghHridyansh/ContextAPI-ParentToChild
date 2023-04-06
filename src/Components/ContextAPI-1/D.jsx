import React, { useContext } from "react";
import myContext from "./context";

export const D = (props) => {
  const contextData = useContext(myContext);

  return (
    <div>
      <h2>D Component</h2>
      <p style={{ color: "red" }}>Data from A Component: {contextData} </p>
    </div>
  );
};
