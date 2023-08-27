import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="DIRECTORS" />

          <div className="content grid5">
            {testimonal.map((val) => (
              <div className="directorContainer shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                  {/* <i className="fa fa-quote-left icon"></i> */}
                </div>
                <div className="name">
                  <h2>{val.name}</h2>
                  <span>{val.post}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
