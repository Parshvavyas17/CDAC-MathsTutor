import React from "react";
import Navbar from "./Navbar";
// import indefinite-integration.gif from './components'

export default function RightP1() {
  return (
    <>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h2 className="header">
          <b className="text">Polynomial</b>
        </h2>
      </header>
      <section style={{ textAlign: "center" }}>
        <h2>Your Entered Answer is correct!!!!</h2>
        <h4 className="my-5">
          The Graph is :
          <br />
          <img
            src="auc1.png"
            alt=""
            style={{ width: "350px", height: "350px" }}
          />
        </h4>
      </section>
    </>
  );
}
