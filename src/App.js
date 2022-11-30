import "./App.css";
import Cities from "./Components/Pages/Cities";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NotFound from "./Components/Pages/NotFound";
function App() {
  const [state, setState] = useState("Home");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home state={state} setState={setState} />} />
          <Route path="/Home" element={<Home state={state} setState={setState} />} />
          <Route path="/Cities" element={<Cities setState={setState} state={state} />} />
          <Route path="*" element={<NotFound  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
