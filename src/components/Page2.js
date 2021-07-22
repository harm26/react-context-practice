import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Page2() {
  // useContext

  const { data } = useContext(DataContext);
  return (
    <div>
      <h1> Page 2 </h1>
      <small>Name: </small> <h3> {data.name}</h3>
      <small>Age: </small> <h3> {data.age}</h3>
      <small>Working: </small> <h4>{data.working}</h4>
      <small>State: </small> <h4>{data.state}</h4>
      <hr />
    </div>
  );
}

export default Page2;
