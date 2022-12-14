import React from "react";
import Heading from "./components/Heading";
// import logo from './logo.svg';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Polynomial from "./components/Polynomial";
import WrongP1 from "./components/WrongP1";
import RightP1 from "./components/RightP1";
import PolyHint from "./components/PolyHint";
import WrongP2 from "./components/WrongP2";
import WrongP3 from "./components/WrongP3";
import Trigo from "./components/Trigo";
import TWrong1 from "./components/TWrong1";
import Hint from "./components/Hint";
import Identity from "./components/Identity";
import TWrong2 from "./components/TWrong2";
import Tr1 from "./components/Tr1";
import TWrong3 from "./components/TWrong3";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Heading />}></Route>
        <Route path="/Page1" element={<Page1 />}></Route>
        <Route path="/Page2" element={<Page2 />}></Route>
        <Route path="/Polynomial" element={<Polynomial />}></Route>
        <Route path="/w1" element={<WrongP1 />}></Route>
        <Route path="/r1" element={<RightP1 />}></Route>
        <Route path="/w2" element={<WrongP2 />}></Route>
        <Route path="/w3" element={<WrongP3 />}></Route>
        <Route path="/PolyHint" element={<PolyHint />}></Route>
        <Route path="/trigo" element={<Trigo />}></Route>
        <Route path="/tw1" element={<TWrong1 />}></Route>
        <Route path="/hint" element={<Hint />}></Route>
        <Route path="/identity" element={<Identity />}></Route>
        <Route path="/tw2" element={<TWrong2 />}></Route>
        <Route path="/tr1" element={<Tr1 />} />
        <Route path="/tw3" element={<TWrong3 />} />
      </Routes>
    </>
  );
}

export default App;
