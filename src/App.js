// import React from "react";
// import Heading from "./components/Heading";
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
import Loga from "./components//Loga";
import Lw1 from "./components/Lw1";
import Lw2 from "./components/Lw2";
import Lw3 from "./components/Lw3";
import Expo from "./components/Expo";
import Ew1 from "./components/Ew1";
import Ew2 from "./components/Ew2";
import Ew3 from "./components/Ew3";
import Mixed from "./components/Mixed";
import Mw1 from "./components/Mw1";
import Mw2 from "./components/Mw2";
import Mw3 from "./components/Mw3";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Heading />}></Route> */}
        <Route path="/Page1" element={<Page1 />}></Route>
        <Route path="/" element={<Page2 />}></Route>
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
        <Route path="/loga" element={<Loga />} />
        {/* <Route path="/lr1" element={<Lr1 />} /> */}
        <Route path="/lw1" element={<Lw1 />} />
        <Route path="/lw2" element={<Lw2 />} />
        <Route path="/lw3" element={<Lw3 />} />
        <Route path="/expo" element={<Expo />} />
        <Route path="/ew1" element={<Ew1 />} />
        <Route path="/ew2" element={<Ew2 />} />
        <Route path="/ew3" element={<Ew3 />} />
        <Route path="/mixed" element={<Mixed />} />
        <Route path="/mw1" element={<Mw1 />} />
        <Route path="/mw2" element={<Mw2 />} />
        <Route path="/mw3" element={<Mw3 />} />
      </Routes>
    </>
  );
}

export default App;
