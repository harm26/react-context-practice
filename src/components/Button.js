import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Button() {
  // useContext ( setData solo )
  const { changeState } = useContext(DataContext);
  return (
    <div>
      <button 
      className="btn btn-outline-primary" 
      onClick = {() => changeState()}>
        Change Data
      </button>
    </div>
  );
}

export default Button;
