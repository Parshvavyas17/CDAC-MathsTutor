import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function TWrong2() {
  return (
    <>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h1
          style={{
            backgroundColor: "#1F4690 ",
            minHeight: "75px",
            color: "white",
          }}
        >
          <b>Trigonometric Equation: </b>
        </h1>
      </header>
      <section>
        <h4 className="mx-5 my-3">Consider the Formulas:</h4>
        <br />
        <h4>∫ sin x dx = -cos x</h4>
        <br />
        <h4>∫ cox x dx = sin x</h4>
        <a href="/trigo">
          <button
            className="btn btn-outline-success my-3 mx-10"
            style={{
              height: "75px",
              width: "100px",
              borderRadius: "50%",
              textAlign: "center",
              marginLeft: "25px",
              backgroundColor: "#548CFF",
              border: "1px solid black",
              color: "white",
            }}
          >
            Try Again
          </button>
        </a>
      </section>
    </>
  );
}
