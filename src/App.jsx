import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import Error from "./pages/Error";
import Navbar from "./Navbar";
import "./css/main.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [techno, setTechno] = useState([]);
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/technoadd"
            element={<TechnoAdd techno={techno} setTechno={setTechno} />}
          />
          <Route path="/technolist" element={<TechnoList techno={techno} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
