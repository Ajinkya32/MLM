import React from "react";

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id="heading">
        <h3>{subtitle} </h3>
        <h2>{title} </h2>
      </div>
    </>
  );
};

export default Heading;
