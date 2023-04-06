import { React, useState } from "react";
import { B } from "./B";
import myContext from "./context";

export const A = (props) => {
  const [data, setdata] = useState("Hridyansh");
  const handleChange = (event) => {
    setdata(event.target.value);
  };

  return (
    <div>
      <h2>A Component</h2>
      <input type="text" value={data} onChange={handleChange} />
      <button type="submit">Submit</button>
      <myContext.Provider value={data}>
        <B />
      </myContext.Provider>
    </div>
  );
};
